# DND coding test runner

This is the Python/PyTorch execution service for the browser coding-test UI.
The public GitHub Pages site is only the client; it must not execute arbitrary
student code by itself.

## Local development

```powershell
cd coding_test_server
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```

The runner uses the Python interpreter that starts Uvicorn, so install the
course packages in that environment before running a full HW1 submission:

```powershell
```

The local runner is intentionally for localhost development only. Do not bind
it to a public interface: submitted Python is arbitrary code.

## Isolated runner

Build the image once:

```powershell
docker build -t dnd-coding-runner:latest .
```

Run the API with the disposable-container mode:

```powershell
$env:RUNNER_MODE = "docker"
$env:ALLOWED_ORIGINS = "https://chaninjung.github.io"
uvicorn app:app --host 0.0.0.0 --port 8000
```

Every submission is run in a fresh container with no network, a read-only
filesystem, CPU/memory/process limits, and a 45-second timeout. The API still
needs authentication, rate limiting, HTTPS and an operational deployment
platform before it should accept public traffic.
