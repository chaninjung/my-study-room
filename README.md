# DND Theory Test 1 — 연습 문제 앱

Deep Network Development 2026 Autumn **이론 테스트 1 대비 개인 학습용 연습 앱**입니다.
GitHub Pages로 배포하면 폰·태블릿·노트북 어디서든 같은 주소로 열 수 있습니다.

- `index.html` — 문제 앱 (문제 143문항 + 모의고사 13세트 내장, 설치/서버 불필요)
- `print.html` — 인쇄/PDF용 모의고사 13세트 + 정답·해설

## 배포 방법 (약 5분)

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
- 모의고사 1~10: 15문항 · 45분 · 통과 7점 · **NumPy 6문항 + 이론 9문항** (실제 시험과 동일 구성)
- 모의고사 11~13: 문제은행의 **모든 문항이 최소 1회 출제**되도록 만든 추가 세트
- 기록(최고점·오답노트)은 **브라우저 localStorage**에만 저장됩니다. 서버로 전송되는 데이터는 없습니다.

## 로컬에서 미리 보기
`index.html`을 브라우저로 열면 서버 없이도 그대로 동작합니다.
