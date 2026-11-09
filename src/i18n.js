/* ===== i18n.js — 한국어/영어 UI 문자열과 언어 상태 =====
   - LANG: "ko" | "en" (localStorage 에 저장)
   - t(key): 현재 언어의 문자열
   - tf(key, ...args): %s 자리를 채운 문자열
   - questionField(q, "prompt"): q.prompt_ko / q.prompt_en 선택
*/
var LANGS = ["ko", "en"];
var LANG = (function () {
  try {
    if (typeof localStorage !== "undefined") {
      var v = localStorage.getItem("dnd_tt1_lang");
      if (LANGS.indexOf(v) !== -1) return v;
    }
  } catch (e) { /* ignore */ }
  return "en";          /* 기본 언어 = 영어 (저장된 설정이 없을 때) */
})();

function setLang(v) {
  if (LANGS.indexOf(v) === -1) return;
  LANG = v;
  try { localStorage.setItem("dnd_tt1_lang", v); } catch (e) { /* ignore */ }
  if (typeof document !== "undefined" && document.documentElement) document.documentElement.lang = v;
}

var I18N = {
  /* ---------- 상단 바 / 공통 ---------- */
  "nav.mock":      { ko: "모의고사", en: "Mock Exams" },
  "nav.glossary":  { ko: "용어집", en: "Glossary" },
  "nav.exit":      { ko: "나가기", en: "Exit" },
  "nav.home":      { ko: "홈", en: "Home" },
  "nav.langLabel": { ko: "언어", en: "Language" },
  "nav.menu":      { ko: "메뉴", en: "Menu" },
  "footer":        { ko: "",
                     en: "" },

  /* ---------- 사이드바 (학기 / 과목) ---------- */
  "sb.brand":      { ko: "My Study Room", en: "My Study Room" },
  "sb.soon":       { ko: "다음 학기 준비 중 — 과목이 추가될 예정입니다", en: "Coming soon — courses will be added here" },
  "sb.progress":   { ko: "이 과목 진행 상황", en: "Progress in this course" },
  "sb.best":       { ko: "최고 점수", en: "Best score" },
  "sb.taken":      { ko: "응시한 세트", en: "Sets taken" },
  "sb.wrong":      { ko: "저장된 오답", en: "Saved wrong" },

  /* ---------- 과목 단원(섹션): 이론1 · 이론2 · 코딩 · 오럴 ---------- */
  "sec.title":     { ko: "단원", en: "Sections" },
  "sec.soon":      { ko: "준비 중", en: "Soon" },
  "sec.soonTitle": { ko: "아직 준비 중이에요", en: "Coming soon" },
  "sec.soonBody":  { ko: "이 단원은 교수님 자료가 아직 없어요. 자료가 준비되는 대로 여기에 문제·모의고사가 열립니다.",
                     en: "There's no material for this section yet. Questions and mock exams will appear here as soon as the professor's material is ready." },
  /* 시험 범위(스코프) 안내 — 단원 탭 아래 한 줄 */
  "sec.scope.t1":   { ko: "강의 1–6 + NumPy", en: "Lectures 1-6 + NumPy" },
  "sec.scope.t2":   { ko: "강의 7–12", en: "Lectures 7-12" },

  /* ---------- 홈 ---------- */
  "home.grading":        { ko: "채점: ", en: "Grading: " },
  "home.mock.head":      { ko: "모의고사 — 실제 시험 형식 (%s문항 / %s분 / 통과 %s점)",
                           en: "Mock exams — real exam format (%s questions / %s min / pass %s)" },
  "home.mock.empty":     { ko: "모의고사 데이터가 없습니다.", en: "No mock exam data." },
  "home.mock.note":      { ko: "세트 1~%s 은 실전 세트, 이후 세트는 문제은행의 모든 문항을 커버하기 위한 추가·연습 세트입니다.",
                           en: "Sets 1-%s follow the real exam format; the later sets are extra/practice sets that cover every question in the bank." },
  "home.mock.tagReal":   { ko: "실전", en: "Exam" },
  "home.mock.tagExtra":  { ko: "추가", en: "Extra" },
  "home.mock.tagFinal":  { ko: "최종", en: "FINAL" },
  "home.mock.meta":      { ko: "%s문항 · %s분 · 통과 %s점", en: "%s Q · %s min · pass %s" },
  "home.mock.metaOff":   { ko: "%s문항 · 타이머 끔 · 통과 %s점", en: "%s Q · timer off · pass %s" },
  "home.mock.best":      { ko: "최고 %s / %s", en: "Best %s / %s" },
  "home.mock.none":      { ko: "미응시", en: "Not taken" },
  "home.start":          { ko: "시작", en: "Start" },
  "home.practice":       { ko: "연습 모드", en: "Practice modes" },
  "home.mode.exam":      { ko: "실전 모드 (랜덤)", en: "Exam mode (random)" },
  "home.mode.exam.sub":  { ko: "%s문항 · %s분 · NumPy 6문항 자동 구성",
                           en: "%s questions · %s min · 6 NumPy questions included" },
  "home.mode.exam.subT2": { ko: "%s문항 · %s분 · 강의 7 문항에서 자동 구성",
                            en: "%s questions · %s min · drawn from Lecture 7" },
  "mock.mixedL7":        { ko: "7강 %s문항 포함", en: "includes %s Lecture-7 Q" },
  "home.mode.all":       { ko: "전체 연습", en: "Full practice" },
  "home.mode.all.sub":   { ko: "%s문항 · 60분", en: "%s questions · 60 min" },
  "home.mode.wrong":     { ko: "오답 복습", en: "Wrong-answer review" },
  "home.mode.wrong.sub": { ko: "저장된 오답 %s문항", en: "%s saved wrong answers" },
  "home.byLecture":      { ko: "강의별 범위 선택 (해제하면 제외)", en: "Select lectures (uncheck to exclude)" },
  "home.startRange":     { ko: "선택 범위로 시작", en: "Start with selection" },
  "home.selAll":         { ko: "전체 선택", en: "Select all" },
  "home.selNone":        { ko: "전체 해제", en: "Clear all" },
  "home.shufQ":          { ko: "문제 순서 섞기", en: "Shuffle question order" },
  "home.shufO":          { ko: "보기 순서 섞기", en: "Shuffle option order" },
  "home.fixedOrder":     { ko: "보기 순서는 고정입니다 (해설의 A/B/C 표시와 일치)", en: "Option order is fixed (so the A/B/C labels in the explanations match)" },
  "home.records":        { ko: "기록", en: "Records" },
  "home.best":           { ko: "최고 점수", en: "Best score" },
  "home.savedWrong":     { ko: "저장된 오답", en: "Saved wrong" },
  "home.mocksTaken":     { ko: "응시한 모의고사", en: "Mocks taken" },
  "home.reset":          { ko: "기록 초기화", en: "Reset records" },
  "home.th.date":        { ko: "날짜", en: "Date" },
  "home.th.mode":        { ko: "모드", en: "Mode" },
  "home.th.score":       { ko: "점수", en: "Score" },
  "home.th.result":      { ko: "결과", en: "Result" },
  "home.noRecords":      { ko: "기록이 없습니다.", en: "No records yet." },
  "home.howto":          { ko: "응시 방법", en: "How to take the test" },
  "alert.minLecture":    { ko: "최소 3문항 이상이 되도록 강의를 선택하세요.",
                           en: "Select lectures so that at least 3 questions are included." },
  "alert.confirmWrongClear": { ko: "오답 목록을 모두 비울까요?", en: "Clear all saved wrong answers?" },
  "alert.confirmReset":  { ko: "기록과 오답노트를 모두 지울까요?", en: "Delete all records and the wrong-answer list?" },
  "alert.noMock":        { ko: "모의고사 데이터를 찾을 수 없습니다.", en: "Mock exam data was not found." },

  /* ---------- 모드 이름 ---------- */
  "mode.exam":  { ko: "실전 모드", en: "Exam mode" },
  "mode.all":   { ko: "전체 연습", en: "Full practice" },
  "mode.wrong": { ko: "오답 복습", en: "Wrong-answer review" },
  "mode.range": { ko: "범위 연습", en: "Range practice" },
  "mode.one":   { ko: "문항 연습", en: "Single question" },
  "mode.random": { ko: "랜덤 출제", en: "Random draw" },
  "mode.untimed": { ko: "무제한", en: "no time limit" },
  "mode.free":    { ko: "무제한", en: "untimed" }
};

var I18N2 = {
  /* ---------- 홈: 응시 방법 안내문 ---------- */
  "home.howto.body": {
    ko: "1. 모의고사 세트의 <b>시작</b>을 누르면 %s분 타이머가 시작됩니다.<br>" +
        "2. 보기를 클릭하거나 <b>1~5</b> 키로 선택합니다. (여러 개 선택 가능)<br>" +
        "3. <b>저장 후 다음</b> 또는 <b>Enter</b> 로 다음 문항, <b>&larr;/&rarr;</b> 로 이동합니다.<br>" +
        "4. <b>검토 표시</b> / <b>북마크</b> 로 나중에 볼 문항을 표시합니다.<br>" +
        "5. 오른쪽 <b>제출 및 검토</b> 를 누르면 채점되고 문항별 해설이 표시됩니다.<br>" +
        "6. 확실히 참인 보기만 골라도 실수 1개 = 0.5점이 보장됩니다.<br>" +
        "7. <b>보기 순서는 고정</b>입니다 — 해설의 <b>(A 참)</b> 같은 표시가 실제 보기 문자와 항상 일치합니다.",
    en: "1. Press <b>Start</b> on a mock set and the %s-minute timer begins.<br>" +
        "2. Click an option or press <b>1-5</b> to select it. (multiple choices allowed)<br>" +
        "3. <b>Save &amp; Next</b> or <b>Enter</b> moves forward, <b>&larr;/&rarr;</b> moves around.<br>" +
        "4. Use <b>Mark for review</b> / <b>Bookmark</b> to flag questions to revisit.<br>" +
        "5. Press <b>Submit &amp; Review</b> in the right panel to score and see the explanations.<br>" +
        "6. Selecting only the options you are sure about still earns 0.5 for one mistake.<br>" +
        "7. <b>Option order is fixed</b> — labels such as <b>(A true)</b> in the explanation always match the options you see."
  },

  /* ---------- 새 뷰: 개요 / 모의고사 / 문제은행 / 오답 / 기록 ---------- */
  "ov.questions":  { ko: "문제", en: "Questions" },
  "ov.mocks":      { ko: "모의고사 세트", en: "Mock sets" },
  "ov.words":      { ko: "용어", en: "Words" },
  "ov.best":       { ko: "최고 점수", en: "Best score" },
  "ov.quick":      { ko: "바로 시작", en: "Quick start" },
  "ov.recent":     { ko: "최근 기록", en: "Recent records" },
  "ov.seeAll":     { ko: "전체 기록 보기", en: "See all records" },
  "ov.note":       { ko: "모의고사 1~%s 은 실제 시험 형식(15문항·45분·통과 7점), 이후 세트는 추가·연습 세트로 문제은행 전체를 커버합니다.",
                     en: "Sets 1-%s follow the real exam format (15 questions, 45 min, pass 7); later extra/practice sets cover the whole bank." },
  "ov.noteT2":     { ko: "이론2 세트는 강의 7 문항(10문항 · 30분 · 통과 5점)으로 구성됩니다. 강의 8~12 자료가 오면 같은 방식으로 늘어납니다.",
                     en: "Theory 2 sets use Lecture 7 questions (10 Q · 30 min · pass 5). Lectures 8–12 will be added the same way." },
  "mocks.title":   { ko: "모의고사 — 실제 시험 형식", en: "Mock exams — real exam format" },
  "mocks.final":   { ko: "🎯 최종 모의고사 (시험 전 마지막 점검)", en: "🎯 Final mock exam (last check before the test)" },
  "mocks.finalNote": { ko: "실제 시험과 같은 구성(이론 9문항 + NumPy 6문항, 45분, 통과 7점)의 최종 세트와, 교수님 DOCX 예시 49문항을 순서대로 담은 전체 세트입니다. 노트·코드·계산기 없이 풀고, 끝나기 전에는 해설을 보지 마세요.",
                       en: "Final sets in the real exam layout (9 theory + 6 NumPy questions, 45 min, pass 7) plus one full set holding all 49 professor's DOCX examples in their original order. No notes, no code, no calculator; do not peek at the explanations before you finish." },
  "mocks.titleShort": { ko: "실제 시험 형식", en: "Exam format" },
  "mocks.real":    { ko: "실전 세트 (1~%s)", en: "Exam-format sets (1-%s)" },
  "mocks.extra":   { ko: "추가 · 연습 세트 (%s~%s)", en: "Extra & practice sets (%s-%s)" },
  "mocks.extraN":  { ko: "추가 · 전체 점검 세트 (%s세트)", en: "Extra & full-check sets (%s)" },
  "mocks.t2note":  { ko: "이론 테스트 2 형식(추정): 10문항 · 30분 · 통과 5점 — 교수님 안내(10점 만점 · 통과 5점 · 약 30분, 문항당 3분)에서 계산했습니다.",
                     en: "Theory Test 2 format (estimated): 10 Q · 30 min · pass 5 — derived from the professor's note (10 pts · pass 5 · ~30 min, 3 min each)." },
  "bank.title":    { ko: "문제은행", en: "Question bank" },
  "bank.perLecture": { ko: "강의별 문항 수", en: "Questions per lecture" },
  "bank.list":     { ko: "전체 문항 목록", en: "All questions" },
  "bank.practice": { ko: "풀기", en: "Practice" },
  "bank.answer":   { ko: "정답", en: "Answer" },
  "bank.rangeHint": { ko: "강의를 선택해 범위 연습을 시작할 수 있습니다.", en: "Select lectures and start a range practice." },
  "bank.search":   { ko: "문항 검색 (id · 주제 · 지문)", en: "Search questions (id · topic · text)" },
  "th.lecture":    { ko: "강의", en: "Lecture" },
  "th.count":      { ko: "문항 수", en: "Questions" },
  "th.topic":      { ko: "주제", en: "Topic" },
  "foundCount":    { ko: "%s문항", en: "%s questions" },
  "wrong.title":   { ko: "오답 복습", en: "Wrong-answer review" },
  "wrong.empty":   { ko: "저장된 오답이 없습니다. 모의고사를 풀면 틀린 문항이 자동으로 쌓입니다.",
                     en: "No saved wrong answers yet. Wrong questions are collected automatically when you take a mock exam." },
  "wrong.clear":   { ko: "오답 목록 비우기", en: "Clear the list" },
  "wrong.start":   { ko: "오답만 다시 풀기", en: "Practice wrong answers only" },
  "wrong.count":   { ko: "틀린 횟수", en: "Times wrong" },
  "rec.title":     { ko: "학습 기록", en: "Study records" },
  "rec.attempts":  { ko: "응시 횟수", en: "Attempts" },
  "rec.average":   { ko: "평균 점수", en: "Average score" },
  "rec.mockCount": { ko: "응시한 세트", en: "Sets taken" },
  "rec.summary":   { ko: "세트별 최고 점수", en: "Best score per set" },

  /* ---------- 랜덤 문항 (사이드바 섹션 · 1~100 직접 입력) ---------- */
  "home.mode.rand":     { ko: "🎲 랜덤 문항 (1~100)", en: "🎲 Random draw (1-100)" },
  "home.mode.rand.sub": { ko: "개수(1~100)·범위 직접 선택", en: "pick the count (1-100) & pool" },
  "rand.title":         { ko: "🎲 랜덤 문항 — 개수와 범위를 직접 선택", en: "🎲 Random draw — choose the count and the pool" },
  "rand.sub":           { ko: "문제은행에서 무작위로 뽑아 풉니다. 몇 문항을 풀지 <b>1~100</b> 사이에서 직접 입력하고 <b>확인</b>을 누르세요.",
                          en: "Draws questions at random from the bank. Type how many you want to solve (<b>1-100</b>) and press <b>Confirm</b>." },
  "rand.scope":         { ko: "출제 범위", en: "Question pool" },
  "rand.scope.all":     { ko: "전체 (%s문항)", en: "All (%s questions)" },
  "rand.scope.theory":  { ko: "이론만 (%s문항)", en: "Theory only (%s)" },
  "rand.scope.numpy":   { ko: "NumPy만 (%s문항)", en: "NumPy only (%s)" },
  "rand.count":         { ko: "문항 수 (1~100)", en: "Questions (1-100)" },
  "rand.preset":        { ko: "빠른 선택", en: "Quick pick" },
  "rand.start":         { ko: "확인 · 시작", en: "Confirm & start" },
  "rand.again":         { ko: "다시 뽑기", en: "Draw again" },
  "rand.meta":          { ko: "이 범위에서 최대 %s문항 · 지금 설정이면 %s문항 출제 · 시간 제한을 켜면 %s분",
                          en: "up to %s questions in this pool · %s will be drawn · %s min if timed" },
  "rand.meta2":         { ko: "지금 설정이면 %s문항 출제 · 시간 제한을 켜면 %s분",
                          en: "%s will be drawn · %s min if timed" },
  "rand.hint":          { ko: "기본은 <b>시간 제한 없음</b>(체크하면 시험과 같은 문항당 3분) · 보기 순서는 섞입니다 · 통과 기준은 연습 모드와 같은 60%입니다.",
                          en: "<b>Untimed</b> by default (check the box for exam pace, 3 min per question) · options are shuffled · the pass line is 60%, as in practice mode." },
  "rand.alertCount":    { ko: "문항 수는 1~100 사이의 정수로 입력하세요.", en: "Enter a whole number between 1 and 100." },
  "rand.nLabel":        { ko: "%s문항", en: "%s questions" },
  "rand.nLast":         { ko: "최근 %s문항", en: "last: %s questions" },
  "rand.recent":        { ko: "최근 랜덤 출제", en: "Recent random draws" },
  "rand.none":          { ko: "아직 랜덤 출제 기록이 없습니다.", en: "No random draws yet." },
  "rand.bestLabel":     { ko: "최고 점수", en: "Best score" },
  "rand.pts":           { ko: "점", en: " pts" },

  /* ---------- 응시 화면 ---------- */
  "quiz.sections":          { ko: "섹션", en: "Sections" },
  "quiz.section":           { ko: "Section A", en: "Section A" },
  "quiz.legend.answered":   { ko: "응답함", en: "Answered" },
  "quiz.legend.notans":     { ko: "응답 안 함", en: "Not Answered" },
  "quiz.legend.marked":     { ko: "검토 표시", en: "Marked for review" },
  "quiz.legend.book":       { ko: "북마크", en: "Bookmarked" },
  "quiz.legend.notvisited": { ko: "방문 안 함", en: "Not Visited" },
  "quiz.mark":              { ko: "검토 표시", en: "Mark for review" },
  "quiz.answer":            { ko: "정답: ", en: "Answer: " },
  "quiz.topic":             { ko: "주제:", en: "Topic:" },
  "prio.1":                 { ko: "⭐ 핵심 (DOCX)", en: "⭐ Core (DOCX)" },
  "prio.2":                 { ko: "📘 강의 슬라이드", en: "📘 Lecture slide" },
  "prio.3":                 { ko: "➕ 참고", en: "➕ Extra" },
  "prio.tip":               { ko: "시험 중요도", en: "Exam priority" },
  "prio.note":              { ko: "⭐ 핵심 = 교수님 DOCX NumPy 목록 · 📘 강의 슬라이드(✗ 표시 없음) · ➕ 참고 = 출처 없음 또는 ✗ 시험 제외 슬라이드(L4 s29)",
                             en: "⭐ Core = the professor's DOCX NumPy list · 📘 lecture slides without the ✗ mark · ➕ Extra = not in any source, or only on the ✗ slide (L4 s29)" },

  /* ---------- 출처 그룹 (dnd_question_classification.md) ---------- */
  "grp.title":      { ko: "출처 그룹", en: "Source group" },
  "grp.1-docx":     { ko: "1 DOCX", en: "1 DOCX" },
  "grp.2a-lecture": { ko: "2A 강의 1–6", en: "2A Lecture 1-6" },
  "grp.2b-lecture7": { ko: "강의 7 (이론2)", en: "Lecture 7 (Theory 2)" },
  "grp.3-extra":    { ko: "3 참고", en: "3 Extra" },
  "grp.tip.1":      { ko: "1 DOCX — 교수님 DOCX 의 bullet = 시험 범위", en: "1 DOCX — a bullet of the professor's DOCX = exam scope" },
  "grp.tip.2a":     { ko: "2A 강의 1–6 — ✗ 표시 없는 Lecture 1~6 슬라이드 (DOCX bullet 은 아님)",
                      en: "2A Lecture 1-6 — an unmarked Lecture 1-6 slide (not a DOCX bullet)" },
  "grp.tip.2b":     { ko: "강의 7 — ✗ 표시 없는 Lecture 7 슬라이드 = 이론 테스트 2 범위 (강의 7–12)",
                      en: "Lecture 7 — an unmarked Lecture 7 slide = Theory Test 2 scope (lectures 7–12)" },
  "grp.tip.3":      { ko: "3 참고 — 자료에 없거나 ✗ 시험 제외 슬라이드에만 있는 내용 (참고용)",
                      en: "3 Extra — not in the sources, or only on a ✗ slide (extra study only)" },
  "grp.desc.1":     { ko: "교수님 DOCX 내용 = 시험 범위", en: "Professor's DOCX = exam scope" },
  "grp.desc.2a":    { ko: "Lecture 1–6 슬라이드", en: "Lecture 1-6 slides" },
  "grp.desc.2b":    { ko: "Lecture 7 슬라이드 → 이론 2 범위", en: "Lecture 7 slides → Theory 2 scope" },
  "grp.desc.3":     { ko: "자료에 없는 내용 → 참고만", en: "Not in the sources for extra study" },
  "grp.practice":   { ko: "이 그룹만 풀기", en: "Practice this group" },
  "grp.quick":      { ko: "출처 그룹별 연습", en: "Practice by source group" },
  "grp.noteLabel":  { ko: "메모", en: "Note" },
  "grp.filter":     { ko: "출처 그룹 (해제하면 제외)", en: "Source groups (uncheck to exclude)" },
  "grp.scope":      { ko: "출처 그룹", en: "Source group" },
  "grp.all":        { ko: "그룹 전체", en: "All groups" },
  "grp.meta":       { ko: "1 DOCX = 이론1 시험 범위 · 2A 강의 1–6(이론1) · 2B 강의 7(이론2) · 3 참고(자료에 없음)",
                      en: "1 DOCX = Theory 1 scope · 2A lectures 1-6 (Theory 1) · 2B lecture 7 (Theory 2) · 3 extra (not in the sources)" },

  /* ---------- 중요도 티어 (dnd_likely_exam_questions.md) ---------- */
  "tier.title":     { ko: "중요도", en: "Priority" },
  "tier.A":         { ko: "A", en: "A" },
  "tier.B":         { ko: "B", en: "B" },
  "tier.C":         { ko: "C", en: "C" },
  
  "tier.tip.A":     { ko: "교수님 DOCX bullet 그대로 (가장 먼저 풀 것)",
                      en: "Exactly the professor's DOCX bullets (do these first)" },
  "tier.tip.B":     { ko: "✗ 표시 없는 슬라이드 중 교수님이 강조한 내용 (그다음)",
                      en: "Unmarked slides with content the professor stressed (next)" },
  "tier.tip.C":     { ko: "우선순위 낮음 (같은 주제 반복 · 다른 강의 내용 · Lecture 7 · 그룹 3)",
                      en: "Lower priority (same topics rephrased · other lecture content · Lecture 7 · group 3)" },
  "tier.desc.A":    { ko: "교수님 DOCX 그대로", en: "Exactly the DOCX bullets" },
  "tier.desc.B":    { ko: "교수님이 강조한 슬라이드 내용", en: "Lecture content the professor stressed" },
  
  "tier.desc.C":    { ko: "같은 주제 반복 · 다른 강의 · Lecture 7 · 참고", en: "Same topics · other lectures · Lecture 7 · extra" },
  "tier.quick":     { ko: "중요도 연습 (A 먼저, 그다음 B)", en: "Practice by priority (A first, then B)" },
  "tier.filter":    { ko: "중요도 티어 (해제하면 제외)", en: "Priority tiers (uncheck to exclude)" },
  "tier.practice":  { ko: "이 티어만 풀기", en: "Practice this tier" },
  "tier.meta":      { ko: "A: 49 (DOCX 그대로) · B: 47 (강조된 슬라이드) · C: 221 (우선순위 낮음) — 시험은 15문항, 통과 7점",
                      en: "A: 49 (DOCX wording) · B: 47 (stressed slides) · C: 221 (lower priority) — the test is 15 questions, pass 7" },
  "home.more":      { ko: "다른 방법 (실전 모드 · 전체 연습)", en: "Other ways (exam mode · full practice)" },
  "quiz.prev":              { ko: "&larr; 이전", en: "&larr; Previous" },
  "quiz.clear":             { ko: "응답 지우기", en: "Clear response" },
  "quiz.reveal":            { ko: "해설 보기", en: "Show explanation" },
  "quiz.revealHide":        { ko: "해설 숨기기", en: "Hide explanation" },
  "quiz.mine":              { ko: "내 선택", en: "My pick" },
  "quiz.revealHint":        { ko: "해설을 보는 동안에도 보기를 눌러 답을 바꿀 수 있습니다.", en: "You can still change your selection while the explanation is shown." },
  "quiz.submit":            { ko: "제출 및 검토", en: "Submit &amp; Review" },
  "quiz.exitConfirm":       { ko: "시험을 나가시겠습니까? 지금까지의 응답은 저장되지 않습니다.",
                              en: "Leave the test? Your answers so far will not be saved." },
  "quiz.timerOff":          { ko: "⏱ 타이머 끄기", en: "⏱ Turn off the timer" },
  "quiz.timerOn":           { ko: "⏱ 타이머 켜기", en: "⏱ Turn on the timer" },
  "opt.timerOff":           { ko: "⏱ 타이머 끄기 (카운트다운 없이)", en: "⏱ Turn off the timer (no countdown)" },
  "opt.timerOffHint":       { ko: "켜면 모의고사·실전 모드에서도 시간 제한이 사라지고 자동 제출도 없습니다 (경과 시간만 표시). 설정은 이 브라우저에 저장됩니다.",
                              en: "When on, mock and exam modes also run without a time limit and never auto-submit (only elapsed time is shown). The setting is saved in this browser." },
  "quiz.next":              { ko: "저장 후 다음 &rarr;", en: "Save &amp; Next &rarr;" },
  "quiz.overview":          { ko: "개요", en: "Overview" },
  "quiz.elapsed":           { ko: "경과 시간", en: "Elapsed" },
  "quiz.noLimit":           { ko: "시간 제한 없음", en: "No time limit" },
  "unit.min":               { ko: "분", en: " min" },
  "opt.timed":              { ko: "시간 제한 사용 (모의고사처럼 타이머 작동)",
                              en: "Use a time limit (timer runs like the mock exam)" },
  "opt.timedHint":          { ko: "체크하지 않으면 시간 제한 없이 연습합니다. 경과 시간만 표시됩니다.",
                              en: "Leave unchecked to practice without a time limit — only elapsed time is shown." },
  "quiz.palette":           { ko: "문항 목록", en: "Questions" },
  "quiz.paletteClose":      { ko: "닫기", en: "Close" },
  "quiz.ov.total":          { ko: "전체 문항", en: "Total Questions" },
  "quiz.ov.visited":        { ko: "방문", en: "Visited" },
  "quiz.ov.notvisited":     { ko: "방문 안 함", en: "Not Visited" },
  "quiz.ov.answered":       { ko: "응답함", en: "Answered" },
  "quiz.ov.notanswered":    { ko: "응답 안 함", en: "Not Answered" },
  "quiz.ov.marked":         { ko: "검토 표시", en: "Marked for review" },
  "quiz.ov.book":           { ko: "북마크", en: "Bookmarked" },
  "quiz.about":             { ko: "시험 안내", en: "Exam info" },
  "quiz.instr":             { ko: "응시 요령", en: "Instructions" },
  "quiz.answeredOf":        { ko: "응답 %s / %s", en: "Answered %s / %s" },
  "quiz.halfNote":          { ko: "확실히 참인 보기만 골라도 실수 1개 = 0.5점",
                              en: "One mistake still scores 0.5 — pick only what you are sure about" },
  "quiz.about.body": {
    ko: "시험 안내\n\n· 문항 수: %s문항\n· 제한 시간: %s\n· 통과 기준: %s점\n" +
        "· 채점: 완전 일치 1.0점 / 실수 1개 0.5점 / 실수 2개 이상 0점\n" +
        "· 보기 중 참인 것이 최소 1개, 여러 개일 수 있습니다.",
    en: "Exam info\n\n- Questions: %s\n- Time limit: %s\n- Pass mark: %s\n" +
        "- Grading: exact match 1.0 / one mistake 0.5 / two or more mistakes 0\n" +
        "- At least one option is correct, and there may be several."
  },
  "quiz.instr.body": {
    ko: "응시 요령\n\n1. 보기를 클릭하거나 1~5 키로 선택합니다.\n2. 확실히 참인 보기만 골라도 실수 1개 = 0.5점입니다.\n" +
        "3. 검토 표시 / 북마크로 나중에 볼 문항을 표시하세요.\n4. Enter = 저장 후 다음, &larr;/&rarr; = 이동, F = 검토 표시, B = 북마크\n" +
        "5. 시간이 종료되면 자동 제출됩니다.",
    en: "Instructions\n\n1. Click an option or press 1-5 to select it.\n2. One mistake still scores 0.5.\n" +
        "3. Use Mark for review / Bookmark to flag questions to revisit.\n4. Enter = save & next, Left/Right = move, F = mark, B = bookmark\n" +
        "5. The test is submitted automatically when the time runs out."
  },
  "quiz.confirmSubmit": { ko: "제출할까요?", en: "Submit now?" },
  "quiz.confirmBlank": {
    ko: "아직 응답하지 않은 문항이 %s개 있습니다.\n(교수님 규칙상 빈 문항도 '참인 보기를 놓친 실수'로 계산됩니다: 참 1개 문항은 0.5점, 참 2개 이상이면 0점)\n\n제출할까요?",
    en: "%s question(s) are still unanswered.\n(Under the grading rule a blank answer counts as a missed correct option: 0.5 for a 1-answer question, 0 for 2 or more.)\n\nSubmit now?"
  }
};
var I18N3 = {
  /* ---------- 결과 화면 ---------- */
  "res.perfect":    { ko: "완전 정답", en: "Perfect" },
  "res.oneMistake": { ko: "실수 1개", en: "1 mistake" },
  "res.mistakes":   { ko: "실수 %s개", en: "%s mistakes" },
  "res.pts":        { ko: "점", en: "pt" },
  "res.yourAnswer": { ko: "내 답: ", en: "Your answer: " },
  "res.blank":      { ko: "무응답", en: "No answer" },
  "res.answer":     { ko: "정답: ", en: "Answer: " },
  "res.auto":       { ko: " · 시간 종료로 자동 제출", en: " · auto-submitted (time up)" },
  "res.passLine":   { ko: " · 통과 기준 %s점", en: " · pass mark %s" },
  "res.result":     { ko: "결과", en: "Result" },
  "res.totalMist":  { ko: "총 실수", en: "Total mistakes" },
  "res.wrongItems": { ko: "틀린 문항", en: "Wrong questions" },
  "res.usedTime":   { ko: "소요 시간", en: "Time used" },
  "res.again":      { ko: "같은 문제 다시 풀기", en: "Retry the same questions" },
  "res.retryWrong": { ko: "틀린 문항만 다시 풀기 (%s)", en: "Retry wrong ones only (%s)" },
  "res.newExam":    { ko: "새 실전 모드", en: "New exam mode" },
  "res.home":       { ko: "홈으로", en: "Home" },
  "res.copy":       { ko: "결과 텍스트 복사", en: "Copy result text" },
  "res.legend":     { ko: "문항별 채점 결과와 해설입니다. 초록 = 정답, 노랑 = 놓친 정답, 빨강 = 잘못 선택한 보기",
                      en: "Per-question results and explanations. Green = correct, yellow = missed correct, red = wrongly selected" },
  "res.copied":     { ko: "결과를 클립보드에 복사했습니다.", en: "Result copied to the clipboard." },
  "res.copyPrompt": { ko: "복사하세요:", en: "Copy this:" },

  /* ---------- 클라우드 동기화 (선택 기능 · 로그인하지 않으면 쓰지 않음) ---------- */
  "sync.needLogin":   { ko: "로그인", en: "Sign in" },
  "sync.title":       { ko: "계정 · 클라우드 동기화", en: "Account & cloud sync" },
  "sync.sub":         { ko: "로그인하면 다른 기기와 학습 기록이 자동으로 맞춰집니다. 선택 기능이라 로그인하지 않아도 지금까지처럼 이 브라우저에만 저장됩니다.",
                        en: "Sign in to keep your progress in sync across devices. It's optional — without it everything is stored only in this browser, exactly as before." },
  "sync.loginTab":    { ko: "로그인", en: "Sign in" },
  "sync.signupTab":   { ko: "가입", en: "Sign up" },
  "sync.nick":        { ko: "닉네임 (영문 소문자·숫자·밑줄, 3~20자)", en: "Nickname (a-z, 0-9, underscore · 3-20 chars)" },
  "sync.nickPh":      { ko: "닉네임 (영문 소문자·숫자·밑줄 3~20자)", en: "Nickname (a-z 0-9 _ · 3-20)" },
  "sync.pwPh":        { ko: "비밀번호", en: "Password" },
  "sync.eye":         { ko: "비밀번호 보기", en: "Show password" },
  "sync.social":      { ko: "소셜 로그인", en: "Social login" },
  "sync.elteBox":     { ko: "ELTE 학생 전용 — '@inf.elte.hu' 이메일로 가입/로그인하세요. 메일로 온 6자리 인증번호를 입력하면 끝납니다.", en: "ELTE students only — sign up / sign in with your '@inf.elte.hu' email, then enter the 6-digit code we email you." },
  "sync.domainBad":   { ko: "%s 로 끝나는 이메일만 가입할 수 있어요. (ELTE 전용)", en: "Only email addresses ending in %s can sign up." },
  "sync.findPw":      { ko: "비밀번호 찾기", en: "Find my password" },
  "sync.findId":      { ko: "아이디(이메일) 찾기", en: "Find my ID (email)" },
  "sync.findPwMsg":   { ko: "비밀번호는 복구할 수 없어요. 새 닉네임으로 다시 가입해 주세요.", en: "Passwords can't be recovered — please sign up again with a new nickname." },
  "sync.findIdMsg":   { ko: "가입할 때 정한 '닉네임'이 곧 아이디예요. 새 닉네임으로 다시 가입할 수 있어요.", en: "Your nickname is your ID — you can sign up again with a new nickname." },
  "sync.role":        { ko: "학생", en: "Student" },
  "sync.menuDash":    { ko: "대시보드", en: "Dashboard" },
  "sync.menuLearn":   { ko: "내 학습", en: "My learning" },
  "sync.menuSettings": { ko: "계정 설정", en: "Account Settings" },
  "sync.idPh":        { ko: "이메일", en: "Email" },
  "sync.emailPh":     { ko: "이메일", en: "Email" },
  "sync.resetTitle":  { ko: "비밀번호 재설정", en: "Reset your password" },
  "sync.sendReset":   { ko: "재설정 코드 보내기", en: "Send reset code" },
  "sync.recoverSent": { ko: "재설정 코드를 이메일로 보냈어요. 메일함(스팸함도)을 확인해 주세요.", en: "We emailed a reset code — please check your inbox (and spam)." },
  "sync.confirmSent": { ko: "확인 메일을 보냈어요. 메일 안의 6자리 인증번호를 입력하면 가입이 끝나요.", en: "We sent a confirmation email — enter the 6-digit code inside to finish signing up." },
  "sync.otpTitle":    { ko: "인증번호 6자리", en: "6-digit code" },
  "sync.otpPh":       { ko: "메일로 받은 6자리 숫자", en: "6-digit code from the email" },
  "sync.otpGo":       { ko: "확인", en: "Verify" },
  "sync.otpResend":   { ko: "메일 다시 보내기", en: "Resend email" },
  "sync.otpBack":     { ko: "이메일 다시 입력", en: "Change email" },
  "sync.otpSent":     { ko: "메일함에서 6자리 인증번호를 확인하세요. 안 보이면 스팸·정크·격리함도 확인해 주세요.", en: "Check your inbox for the 6-digit code. If it isn't there, look in spam, junk or quarantine." },
  "sync.otpBad":      { ko: "인증번호가 올바르지 않아요. 다시 확인해 주세요.", en: "That code isn't right — please check and try again." },
  "sync.newPw":       { ko: "새 비밀번호 (8자 이상)", en: "New password (8+ characters)" },
  "sync.setPw":       { ko: "새 비밀번호 저장", en: "Save new password" },
  "sync.pwChanged":   { ko: "비밀번호를 바꿨어요.", en: "Your password has been changed." },
  "sync.needEmail":   { ko: "이메일 주소를 정확히 입력해 주세요.", en: "Please enter a valid email address." },
  "sync.pw":          { ko: "비밀번호 (8자 이상)", en: "Password (8+ characters)" },
  "sync.doLogin":     { ko: "로그인", en: "Sign in" },
  "sync.doSignup":    { ko: "가입하고 시작", en: "Create account" },
  "sync.close":       { ko: "닫기", en: "Close" },
  "sync.logout":      { ko: "로그아웃", en: "Sign out" },
  "sync.now":         { ko: "지금 동기화", en: "Sync now" },
  "sync.nickBad":     { ko: "닉네임은 영문 소문자·숫자·밑줄로 3~20자여야 해요.", en: "Nickname must be 3-20 chars of a-z, 0-9 or underscore." },
  "sync.pwBad":       { ko: "비밀번호는 8자 이상이어야 해요.", en: "Password must be at least 8 characters." },
  "sync.badCred":     { ko: "닉네임 또는 비밀번호가 맞지 않아요.", en: "Nickname or password is not correct." },
  "sync.nickTaken":   { ko: "이미 사용 중인 닉네임이에요. 다른 닉네임을 써 주세요.", en: "That nickname is already taken — please choose another." },
  "sync.emailBad":    { ko: "이 서버에서 닉네임 형식을 받아들이지 않네요. 개발자에게 알려 주세요.", en: "The server rejected the nickname format — please tell the developer." },
  "sync.netErr":      { ko: "동기화 서버에 연결할 수 없어요. 기록은 이 기기에 그대로 저장됩니다.", en: "Can't reach the sync server. Your progress is still saved on this device." },
  "sync.serverErr":   { ko: "동기화 서버가 응답하지 않아요. 잠시 뒤 다시 시도합니다.", en: "The sync server did not respond. It will retry later." },
  "sync.statusIdle":  { ko: "동기화됨", en: "Synced" },
  "sync.statusSyncing": { ko: "동기화 중…", en: "Syncing…" },
  "sync.statusError": { ko: "오프라인 (이 기기에 저장 중)", en: "Offline (saving on this device)" },
  "sync.statusSignedOut": { ko: "로그아웃됨", en: "Signed out" },
  "sync.signingIn":   { ko: "로그인 중…", en: "Signing in…" },
  "sync.signingUp":   { ko: "가입 중…", en: "Creating account…" },
  "sync.signedInAs":  { ko: "%s 님으로 로그인됨", en: "Signed in as %s" },
  "sync.ownerAsk":    { ko: "이 브라우저에는 다른 계정의 기록이 있어요. 지우고 시작할까요?\n(확인 = 지우고 서버 기록으로 시작, 취소 = 두 기록을 합치기)",
                        en: "This browser has progress from a different account. Start fresh?\n(OK = clear it and use the account's progress, Cancel = merge both)" },
  "sync.loggedOut":   { ko: "로그아웃했습니다. 기록은 이 기기에 남아 있어요.", en: "Signed out. Your progress is still saved on this device." },
  "sync.resetPushed": { ko: "서버 기록도 함께 초기화했어요.", en: "The server copy was cleared as well." },

  /* ---------- 가입 페이지 (site/signup.html · 로그인 창과 같은 인프런 톤의 전체 페이지) ---------- */
  "signup.title":      { ko: "회원가입", en: "Sign up" },
  "signup.sub":        { ko: "ELTE 학생 전용 — '@inf.elte.hu' 이메일로 가입하세요.", en: "ELTE students only — sign up with your '@inf.elte.hu' email." },
  "signup.lead":       { ko: "가입을 마치려면 메일로 받은 6자리 인증번호를 입력하세요.", en: "Finish signing up by entering the 6-digit code we email you." },
  "signup.email":      { ko: "이메일", en: "Email" },
  "signup.pw":         { ko: "비밀번호", en: "Password" },
  "signup.pw2":        { ko: "비밀번호 확인", en: "Confirm password" },
  "signup.phEmail":    { ko: "이메일 입력", en: "Enter email" },
  "signup.phPw":       { ko: "비밀번호 입력 (8자 이상)", en: "Enter password (8+ characters)" },
  "signup.phPw2":      { ko: "비밀번호 다시 입력", en: "Enter password again" },
  "signup.next":       { ko: "다음", en: "Next" },
  "signup.pwMismatch": { ko: "비밀번호가 서로 달라요.", en: "Passwords don't match." },
  "signup.taken":      { ko: "이미 가입된 이메일이에요. 로그인해 주세요.", en: "That email is already registered — please sign in." },
  "signup.codeTitle":  { ko: "인증번호 6자리를 입력하세요", en: "Enter the 6-digit code" },
  "signup.codeSub":    { ko: "%s 로 6자리 인증번호를 보냈어요. 메일함(스팸함도)을 확인해 주세요.", en: "We emailed a 6-digit code to %s. Check your inbox (and spam)." },
  "signup.verify":     { ko: "확인", en: "Verify" },
  "signup.resend":     { ko: "코드 다시 보내기", en: "Resend code" },
  "signup.changeEmail": { ko: "이메일 다시 입력", en: "Change email" },
  "signup.resendDone": { ko: "인증번호를 다시 보냈어요.", en: "We sent the code again." },
  "signup.have":       { ko: "이미 계정이 있나요?", en: "Already have an account?" },
  "signup.signin":     { ko: "로그인", en: "Sign in" },
  "signup.done":       { ko: "가입 완료! 학습실로 이동합니다…", en: "You're in — taking you to your courses…" },

  /* 라이브러리(과목 카탈로그) — 로그인 후 진입 */
  "lib.title":       { ko: "내 학습실", en: "StudyRoom" },
  "lib.section":     { ko: "학기별 과목", en: "Courses by semester" },
  "lib.logoSub":     { ko: "과목을 골라 시작하세요", en: "Pick a course to start" },
  "lib.search":      { ko: "과목 검색", en: "Search courses" },
  "lib.viewAll":     { ko: "전체 보기", en: "View all" },
  "lib.viewBySem":   { ko: "학기별 보기", en: "By semester" },
  "lib.enter":       { ko: "입장", en: "Enter" },
  "lib.locked":      { ko: "로그인 필요", en: "Sign in required" },
  "lib.searchEmpty": { ko: "검색 결과가 없습니다.", en: "No courses match your search." },
  "lib.semEmpty":    { ko: "이 학기에는 아직 과목이 없습니다.", en: "No courses in this semester yet." },
  "lib.signInHint":  { ko: "과목에 들어가려면 로그인이 필요합니다.",
                       en: "Sign in to enter a course." },
  "lib.courseCount": { ko: "%s개 과목", en: "%s courses" },
  "lib.home":        { ko: "← 과목 목록", en: "← All courses" },
  /* ---------- 대시보드 (인프런풍) ---------- */
  "dash.profile":      { ko: "프로필", en: "Profile" },
  "dash.dashboard":    { ko: "대시보드", en: "Dashboard" },
  "dash.learning":     { ko: "내 학습", en: "My learning" },
  "dash.settings":     { ko: "계정 설정", en: "Account Settings" },
  "dash.growing":      { ko: "내 학습실과 함께한 지 %s일째!", en: "Growing with StudyRoom for %s days!" },
  "dash.recent":       { ko: "최근 학습", en: "Recent Learning" },
  "dash.weekly":       { ko: "주간 학습", en: "Weekly Learning" },
  "dash.yearly":       { ko: "연간 학습", en: "Yearly Learning" },
  "dash.weekN":        { ko: "%s주차, %s", en: "Week %s, %s" },
  "dash.skillTags":    { ko: "스킬 태그", en: "Skill Tags" },
  "dash.toBeAcquired": { ko: "획득 예정", en: "To Be Acquired" },
  "dash.owned":        { ko: "보유", en: "Owned" },
  "dash.20plus":       { ko: "20개 이상", en: "More than 20" },
  "dash.noSkill":      { ko: "보유한 스킬 태그가 없어요", en: "No skill tags owned" },
  "dash.noSkillSub":   { ko: "과목을 완료하면 스킬 태그를 얻을 수 있어요!", en: "Complete a course and acquire skill tags!" },
  "dash.explore":      { ko: "과목 둘러보기", en: "Explore courses" },
  "dash.completed":    { ko: "완료한 학습", en: "Completed Lectures" },
  "dash.time":         { ko: "학습 시간", en: "Learning time" },
  "dash.notes":        { ko: "메모", en: "Notes" },
  "dash.courseDone":   { ko: "완료한 과목", en: "Course completed" },
  "dash.min":          { ko: "%s분", en: "%s min" },
  "dash.soon":         { ko: "준비 중이에요.", en: "Coming soon." },

  /* ---------- 과목 상세 페이지 (인프런풍 코스 페이지) ----------
     라이브러리에서 과목 카드를 누르면 들어오는 화면.
     · 탭: ABOUT / MOCK TEST / LEARNERS (후기 탭은 두지 않는다)
     · '학습자(Learners)'만 보여 준다 — 리뷰(후기)는 제공하지 않는다 */
  "cd.tab.about":     { ko: "ABOUT", en: "ABOUT" },
  "cd.tab.guide":     { ko: "STUDY GUIDE", en: "STUDY GUIDE" },
  "cd.tab.calendar":  { ko: "CALENDAR", en: "CALENDAR" },
  "cd.tab.learners":  { ko: "LEARNERS", en: "LEARNERS" },
  /* 학습 가이드 탭 내용 */
  "cd.guide.intro":   { ko: "처음이라면 아래 순서대로 따라가면 됩니다. 모든 문제는 앱 안(개요·문제은행·모의고사)에서 풀 수 있어요.", en: "If you're new, follow the order below. Everything is solved inside the app (Overview · Question bank · Mock exams)." },
  "cd.guide.order":   { ko: "공부 순서", en: "Study order" },
  "cd.guide.s1":      { ko: "⭐ 티어 A(교수님 DOCX 원문, 49문항) 먼저 — 이론1 시험 범위의 핵심", en: "Start with ⭐ Tier A (exactly the professor's DOCX, 49 questions) — the core of the Theory 1 scope" },
  "cd.guide.s2":      { ko: "티어 B(교수님이 강조한 슬라이드, 47문항)를 이어서", en: "Then Tier B (slides the professor stressed, 47 questions)" },
  "cd.guide.s3":      { ko: "문제은행 317문항으로 약한 강의·출처를 골라 점검", en: "Check weak lectures/sources with the 317-question bank" },
  "cd.guide.s4":      { ko: "실전 형식 세트로 시간 감각 익히기 (이론1 45분 · 이론2 30분)", en: "Get the timing feel with the exam-format sets (Theory 1: 45 min · Theory 2: 30 min)" },
  "cd.guide.s5":      { ko: "오답 복습 + 용어집 411단어로 마무리", en: "Finish with wrong-answer review + the 411-term glossary" },
  "cd.guide.how":     { ko: "화면별 사용법", en: "What each screen does" },
  "cd.guide.h1":      { ko: "개요", en: "Overview" },
  "cd.guide.h1d":     { ko: "통계와 시작 버튼 한눈에", en: "Stats and start buttons at a glance" },
  "cd.guide.h2":      { ko: "문제은행", en: "Question bank" },
  "cd.guide.h2d":     { ko: "강의·티어·출처로 골라 풀기", en: "Filter by lecture · tier · source" },
  "cd.guide.h3":      { ko: "모의고사", en: "Mock exams" },
  "cd.guide.h3d":     { ko: "실전 형식: 이론1 15문항·45분 / 이론2 10문항·30분", en: "Exam format: Theory 1 — 15 Q · 45 min / Theory 2 — 10 Q · 30 min" },
  "cd.guide.h4":      { ko: "오답 복습", en: "Wrong-answer review" },
  "cd.guide.h4d":     { ko: "틀린 문항만 다시", en: "Redo only what you missed" },
  "cd.guide.h5":      { ko: "용어집", en: "Glossary" },
  "cd.guide.h5d":     { ko: "단어 411 + 핵심 문장", en: "411 terms + key sentences" },
  "cd.guide.tips":    { ko: "시험 팁", en: "Exam tips" },
  "cd.guide.t1":      { ko: "실전 모의고사는 15문항·45분·통과 7점 (NumPy 6 + 이론 9)", en: "Mock exams are 15 questions · 45 min · pass 7 (6 NumPy + 9 theory)" },
  "cd.guide.t2":      { ko: "채점: 정답 조합과 완전히 일치 = 1.0점, 한 개 틀림 = 0.5점, 두 개 이상 틀림 = 0점", en: "Grading: exact match = 1.0, one mistake = 0.5, two or more = 0" },
  "cd.guide.t3":      { ko: "보기 순서는 고정입니다 (해설의 A/B/C 표시와 일치) — 끝나기 전엔 해설을 보지 마세요", en: "Option order is fixed (matches the A/B/C labels in the explanations) — don't peek at explanations before finishing" },
  "cd.guide.t4":      { ko: "시간 제한 없이 풀고 싶으면 개요에서 '타이머 끄기'를 켜면 됩니다", en: "Prefer no time limit? Turn on 'timer off' in the Overview" },
  "cd.guide.goto":    { ko: "바로 가기", en: "Quick links" },
  /* 시험 캘린더 탭 */
  "cal.intro":        { ko: "교수님 평가 안내(PDF) 기준 일정입니다. 세부 사항은 Moodle 공지를 확인하세요 — 일정은 바뀔 수 있어요.", en: "Schedule from the professor's evaluation sheet (PDF). Check Moodle for details — the schedule may change." },
  "cal.title":        { ko: "시험 일정", en: "Exam schedule" },
  "cal.next":         { ko: "다음 일정", en: "NEXT UP" },
  "cal.today":        { ko: "오늘", en: "TODAY" },
  "cal.dday":         { ko: "D-%s", en: "D-%s" },
  "cal.dday0":        { ko: "D-DAY", en: "D-DAY" },
  "cal.done":         { ko: "지남", en: "Done" },
  "cal.ongoing":      { ko: "진행 중", en: "Ongoing" },
  "cal.late":         { ko: "지각 제출", en: "Late" },
  "cal.th.name":      { ko: "평가", en: "Assessment" },
  "cal.th.when":      { ko: "날짜", en: "Date" },
  "cal.th.meta":      { ko: "배점 · 비고", en: "Points · notes" },
  "cal.ptPass":       { ko: "%s점 · 통과 %s점", en: "%s pts · pass %s" },
  "cal.ptNo":         { ko: "%s점", en: "%s pts" },
  "cal.retake":       { ko: "재시험 %s", en: "retake %s" },
  "cal.chain":        { ko: "선수 조건", en: "Prerequisites" },
  "cal.chainBody":    { ko: "과제 제출 → 코딩 테스트 → 오럴 테스트 순서로 이어집니다. 앞 단계를 통과해야 다음 단계를 볼 수 있어요.", en: "Homework → Coding test → Oral exam, in that order: each is a prerequisite for the next." },
  "cal.footnote":     { ko: "※ 세부 사항은 Moodle 공지 참고 · 일정은 변경될 수 있습니다.", en: "※ Details on Moodle · the schedule is subject to change." },
  "cal.empty":        { ko: "아직 등록된 일정이 없습니다", en: "No schedule yet" },
  "cal.gradeTitle":   { ko: "최종 성적 계산", en: "Final grade" },
  "cal.gradeBody":    { ko: "위 표의 '통과'(최소 요건)를 하나라도 못 채우면 1점(낙제)입니다. 총 80점 중 36–43점=2 · 44–53점=3 · 54–63점=4 · 64–80점=5.", en: "Missing any minimum requirement above means grade 1 (fail). Out of 80 pts: 36–43 = 2 · 44–53 = 3 · 54–63 = 4 · 64–80 = 5." },
  "cd.heroMeta":      { ko: "%s문항 · 모의고사 %s세트 · 용어 %s개", en: "%s questions · %s mock sets · %s terms" },
  "cd.free":          { ko: "무료", en: "Free" },
  "cd.enroll":        { ko: "학습 시작", en: "Start learning" },
  "cd.gain":          { ko: "이 과정을 마치면 (What you will gain)", en: "What you will gain after the course" },
  "cd.gain1":         { ko: "이론 1·2(강의 7까지) + NumPy 실습의 핵심을 한 번에 정리", en: "Covers the core of Theory 1 & 2 (through Lecture 7) + NumPy labs" },
  "cd.gain2":         { ko: "문제은행 317문항으로 약한 단원을 집중 점검", en: "Drill your weak units with a 317-question bank" },
  "cd.gain3":         { ko: "실전 형식 모의고사 34세트로 시간 감각에 적응", en: "Get used to timing with 34 exam-format mock sets" },
  "cd.gain4":         { ko: "용어 411단어 + 핵심 문장으로 개념을 단단하게", en: "Lock in concepts with 411 terms + key sentences" },
  "cd.aboutTitle":    { ko: "과정 소개", en: "About this course" },
  "cd.aboutBody":     { ko: "2026 가을학기 Deep Network Development(이론 테스트 1·2) 대비용 개인 학습실입니다. 단원을 시험 범위(이론1 = 강의 1–6 + NumPy / 이론2 = 강의 7–12)로 나눠, 교수님 자료(DOCX 예시 · 강의 슬라이드)를 문항으로 정리했습니다.", en: "A personal study room for the 2026 Autumn Deep Network Development Theory Tests 1 & 2. Sections follow the exam scope (Theory 1 = lectures 1–6 + NumPy / Theory 2 = lectures 7–12) and the professor's material (DOCX examples · lecture slides) is organised into questions." },
  "cd.aboutExams":    { ko: "출제 정보", en: "Exam information" },
  "cd.fact.questions":{ ko: "문항", en: "Questions" },
  "cd.fact.mocks":    { ko: "모의고사", en: "Mock sets" },
  "cd.fact.words":    { ko: "용어", en: "Terms" },
  "cd.fact.level":    { ko: "난이도", en: "Level" },
  "cd.fact.period":   { ko: "이용 기간", en: "Course period" },
  "cd.fact.cert":     { ko: "수료증", en: "Certificate" },
  "cd.fact.qa":       { ko: "Q&A", en: "Q&A" },
  "cd.levelDefault":  { ko: "초급 · 중급", en: "Beginner · Intermediate" },
  "cd.unlimited":     { ko: "무제한", en: "Unlimited" },
  "cd.notProvided":   { ko: "제공되지 않음", en: "Not provided" },
  "cd.qaProvided":    { ko: "교수님 Q&A 제공", en: "Instructor's Q&A" },
  "cd.tags":          { ko: "태그", en: "Tags" },
  "cd.mockIntro":     { ko: "실제 시험과 같은 형식으로 풀어 보세요. 세트를 고르면 바로 시작합니다.", en: "Practice in the real exam format. Pick a set and start right away." },
  "cd.mockQuick":     { ko: "다른 학습 방법", en: "Other ways to study" },
  "cd.gotoBank":      { ko: "문제은행 317문항", en: "Question bank (317)" },
  "cd.gotoRandom":    { ko: "🎲 랜덤 문항", en: "🎲 Random draw" },
  "cd.gotoWrong":     { ko: "오답 복습", en: "Wrong-answer review" },
  "cd.gotoOverview":  { ko: "한눈에 보는 개요", en: "Overview at a glance" },
  "cd.learnersTitle": { ko: "학습자", en: "Learners" },
  "cd.learnersSub":   { ko: "이 과정을 함께 공부하는 학습자입니다.", en: "Learners studying this course." },
  "cd.learnerBadge":  { ko: "학습자", en: "Learner" },
  "cd.learnersEmpty": { ko: "아직 학습자가 없어요", en: "No learners yet" },
  "cd.learnersEmptySub": { ko: "첫 학습자가 되어 보세요!", en: "Be the first learner!" },
  "cd.guest":         { ko: "익명 학습자", en: "Anonymous learner" },
  "cd.learnerMeta":   { ko: "학습 %s회 · 최고 %s점 · 오답 %s", en: "%s sessions · best %s · wrong %s" }
};

(function () {
  [I18N2, I18N3].forEach(function (dict) {
    for (var k in dict) {
      if (Object.prototype.hasOwnProperty.call(dict, k)) I18N[k] = dict[k];
    }
  });
})();

/* 문자열 조회 */
function t(key) {
  var e = I18N[key];
  if (!e) return key;
  return e[LANG] || e.ko;
}

/* %s 자리 채우기 */
function tf(key) {
  var s = t(key);
  var args = Array.prototype.slice.call(arguments, 1);
  var i = 0;
  return s.replace(/%s/g, function () {
    var v = args[i++];
    return v === undefined || v === null ? "" : String(v);
  });
}

/* 문항 필드: 언어별 값이 있으면 그것을, 없으면 기본값을 돌려준다 */
function questionField(q, field) {
  var v = q[field + "_" + LANG];
  if (v === undefined || v === null) return q[field];
  return v;
}

/* data-i18n 속성을 가진 정적 요소들을 현재 언어로 갱신 */
function applyStaticI18n() {
  if (typeof document === "undefined") return;
  var nodes = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute("data-i18n");
    nodes[i].textContent = t(key);
  }
  var btns = document.querySelectorAll("[data-lang]");
  for (var j = 0; j < btns.length; j++) {
    var on = btns[j].getAttribute("data-lang") === LANG;
    btns[j].className = "langBtn" + (on ? " on" : "");
    btns[j].setAttribute("aria-pressed", on ? "true" : "false");
  }
  if (typeof document !== "undefined" && document.documentElement) {
    document.documentElement.lang = LANG;
  }
}

