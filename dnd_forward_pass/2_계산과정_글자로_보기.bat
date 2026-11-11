@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================================
echo  1) Gentoo penguin  (real data)  -^> forward pass, step by step
echo ============================================================
python forward_pass.py --sample 0
echo.
echo ============================================================
echo  2) Adelie penguin  (real data)  -^> forward pass, step by step
echo ============================================================
python forward_pass.py --sample 1
echo.
echo ============================================================
echo  check: browser(HTML) calculation == python calculation
echo ============================================================
node verify_forward_pass.mjs
echo.
echo Done. (Press any key to close)
pause >nul
