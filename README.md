# My Study Room — 학습 허브 (2026 가을학기 · DND 이론 테스트 1)

**학기 → 과목 → 섹션** 구조의 개인 학습 사이트입니다.
GitHub Pages로 배포하면 폰·태블릿·노트북 어디서든 같은 주소로 열 수 있습니다.

- `index.html` — 학습 허브 (왼쪽 사이드바 · 문제 317문항 + 모의고사 28세트 내장)
  - 사이드바: `2026 가을학기 → Deep Network Development → 개요 / 🎲 랜덤 문항 (1~100) / 모의고사 / 문제은행 / 오답 복습 / 용어집 / 인쇄 / 기록`
  - 실제 시험 포털 형식: 좌측 문항 팔레트(Sections) · 중앙 문제/보기 · 우측 타이머 + Overview · 상단 `제출 및 검토`
  - **상단 `한국어 | English` 버튼**으로 문제·보기·해설·UI 라벨을 즉시 전환 (시험은 영어로 출제됩니다)
- `glossary.html` — **용어집/단어 암기** (핵심 단어 411개 + 핵심 문장 49개)
  - 단어 목록(검색·강의별 필터) · **플래시카드**(알아요/몰라요 진도 저장) · 핵심 문장(영어+한국어)
- `print.html` — 인쇄/PDF용 모의고사 28세트 + 정답·해설 (**한국어/영어 토글**)

## 사용법
- **온라인 (배포됨)**: **https://chaninjung.github.io/my-study-room/** — 주소창에 입력하면 바로 시작
- **오프라인**: `index.html` 파일을 브라우저로 열기 (서버 불필요)
- **로컬 주소로 쓰고 싶다면**(상위 폴더의 도우미): `START_SERVER.bat` 더블클릭 → `http://localhost:8000`

## 배포 정보
- 저장소: `chaninjung/my-study-room` · 브랜치 `main` · 루트(`/`) 배포 · HTTPS 적용
- 검색엔진 노출 차단: `robots.txt` + 페이지 `noindex`
- 갱신 방법: 상위 폴더에서 `python build_site.py` → `git add -A` → `git commit` → `git push`
- 상위 폴더의 **`DEPLOY_TO_GITHUB.bat`** 를 더블클릭하면 점검·커밋·푸시를 자동으로 안내합니다.

## 배포 방법 (약 5분)
가장 쉬운 방법: 상위 폴더의 **`DEPLOY_TO_GITHUB.bat` 더블클릭** — 저장소 생성 안내 → 푸시 → Pages 설정 페이지 열기까지 자동으로 안내합니다.

수동으로 하려면:
1. GitHub에서 **새 저장소(public)** 를 만듭니다. 예: `dnd-theory1-quiz`
2. 이 폴더에서 아래를 실행합니다. (`<아이디>` 를 본인 GitHub 아이디로 바꾸세요)
   ```bash
   git init
   git add .
   git status            # ← PDF/docx가 없는지 반드시 눈으로 확인!
   git commit -m "Add DND Theory Test 1 practice app"
   git branch -M main
   git remote add origin https://github.com/<아이디>/dnd-theory1-quiz.git
   git push -u origin main
   ```
3. 저장소 → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** / **/(root)** → **Save**
4. 1~2분 뒤 접속: `https://<아이디>.github.io/dnd-theory1-quiz/`

> 주소를 바꾸고 싶으면 저장소 이름을 바꾸면 됩니다. 커스텀 도메인도 가능합니다.

## ⚠️ 절대 올리면 안 되는 것 (교수님 자료)
- 강의 슬라이드 PDF (`dndmsc26autumn_prez1~7_en.pdf`)
- 예시 문제 문서 (`theory_test1_examples_26autumn.docx`)
- 시험 공지 텍스트, 실습 노트북, 기타 강의 원본 자료

이 저장소의 `.gitignore`가 `*.pdf`, `*.docx`, `*prez*` 등을 **차단**하도록 설정되어 있습니다.
그래도 `git add .` 전에 **`git status`로 한 번 확인**하는 습관을 권합니다.
(이 폴더는 빌드 결과물만 담고 있고, 교수님 자료는 상위 폴더(`lecture_pdf/`)에만 있습니다.)

## 이 앱에 대해
- 문제는 **강의 슬라이드·예시문제 목록을 참고해 직접 작성한 예상 문제**입니다. **공식 기출이 아닙니다.**
- 교수님 자료 원본(문장·이미지)은 포함되어 있지 않습니다.
- 채점 규칙은 교수님 공지 그대로: **완전 일치 1.0점 / 실수 1개 0.5점 / 실수 2개 이상 0.0점**
- 모의고사 1~13: 15문항 · 45분 · 통과 7점 · **NumPy 6문항 + 이론 9문항** (실제 시험과 동일 구성, 11~13은 문제은행 전체가 최소 1회 출제되도록 만든 추가 세트)
- 연습 세트 1~7: 위와 같은 형식의 추가 연습 (연습지 기반)
- 🎯 최종 세트 4개: `M-*`, `M2-*`, `D-*`(DOCX 49문항), `NP-*`(NumPy 집중 26문항)
- 🏷️ **출처 그룹 세트 4개** (2026-11-03 추가, `dnd_question_classification.md`): `1 DOCX`(**시험 범위 149문항**) · `2A 강의 L1–6`(101문항) · `2B Lecture 7`(23문항) · `3 참고`(자료에 없음 44문항) — 317문항 전부에 **출처 그룹 배지**가 붙고, 개요·문제은행·랜덤·모의고사에서 **그룹을 골라** 공부할 수 있습니다
- 해설에는 거짓 보기의 **함정 단어 노트**(308개 보기)가 붙습니다: `⚠️ 함정: C — "…" → "…"이면 참.`
- 기록(최고점·오답노트)은 **브라우저 localStorage**에만 저장됩니다. 서버로 전송되는 데이터는 없습니다.

## 로컬에서 미리 보기
`index.html`을 브라우저로 열면 서버 없이도 그대로 동작합니다.
