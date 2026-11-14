import json
import os
import secrets
import subprocess
import sys
import tempfile
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


ROOT = Path(__file__).resolve().parent
RUNNER = ROOT / "runner.py"
MAX_CODE_LENGTH = 100_000
TIMEOUT_SECONDS = 45
TASKS = {chr(letter) for letter in range(ord("A"), ord("J"))}

app = FastAPI(title="DND Coding Test Runner", version="1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "http://localhost:5500").split(","),
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
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


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok", "runner": os.getenv("RUNNER_MODE", "local")}


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
                cwd=workdir,
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
def run_code(request: RunRequest) -> RunResponse:
    if request.task not in TASKS:
        raise HTTPException(status_code=400, detail="Unknown task.")
    if os.getenv("RUNNER_MODE", "local") == "docker":
        return run_container(request)
    return run_local(request)
