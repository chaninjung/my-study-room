@echo off
chcp 65001 >nul
rem 순전파 애니메이션(index.html)을 기본 브라우저로 엽니다.
start "" "%~dp0index.html"
