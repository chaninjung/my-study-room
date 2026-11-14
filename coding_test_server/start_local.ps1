$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$env:DND_ASSIGNMENT_DIR = Join-Path $root "dnd_coding_assignment\dndmsc26autumn_hw1"

Write-Host "Starting the local DND coding-test API on http://localhost:8000 ..."
Start-Process -FilePath "python" -ArgumentList "-m uvicorn coding_test_server.app:app --host 127.0.0.1 --port 8000" -WorkingDirectory $root

Write-Host "Starting the local site on http://localhost:5500 ..."
Write-Host "Open http://localhost:5500/coding_test_runner.html"
python -m http.server 5500 --directory (Join-Path $root "site")
