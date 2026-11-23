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
    result = subprocess.run(["node", "-e", script], check=True, capture_output=True)
    return json.loads(result.stdout.decode("utf-8"))


def extract_dnd() -> dict:
    html = (ROOT / "web" / "offline" / "TheoryTest1_PracticeExam.html").read_text(encoding="utf-8")
    script = (
        "const fs=require('fs'),vm=require('vm');"
        f"const html=fs.readFileSync({json.dumps(str(ROOT / 'web' / 'offline' / 'TheoryTest1_PracticeExam.html'))},'utf8');"
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
    assets = {
        "ids": {
            "questions": extract_via_node(WEB_SITE / "ids_questions.js", "window.__IDS_QUESTION_DATA__"),
            "short_answers": extract_via_node(WEB_SITE / "ids_short_answers.js", "window.__IDS_SHORT_ANSWERS__"),
        },
        "pai": {
            "questions": extract_via_node(
                COURSES / "principle-of-artificial-intelligence" / "data" / "pai_questions.js",
                "window.__PAI_QUESTION_DATA__",
            ),
            "mocks": extract_via_node(
                COURSES / "principle-of-artificial-intelligence" / "data" / "pai_questions.js",
                "window.__PAI_MOCK_DATA__",
            ),
        },
        "hungarian": {
            "questions": extract_via_node(
                COURSES / "hungarian-language" / "data" / "hungarian_questions.js",
                "window.__HUN_QUESTION_DATA__",
            ),
            "mocks": extract_via_node(
                COURSES / "hungarian-language" / "data" / "hungarian_questions.js",
                "window.__HUN_MOCK_DATA__",
            ),
        },
        "dnd": extract_dnd(),
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
