import json
import os
import re
import subprocess
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
WEB_SITE = ROOT / "web" / "site"
OUTPUT_DIR = ROOT / "services" / ".exam-assets"
COURSES = ROOT / "courses"


def extract_via_node(source: Path, expression: str) -> dict:
    script = (
        "const fs=require('fs'),vm=require('vm');"
        "const window={};"
        f"vm.runInNewContext(fs.readFileSync({json.dumps(str(source))},'utf8'),{{window,console}});"
        f"process.stdout.write(JSON.stringify({expression}));"
    )
    result = subprocess.run(["node", "-e", script], check=False, capture_output=True)
    if result.returncode != 0:
        error = result.stderr.decode("utf-8", errors="replace").strip()
        raise RuntimeError(f"Could not extract {source.name}: {error or 'unknown Node.js error'}")
    return json.loads(result.stdout.decode("utf-8"))


def source_from_history(current: Path, *legacy_paths: str) -> Path:
    if current.is_file():
        return current
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for legacy_path in legacy_paths:
        result = subprocess.run(
            ["git", "-C", str(ROOT), "show", f"e68ee21:{legacy_path}"],
            check=False,
            capture_output=True,
        )
        if result.returncode == 0:
            temp = OUTPUT_DIR / ("legacy-" + legacy_path.replace("/", "-"))
            temp.write_bytes(result.stdout)
            return temp
    raise RuntimeError(f"Could not find {current.name} locally or in the previous Git commit.")


def source_containing_from_file_history(path: str, marker: str) -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        ["git", "-C", str(ROOT), "rev-list", "--all", "--", path],
        check=True,
        capture_output=True,
    )
    for revision in result.stdout.decode("utf-8").splitlines():
        content = subprocess.run(
            ["git", "-C", str(ROOT), "show", f"{revision}:{path}"],
            check=False,
            capture_output=True,
        )
        if content.returncode == 0 and marker.encode() in content.stdout:
            source = OUTPUT_DIR / "legacy-ai_vocabulary.js"
            source.write_bytes(content.stdout)
            return source
    raise RuntimeError(f"Could not find {marker} in the history of {path}.")


def extract_dnd(source: Path) -> dict:
    html = source.read_text(encoding="utf-8")
    script = (
        "const fs=require('fs'),vm=require('vm');"
        f"const html=fs.readFileSync({json.dumps(str(source))},'utf8');"
        "const window={};"
        "for(const id of ['core-data','mock-data']){"
        "const m=html.match(new RegExp('<script id=\"'+id+'\">([\\\\s\\\\S]*?)</script>'));"
        "if(m) vm.runInNewContext(m[1],{window,console});}"
        "process.stdout.write(JSON.stringify({questions:window.__QUESTION_DATA__,mocks:window.__MOCK_DATA__}));"
    )
    result = subprocess.run(["node", "-e", script], check=True, capture_output=True)
    return json.loads(result.stdout.decode("utf-8"))


def write_json(name: str, payload: dict) -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUTPUT_DIR / f"{name}.json"
    path.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    return path


def extract_assignment_json(source: Path, prefix: str):
    text = source.read_text(encoding="utf-8").strip()
    marker = prefix
    if marker not in text:
        raise RuntimeError(f"Could not find {prefix} in {source.name}")
    value = text.split(marker, 1)[1].strip()
    if value.startswith("="):
        value = value[1:].strip()
    if value.endswith(";"):
        value = value[:-1].rstrip()
    return json.loads(value)


def upload(path: Path, supabase_url: str, service_key: str, bucket: str) -> None:
    url = f"{supabase_url.rstrip('/')}/storage/v1/object/{bucket}/{path.name}"
    request = Request(
        url,
        data=path.read_bytes(),
        method="POST",
        headers={
            "apikey": service_key,
            "Authorization": "Bearer " + service_key,
            "Content-Type": "application/json",
            "x-upsert": "true",
        },
    )
    try:
        with urlopen(request, timeout=30) as response:
            response.read()
    except (HTTPError, URLError, TimeoutError) as error:
        raise RuntimeError(f"Upload failed for {path.name}: {error}") from error


def main() -> int:
    ids_questions = source_from_history(WEB_SITE / "ids_questions.js", "site/ids_questions.js")
    ids_answers = source_from_history(WEB_SITE / "ids_short_answers.js", "site/ids_short_answers.js")
    pai_questions = source_from_history(
        COURSES / "principle-of-artificial-intelligence" / "data" / "pai_questions.js",
        "site/pai_questions.js",
    )
    hungarian_questions = source_from_history(
        COURSES / "hungarian-language" / "data" / "hungarian_questions.js",
        "site/hungarian_questions.js",
    )
    dnd_source = source_from_history(
        ROOT / "web" / "offline" / "TheoryTest1_PracticeExam.html",
        "TheoryTest1_PracticeExam.html",
        "site/index.html",
    )
    ai_vocabulary = source_containing_from_file_history(
        "web/site/ai_vocabulary.js",
        "var terms = [",
    )
    assets = {
        "aihe": extract_via_node(ai_vocabulary, "window.__AI_VOCAB_DATA__"),
        "ids": {
            "questions": extract_assignment_json(
                ids_questions,
                "window.__IDS_QUESTION_DATA__",
            ),
            "short_answers": extract_assignment_json(
                ids_answers,
                "window.__IDS_SHORT_ANSWERS__",
            ),
        },
        "pai": {
            "questions": extract_via_node(pai_questions, "window.__PAI_QUESTION_DATA__"),
            "mocks": extract_via_node(pai_questions, "window.__PAI_MOCK_DATA__"),
        },
        "hungarian": {
            "questions": extract_via_node(hungarian_questions, "window.__HUN_QUESTION_DATA__"),
            "mocks": extract_via_node(hungarian_questions, "window.__HUN_MOCK_DATA__"),
        },
        "dnd": extract_dnd(dnd_source),
    }

    paths = {name: write_json(name, payload) for name, payload in assets.items()}
    supabase_url = os.getenv("SUPABASE_URL", "").strip()
    service_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "").strip()
    bucket = os.getenv("EXAM_ASSET_BUCKET", "dnd-private-exams").strip()

    if not supabase_url or not service_key:
        print("Local JSON was generated, but Supabase upload was skipped.")
        print("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, then rerun this script.")
        return 2

    for path in paths.values():
        upload(path, supabase_url, service_key, bucket)
        print(f"Uploaded {path.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
