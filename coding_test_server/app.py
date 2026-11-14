import json
import os
import secrets
import subprocess
import sys
import tempfile
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


ROOT = Path(__file__).resolve().parent
RUNNER = ROOT / "runner.py"
ASSIGNMENT = Path(
    os.getenv(
        "DND_ASSIGNMENT_DIR",
        str(ROOT.parent / "dnd_coding_assignment" / "dndmsc26autumn_hw1"),
    )
)
REQUIREMENTS = ASSIGNMENT.parent / "requirements.txt"
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


class ExamResponse(BaseModel):
    available: bool
    title: str
    instructions: list[dict[str, str]]
    data_preview: str
    requirements: str
    answer_available: bool


@app.get("/api/health")
def health() -> dict[str, str]:
    return {
        "status": "ok",
        "runner": os.getenv("RUNNER_MODE", "local"),
        "exam_assets": str(ASSIGNMENT.exists()).lower(),
    }


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


@app.get("/api/exam", response_model=ExamResponse)
def exam() -> ExamResponse:
    csv_path = ASSIGNMENT / "student-mat_prep_noisy26au_hw1.csv"
    if not ASSIGNMENT.is_dir() or not csv_path.is_file():
        return ExamResponse(
            available=False,
            title="DND HW1 Coding Test",
            instructions=[],
            data_preview="The local HW1 exam assets are not installed on this runner.",
            requirements="",
            answer_available=False,
        )
    csv_text = csv_path.read_text(encoding="utf-8")
    return ExamResponse(
        available=True,
        title="DND HW1 Coding Test",
        instructions=load_notebook_instructions(),
        data_preview=csv_text[:3000],
        requirements=REQUIREMENTS.read_text(encoding="utf-8") if REQUIREMENTS.is_file() else "",
        answer_available=(ASSIGNMENT / "dndmsc26autumn_hw1_final.ipynb").is_file(),
    )


@app.get("/api/answer")
def answer() -> dict[str, object]:
    answer_path = ASSIGNMENT / "dndmsc26autumn_hw1_final.ipynb"
    if not answer_path.is_file():
        raise HTTPException(status_code=404, detail="The answer notebook is available only in the local setup.")
    notebook = json.loads(answer_path.read_text(encoding="utf-8"))
    cells = []
    for cell in notebook.get("cells", []):
        if cell.get("cell_type") == "code":
            cells.append("".join(cell.get("source", [])))
    return {"available": True, "cells": cells}


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
    if ASSIGNMENT.is_dir():
        return run_local(request)
    raise HTTPException(
        status_code=503,
        detail="This runner has no local HW1 assets. Configure DND_ASSIGNMENT_DIR.",
    )
