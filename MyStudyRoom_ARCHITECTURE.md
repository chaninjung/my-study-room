# My Study Room — 아키텍처 & 기능 정리

> 작성: 2026-11-03 · 기준: 현재 배포 상태(커밋 `38cd330`) · 문서 위치: `DND_class\MyStudyRoom_ARCHITECTURE.md`
> 이 문서는 "이 사이트가 무엇이고, 어떻게 만들어졌고, 어떻게 굴러가는지"를 한 파일로 정리한 것입니다.

---

## 0. 한눈에 보기

| 항목 | 내용 |
|---|---|
| **무엇** | **개인 학습 허브** — `학기 → 과목 → 섹션` 구조. 지금은 **2026 가을학기 · Deep Network Development (이론 테스트 1)** 만 들어 있음 |
| **배포 주소** | https://chaninjung.github.io/my-study-room/ (저장소 `chaninjung/my-study-room`, 브랜치 `main`, root 배포, HTTPS) |
| **페이지** | ① `index.html` 학습 허브(문제 앱) ② `glossary.html` 용어집 (인쇄용 페이지는 2026-11-03 제거) |
| **규모** | 문항 **317** (이론 219 + NumPy 98) · 모의고사 **31세트** · 용어 **411** + 핵심 문장 **49** · 테스트 **1053 PASS / 0 FAIL** |
| **선택 기능** | **☁ 클라우드 동기화(Supabase 무료)** — `sync_config.json` 을 채우면 켜지고, 비우면 계정 UI·네트워크 요청이 **0** (기본 꺼짐) → `SYNC_SETUP.md` |
| **시험 정보** | 15문항 · 45분 · 통과 7점 · 채점 `완전일치 1.0 / 실수 1개 0.5 / 실수 2개 이상 0.0` · 보기 3~6개 중 최소 1개가 참 · **영어 출제** |
| **핵심 설계 3가지** | ① **단일 HTML 파일**(외부 요청 0, 파일 더블클릭만으로 실행) ② **원본 데이터와 UI 분리 + 빌드 파이프라인** ③ **기록 안전**(문항 id·세트 id·저장 키 불변, 새 데이터는 뒤에만 추가) |
| **실행 방법** | ① 배포 주소 접속 ② `START_SERVER.bat` → `http://localhost:8000` ③ `TheoryTest1_PracticeExam.html` 더블클릭 |
| **절대 규칙** | 교수님 자료(PDF/docx)는 저장소에 **절대 올리지 않음** (4중 방어), 문항 answer key 는 완전 일치 방식으로 100% 검증 |

---

## 1. 목적 / 배경

- **상황**: 2026 가을학기 DND(Deep Network Development) 과목의 **이론 테스트 1**(11월 5일 18:00, 재시험 11월 19일 예정). 시험은 **영어**로 출제되고, 15문항 중 약 6문항(40%)이 NumPy.
- **목표**: 교수님 자료(DOCX 예시 + 강의 PDF 7개)에 있는 내용을 **빠짐없이 연습**하고, **어디서 나온 내용인지·얼마나 중요한지**를 구분해서 **시험 전날 가장 중요한 것부터** 훑을 수 있게 한다.
- **사용 시나리오**
  - 이동 중 폰으로 5~10문항 랜덤으로 풀기 → 오답은 자동으로 쌓임
  - 시험 전: **티어 A(49문항)** → **티어 B(47문항)** 순서로 점검, 틀린 것만 다시
  - 헷갈리는 단어는 용어집에서 과목·강의와 함께 확인, 플래시카드로 암기
- **비목표(의도적으로 안 한 것)**: 서버/DB/로그인 없음(기록은 브라우저 localStorage), 사용자 간 공유 없음, 교수님 원본 자료 재배포 없음.

---

## 2. 전체 아키텍처

```
[원본 데이터 / 소스]                                   [빌드 스크립트]          [생성물 → 배포]

glossary_src.py (용어 411 + 문장 49)
src/glossary.js, curriculum.js                  ─→ ① build_glossary.py  ─→ glossary.json
src/theme.css, shell.css, glossary.css,                                      TheoryTest1_Glossary.html
glossary_template.html                                                        site/glossary.html

questions.json (317문항: group/tier 포함)       ─→ ② build_mocks.py     ─→ mocks.json (31세트)
                                                                             print_mocks.md
questions.json + questions_en.json (영어)
mocks.json (세트)
src/app.js, core.js, i18n.js, curriculum.js    ─→ ③ build_app.py       ─→ TheoryTest1_PracticeExam.html (단일 HTML 1.1MB)
src/theme.css, shell.css, exam.css                                           print_version.md
site_template.html

위 산출물 전부                                 ─→ ④ build_site.py      ─→ site/index.html, site/glossary.html
                                                                             (안전 점검: 교수님 자료 0)
                                                                                  │
                                                          site/ (독립 git 저장소) ─→ git push ─→ GitHub Pages
```

> ⑤ `python tools/export_all_md.py` 는 별도로 `DND_class\dnd_theory_test1_ALL_QUESTIONS.md` (317문항 정리본)를 만듭니다. (선택) `gate_passcode.txt` 가 있으면 ④ 이후 데이터가 **AES-256-GCM** 으로 암호화됩니다.

**설계 의도**

1. **단일 HTML + 인라인 CSS/JS**: 모든 CSS·JS·데이터를 HTML 안에 넣습니다(`<style>`, `<script id="...">`). 외부 요청이 (선택적 폰트 CDN 외에) 없어서 **오프라인에서도 파일 하나로 동작**하고, GitHub Pages 배포가 "파일 복사" 수준으로 단순해집니다.
2. **데이터 ↔ 로직 ↔ 화면 분리**: 문항/세트/용어는 JSON, 화면은 `src/*.js`, 스타일은 `src/*.css`. 빌드가 이들을 합칩니다. 문항을 고치려면 JSON만 만지면 됩니다.
3. **생성물을 손으로 고치지 않음**: `*.html`, `mocks.json`, `glossary.json`은 모두 **빌드 산출물**입니다. 항상 원본을 고치고 다시 빌드합니다.
4. **기록 안전**: 브라우저 localStorage 기록은 **문항 id / 세트 id / 저장 키**로 연결됩니다. 따라서 이 세 가지는 **절대 바뀌지 않게** 관리하고, 새 문항·새 세트는 **뒤에만 추가(append)** 합니다.
5. **검증 자동화**: 채점 규칙·이중언어·커버리지·UI 흐름·배포본·게이트까지 **1000여 개 검사**가 있고, 빌드 스크립트 자체도 검증(문항 수·중복·커버리지·비밀번호)을 통과해야 산출물을 씁니다.

---

## 3. 디렉터리 / 파일 지도

```
DND_class/                         ← 작업 루트 (교수님 자료 원본은 여기 위쪽에만 있음)
├─ MyStudyRoom_ARCHITECTURE.md     ← ★ 이 문서
├─ dnd_question_classification.md  ← 출처 그룹 분류 원본 (1 DOCX / 2A / 2B / 3)
├─ dnd_likely_exam_questions.md    ← 중요도 티어 원본 (A / B / C)
├─ dnd_theory_test1_ALL_QUESTIONS.md ← 317문항 정리본 (도구로 생성)
└─ exam_practice/                  ← ★ 프로젝트 본체
   ├─ questions.json               원본: 문항 317 (한국어)
   ├─ questions_en.json            원본: 영어 오버레이 (id → topic/prompt/options/explanation)
   ├─ glossary_src.py              원본: 용어 411 + 핵심 문장 49 (T()/S() 함수로 작성)
   ├─ mocks.json                   생성물: 모의고사 31세트 (문항 id 목록 + 시간/통과점)
   ├─ glossary.json                생성물: 용어집 데이터 (+ meta.courses)
   ├─ build_glossary.py            ① 용어집 데이터 + 용어집 HTML 생성
   ├─ build_mocks.py               ② 모의고사 세트 생성 + 커버리지/중복 검증
   ├─ build_app.py                 ③ 단일 HTML 앱 + 마크다운 시험지 생성
   ├─ build_site.py                ④ 배포 폴더(site/) 생성 + 교수님 자료 차단 검증
   ├─ gate.py                      ⑤ (선택) 비밀번호 게이트 빌드 헬퍼 (AES-256-GCM)
   ├─ deploy.py                    배포 점검/커밋/푸시 도우미
   ├─ serve.py                     로컬 HTTP 서버 (http://localhost:8000)
   ├─ quiz_cli.py                  터미널 CLI (파이썬만 있으면 실행)
   ├─ i18n.py                      한국어+영어 병합 헬퍼 (load_merged)
   ├─ src/
   │  ├─ core.js        채점·셔플·세션 로직 (순수 함수 → 테스트 가능, 약 110줄)
   │  ├─ app.js         화면/라우팅/상태/localStorage (약 1,600줄)
   │  ├─ i18n.js        한국어/영어 UI 문자열 사전 + 언어 상태
   │  ├─ curriculum.js  ★ 학기/과목/섹션 트리 (**새 과목은 여기만 수정**)
   │  ├─ glossary.js    용어집/플래시카드 앱 + 사이드바 렌더 (약 640줄)
   │  ├─ sync_core.js   ☁ 동기화 **순수 함수** (병합·검증·닉네임→이메일·페이로드)
   │  ├─ sync.js        ☁ 동기화 네트워크/토큰/UI (fetch 직접 호출 · 계정 버튼/모달)
   │  ├─ signup.js      가입 페이지(site/signup.html) 전용 (sync.js 의 API 만 사용)
   │  ├─ gate.js        (선택) 잠금 화면 + WebCrypto 복호화
   │  ├─ theme.css      공용 디자인 시스템 (색 토큰·버튼·패널·표·계정/모달)
   │  ├─ shell.css      앱 프레임 (오른쪽 드로어 · 가운데 누르면 닫힘)
   │  ├─ exam.css       문제 앱 전용 레이아웃 (+ 티어/그룹 배지)
   │  ├─ glossary.css   용어집 전용 레이아웃 (+ 수업 배지)
   │  └─ signup.css     가입 페이지 전용 레이아웃 (인프런 가입 화면 톤)
   ├─ sync_config.json   ☁ 동기화 설정 (url / anonKey / emailDomain) — 비우면 꺼짐
   ├─ sync_build.py      ☁ 설정 주입 + 공개 키 검증 (sb_secret_ / admin role 거부)
   ├─ supabase/schema.sql ☁ 표·RLS SQL (참고/재현용)
   ├─ SYNC_SETUP.md      ☁ 사용자가 직접 할 일 단계별 안내
   ├─ tools/check_sync.py ☁ 실제 응답으로 가입/로그인/쓰기/읽기 확인
   ├─ site_template.html, glossary_template.html, signup_template.html   HTML 템플릿 (플레이스홀더 치환)
   ├─ TheoryTest1_PracticeExam.html    생성물(오프라인 앱, 1.1MB)
   ├─ TheoryTest1_Glossary.html        생성물(오프라인 용어집, 134KB)
   ├─ print_version.md / print_mocks.md 생성물(마크다운 시험지 — 사이트 기능 아님)
   ├─ site/                            ★ 배포 폴더 (독립 git 저장소 → GitHub Pages)
   │  ├─ index.html, glossary.html, signup.html   생성물
   │  ├─ robots.txt (전체 차단), .nojekyll, .gitignore (PDF/docx/prez 차단), README.md
   ├─ tools/                            데이터 도구·검사 스크립트 (아래 8-2)
   ├─ tests/                            7개 테스트 스위트 (아래 8장)
   └─ *.bat                             START_APP / START_GLOSSARY / START_SERVER / START_MOCK / START_CLI / RUN_TESTS / DEPLOY_TO_GITHUB
```

---

## 4. 데이터 모델

### 4-1. 문항 (`questions.json`)

```json
{
  "meta": { "title": "...", "subtitle": "...", "exam_questions": 15, "exam_minutes": 45,
            "exam_pass": 7.0, "grading_note": "...", "real_exam_note": "..." },
  "questions": [
    {
      "id": "D-04",                 // ★ 절대 불변 (기록이 id 로 연결됨)
      "part": "A",                  // A = 이론, B = NumPy
      "lecture": "Lecture 1",       // Lecture 1~7 / NumPy (범위 선택·필터에 사용)
      "topic": "손실함수의 역할과 값의 형태",
      "prompt": "…설명 중 옳은 것을 모두 고르시오.",   // 지문 (문맥을 스스로 담도록 다듬음)
      "options": ["…", "…", "…"],   // 보기 3~6개 (순서 고정! 해설이 A/B/C 로 지칭)
      "correct": ["A", "B"],        // 정답 조합
      "explanation": "… (A 참). … ⚠️ 함정: C — \"…\" → \"…\"이면 참",  // 모든 보기를 참/거짓으로 설명
      "group": "1-docx",            // 출처 그룹 (1-docx / 2a-lecture / 2b-lecture7 / 3-extra)
      "group_note": "",             // 그 문항의 출처 메모 (예: "일부 보기는 강의 슬라이드 내용")
      "tier": "A",                  // 중요도 티어 (A / B / C)
      "tier_note": ""               // 티어 근거 (티어 B 는 근거 있음)
    }
  ]
}
```

- **NumPy 문항 98개**에는 옛 분류 `prio` / `prio_note` 가 남아 있습니다(⭐/📘/➕, `tools/tag_numpy_prio.py`). 이제 화면에는 쓰지 않고 **출처 그룹(1 DOCX/2A/…)** 이 그 역할을 대신합니다.
- **함정 노트**: 해설 끝의 `⚠️ 함정: C — "…" → "…"이면 참.` 은 "거짓 보기가 단어 하나 때문에 틀린 경우 그 단어가 바뀌면 참이 된다"는 표시입니다 (248문항에 들어 있음).

### 4-2. 영어 오버레이 (`questions_en.json`)

```json
{ "_note": "… Option order MUST match the Korean original.",
  "D-04": { "topic": "…", "prompt": "…", "options": ["…","…"], "explanation": "…" } }
```
한국어 원본을 그대로 두고 **id 키로 영어만 덮어쓰는** 구조입니다(옵션 순서 반드시 일치). `i18n.py` 의 `load_merged()` 가 합쳐서 `{ko, en}` 를 만듭니다.

### 4-3. 모의고사 세트 (`mocks.json`, 생성물)

```json
{ "meta": { "exam_questions": 15, "exam_minutes": 45, "exam_pass": 7.0,
            "numpy_per_mock": 6, "primary": 10, "count": 31 },
  "mocks": [
    { "id": "mock05", "label": "모의고사 5", "questions": ["M-01", "…"], "minutes": 45, "pass": 7 },
    { "id": "mock23", "label": "📄 교수님 DOCX 예시 전체 (49문항)", "full": true, "questions": [...], "minutes": 147, "pass": 23 },
    { "id": "mock31", "label": "⭐ 티어 A (DOCX 그대로) (49문항)", "tier": "A", "full": true, "final": true, ... }
  ] }
```
- `final: true` → 최종 세트(시험 전 점검 패널에 표시), `full: true` → 15문항 형식이 아닌 "전체" 세트(검증에서 15문항 규칙 제외)
- `group` / `tier` 필드는 "그 세트가 어느 분류로 만들어진 세트인지"를 표시합니다.

**31세트 구성**

| 구간 | id | 내용 |
|---|---|---|
| 실전 1~10 | `mock01`~`mock10` | 15문항·45분·통과 7 (이론 9 + NumPy 6) — **내용 고정** |
| 추가 11~13 | `mock11`~`mock13` | 위와 동일 형식 (문제은행 전체가 최소 1회 나오도록 설계) |
| 연습 1~7 | `mock14`~`mock20` | 연습지(`S1-*`/`S2-*`) 기반, 같은 형식 |
| 최종 | `mock21`~`mock24` | 최종 모의고사 · 최종 2(공식·계산) · 교수님 DOCX 예시 49문항 · 🧮 NumPy 집중 26문항 |
| 출처 그룹 | `mock27`~`mock30` | 1 DOCX 149 · 2A 강의 L1–6 101 · 2B Lecture 7 23 · 3 참고 44 (2분/문항) |
| ⭐ 티어 | `mock31`~`mock33` | **티어 A 49 · 티어 B 47 · 티어 A+B 96** (2분/문항) |

> `mock25`/`mock26` 은 **재사용 금지**(옛 ⭐/📘 NumPy 등급 세트가 쓰던 id → 남아 있는 최고점 기록을 깨지 않기 위해 비워 둠).

### 4-4. 용어집 (`glossary.json`, 생성물)

```json
{ "terms": [ { "term": "hypothesis function", "ko": "가설함수", "en": "The function h that maps …",
               "lecture": "L1", "course": "dnd" } ],
  "sentences": [ { "en": "…", "ko": "…", "lecture": "L6", "course": "dnd" } ],
  "meta": { "terms": 411, "sentences": 49, "lectures": ["AC","L1",…,"NP"], "courses": ["dnd"],
            "course_counts": { "dnd": 411 } } }
```
- 용어 태그: `L1`~`L7`(강의) · `NP`(NumPy/PyTorch) · `AC`(아카데믹 공통 단어)
- `course`: 그 단어가 나온 **수업(과목)** — `curriculum.js` 의 과목 id 와 일치. 새 과목 단어는 `T(..., course="과목id")`.

### 4-5. 커리큘럼 (`src/curriculum.js`) — 사이트의 뼈대

```js
var CURRICULUM = [{
  id: "s1", label: {ko:"2026 가을학기", en:"2026 Autumn"}, sub: {ko:"1학기",…}, open: true,
  courses: [{
    id: "dnd", label: {ko:"Deep Network Development",…}, short: {ko:"DND", en:"DND"},
    sub: {ko:"이론 7강 + NumPy 실습 · 이론 테스트 1",…}, open: true,
    items: [ overview, random, mocks, bank, wrong, glossary(href), records ]   // ← 사이드바 7섹션
  }]
}, { id: "s2", label: {ko:"2027 봄학기",…}, open: false, courses: [] }];        // ← 다음 학기 자리
```
- **과목을 추가하려면 이 배열만 수정**하면 앱 사이드바·용어집 사이드바·breadcrumb·과목별 용어집 링크가 함께 바뀝니다.
- `href` 가 있는 항목은 **다른 페이지로 이동**(용어집 → `glossary.html?course=dnd`), 없는 항목은 앱 내부 화면 전환입니다.

---

## 5. 빌드 파이프라인

### 5-1. 항상 이 순서 (의존 관계)

```powershell
python build_glossary.py    # ① glossary.json + TheoryTest1_Glossary.html + site/glossary.html
python build_mocks.py       # ② mocks.json (+ 커버리지·중복·형식 검증) + print_mocks.md
python build_app.py         # ③ TheoryTest1_PracticeExam.html + print_version.md
python build_site.py        # ④ site/index.html + site/signup.html (+ robots.txt / .nojekyll / 안전 점검)
cd site; git add -A; git commit -m "…"; git push      # ⑤ 배포
```

| 단계 | 입력 | 출력 | 자체 검증 |
|---|---|---|---|
| ① `build_glossary.py` | `glossary_src.py`, 템플릿, `theme/shell/glossary.css`, `glossary.js`, `curriculum.js` | `glossary.json`, 두 HTML | 용어/문장 수, 수업·강의 태그 |
| ② `build_mocks.py` | `questions.json` (+group/tier) | `mocks.json` | **모든 시험형식 세트가 정확히 15문항(NumPy 6)**, 문항 중복 0, **317문항 100% 커버** |
| ③ `build_app.py` | `questions.json` + `questions_en.json`(i18n.py), `src/*`, 템플릿 | 로컬 단일 HTML + 마크다운 | (검증은 ⑧ tests 가 담당) |
| ④ `build_site.py` | 위 산출물 | `site/index.html`, `site/glossary.html` | **배포 폴더에 PDF/docx/prez 없음**, HTML 안에 자료 참조 문자열 없음 |

> 빌드가 실패하면 산출물을 쓰지 않게 되어 있어서, 잘못된 데이터가 배포되는 것을 막습니다.

### 5-2. (선택) 비밀번호 잠금

- `gate_passcode.txt`(또는 `--passcode-file`, `STUDY_PASSCODE` 환경변수)를 만들면 **자동으로 켜집니다. 없으면 지금처럼 평문 공개**입니다(기본 꺼짐).
- 방식: 문항/모의고사/용어집 데이터를 **AES-256-GCM**(PBKDF2 유도, `{v, iter, salt, iv, ct}`)으로 암호화하고, HTML 에는 암호문 + 잠금 화면만 넣습니다. 복호화는 브라우저 **WebCrypto**가 담당(`src/gate.js`), 빌드 측 암호화는 동일 규격의 Node 도구(`tools/gate_crypto.mjs`)를 씁니다.
- 잠금 화면 → 성공 시 `kind` 에 따라 `__bootApp` / `__bootGlossary` 호출 후 부팅. 자동입장은 **복호화 성공 후에만** 저장됩니다.
- `gate_passcode.txt` 는 커밋되지 않습니다(`site/.gitignore`).

### 5-3. 배포 (GitHub Pages)

- `site/` 는 **독립 git 저장소**(origin: `chaninjung/my-study-room`, branch `main`, root 배포) → `git push` 하면 1~2분 뒤 반영.
- 도우미: `DEPLOY_TO_GITHUB.bat` 또는 `python deploy.py` (점검 → 커밋 → 푸시), 점검만: `python deploy.py --check-only`.
- **교수님 자료 차단 4중 방어**: ① `site/.gitignore`(`*.pdf`, `*.docx`, `*prez*`) ② `build_site.py` 배포 폴더 검사 ③ `deploy.py` 커밋 직전 검사 ④ `tests/site_tests.js` 산출물 검사.
- 검색엔진 차단: `robots.txt`(Disallow: /) + `<meta name="robots" content="noindex,nofollow">`.

---

## 6. 화면(기능) 정리

### 6-1. 사이드바 7섹션

| 섹션 | 하는 일 |
|---|---|
| **개요** | 상단 **단원(섹션) 탭**(이론1·이론2·코딩 테스트·오럴 테스트 — 이론1만 내용이 있고 나머지는 '준비 중') · 통계 카드(문항/세트/단어/최고점) · **⭐ 티어 패널(A/B/A+B 바로 시작)** · 주력 패널(**랜덤**·**오답 복습**, 그 아래 접이식 `▸ 다른 방법`= 실전 모드·전체 연습) · **출처 그룹 패널** · 최근 기록 · 최종 세트 목록 · 타이머 설정 |
| **🎲 랜덤 문항 (1~100)** | 개수 직접 입력(1~100, 빠른 선택 1/5/10/20/50/100) + **출제 범위**(전체 / ⭐A+B / ⭐A / B / 이론 / NumPy / 출처 그룹 4종) → 무작위 출제, 문항당 3분(선택), 최고점·최근 기록 |
| **모의고사** | 31세트 목록(실전 10 / 추가 3 / 연습 7 / 최종 7 / 출처 그룹 4 …) — 세트별 최고점, 45분 카운트다운(끄기 가능) |
| **문제은행** | 317문항 표 — 검색 + **강의 칩 · 티어 칩 · 출처 그룹 칩** 필터, 강의/티어/그룹별 표에서 `풀기`, 각 행 주제 옆 **배지(티어·그룹)**, 문항별 `풀기` |
| **오답 복습** | 틀린 문항 자동 수집(많이 틀린 순) → 오답만 다시 풀기 |
| **용어집 (별도 페이지)** | 단어 411 + 문장 49 — 검색, **수업/강의 필터**, 플래시카드(알아요/몰라요 진도), 사이드바 공용 |
| **학습 기록** | 응시 횟수·평균·최고점·세트별 점수 카드, 전체 기록 표, 초기화 |

### 6-2. 시험 화면 (실제 시험 포털 형식)

- 좌측: `Sections` + 문항 팔레트(응답함 초록 / 응답 안 함 빨강 / 검토 보라 / 북마크 주황 / 방문 안 함 회색) + 범례
- 중앙: `Q: n` + **주제 줄(주제 + 티어/그룹 배지)** → 지문 → 보기(선택 시 파란 테두리) → `검토 표시` `북마크` `응답 지우기` `저장 후 다음`
- 우측: `00 : 45 : 00` 타이머 · 시험 안내 · 응시 요령 · **Overview 표**(Total/Visited/…/Bookmarked) · `제출 및 검토` · `⏱ 타이머 끄기` · `나가기`
- 폰: 하단 고정 바(이전/다음/목록/홈), 문항 목록은 드로어

### 6-3. 모드 6종과 타이머 정책

| 모드 | 설명 | 시간 |
|---|---|---|
| `mock` | 모의고사 세트 | 45분 (세트별 지정) |
| `exam` | 실전 모드(무작위 15문항) | 45분 |
| `all` | 전체 연습(317문항) | 무제한(시간 제한 켜면 60분) |
| `range` | 범위 연습(강의별·그룹별·티어별·문제은행 선택) | 기본 무제한(문항수×1.2분 등) |
| `random` | 랜덤 N문항 | 기본 무제한, 켜면 **문항당 3분** |
| `one` / `wrong` | 문항 1개 / 오답만 | 무제한 |

- **⏱ 타이머 끄기**: 개요·모의고사 체크박스 또는 시험 중 우측 버튼. 켜면 **카운트다운 없음 + 자동 제출 없음**(경과 시간만 표시), 모의고사 목록에 `타이머 끔` 표시, 설정은 브라우저에 저장.
- 채점: `core.js` 의 `gradeAnswer` — 완전일치 1.0 / 실수 1개 0.5 / 실수 2개 이상 0.0 (빈 답 = 전부 누락 처리).

### 6-4. 이중 언어(한/영) · 기록 · 라우팅

- **언어**: 상단 오른쪽 **🌐 지구본** 버튼(앱)·`한국어 | English` 버튼(용어집). UI 문자열은 `i18n.js` 사전, 문항은 `questions_en.json` 오버레이. 선택은 저장되어 다음 방문에도 유지. 용어집은 자체 사전(`glossary.js` 의 `STR`).
- **기록(localStorage)** — 서버 전송 없음:

| 키 | 내용 |
|---|---|
| `dnd_tt1_v1` | **핵심 기록**: `history[]`(응시 기록), `wrong{}`(문항별 오답 횟수), `best`(최고점), `mockBest{}`(세트별 최고점), `randBest`, `randCount` |
| `dnd_tt1_timer` | 타이머 끄기 설정(`on`/`off`) |
| `dnd_tt1_lang` | 언어(`ko`/`en`) |
| `dnd_tt1_vocab` | 플래시카드 진도(`known{}`) |
| `dnd_tt1_gate` | (게이트 사용 시) 자동 입장 플래그 |
| `dnd_tt1_auth` | ☁ (동기화 사용 시) 로그인 토큰 — access/refresh/만료/user_id/닉네임. **새 키(추가만)** |
| `dnd_tt1_owner` | ☁ 마지막으로 동기화한 user_id (계정 전환 시 기록 섞임 방지) |
| `dnd_tt1_notice` | ☁ 신기능 안내 창을 언제까지 안 띄울지 (`{hideUntil: ms}`) |

- **해시 라우팅**: `index.html#bank` · `#mocks` · `#random` · `#wrong` · `#records` — 용어집 사이드바에서 그 화면으로 바로 이동. 화면을 열면 주소가 **과목 스코프**(`#<과목>/<화면>`, 개요는 `#<과목>/learning`)로 정리된다 — 예: `#deepnetworkdevelopment/learning` · `#deepnetworkdevelopment/bank`. 예전 `#overview`·`#bank` 형식도 그대로 열린다. 부팅 때의 주소 정리만 `replaceState`, **앱 안에서의 이동은 `pushState`** 로 남겨 **브라우저 뒤로가기**가 `학습 → 과목 상세 → 라이브러리` 순서로 되돌아온다(`hashchange` + `popstate` 로 되돌아온 화면을 다시 그린다).
- **세트 구성이 바뀌어도 숫자가 안 틀어지게**: '응시한 세트' 수는 **지금 존재하는 세트만** 셉니다(`takenCount()`).


---

## 7. 분류 체계 3종 (이 사이트의 핵심 차별점)

문항마다 **"어디서 나왔나(출처)"** 와 **"얼마나 중요한가(티어)"** 를 붙여 두고, 어느 화면에서든 골라서 풀 수 있습니다.

### 7-1. ⭐ 중요도 티어 — `dnd_likely_exam_questions.md` → `tools/tag_tiers.py`

| 티어 | 문항 수 | 뜻 | 배지 | 세트 |
|---|---|---|---|---|
| **A** | **49** | 교수님 **DOCX bullet 그대로** (가장 먼저 풀 것) | 빨강 `⭐ A` | `mock31` |
| **B** | **47** (이론 40 + NumPy 7) | ✗ 표시 없는 슬라이드 중 **교수님이 강조한 내용** | 노랑 `B` | `mock32` |
| **C** | **221** | 같은 주제 반복 · 다른 강의 · Lecture 7 · 그룹 3 | (표시 안 함) | — |

### 7-2. 🏷️ 출처 그룹 — `dnd_question_classification.md` → `tools/tag_groups.py`

| 그룹 | 문항 수 | 뜻 | 배지 | 세트 |
|---|---|---|---|---|
| **1 DOCX** | **149** (이론 94 + NumPy 55) | 교수님 DOCX 의 bullet = **시험 범위** | 초록 `1 DOCX` | `mock27` |
| **2A 강의 L1–6** | **101** (이론 95 + NumPy 6) | ✗ 표시가 없는 Lecture 1~6 슬라이드 | 파랑 `2A 강의 1–6` | `mock28` |
| **2B Lecture 7** | **23** | ✗ 표시 없는 L7 (DOCX 는 "Lectures 1–6" → 범위 밖일 수 있음) | 노랑 `2B 강의 7` | `mock29` |
| **3 참고** | **44** (이론 7 + NumPy 37) | 자료에 없거나 ✗ 시험제외 슬라이드에만 | 회색 점선 `3 참고` | `mock30` |

### 7-3. (옛) NumPy 등급 — `tools/tag_numpy_prio.py`

⭐65/📘14/➕19 로 나눴던 초기 분류. 데이터에는 남아 있지만 화면에는 쓰지 않습니다(출처 그룹이 대체). **세트 id `mock25`/`mock26` 은 이 분류가 쓰던 id 라 재사용 금지.**

### 7-4. 공통 규칙

- 태깅 스크립트는 모두 **멱등**(여러 번 실행해도 같은 결과)이고 **문항·보기·정답을 건드리지 않습니다**(분류 필드만 씀).
- 카운트가 파일의 기대값과 다르면 **경고 후 실패**시키고, 고정된 카운트는 테스트(run_tests 10-f/10-g, site_tests P14/P14-b)가 다시 확인합니다.
- 분류를 바꾸고 싶으면 **원본 md 파일만 고치고 태깅 스크립트를 다시 실행**하면 됩니다.
- 배지에 마우스를 올리면 **설명 + 그 문항의 메모/근거**가 툴팁으로 보입니다.
- UI 노출 위치: 개요 패널(시작 버튼) · 문제은행(필터 칩 + 표 + 행 배지) · 랜덤(범위 옵션) · 모의고사(세트) · 시험 화면(주제 줄 배지) · 마크다운 정리본(배지 + 목차).

---

## 8. 테스트 체계

### 8-1. 8개 스위트 (`RUN_TESTS.bat` 이 순서대로 실행)

| 스위트 | 검사 수 | 검증 범위 |
|---|---|---|
| `tests/sync_tests.js` | **109** | ☁ **순수 병합 로직**: 닉네임/비밀번호 검증, **이메일·아이디(이메일/닉네임) 검증**, 닉네임→이메일, history 합집합·중복 제거·정렬·50개 상한, wrong/mockBest/best 큰 값, vocab 합집합, 페이로드 형태, **멱등성**, 빈 서버/빈 로컬, 계정 전환 판단 |
| `tests/run_tests.js` | **243** | 채점 규칙·보기 순서·모의고사 31세트 구성·커버리지 100%·이중언어·해설↔정답키 일치·출처 그룹·티어·용어집·CSS 클래스 커버리지·반응형·커리큘럼·시간 제한·가독성·빌드 산출물·**동기화 배선/안전 · 인프런 톤 브랜드 색/로고 · 로그인 창 스타일(가운데 로고·공식 소셜 로고) · 프로필 메뉴 · 부팅 게이트(라이브러리) · 인프런 실측 검색 알약/헤더(지구본 42px 원 · 회색 Sign in) · 창 높이 제한 + 배경 스크롤 잠금(스크롤 막대 1개)** |
| `tests/smoke_dom.js` | **438** | 실제 앱 DOM 흐름(시작→응답→제출→채점→결과), 언어 토글, 모바일 바, **기록 유지(S17/S18)**, 출처 그룹, 티어(S19), 랜덤, **☁ 동기화 흐름(S20: 로그인→병합→올리기 + 신기능 공지 + 🔑 소셜 로그인 준비 + 프로필 메뉴 + 이메일 로그인·인증번호 6자리(OTP)·비밀번호 재설정 + 시트 스크롤 잠금)**, **🏛 라이브러리/로그인 게이트(S21: 검색·학기 탭·가로 스크롤·전체 보기)** |
| `tests/site_tests.js` | **160** | 배포본: 교수님 자료 미포함, 배포본 동작, 인쇄 페이지 제거, 용어집 수업/사이드바, 티어, **파비콘 로고/탭 아이콘 · #00C471 워드마크 · 로그인 창 인프런 톤(가운데 로고·공식 소셜 로고) · 프로필 메뉴**, **☁ 동기화(주입 설정 = sync_config.json 일치 · 켜짐/꺼짐 두 상태 모두 · 로그인 전 요청 0 · admin 키 0 · 공지 자동 표시)** |
| `tests/glossary_tests.js` | **60** | 용어집: 검색·필터·플래시카드 진도 저장·언어 토글·수업 태그(G6)·사이드바(G7)·**☁ 동기화 연결(G8)** |
| `tests/signup_tests.js` | **46** | **가입 페이지(`site/signup.html`)**: 배포본 구성(마커·설정 일치·오프라인엔 주소 없음) · 입력 검증(도메인/8자/불일치) · **가입→6자리 코드→`index.html` 이동** · 코드 다시 보내기 · 잘못된 코드 · 자리글씨(`Email`/`Password`)·ELTE 안내 위치·`가입 → signup.html` 링크(주소 없으면 창 안 탭 폴백) |
| `tests/gate_tests.js` | **67** | (선택 기능) 비밀번호 게이트: 암복호화 왕복, 평문 미노출, 잠금 화면, 자동 입장 |
| `tests/test_serve.py` | **27** | 로컬 서버 기동 후 실제 HTTP 접속(200/404, dotfile 차단, `/print.html` 404, **`/signup.html` 200**) |
| **합계** | **1150 PASS / 0 FAIL** | |

### 8-2. 데이터 검사 도구 (빌드 전/후 수시 실행)

| 도구 | 하는 일 |
|---|---|
| `tools/check_i18n.py` | 영어 번역 317/317 완전성 + 보기 개수 일치 + **해설의 참/거짓 표시 ↔ 정답 키 일치** |
| `tools/check_prompts.py` | 지문이 스스로 문맥을 담는지(지시 대상 없는 지문·너무 짧은 지문·수치 누락) 317문항 |
| `tools/audit_questions.py` | 지문·보기·해설 6축 감사(설명 안 된 보기, 중복 보기 …) |
| `tools/check_responsive.py` | 생성된 HTML 의 미디어 쿼리 5단계·가로 대응 요약 |
| `tools/check_examples.py` | 교수님 예시문제 목록 대비 커버리지 대조 |
| `tools/export_all_md.py` | 317문항 정리본(`dnd_theory_test1_ALL_QUESTIONS.md`) 재생성 (티어/그룹 배지 + 목차) |

### 8-3. 회귀 방지 전략

1. **기록 안전 불변식** — 문항 id · 세트 id · 저장 키(`dnd_tt1_v1` 등) · 도메인은 절대 변경하지 않음. 새 데이터는 뒤에만 추가. (S17/S18 이 실제로 검증)
2. **카운트 고정** — 317문항 / 그룹 149·101·23·44 / 티어 49·47·221 / 세트 31 / 용어 411 / 문장 49. 바뀌면 테스트가 실패해 알려줍니다.
3. **UI 회귀 방지** — CSS 클래스 커버리지(정의 없는 클래스 0), 반응형 브레이크포인트 존재, 상단 바 고정(줄바꿈 없음), 배지 CSS 존재.
4. **빌드 자체 검증** — 커버리지 100%, 중복 0, 15문항 형식, 배포 폴더 안전 점검.

---

## 9. 안전 규칙 (절대 깨면 안 되는 것)

| 규칙 | 이유 | 확인 방법 |
|---|---|---|
| **문항 id 불변** | 오답노트·응시기록이 id 로 연결됨 | `tests/smoke_dom.js` S17 |
| **세트 id 불변 / 재사용 금지** | 세트별 최고점이 id 로 저장됨 (`mock25`/`mock26` 비워 둠) | `run_tests` 10-g, `smoke_dom` S18 |
| **저장 키 불변** (`dnd_tt1_v1` …) | 키가 바뀌면 기록 전체가 사라짐 | `run_tests`(키 문자열 검사) |
| **교수님 자료 미포함** | 저작권·수업 규정 | `build_site.py` + `deploy.py` + `site_tests.js` |
| **정답은 완전 일치** | 오답 1개=0.5 라는 규칙과 채점 정합성 | `run_tests` 채점 섹션 |
| **보기 순서 고정** | 해설이 `(A 참)` 처럼 문자로 지칭 | `run_tests` 보기 순서 섹션 + `check_i18n` |
| **관리자(secret) 키 금지** | 클라이언트는 공개 키(sb_publishable_ / anon)만 써야 함 (RLS 가 지킴) | `sync_build.py` 가 `sb_secret_` prefix + JWT role 검사·차단 + `run_tests`/`site_tests`/`build_site.py` 가 문자열 검사 |
| **토큰·비밀번호 비노출** | 로그/에러에 남으면 위험 | `sync.js` 는 상태 코드/일반 문구만 사용 (토큰 출력 없음) |

---


## 10. 자주 하는 작업 (레시피)

### 10-1. 문항을 고치고 싶다 (내용만)
1. `questions.json`(한국어) / `questions_en.json`(영어) 에서 **id 는 그대로 두고** prompt·options·correct·explanation 만 수정
2. `python tools/check_i18n.py` → `python tools/check_prompts.py` → `python tools/audit_questions.py`
3. `python build_app.py` → `python build_site.py` → 테스트 → 배포
4. `python tools/export_all_md.py` (정리본도 갱신)

### 10-2. 문항을 새로 추가하고 싶다
1. **뒤에만** 추가(기존 id 유지). 예: `tools/add_docx_set.py`, `tools/add_numpy_30.py` 처럼 추가 전용 스크립트를 만들어 실행
2. 그 문항의 `group` / `tier` 를 채워야 하면:
   - 출처 그룹: `dnd_question_classification.md` 표에 id 추가 → `python tools/tag_groups.py`
   - 티어: `dnd_likely_exam_questions.md` 표에 id 추가 → `python tools/tag_tiers.py`
3. `python build_mocks.py` (새 문항이 어느 세트에도 없으면 **커버리지 검증이 실패**합니다 → 세트 배치를 조정하거나 새 세트를 뒤에 추가)
4. `python build_app.py && python build_site.py` → 테스트 → 배포

### 10-3. 티어/그룹 판단을 바꾸고 싶다
```powershell
# dnd_likely_exam_questions.md 의 표에서 id 줄을 옮기고
python tools/tag_tiers.py         # 카운트가 49/47/221 과 다르면 실패하며 알려줌
python build_mocks.py             # 티어 세트(mock31~33) 내용이 새로 계산됨
python build_app.py ; python build_site.py
node tests/run_tests.js           # 10-g 가 새 카운트를 확인
python tools/export_all_md.py
```
(그룹도 동일: `dnd_question_classification.md` → `python tools/tag_groups.py`, 기대값 149/101/23/44)

### 10-4. 용어를 추가하고 싶다
`glossary_src.py` 에 한 줄: `T("term", "뜻", "English definition", "L3")` (다른 과목이면 `course="과목id"`)
→ `python build_glossary.py` → `node tests/glossary_tests.js` → `python build_site.py` → 배포

### 10-5. 새 과목/학기를 추가하고 싶다
`src/curriculum.js` 의 `s2.courses`(또는 새 학기)에 과목 객체를 넣고 `items` 에 섹션을 나열
- `overview`/`random`/`mocks`/`bank`/`wrong`/`records` 는 **이미 구현된 화면**이 그대로 열립니다.
- `library`(과목 카탈로그) · `dashboard`(인프런풍 대시보드) · `course`(과목 상세 페이지)는 주소 해시로 바로 열립니다 — 과목 페이지는 과목 이름을 그대로 씁니다(`#dnd` 또는 전체 이름 `#deepnetworkdevelopment`, 둘 다 허용).
- 학습 화면·섹션도 **과목 스코프** 해시를 씁니다 — `#<과목slug>/<화면>`(개요는 `learning`). 즉 `학습 시작`/개요는 `#deepnetworkdevelopment/learning`, 문제은행은 `#deepnetworkdevelopment/bank` … 로 남고, 예전 형식(`#overview`/`#bank`)도 그대로 열립니다. 슬러그는 `courseSlug()`(과목 이름 소문자·영숫자), 해시→과목 해석은 `courseByHash()`, 화면↔조각 매핑은 `viewSegment()`/`segmentView()`.
- **과목 단원(섹션)** — 교수님이 나눈 큰 단원을 `curriculum.js` 의 `course.sections` 로 둡니다(DND: `theory1` 이론1(내용 있음) · `theory2` 이론2 · `coding` 코딩 테스트 · `oral` 오럴 테스트). 개요 상단 **`단원` 탭**에서 고르고, `ready` 가 아닌 단원은 '준비 중' 플레이스홀더를 보여 줍니다(내용은 나중에 채우면 됨). 주소는 `#<과목slug>/<단원id>`(예: `#dnd/theory2`)이고, 첫 단원이면 기존처럼 `learning`(`#dnd/learning`)입니다. 헬퍼는 `courseSections()` · `activeSectionId()` · `sectionByHash()` · `sectionBarHtml()`/`wireSectionButtons()`, 상태는 `COURSE_SECTION`(테스트 훅 `__app.courseSection`/`setCourseSection`). 이론2·코딩·오럴에는 아직 문항/모의고사가 없습니다.
- 라이브러리에서 과목 카드를 누르면 **과목 상세 페이지**(`renderCourse`, 해시 `#dnd`/`#deepnetworkdevelopment`)로 들어갑니다 — 다크 히어로 + **ABOUT / MOCK TEST / LEARNERS** 탭 + 오른쪽 `무료 · 학습 시작` 카드. 카드의 태그는 `curriculum.js` 의 `tags`, 난이도는 `level` 에서 옵니다. **후기(리뷰) 탭은 없고**, 대신 이 브라우저 기준의 **"학습자"** 만 보여 줍니다(로그인 닉네임 + 응시/최고/오답). `학습 시작` 은 학습(개요) 화면을 `#deepnetworkdevelopment/learning` 주소로 엽니다. (스타일 `.cd*` · `body.view-course`, `src/theme.css`)
- 새 화면이 필요하면 `src/app.js` 의 `renderView()` 에 분기 추가.
- 과목별 용어집은 자동으로 `glossary.html?course=<과목id>` 로 연결됩니다(그 과목 단어만 표시).
→ `python build_app.py && python build_site.py` → `node tests/smoke_dom.js`

### 10-6. 테스트/배포
```powershell
RUN_TESTS.bat                # 또는 개별: node tests/run_tests.js 등 (8장 표 참고)
cd site                      # ★ git 은 반드시 site 안에서만
git add -A ; git commit -m "Update" ; git push
```
빌드 순서를 지키는 이유: `build_site.py` 는 `site/glossary.html` 이 있으면 함께 안전 점검하고, 앱은 `mocks.json`·`curriculum.js` 를 읽습니다.

---

## 11. 알려진 한계 / 다음에 할 수 있는 것

**한계**
- 티어·그룹은 **교수님 자료(DOCX + 슬라이드 7개)를 근거로 한 추정**입니다. DOCX 목록이 "완전하지 않다"고 되어 있고 NumPy 는 영상 기반이라, 실제 시험에 없는 내용이 섞이거나 반대로 빠질 수 있습니다.
- 시험은 영어로 나오므로 영어 오버레이의 표현이 실제 시험 문장과 100% 같지는 않습니다(내용·의미 기준 정합성은 자동 검사).
- 기록은 **브라우저별**입니다(폰과 PC 가 따로). 서버 동기화는 없습니다.
- 인쇄용 페이지(`print.html`)는 제거되어, 종이로 풀려면 마크다운(`print_version.md`, `dnd_theory_test1_ALL_QUESTIONS.md`) + `Ctrl+P` 를 씁니다.
- 시험 화면은 실제 시험 포털과 **형식만 유사**합니다(문제 유형·보기 수는 같지만 채점·UI 는 우리 앱 기준).

**다음에 해볼 만한 것**
- 오답 간격 반복(SRS) 스케줄러, 티어별 진행률 그래프
- 폰에서 오프라인(PWA 서비스워커 캐시)
- 시험 후 실제 출제 문항을 기록해 **티어 정확도 회고**(어떤 티어에서 나왔는지 통계)
- 다른 학기/과목 콘텐츠 추가(구조는 이미 준비됨 — `curriculum.js` + `glossary_src.py` 의 `course`)

---

## 12. ☁ 클라우드 동기화 (선택 기능 · Supabase 무료)

친구 ~50명이 쓰는데 **기기를 바꾸거나 브라우저를 지우면 기록이 사라지는 문제**를 해결하기 위한 **선택 기능**입니다.
**서버 비용 0원**: Supabase 무료 플랜의 Postgres 한 표를 씁니다. 로그인하지 않으면 지금과 100% 같이 동작합니다.

### 12-1. 설계 원칙

| 원칙 | 내용 |
|---|---|
| **선택 기능** | `sync_config.json` 이 비어 있으면 **계정 UI·네트워크 요청이 0**. 로그인 전에도 요청 0 (localStorage 만 사용) |
| **단일 HTML 유지** | 외부 SDK 없이 **`window.fetch`** 로 Supabase REST/auth 를 직접 호출 (테스트에서 mock 가능) |
| **순수/불순 분리** | 병합·검증은 `src/sync_core.js`(순수 함수·테스트 85개), 네트워크·토큰·UI 는 `src/sync.js` |
| **양쪽 페이지 공용** | `app.js` 와 `glossary.js` 가 같은 `sync.js` 를 씀 (플래시카드 진도 `dnd_tt1_vocab` 도 동기화) |
| **데이터 보존** | 병합은 항상 "잃지 않는 방향"(합집합·큰 값) → 어느 기기에서 무엇을 하든 합쳐진다 |
| **기록 안전** | 문항 id·세트 id·**기존 저장 키 이름 불변**. 새 키(`dnd_tt1_auth`, `dnd_tt1_owner`)만 추가 |

### 12-2. 로그인 (닉네임 + 비밀번호)

- 닉네임은 `^[a-z0-9_]{3,20}$` (대문자는 소문자로 정규화), 비밀번호 8자 이상.
- 내부적으로 **`<닉네임>@<도메인>`** 형태의 주소로 Supabase 이메일 가입 → 사용자는 닉네임만 기억하면 됩니다.
- **이메일 인증(Confirm email)을 꺼야** 가입 즉시 세션이 생깁니다(SYNC_SETUP.md 2단계).
- 도메인이 서버에서 거부되면 **후보 도메인을 순서대로** 시도합니다(`syncEmailDomains`: 설정값 → `mystudyroom.app` → `studysync.app` → `dndstudy.app`).
  로그인도 같은 목록을 순서대로 시도하므로, 어느 도메인으로 만들어졌든 찾아갑니다.
- 비밀번호 찾기 없음 → 가입 화면에 **"비밀번호를 잊으면 복구할 수 없어요"** 안내.
- 토큰은 **`dnd_tt1_auth`**(access/refresh/만료/user_id/닉네임). 만료되면 refresh, 실패하면 **조용히 로그아웃**(기록은 유지).

### 12-3. 저장 형태와 병합 규칙 (`sync_core.js`, 전부 멱등)

서버 `user_state.data` (jsonb):

```json
{ "v": 1,
  "keys": { "dnd_tt1_v1": {...}, "dnd_tt1_vocab": { "known": {...} } },
  "updatedAt": "2026-11-03T10:00:00.000Z" }
```
(`dnd_tt1_lang`·`dnd_tt1_timer` 는 기기별 설정 → 동기화하지 않음)

| 필드 | 규칙 |
|---|---|
| `history[]` | **합집합**. 새 기록은 `id`, 옛 기록은 `mk\|mode\|total\|max\|pass\|date` 복합 키로 중복 제거 → **정렬**(`at` 있으면 그 값, 없으면 `MM/DD HH:mm`을 올해로 가정 → 옛 기록이 앞) → **최근 50개**만 |
| `wrong{}` | 문항 id 별 **큰 값** |
| `best` / `randBest` / `randCount` | **큰 값** (`rand10Best` 레거시는 `randBest` 로 흡수) |
| `mockBest{}` | 세트 id 별 **큰 값** |
| `known{}` (플래시카드) | **합집합** |

- **멱등성**: `merge(x, merge(x, y)) === merge(x, y)` — 테스트로 강제(`sync_tests` Y9).
- ⚠️ **알려진 한계**: "정답 처리로 지운 오답"과 "몰라요로 되돌린 단어"는 다음 동기화에서 되살아날 수 있습니다(합집합·큰 값 규칙의 필연적 결과).
  → 확실히 비우려면 **학습 기록 초기화 / 진행 초기화** 버튼을 쓰세요(로컬 + **서버 사본까지** 함께 비움).
- 옛 기록에는 연도가 없어 "오래된 기록"으로 취급됩니다(정렬 한계).

### 12-3-b. 서버 콘텐츠 게이트 (문제은행·용어집 · 배포본 전용)

개인 기록(`user_state`)과 별개로, **문제·모의고사·용어집**은 배포본에서 HTML 에 임베드하지 않고
Supabase **`exam_content`**(id = `questions` | `mocks` | `glossary`, `data` jsonb)에서 **로그인 후** 받습니다.
- **RLS**: `lower(auth.jwt()->>'email') like '%@inf.elte.hu'` 인 사용자만 SELECT (쓰기는 service role 키로만).
- 배포본은 `window.__CONTENT_SERVER__ = true`(빌드가 주입) → `sync.js` 가 `window.__GATED__` 를 세워 페이지 자동 부팅을 막고,
  로그인 세션이 있으면 `GET /rest/v1/exam_content` → `__QUESTION_DATA__`/`__MOCK_DATA__`/`__GLOSSARY__` 를 채운 뒤 부팅합니다.
  로그인 전이면 카탈로그+로그인 UI 만 부팅(문제 데이터 0바이트)하고, 로그인 시 `afterLogin` 이 콘텐츠를 받아 다시 그립니다.
- 업로드: `tools/push_content.py`(관리자 키), 스키마: `supabase/schema_content.sql`. `SYNC_SETUP.md §8-5` 참고.
- **오프라인 단일파일**(`TheoryTest1_PracticeExam.html`, `TheoryTest1_Glossary.html`)은 데이터를 그대로 임베드(인터넷 없이 열람용).

### 12-4. 동기화 시점 (UI 를 막지 않음)

| 시점 | 동작 |
|---|---|
| 로그인·가입 직후 | `GET user_state` → 병합 → 로컬 저장 → `POST`(upsert) — **전체 동기화** |
| 기록 변경 | `saveStore()`/`saveSet()` → **3초 디바운스** 후 전체 동기화 |
| 시험 제출 직후 | 즉시 1회 |
| `visibilitychange(hidden)` / `pagehide` / `online` | **`POST`만** `keepalive:true` (병합 생략 — 시간이 없으므로) |
| 초기화 버튼 | `GET` → **그 키만** 비워서 `POST` (다른 키·다른 기기 기록은 보존) |
| 실패(오프라인·401·서버 일시정지) | 앱은 그대로 동작. 상태만 표시(`오프라인 (이 기기에 저장 중)`), 다음 변경/online 에 재시도 |

- **항상 GET→병합→POST** 인 이유: Supabase upsert 는 **행 전체 교체**라서, 그냥 올리면 다른 기기 기록을 덮어씁니다.
  큰 값/합집합 병합은 **단조 증가**라서 한 번 덮여도 다음 동기화에서 **자가치유**됩니다.
- 동기화는 **약속 체인(queue)** 으로 직렬화 (`busy` 플래그를 쓰지 않아 새는 일이 없음).

### 12-5. REST/auth 엔드포인트 (SDK 없음)

```
POST {url}/auth/v1/signup                                  { email, password }
POST {url}/auth/v1/token?grant_type=password               { email, password }
POST {url}/auth/v1/token?grant_type=refresh_token          { refresh_token }
POST {url}/auth/v1/recover                                 { email }            ← 비밀번호 재설정 메일 발송
PUT  {url}/auth/v1/user                                    { password }         ← 새 비밀번호 저장(재설정 링크 세션)
POST {url}/auth/v1/authorize?provider=…&redirect_to=…                           ← 소셜 로그인
GET  {url}/rest/v1/user_state?select=data,updated_at&limit=1
POST {url}/rest/v1/user_state?on_conflict=user_id          { user_id, data, updated_at }
     Prefer: resolution=merge-duplicates,return=minimal
헤더: apikey: <anonKey>   ·   Authorization: Bearer <access_token>
```

### 12-6. 계정 전환 (기록 섞임 방지)

`dnd_tt1_owner`(마지막 동기화 user_id)와 로그인한 user_id 가 다르고 로컬에 기록이 있으면
**"이 브라우저에는 다른 계정의 기록이 있어요. 지우고 시작할까요?"** 를 묻습니다.
- 확인 → 로컬을 비우고 **서버 기록을 채택**(`replace` 모드)
- 취소 → 두 기록을 **병합**

### 12-7. UI

- 상단 바 **`#acctBox`**: 로그아웃 시 `로그인`(Sign in), 로그인 시 `☁ 닉네임` + 상태 점(초록=동기화됨 / 노랑=동기화 중 / 빨강=오프라인).
  ≤560px 에서는 닉네임 글자만 숨겨 **상단 바 줄바꿈을 막습니다**.
  로그인 상태에서 계정 버튼을 누르면 **프로필 드롭다운**(이름 + `Student` · Dashboard · My learning · Account Settings · Log out)이 뜹니다(`#acctBox` 안에 렌더, `position:fixed` 라 좁은 화면의 상단 바 `overflow` 에 잘리지 않음) — `Account Settings` 는 동기화 카드(지금 동기화·로그아웃), `Dashboard` 는 인프런풍 **대시보드 화면**(`#dashboard`), `My learning` 은 과목 카탈로그로 이동, **바깥 클릭/Esc 로 닫힘**. 로그인 전에는 그리지 않습니다.
- **대시보드(인프런풍)**: `Dashboard` 클릭(또는 `#dashboard`) → **넓은 화면에선 왼쪽 보조 내비**(Profile/Dashboard/My learning/Purchases/Storage/My Posts/Account Settings — 미구현 항목은 "준비 중" 토스트, `Account Settings`=동기화 카드, `My learning`=과목 카탈로그), **좁은 화면(≤1080px)에선 내비가 숨고 카드가 폭을 꽉 채웁니다(인프런과 동일)**. 카드는 **한 줄에 하나씩 세로로 쌓입니다**: ① 최근 학습(기록 최근 4개, 없으면 `과목 둘러보기`) ② 주간 학습(기어 · 주차 `‹ ›` · 요일 원 · 완료/시간/메모) ③ **연간 학습** GitHub풍 **히트맵**(날짜별 학습량 5단계 색 · 월/요일 라벨 · 범례 · 완료/시간/메모/완료 과목) ④ 스킬 태그(빈 상태 · 장식 라인). **수료증(Certification) 카드는 없습니다.** 데이터는 `store.history` 의 `at` 타임스탬프에서 계산(학습 시간·메모는 추적하지 않아 0). 상단은 라이브러리와 같은 헤더(로고 + 🌐 + 계정). (`src/app.js` `renderDashboard`, `.dash*` 스타일 `src/theme.css`, `body.view-dashboard`).
- **아이디 = 이메일 또는 닉네임** (`CORE.validateId`): 입력에 `@` 가 있으면 **실제 이메일 그대로**, 없으면 **닉네임**(영문 소문자·숫자·밑줄)으로 `<닉네임>@도메인` 을 만듭니다 → **기존 닉네임 계정과 호환**.
  가입 시 Supabase **Confirm email** 이 켜져 있으면(세션 없이 user 만 오면) **인증번호 6자리 입력 화면**을 띄웁니다(`reason: "confirm"` → `sync.otp*` 문자열). 메일 템플릿에 `{{ .Token }}`(6자리)을 넣어 두면 사용자가 메일의 코드를 입력하고, 앱은 `POST /auth/v1/verify {type:"email", email, token}` 으로 로그인합니다(실패 시 `type:"signup"` 로 한 번 재시도). 이는 **매직링크가 루트(`Site URL`)로 떨어지는 Supabase 알려진 버그(auth#2634)** 를 피하려고 **링크 대신 코드**를 쓰는 방식입니다. 로그인 시에도 미확인 계정이면 같은 화면으로 안내하고, `POST /auth/v1/resend` 로 코드를 다시 보냅니다. `비밀번호 찾기` → `POST /recover` 로 **재설정 코드(6자리)** 메일, 코드 입력 시 `POST /auth/v1/verify {type:"recovery"}` 로 세션을 받아 **새 비밀번호** 창(`PUT /user`). (가입·재설정 모두 **링크 없이 코드** 방식 — 외부 링크는 M365가 격리) 메일 발송은 SMTP 필요(`SYNC_SETUP.md §8-2`).
- 모달 하나(검증 오류·안내문·`in`/`up`/`reset`/`newpw`). `#syncHost` 에 렌더되며 배경 클릭/닫기(우상단 ✕)로 닫힘. **배포본에서는 가입(`up`)만 별도 페이지로 빠집니다 — 아래 12-7-b**.
  **인프런 톤으로 리디자인**: 창 상단 가운데 **로고(파비콘 + 초록 `StudyRoom` 워드마크)**, 라벨 없이 placeholder 입력(**아이디(이메일 또는 닉네임)**·비밀번호) + 비밀번호 **눈 아이콘**,
  꽉 찬 **초록(#00c471) 버튼**, 버튼 아래 **`Find my password | Sign up | Find my ID (email)` 링크 줄**, 그 아래 **ELTE 안내 한 줄**(회색·배경 없음) — 설정에 소셜 제공자를 적었을 때만 그 아래 `— 소셜 로그인 —` 구분선과 **각 서비스 공식 로고**(구글 4색 G·카카오·깃허브·애플·MS 4색) 버튼.
  **자리글씨는 짧게**(`Email` / `Password`) — 인프런 로그인 창과 같은 결이라 긴 예시·`8+` 안내를 넣지 않습니다(오류는 버튼 위 `syncErr` 줄에서 그대로 알려 줌). 닉네임 시절의 안내문(`sync.warn`/`.syncNote`)은 없앴습니다.
  **모드 4가지**: `in`(로그인) · `up`(가입 — 창 안 탭 · **`signup.html` 이 있는 배포본에서는 그 페이지로 이동**) · `reset`(비밀번호 찾기 = 이메일 입력 → 6자리 코드 보내기) · `newpw`(코드 확인 뒤 새 비밀번호).
  로그인 상태에서는 같은 모달이 `☁ 닉네임 · 상태` + `지금 동기화 / 로그아웃` 카드로 바뀝니다.
- **소셜 로그인(선택)** — `sync_config.json` 의 `oauth` 목록에 적은 제공자만 버튼이 그려집니다(허용 이름 `google/kakao/github/apple`, 빌드 `sync_build.py` 가 목록 밖은 버림. 비어 있으면 영역 자체가 없음 → 요청 0). **현재 `["google"]` 켜짐**.
  버튼 → `…/auth/v1/authorize?provider=…&redirect_to=현재주소` 로 이동, 복귀 시 주소 해시(`#access_token=…`)를
  읽어 **닉네임 로그인과 같은 세션**(`user_id` = JWT `sub`, 닉네임은 메타데이터/이메일에서 안전한 문자로 정리)으로 저장하고 해시를 지웁니다.
  켜는 방법은 `SYNC_SETUP.md §8-1` (Google/Kakao 개발자 콘솔 + Supabase Providers).
- 문자열은 앱 `i18n.js` 와 용어집 `STR` **양쪽에 ko/en** 으로 있고, 각 페이지가 `sync.setStrings()` 로 넘깁니다(언어 전환 시 다시 넘김).

### 12-7-b. 가입 페이지 (`site/signup.html`) — 로그인 창과 같은 인프런 톤의 **전체 페이지**

가입만은 모달이 아니라 **별도 페이지**로 뺐습니다(인프런의 `/signup` 과 같은 결).

```
[로그인 창] 가입 클릭 → signup.html
   Email / Password / Confirm password  ── Next ──▶ POST /auth/v1/signup (확인 메일)
   ──▶ 6자리 코드 입력 ──▶ POST /auth/v1/verify {type:"email"} ──▶ 로그인 저장 ──▶ index.html
```

- **빌드**: `build_site.py` 가 `signup_template.html` + `src/signup.js` + `src/signup.css` 에 `theme.css`·`i18n.js`·`sync_config`·`sync_core.js`·`sync.js` 를 합쳐 생성(`<!--SIGNUP_FLAG-->` 자리표시자로 `window.__SIGNUP_URL__ = "signup.html"` 을 index/glossary 에 주입).
- **화면**: 가운데 로고(파비콘 + 초록 `StudyRoom`) → `Sign up` 제목 + `ELTE students only …` 설명 → **왼쪽 라벨 + 회색 자리글씨 입력**(`Enter email` / `Enter password (8+ characters)` / `Enter password again`) + **비밀번호 눈 아이콘 2개** → 꽉 찬 초록 **`Next`** → 아래 `Already have an account? **Sign in**`(`index.html` 로).
- **코드 화면**: `Enter the 6-digit code` + 받은 이메일 + 숫자 6칸 + `Verify` / `Resend code` / `Change email` / 안내 줄.
- **검증은 서버 왕복 없이 먼저**: `SyncCore.validateSignup(이메일, signupDomains)` (`@inf.elte.hu` 아니면 거부) → 8자 미만 거부 → 비밀번호 확인 불일치 거부.
- **통신은 `window.__sync` 만** 사용(`signUp` · `verifyOtp` · `resendOtp`) — `src/signup.js` 는 fetch 를 직접 부르지 않습니다. 문구는 `i18n.js` 의 `signup.*`(ko/en) · 로그인 창 문구와 같은 `t()`.
- **이동**: 완료 화면(`suDone` 체크)을 `REDIRECT_MS`(900ms) 보여 준 뒤 `index.html` — 테스트 훅 `__signup._lastRedirect()`.
- **폴백**: `window.__SIGNUP_URL__` 이 없는 오프라인 단일파일(`TheoryTest1_PracticeExam.html`)에서는 로그인 창의 `Sign up` 이 **창 안 `up` 탭**으로 바뀝니다(`sync.js` `goSignup`).

### 12-8. 빌드/검증

- `sync_build.py` 가 `sync_config.json` 을 읽어 `window.__SYNC_CONFIG__` 로 주입하고, `sync_core.js`·`sync.js` 를 `<script id="sync-core|sync-logic">` 로 넣습니다(두 템플릿 모두).
- **공개 키 검증**: anonKey 가 공개 키인지 확인하고 아니면 **빌드 중단**(관리자 키 유입 차단).
  - 새 형식 `sb_secret_…` → prefix 로 즉시 거부. `sb_publishable_…` → 통과.
  - 예전 형식(legacy JWT) → payload 의 `role` 이 `anon` 이 아니면 거부.
- `build_site.py` 안전 점검에 `service_role`(예전 형식) · `sb_secret_`(새 형식) 문자열 검사 추가.
- 사용자 확인 도구: **`python tools/check_sync.py`** (가입 → 로그인 → 쓰기 → 읽기, 도메인 거부 여부를 실제 응답으로 확인 · 키 형식도 표시).
- keepalive(선택): `site/.github/workflows/keepalive.yml` — 하루 1회 REST ping(`apikey` 헤더만 → 새 키/예전 키 모두 호환, secrets 없으면 조용히 skip).

### 12-9. 신기능 안내 창 (자동 공지 · 모던 시트)

새 기능(동기화)을 친구들이 **스스로 발견하지 못하는 문제**를 없애기 위해, 첫 방문에 **안내 시트**가 자동으로 뜹니다.
(문단을 줄줄이 늘어놓던 예전 디자인 → **훑어보기만 해도 이해되는 카드**로 교체)

- **뜨는 조건**: 설정이 켜져 있고(`configured`) · 로그인 전이고 · `dnd_tt1_notice` 의 `hideUntil` 기한이 지났을 때.
- **구성**(`sync.js` `noticeHtml()`): 초록 배지(별 아이콘) → `새로운 기능 / What's new` 킥커 → **큰 제목** → 한 줄 설명(굵은 ELTE 이메일) →
  **아이콘 항목 3개**(① 클라우드+↑ *기록이 그대로 따라옵니다* ② 기기 두 대 *합쳐지고 덮어쓰지 않습니다* ③ 키패드 *가입은 6자리 코드*) →
  회색 한 줄 팁 → 체크박스 → 꽉 찬 초록 버튼. 우상단 **✕**(=닫기).
- **아이콘은 이모지 대신 최소 SVG**(`NOTICE_SVG`: `spark`/`sync`/`merge`/`code`) — 다른 화면과 같은 톤.
- **닫는 방법 3가지**: `Got it` · 우상단 ✕ · 바깥(어두운 배경) 클릭.
- **창 크기 · 스크롤 (2026-11-08 보정)** — 창이 화면을 덮거나 스크롤 막대가 두 개 생기지 않게:
  - 시트는 **폭 424px**(로그인 창과 동일) · 여백 `20px 22px` · 아이콘 30px · 본문 12~13px 로 **한 화면 안에 들어오게** 줄였습니다(1440×900 기준 높이 554px).
  - 창(=`.syncCard`)은 `max-height:calc(100vh - 32px)` — 화면이 낮으면 **창 안에서만** 스크롤되고, 체크박스·`Got it` 은 `.noticeFoot` 으로 **아래에 고정**되어 절대 가려지지 않습니다.
  - 시트가 떠 있는 동안 **배경 페이지는 잠깁니다**(`sync.js` `lockPage()` → `body.sheetOpen{overflow:hidden}` + 사라진 스크롤 막대 폭만큼 `padding-right` 보정 → 레이아웃이 튀지 않음).
    로그인 창을 열 때도 동일 → **어느 상황에도 스크롤 막대는 항상 하나**입니다. 닫으면(`Got it`/✕/바깥 클릭/로그인) 잠금이 풀리고 스크롤 위치는 그대로 유지됩니다(실측: 막대 사라짐/복귀 + 스크롤 위치 보존).
- **"Don't show this again for a week" 체크박스**
  - 체크하고 닫으면 → `dnd_tt1_notice = {hideUntil: now+7일}` 저장 → **7일간 안 뜸**
  - 체크 없이 닫으면 → 저장하지 않음 → **다음 방문에 다시 뜸** (이번 방문 중에는 다시 안 뜸)
- **로그인하면 자동으로 닫힘**(`afterLogin`) · 안내 창에서 **네트워크 요청은 0**(`sync_status` 도 건드리지 않음).
- 문구는 `sync.js` 의 `NOTICE_TEXT`(ko/en, `title` · `lead` · `items[{icon,title,text}]` · `tip` · `hide` · `ok`)에서 **한 곳만** 고치면 됩니다.
- 순수 판정 로직은 `sync_core.js` 의 `noticeDue()` / `noticeHideUntil()` (기본 `NOTICE_DAYS = 7`).
- 새 키는 **`dnd_tt1_notice` 하나만** 추가 — 기존 기록 키는 그대로.

### 12-10. 관련 테스트

| 테스트 | 내용 |
|---|---|
| `sync_tests.js` (94) | 병합 각 필드 · 멱등성 · 빈 서버/빈 로컬 · 닉네임→이메일 · 페이로드 · 계정 전환 판단 · **공지 기한(noticeDue/noticeHideUntil)** |
| `smoke_dom.js` S20 (57) | 설정 없음 → UI 숨김·요청 0 / 가짜 fetch 로 로그인→GET→병합→POST / 헤더(apikey·Bearer·merge-duplicates) / 실패 내성 / 디바운스 / keepalive flush / 초기화 → 서버 비움 / 계정 전환 / **공지 자동 표시·모던 시트 구조(아이콘 항목 3개·✕ 닫기)·체크 저장·기한·로그인 시 닫힘·본문/하단 분리(noticeFoot)** · **시트가 떠 있는 동안 배경 스크롤 잠금(sheetOpen) 해제 확인** |
| `run_tests.js` 18 (26) | 스크립트 주입 · **주입 설정 = sync_config.json**(켜짐/꺼짐 모두) · 계정/모달 자리 · **공지 자리·문구·모던 시트(배지·아이콘 항목·팁·✕)와 스타일** · **창 높이 제한(`max-height:calc(100vh - 32px)`) + 배경 스크롤 잠금(`body.sheetOpen`)** · **admin 키 0**(service_role·sb_secret_) · 키 이름 불변 · 동기화 문자열 한/영 존재 |
| `site_tests.js` P15 (15) | 배포본: 스크립트 3종 · 주입 설정 일치 · 켜짐/꺼짐 판정·계정 UI · **공지 자동 표시** · 로그인 전 요청 0 · admin 키 0 · 용어집도 동일 |
| `glossary_tests.js` G8 (7) | 용어집: 모듈 로드 · 설정 없으면 요청 0 · 문자열 전달 · 동기화 반영 시 화면 갱신 |
| `signup_tests.js` (46) | **가입 페이지**: 배포본 구성 · 입력 검증(`@inf.elte.hu`/8자/불일치) · 가입→6자리 코드→`index.html` 이동 · 다시 보내기 · 잘못된 코드 · **로그인 창 자리글씨(`Email`/`Password`)·ELTE 안내 위치·가입 링크(주소 없으면 창 안 탭)** |
| `smoke_dom.js` **S21** (22) | 라이브러리/게이트: 계정 꺼짐 → 게이트 없음·사이드바 유지 / 켜짐+로그인 전 → 라이브러리·검색·학기 탭·카드·로그인 필요 배지·사이드바 숨김·요청 0 / 로그인 후 → 사이드바·입장·해시 이동·로그아웃 / 보류 목적지 입장 |


### 12-11. 라이브러리(과목 카탈로그) + 로그인 게이트

계정 기능이 **켜져 있을 때만** 동작한다(꺼져 있으면 코드가 있어도 게이트가 false → 예전 동작 100% 유지).

- **첫 화면이 `#library`** — 좌상단 **파비콘(`assets/favicon.ico`) + `StudyRoom`**, 오른쪽 🌐 언어 + `Sign in`
  (로그인하면 닉네임+상태점). 학기 탭 = `CURRICULUM` 의 학기, 카드 = 과목(대표사진 + 한 줄 설명).
- **과목 카드 클릭 → 로그인 창** — 로그인 전에는 `PENDING_COURSE` 에 목적지를 저장하고 로그인 창을 띄운다.
  로그인하면 `__appAuthChanged(true)`(sync.js 가 호출) → 사이드바가 나타나고 **보류한 과목으로 입장**한다.
- **사이드바는 로그인 후에만** — 로그인 전에는 `body.sbLocked` 로 `.sidebar` 를 감춘다(자기 기록·진도는 로그인 후에만).
- **부팅 게이트** — `syncOn()` 이면 기본 화면이 라이브러리이고, 로그인 전에는 `#bank` 같은 해시로도 못 들어간다
  (`go(hv || "library")` / `locked() ? "library"`). 계정이 꺼져 있으면 예전처럼 `go(hv || "overview")`.
- **용어집도 같은 게이트** — 로그인 전에는 `.wrap` 내용을 감추고 `#glLock` 패널(로그인 버튼)을 보여 준다.
- **게이트는 `go()` 자체를 막지 않는다** — 프로그램적 이동(테스트·해시)은 그대로 동작하고, 차단은 **부팅 + 카드 클릭**에서만.
  그래야 900+ 기존 테스트가 계정 설정과 무관하게 유지된다.
- **이미지** — `assets/**` 를 `build_site.py` 가 `site/assets/` 로 복사(없으면 이니셜 카드·파비콘은 깨져도 무해).
  PDF/docx 는 복사 금지. `assets/favicon.ico` 는 상단 로고 + `<link rel="icon">`(탭 아이콘) 양쪽에 쓰인다.
- **디자인 (인프런 배치)** — 흰 바탕 + 헤어라인, 그라디언트 없음, 이모지 대신 **최소 SVG**(지구본·돋보기·자물쇠·화살표).
  **브랜드 초록 `#00c471`** 을 앱 전체 포인트로 쓰고(`--brand`), 워드마크 `StudyRoom` 은
  **Montserrat 700 + #00C471**(`.studyroom-logo-text`, 폰트 로드 실패 시 Noto Sans/시스템 폰트로 자동 폴백),
  왼쪽에 파비콘(`assets/favicon.ico`, 탭 아이콘도 동일). **주요 버튼(개요의 티어/랜덤/모의고사 `Start`·
  문제은행·퀴즈 제출 등 `.btn.primary`)은 모두 브랜드 초록**, 검색 버튼·로그인 버튼·`View all` 호버·포커스 링도 초록입니다.
  (초록은 버튼/CTA용이고, 링크·활성 내비·포커스 링 텍스트색은 기존 파랑 `--primary` 토큰을 유지합니다.)
- **레이아웃 (inflearn 실측값)** — 검색 알약 = **높이 58px · 폭 520px**(테두리 `#dee2e6` · `border-radius:50px` ·
  안쪽 `padding:0 8px` · `gap:10px` · **그림자 없음**), 안에 **42px 초록 원형 버튼**(`#00c471` · 돋보기 16px · 오른쪽 9px 여백)과
  **36px 입력**(16px · 자리글씨 `#868e96`). 좁은 화면(≤560px)은 **54px 알약 + 40px 버튼**으로 줄인다.
  헤더는 **높이 65px**(`padding:11px 28px` · 헤어라인 `#f2f4f6`), 오른쪽은 **지구본 42px 원**(`rgba(135,143,151,.1)` · 아이콘 16px · `#495057`)과
  **`Sign in` 회색 알약**(42px · `border-radius:32px` · 좌우 22px · 16px/600 · 같은 회색 = 인프런 `Button light` 그대로) —
  인프런 헤더(42px 원 · 96px 알약)와 실측값이 일치합니다.
  콘텐츠는 `max-width:none` + `padding:10px 28px 80px` 로 **상단 로고와 같은 왼쪽 선**에서 시작하고, 안쪽 줄
  (제목·탭 밑줄·카드 행·`View all`/화살표)만 `max-width:1460px` 로 묶습니다 → 넓은 화면에서도 **가운데로 몰리지 않습니다**.
  카드는 항상 **218px 고정 · 왼쪽부터**(전체 보기도 `repeat(auto-fill,218px)`), 학기 탭의 **첫 탭은 왼쪽 패딩 0** 이라 제목과 정확히 정렬됩니다.
  ① 검색 = 흰 알약(테두리만 · 그림자 없음) 안에 오른쪽 **동그란 검색 버튼**, 문구는 `Search courses`/`과목 검색`만.
  ② 섹션 제목 `학기별 과목`(22px/700) + 오른쪽 `View all ›`(누르면 **모든 학기 한 번에 보기** 그리드로 전환, 다시 누르면 학기별).
  ③ 학기 탭 = 15px, 활성 탭은 굵게 + **어두운 2px 밑줄**, 줄 오른쪽 끝에 원형 `›` 스크롤 버튼.
  ④ 카드 = **가로 스크롤 행**(`.libRow`, 카드 폭 218px·커버 130px·6px 라운드·헤어라인, 제목 16px/600 2줄 말줄임,
  회색 설명 13px, 학기 + 잠금 알약) + 오른쪽 아래 `‹ ›`(스크롤할 내용이 없으면 자동으로 흐려짐).
  좁은 화면(≤560px)에서는 카드 158px 로 줄인다.
  로그인 전 헤더 오른쪽은 **지구본 + `Sign in` 두 개만** — 언어 세그먼트(한국어/English)·용어집·홈 링크는
  라이브러리 화면에서 `body.view-library` 로 숨긴다(과목 안에서는 그대로 보임).
- **창/시트 한 겹 (2026-11-08 보정)** — 로그인 창·공지 시트는 항상 **화면 높이 − 32px 안**에 들어가고(넘치면 창 안에서만 스크롤),
  떠 있는 동안 `body.sheetOpen` 로 **배경 스크롤을 잠급니다** → 페이지 스크롤 막대 + 창 스크롤 막대가 **겹쳐 보이는 일이 없습니다**
  (실측: 1280×700 → 시트 554px·배경 스크롤 `hidden`·뒤 스크롤 위치 94 그대로 / 1100×430 → 창 398px·`Got it` 항상 보임).
- 과목/학기 추가는 `src/curriculum.js` 한 파일만 수정(+ 새 키 없음).

> ⚠️ **알려진 한계 (과목이 2개 이상이 될 때)**: 화면 id(`#overview`/`#bank`…)는 **과목에 묶여 있지 않다**.
> 지금은 모든 항목이 DND 하나뿐이라 문제가 없지만, 두 번째 과목에 같은 id(`overview` 등)를 쓰면
> 라우팅·브레드크럼이 어느 과목인지 구분하지 못한다.
> → 그때는 주소를 `#<과목id>/<화면id>` 형태로 바꾸고(뒤로호환: 과목 없는 해시는 DND 로),
> `viewIds()`/`viewFromHash()`/`go()`/`currentCourse()` 를 과목 인자로 확장하면 된다(기존 키·기록은 그대로).

### 12-12. 사용법 (친구들에게 알려 줄 내용)

1. 주소를 열면 **라이브러리(과목 카탈로그)** 가 보입니다.
2. 상단 오른쪽 **`Sign in`** → **가입** 탭에서 닉네임(영문 소문자·숫자·밑줄 3~20자) + 비밀번호(8자 이상).
3. **로그인하면** 왼쪽 사이드바가 나타나고 자기 기록·진도를 볼 수 있습니다.
4. **과목 카드**를 누르면 그 과목의 학습 화면으로 들어갑니다(로그인 전에는 로그인 창이 뜹니다).
5. 학기 탭으로 학기를 고르고, 검색창에 과목 이름을 쳐서 찾을 수 있습니다. 카드 줄은 **옆으로 넘겨 볼 수 있고**(`‹ ›`),
   오른쪽 위 **`View all`** 을 누르면 모든 학기 과목을 한 번에(그리드) 봅니다.
6. 상단 오른쪽 🌐 로 한국어/English 를 바꾸고, 왼쪽 로고(파비콘)를 누르면 과목 목록으로 돌아옵니다.

> ⚠️ 이메일 인증을 쓰지 않으므로 **비밀번호를 잊으면 복구할 수 없습니다** — 닉네임을 새로 만들면 됩니다.
> 대표 사진은 `assets/courses/<과목id>.jpg`, 내 얼굴 사진은 `assets/avatar.jpg`, 사이트 로고는 `assets/favicon.ico` 에
> 넣고 다시 빌드하면 반영됩니다.

---

## 부록 A. 한 줄 요약 (spiel)

> 교수님 DOCX·강의 슬라이드·연습지에서 뽑은 **317문항**에 "어디서 나왔는지(출처 그룹)"와 "얼마나 중요한지(티어 A/B/C)"를 붙여 두고, **티어 A→B 순서로**, **랜덤으로**, **틀린 것만**, **그룹별로** 골라 풀 수 있는 개인용 학습 허브. 모든 페이지가 **단일 HTML**이라 오프라인에서도 열리고, 기록은 브라우저에 남으며(원하면 **닉네임 하나로 기기끼리 자동 동기화**), 문항 id 를 절대 바꾸지 않아 기록이 깨지지 않습니다. 빌드는 4단계 파이프라인이고 **1053개 검사**가 내용·UI·배포·동기화·게이트를 지킵니다.

## 부록 B. 빠른 명령 모음

```powershell
# 빌드 (순서 중요)
python build_glossary.py ; python build_mocks.py ; python build_app.py ; python build_site.py

# 데이터 검사
python tools/check_i18n.py ; python tools/check_prompts.py ; python tools/audit_questions.py
python tools/export_all_md.py

# 재분류 (원본 md 수정 후)
python tools/tag_groups.py ; python tools/tag_tiers.py

# 테스트 / 실행 / 배포
RUN_TESTS.bat
START_SERVER.bat                     # http://localhost:8000
python build_mocks.py --help         # (세트 생성 옵션)
cd site ; git add -A ; git commit -m "Update" ; git push
```

