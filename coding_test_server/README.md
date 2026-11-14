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
.\start_local.ps1
```

Open `http://localhost:5500/coding_test_runner.html`. The local page loads the real HW1 notebook instructions, CSV data,
`requirements.txt`, official tester, and final notebook from the paths in the
workspace. The execution image includes the scientific Python packages needed
by the notebook (`numpy`, `pandas`, `matplotlib`, `scipy`, `scikit-image`,
`scikit-learn`, and `torch`). The answer toggle is
intentionally local-only and is not included in the public Pages deployment.

If dependencies are already installed, the two commands can also be run
separately:

```powershell
uvicorn coding_test_server.app:app --host 127.0.0.1 --port 8000
python -m http.server 5500 --directory sitepowershell
```

The local runner is intentionally for localhost development only. Do not bind
it to a public interface: submitted Python is arbitrary code.

## Public deployment

The repository includes [`render.yaml`](../render.yaml), which can be deployed
from Render with **New > Blueprint**. After the service is created, the site
client uses the default URL:

`https://dnd-coding-test-runner.onrender.com`

The service must not be exposed publicly until the execution isolation is
reviewed. The current Render image runs the checker in its own service process,
which is suitable only for a private, single-user mock test. For a public
course site, replace this with a disposable sandbox per submission and add
authentication, rate limiting, HTTPS, and resource quotas.

The public API is configured to require the existing My Study Room login. In
Render, set `SUPABASE_ANON_KEY` to the same public Supabase anon/publishable
key used by the site. The backend validates every coding-test request against
Supabase Auth and does not trust a browser-supplied user id. Requests without
a valid login token receive `401`.

## Isolated container runner

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
