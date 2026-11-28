import json
import os
import secrets
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request as UrlRequest, urlopen

from fastapi import FastAPI, Header, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


ROOT = Path(__file__).resolve().parent
REPOSITORY_ROOT = ROOT.parents[1] if len(ROOT.parents) > 1 else ROOT
RUNNER = ROOT / "runner.py"
ASSET_ARCHIVE = Path(
    os.getenv("DND_ASSET_ARCHIVE", "/etc/secrets/dnd_hw1_assets.zip")
)
ASSET_ERROR = ""


def unpack_private_assets() -> None:
    global ASSET_ERROR
    archive_path = ASSET_ARCHIVE
    if SUPABASE_SERVICE_ROLE_KEY:
        archive_path = Path(tempfile.gettempdir()) / "dnd_hw1_assets.zip"
        request = UrlRequest(
            f"{SUPABASE_URL}/storage/v1/object/{ASSET_BUCKET}/{ASSET_OBJECT}",
            headers={
                "apikey": SUPABASE_SERVICE_ROLE_KEY,
                "Authorization": "Bearer " + SUPABASE_SERVICE_ROLE_KEY,
            },
        )
        try:
            with urlopen(request, timeout=30) as response:
                archive_path.write_bytes(response.read())
        except (HTTPError, URLError, TimeoutError) as error:
            ASSET_ERROR = f"Unable to download private HW1 assets: {error.reason if isinstance(error, HTTPError) else error}"
            return
    if not archive_path.is_file():
        ASSET_ERROR = "No private HW1 asset archive was found."
        return
    target = Path(tempfile.gettempdir()) / "dnd_hw1_assets"
    required_files = (
        "dndmsc26autumn_hw1.ipynb",
        "dndmsc26autumn_hw1_tester.py",
        "dndmsc26autumn_hw1_final.ipynb",
        "student-mat_prep_noisy26au_hw1.csv",
    )
    assignment = target / "dndmsc26autumn_hw1"
    if assignment.is_dir() and all((assignment / name).is_file() for name in required_files):
        os.environ["DND_ASSIGNMENT_DIR"] = str(assignment)
        return
    if target.exists():
        shutil.rmtree(target)
    target.mkdir(parents=True, exist_ok=True)
    try:
        with zipfile.ZipFile(archive_path) as archive:
            members = archive.infolist()
            for member in members:
                normalized_name = member.filename.replace("\\", "/")
                path = Path(normalized_name)
                if path.is_absolute() or ".." in path.parts:
                    ASSET_ERROR = "The private HW1 asset archive contains an unsafe path."
                    return
                destination = target / path
                if member.is_dir():
                    destination.mkdir(parents=True, exist_ok=True)
                    continue
                destination.parent.mkdir(parents=True, exist_ok=True)
                with archive.open(member) as source, destination.open("wb") as output:
                    shutil.copyfileobj(source, output)
    except (OSError, zipfile.BadZipFile) as error:
        ASSET_ERROR = f"The downloaded private HW1 asset is not a valid zip: {error}"
        return
    candidates = []
    for notebook in target.rglob("dndmsc26autumn_hw1.ipynb"):
        parent = notebook.parent
        if all((parent / name).is_file() for name in required_files):
            candidates.append(parent)
    if len(candidates) != 1:
        names = ", ".join(
            path.relative_to(target).as_posix()
            for path in target.rglob("*")
            if path.is_file()
        )
        ASSET_ERROR = (
            "The private HW1 asset archive has no unique complete HW1 directory. "
            f"Files found: {names[:1000]}"
        )
        return
    assignment = candidates[0]
    os.environ["DND_ASSIGNMENT_DIR"] = str(assignment)


MAX_CODE_LENGTH = 100_000
TIMEOUT_SECONDS = 45
TASKS = {chr(letter) for letter in range(ord("A"), ord("J"))}
REQUIRE_AUTH = os.getenv("REQUIRE_AUTH", "false").lower() == "true"
SUPABASE_URL = os.getenv("SUPABASE_URL", "").rstrip("/")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY", "")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")
ASSET_BUCKET = os.getenv("DND_ASSET_BUCKET", "dnd-private-assets")
ASSET_OBJECT = os.getenv("DND_ASSET_OBJECT", "dnd_hw1_assets.zip")
USER_ANSWER_BUCKET = os.getenv("USER_ANSWER_BUCKET", "dnd-user-answers")
EXAM_ASSET_BUCKET = os.getenv("EXAM_ASSET_BUCKET", "dnd-private-exams")
# Private exam JSON objects are read from Supabase Storage only after Supabase Auth succeeds.
MAX_ANSWER_BYTES = 5_000_000
MAX_EXAM_OVERLAY_BYTES = 250_000
MAX_EXAM_MEDIA_BYTES = 15_000_000
EXAM_COURSES = {"dnd", "ids", "pai", "hungarian", "aihe"}
PERSONAL_EXAM_MEDIA = {
    "reading-3a.mp3": "audio/mpeg",
    "listening-1a.mp3": "audio/mpeg",
    "listening-1b.mp3": "audio/mpeg",
    "listening-1b.png": "image/png",
}


def ensure_answer_bucket() -> None:
    if not SUPABASE_SERVICE_ROLE_KEY or not SUPABASE_URL:
        return
    post_req = UrlRequest(
        f"{SUPABASE_URL}/storage/v1/bucket",
        data=json.dumps({"id": USER_ANSWER_BUCKET, "name": USER_ANSWER_BUCKET, "public": False}).encode("utf-8"),
        method="POST",
        headers={
            "apikey": SUPABASE_SERVICE_ROLE_KEY,
            "Authorization": "Bearer " + SUPABASE_SERVICE_ROLE_KEY,
            "Content-Type": "application/json",
        },
    )
    try:
        with urlopen(post_req, timeout=10):
            pass
    except Exception:
        pass


unpack_private_assets()
ensure_answer_bucket()

ASSIGNMENT = Path(
    os.getenv(
        "DND_ASSIGNMENT_DIR",
        str(
            REPOSITORY_ROOT
            / "courses"
            / "deep-network-development"
            / "assignments"
            / "dndmsc26autumn_hw1"
        ),
    )
)
REQUIREMENTS = ASSIGNMENT.parent / "requirements.txt"

app = FastAPI(title="DND Coding Test Runner", version="1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "http://localhost:5500").split(","),
    allow_credentials=False,
    allow_methods=["GET", "POST", "PUT"],
    allow_headers=["*"],
)


class RunRequest(BaseModel):
    task: str = Field(pattern=r"^[A-I]$")
    code: str = Field(min_length=1, max_length=MAX_CODE_LENGTH)


class RunResponse(BaseModel):
    ok: bool
    task: str
    output: str
    checks: list[str]
    error: str | None = None


class ExamResponse(BaseModel):
    available: bool
    title: str
    instructions: list[dict[str, str]]
    data_preview: str
    requirements: str
    starter_code: dict[str, str]
    setup_code: str


@app.get("/api/health")
def health() -> dict[str, str]:
    return {
        "status": "ok",
        "runner": os.getenv("RUNNER_MODE", "local"),
        "exam_assets": str(ASSIGNMENT.exists()).lower(),
        "auth_required": str(REQUIRE_AUTH).lower(),
        "asset_error": ASSET_ERROR,
    }


def require_user(authorization: str | None) -> dict[str, object] | None:
    if not REQUIRE_AUTH:
        return None
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Sign in to access the coding test.")
    if not SUPABASE_URL or not SUPABASE_ANON_KEY:
        raise HTTPException(status_code=503, detail="The coding test authentication is not configured.")
    token = authorization.removeprefix("Bearer ").strip()
    request = UrlRequest(
        f"{SUPABASE_URL}/auth/v1/user",
        headers={"apikey": SUPABASE_ANON_KEY},
    )
    request.add_header("Authorization", "Bearer " + token)
    try:
        with urlopen(request, timeout=10) as response:
            user = json.loads(response.read().decode("utf-8"))
    except (HTTPError, URLError, TimeoutError) as error:
        raise HTTPException(status_code=401, detail="The login session is invalid or expired.") from error
    if not isinstance(user, dict) or not user.get("id"):
        raise HTTPException(status_code=401, detail="The login session is invalid.")
    return user


def load_notebook_instructions() -> list[dict[str, str]]:
    notebook_path = ASSIGNMENT / "dndmsc26autumn_hw1.ipynb"
    if not notebook_path.is_file():
        return []
    notebook = json.loads(notebook_path.read_text(encoding="utf-8"))
    instructions = []
    for cell in notebook.get("cells", []):
        if cell.get("cell_type") != "markdown":
            continue
        text = "".join(cell.get("source", []))
        if text.startswith("## **") or text.startswith("# Deep Network"):
            instructions.append({"title": text.splitlines()[0].replace("#", "").strip(), "body": text})
    return instructions


def load_notebook_starters() -> dict[str, str]:
    notebook_path = ASSIGNMENT / "dndmsc26autumn_hw1.ipynb"
    if not notebook_path.is_file():
        return {}
    notebook = json.loads(notebook_path.read_text(encoding="utf-8"))
    code_cells = [
        "".join(cell.get("source", []))
        for cell in notebook.get("cells", [])
        if cell.get("cell_type") == "code"
    ]
    if len(code_cells) < 11:
        return {}
    setup = code_cells[0]
    common = code_cells[1]
    starters = {"A": common + "\n\n" + code_cells[2]}
    for index, task in enumerate("BCDEFGHI", start=3):
        starters[task] = code_cells[index]
    return starters


def load_notebook_setup() -> str:
    notebook_path = ASSIGNMENT / "dndmsc26autumn_hw1.ipynb"
    if not notebook_path.is_file():
        return ""
    notebook = json.loads(notebook_path.read_text(encoding="utf-8"))
    code_cells = [
        "".join(cell.get("source", []))
        for cell in notebook.get("cells", [])
        if cell.get("cell_type") == "code"
    ]
    return code_cells[0] if code_cells else ""


@app.get("/api/exam", response_model=ExamResponse)
def exam(authorization: str | None = Header(default=None)) -> ExamResponse:
    require_user(authorization)
    csv_path = ASSIGNMENT / "student-mat_prep_noisy26au_hw1.csv"
    if not ASSIGNMENT.is_dir() or not csv_path.is_file():
        return ExamResponse(
            available=False,
            title="DND HW1 Coding Test",
            instructions=[],
            data_preview="The local HW1 exam assets are not installed on this runner.",
            requirements="",
            starter_code={},
            setup_code="",
        )
    csv_text = csv_path.read_text(encoding="utf-8")
    return ExamResponse(
        available=True,
        title="DND HW1 Coding Test",
        instructions=load_notebook_instructions(),
        data_preview=csv_text[:3000],
        requirements=REQUIREMENTS.read_text(encoding="utf-8") if REQUIREMENTS.is_file() else "",
        starter_code=load_notebook_starters(),
        setup_code=load_notebook_setup(),
    )


@app.get("/api/exams/{course}")
def exam_assets(course: str, authorization: str | None = Header(default=None)) -> dict[str, object]:
    user = require_user(authorization)
    if course not in EXAM_COURSES:
        raise HTTPException(status_code=404, detail="Unknown course.")
    if not SUPABASE_SERVICE_ROLE_KEY or not SUPABASE_URL:
        raise HTTPException(status_code=503, detail="Private exam storage is not configured.")

    object_path = f"{course}.json"
    request = UrlRequest(
        f"{SUPABASE_URL}/storage/v1/object/{EXAM_ASSET_BUCKET}/{object_path}",
        headers={
            "apikey": SUPABASE_SERVICE_ROLE_KEY,
            "Authorization": "Bearer " + SUPABASE_SERVICE_ROLE_KEY,
        },
    )
    try:
        with urlopen(request, timeout=15) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except HTTPError as error:
        if error.code == 404:
            raise HTTPException(status_code=404, detail="This course exam data is not installed.")
        raise HTTPException(status_code=502, detail="Could not load private exam data.") from error
    except (URLError, TimeoutError, json.JSONDecodeError) as error:
        raise HTTPException(status_code=502, detail="Could not load private exam data.") from error
    if not isinstance(payload, dict):
        raise HTTPException(status_code=502, detail="Private exam data is invalid.")
    if user:
        overlay_request = UrlRequest(
            f"{SUPABASE_URL}/storage/v1/object/{EXAM_ASSET_BUCKET}/"
            f"{personal_exam_overlay_object(str(user['id']), course)}",
            headers={
                "apikey": SUPABASE_SERVICE_ROLE_KEY,
                "Authorization": "Bearer " + SUPABASE_SERVICE_ROLE_KEY,
            },
        )
        try:
            with urlopen(overlay_request, timeout=15) as overlay_response:
                overlay = json.loads(overlay_response.read().decode("utf-8"))
            merge_personal_exam_overlay(payload, overlay)
        except HTTPError as error:
            if error.code != 404:
                raise HTTPException(status_code=502, detail="Could not load personal exam data.") from error
        except (URLError, TimeoutError, json.JSONDecodeError, ValueError) as error:
            raise HTTPException(status_code=502, detail="Personal exam data is invalid.") from error
    return payload


def personal_exam_overlay_object(user_id: str, course: str) -> str:
    return f"user-overlays/{user_id}/{course}.json"


def personal_exam_media_object(user_id: str, course: str, asset_name: str) -> str:
    return f"user-media/{user_id}/{course}/{asset_name}"


def merge_personal_exam_overlay(payload: dict[str, object], overlay: object) -> None:
    if not isinstance(overlay, dict):
        raise ValueError("Personal exam overlay must be an object.")
    personal = overlay.get("personal")
    if personal is not None:
        if not isinstance(personal, dict):
            raise ValueError("Personal exam data must be an object.")
        if "actualExamPapers" in personal:
            papers = personal["actualExamPapers"]
            if not isinstance(papers, list) or not all(
                isinstance(paper, dict)
                and isinstance(paper.get("title"), str)
                and isinstance(paper.get("body"), str)
                for paper in papers
            ):
                raise ValueError("Personal actual exam papers are invalid.")
            payload["personal"] = personal
    personal_prep = overlay.get("prep")
    if not isinstance(personal_prep, dict):
        return
    prep = payload.get("prep")
    if not isinstance(prep, dict):
        raise ValueError("Course exam data has no prep object.")
    incoming_sections = personal_prep.get("sections")
    if not isinstance(incoming_sections, list):
        return
    sections = prep.get("sections")
    if not isinstance(sections, list):
        raise ValueError("Course exam prep has no sections.")
    section_by_id = {
        section["id"]: section
        for section in sections
        if isinstance(section, dict) and isinstance(section.get("id"), str)
    }
    for incoming in incoming_sections:
        if not isinstance(incoming, dict) or not isinstance(incoming.get("id"), str):
            continue
        current = section_by_id.get(incoming["id"])
        if current is not None:
            current.update(incoming)


def upload_personal_object(object_path: str, body: bytes, content_type: str) -> None:
    if not SUPABASE_SERVICE_ROLE_KEY or not SUPABASE_URL:
        raise HTTPException(status_code=503, detail="Private exam storage is not configured.")
    request = UrlRequest(
        f"{SUPABASE_URL}/storage/v1/object/{EXAM_ASSET_BUCKET}/{quote(object_path, safe='/')}",
        data=body,
        method="POST",
        headers={
            "apikey": SUPABASE_SERVICE_ROLE_KEY,
            "Authorization": "Bearer " + SUPABASE_SERVICE_ROLE_KEY,
            "Content-Type": content_type,
            "x-upsert": "true",
        },
    )
    try:
        with urlopen(request, timeout=30) as response:
            response.read()
    except (HTTPError, URLError, TimeoutError) as error:
        raise HTTPException(status_code=502, detail="Could not save personal exam data.") from error


@app.put("/api/exams/{course}/personal-overlay")
async def save_personal_exam_overlay(
    course: str,
    request: Request,
    authorization: str | None = Header(default=None),
) -> dict[str, bool]:
    user = require_user(authorization)
    if course not in {"hungarian", "ids"}:
        raise HTTPException(status_code=404, detail="Personal overlays are not available for this course.")
    if not user:
        raise HTTPException(status_code=503, detail="Personal exam storage is not configured.")
    body = await request.body()
    if len(body) > MAX_EXAM_OVERLAY_BYTES:
        raise HTTPException(status_code=413, detail="The personal exam overlay is too large.")
    try:
        overlay = json.loads(body.decode("utf-8"))
        validation_payload = {
            "prep": {"sections": [{"id": "written"}, {"id": "reading"}, {"id": "oral"}, {"id": "positions"}]}
        }
        merge_personal_exam_overlay(validation_payload, overlay)
    except (UnicodeDecodeError, json.JSONDecodeError, ValueError) as error:
        raise HTTPException(status_code=422, detail="The personal exam overlay is invalid.") from error
    upload_personal_object(
        personal_exam_overlay_object(str(user["id"]), course),
        body,
        "application/json",
    )
    return {"saved": True}


@app.put("/api/exams/{course}/personal-media/{asset_name}")
async def save_personal_exam_media(
    course: str,
    asset_name: str,
    request: Request,
    authorization: str | None = Header(default=None),
) -> dict[str, bool]:
    user = require_user(authorization)
    if course != "hungarian" or asset_name not in PERSONAL_EXAM_MEDIA:
        raise HTTPException(status_code=404, detail="Unknown personal exam media asset.")
    if not user:
        raise HTTPException(status_code=503, detail="Personal exam storage is not configured.")
    if request.headers.get("content-type", "").split(";", 1)[0].strip() != PERSONAL_EXAM_MEDIA[asset_name]:
        raise HTTPException(status_code=415, detail="The exam media has an unsupported content type.")
    body = await request.body()
    if not body:
        raise HTTPException(status_code=422, detail="The exam audio file is empty.")
    if len(body) > MAX_EXAM_MEDIA_BYTES:
        raise HTTPException(status_code=413, detail="The exam audio file is too large.")
    upload_personal_object(
        personal_exam_media_object(str(user["id"]), course, asset_name),
        body,
        PERSONAL_EXAM_MEDIA[asset_name],
    )
    return {"saved": True}


@app.get("/api/exams/{course}/personal-media/{asset_name}")
def get_personal_exam_media(
    course: str,
    asset_name: str,
    authorization: str | None = Header(default=None),
) -> Response:
    user = require_user(authorization)
    if course != "hungarian" or asset_name not in PERSONAL_EXAM_MEDIA:
        raise HTTPException(status_code=404, detail="Unknown personal exam media asset.")
    if not user:
        raise HTTPException(status_code=503, detail="Personal exam storage is not configured.")
    if not SUPABASE_SERVICE_ROLE_KEY or not SUPABASE_URL:
        raise HTTPException(status_code=503, detail="Private exam storage is not configured.")
    object_path = personal_exam_media_object(str(user["id"]), course, asset_name)
    request = UrlRequest(
        f"{SUPABASE_URL}/storage/v1/object/{EXAM_ASSET_BUCKET}/{quote(object_path, safe='/')}",
        headers={
            "apikey": SUPABASE_SERVICE_ROLE_KEY,
            "Authorization": "Bearer " + SUPABASE_SERVICE_ROLE_KEY,
        },
    )
    try:
        with urlopen(request, timeout=30) as response:
            body = response.read()
    except HTTPError as error:
        if error.code == 404:
            raise HTTPException(status_code=404, detail="This personal exam audio is not installed.")
        raise HTTPException(status_code=502, detail="Could not load personal exam audio.") from error
    except (URLError, TimeoutError) as error:
        raise HTTPException(status_code=502, detail="Could not load personal exam audio.") from error
    return Response(
        content=body,
        media_type=PERSONAL_EXAM_MEDIA[asset_name],
        headers={"Cache-Control": "private, max-age=3600"},
    )


def notebook_cells(notebook_path: Path) -> list[str]:
    notebook = json.loads(notebook_path.read_text(encoding="utf-8"))
    cells = []
    for cell in notebook.get("cells", []):
        if cell.get("cell_type") == "code":
            cells.append("".join(cell.get("source", [])))
    return cells


def user_answer_object(user_id: str) -> str:
    return f"{user_id}/answer.ipynb"


@app.get("/api/my-answer")
def my_answer(authorization: str | None = Header(default=None)) -> dict[str, object]:
    user = require_user(authorization)
    if not SUPABASE_SERVICE_ROLE_KEY or not user:
        raise HTTPException(status_code=503, detail="Personal answer storage is not configured.")
    request = UrlRequest(
        f"{SUPABASE_URL}/storage/v1/object/{USER_ANSWER_BUCKET}/{user_answer_object(str(user['id']))}",
        headers={"apikey": SUPABASE_SERVICE_ROLE_KEY, "Authorization": "Bearer " + SUPABASE_SERVICE_ROLE_KEY},
    )
    try:
        with urlopen(request, timeout=15) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except HTTPError as error:
        if error.code == 404:
            return {"available": False, "encrypted": False, "cells": []}
        raise HTTPException(status_code=502, detail="Could not load your private answer notebook.") from error
    except (URLError, TimeoutError, json.JSONDecodeError) as error:
        raise HTTPException(status_code=502, detail="Could not load your private answer notebook.") from error
    if isinstance(payload, dict) and payload.get("encrypted") is True:
        return {"available": True, "encrypted": True, "payload": payload}
    cells = [
        "".join(cell.get("source", []))
        for cell in payload.get("cells", [])
        if cell.get("cell_type") == "code"
    ]
    return {"available": True, "encrypted": False, "cells": cells}


def save_user_answer(object_path: str, data: bytes) -> None:
    headers = {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": "Bearer " + SUPABASE_SERVICE_ROLE_KEY,
        "Content-Type": "application/json",
        "x-upsert": "true",
    }
    post_url = f"{SUPABASE_URL}/storage/v1/object/{USER_ANSWER_BUCKET}/{object_path}"
    post_req = UrlRequest(post_url, data=data, method="POST", headers=headers)
    try:
        with urlopen(post_req, timeout=20):
            return
    except HTTPError as error:
        err_body = error.read().decode("utf-8", errors="replace")
        if error.code in (400, 404) and ("bucket" in err_body.lower() or "not found" in err_body.lower()):
            ensure_answer_bucket()
            try:
                retry_req = UrlRequest(post_url, data=data, method="POST", headers=headers)
                with urlopen(retry_req, timeout=20):
                    return
            except HTTPError as retry_err:
                err_body = retry_err.read().decode("utf-8", errors="replace")
                raise HTTPException(
                    status_code=502, detail=f"Could not save answer notebook: {err_body or retry_err.reason}"
                ) from retry_err

        if error.code in (400, 409):
            put_req = UrlRequest(post_url, data=data, method="PUT", headers=headers)
            try:
                with urlopen(put_req, timeout=20):
                    return
            except HTTPError as put_err:
                err_body = put_err.read().decode("utf-8", errors="replace")
                raise HTTPException(
                    status_code=502, detail=f"Could not save answer notebook: {err_body or put_err.reason}"
                ) from put_err

        raise HTTPException(
            status_code=502, detail=f"Could not save answer notebook: {err_body or error.reason}"
        ) from error
    except (URLError, TimeoutError) as error:
        raise HTTPException(status_code=502, detail=f"Could not save answer notebook: {error}") from error


@app.put("/api/my-answer")
async def upload_my_answer(
    request: Request,
    authorization: str | None = Header(default=None),
    x_notebook_filename: str | None = Header(default=None),
) -> dict[str, object]:
    user = require_user(authorization)
    if not SUPABASE_SERVICE_ROLE_KEY or not user:
        raise HTTPException(status_code=503, detail="Personal answer storage is not configured.")
    if not x_notebook_filename or not x_notebook_filename.lower().endswith(".ipynb"):
        raise HTTPException(status_code=400, detail="Only .ipynb notebook files are accepted.")
    body = await request.body()
    if len(body) > MAX_ANSWER_BYTES:
        raise HTTPException(status_code=413, detail="The notebook is too large.")
    try:
        payload = json.loads(body.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as error:
        raise HTTPException(status_code=400, detail="Upload a valid JSON file.") from error
    if not isinstance(payload, dict):
        raise HTTPException(status_code=400, detail="Upload a valid JSON payload.")
    is_encrypted = payload.get("encrypted") is True
    if is_encrypted:
        if not payload.get("ciphertext") or not payload.get("iv"):
            raise HTTPException(status_code=400, detail="Invalid encrypted payload.")
    else:
        if not isinstance(payload.get("cells"), list):
            raise HTTPException(status_code=400, detail="Upload a valid Jupyter notebook.")
    object_path = user_answer_object(str(user["id"]))
    save_user_answer(object_path, body)
    return {"available": True, "message": "Your private answer notebook was encrypted and saved."}


def run_local(request: RunRequest) -> RunResponse:
    payload = json.dumps({"task": request.task, "code": request.code})
    with tempfile.TemporaryDirectory(prefix="dnd-coding-") as workdir:
        try:
            completed = subprocess.run(
                [sys.executable, str(RUNNER)],
                input=payload,
                text=True,
                capture_output=True,
                encoding="utf-8",
                cwd=ASSIGNMENT,
                env={**os.environ, "PYTHONIOENCODING": "utf-8"},
                timeout=TIMEOUT_SECONDS,
                check=False,
            )
        except subprocess.TimeoutExpired:
            return RunResponse(
                ok=False,
                task=request.task,
                output="",
                checks=[],
                error=f"Execution exceeded the {TIMEOUT_SECONDS}-second limit.",
            )
    if not completed.stdout:
        return RunResponse(
            ok=False,
            task=request.task,
            output=completed.stderr[-8000:],
            checks=[],
            error="The runner did not return a result.",
        )
    try:
        result = json.loads(completed.stdout)
    except json.JSONDecodeError:
        result = {
            "ok": False,
            "task": request.task,
            "output": completed.stdout[-8000:],
            "checks": [],
            "error": completed.stderr[-2000:] or "Invalid runner response.",
        }
    return RunResponse(**result)


def run_container(request: RunRequest) -> RunResponse:
    payload = json.dumps({"task": request.task, "code": request.code})
    command = [
        "docker",
        "run",
        "--rm",
        "--network",
        "none",
        "--read-only",
        "--cpus",
        "0.5",
        "--memory",
        "1g",
        "--pids-limit",
        "128",
        "--cap-drop",
        "ALL",
        "--security-opt",
        "no-new-privileges",
        "-i",
        os.getenv("CODING_TEST_IMAGE", "dnd-coding-runner:latest"),
        "python",
        "/app/runner.py",
    ]
    try:
        completed = subprocess.run(
            command,
            input=payload,
            text=True,
            encoding="utf-8",
            capture_output=True,
            timeout=TIMEOUT_SECONDS,
            check=False,
        )
    except FileNotFoundError as error:
        raise HTTPException(status_code=503, detail="Docker is not available on the runner host.") from error
    except subprocess.TimeoutExpired:
        return RunResponse(
            ok=False,
            task=request.task,
            output="",
            checks=[],
            error=f"Execution exceeded the {TIMEOUT_SECONDS}-second limit.",
        )
    if not completed.stdout:
        return RunResponse(
            ok=False,
            task=request.task,
            output=completed.stderr[-8000:],
            checks=[],
            error="The container runner did not return a result.",
        )
    try:
        result = json.loads(completed.stdout)
    except json.JSONDecodeError:
        result = {
            "ok": False,
            "task": request.task,
            "output": completed.stdout[-8000:],
            "checks": [],
            "error": completed.stderr[-2000:] or "Invalid container response.",
        }
    return RunResponse(**result)


@app.post("/api/run", response_model=RunResponse)
def run_code(
    request: RunRequest,
    authorization: str | None = Header(default=None),
) -> RunResponse:
    require_user(authorization)
    if request.task not in TASKS:
        raise HTTPException(status_code=400, detail="Unknown task.")
    if os.getenv("RUNNER_MODE", "local") == "docker":
        return run_container(request)
    if ASSIGNMENT.is_dir():
        return run_local(request)
    raise HTTPException(
        status_code=503,
        detail="This runner has no HW1 assets. Configure the Render private asset archive.",
    )
