/* tests/run_tests.js — core.js 채점 로직 + 빌드 산출물 검증 (node 실행) */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const coreSrc = fs.readFileSync(path.join(ROOT, "src", "core.js"), "utf8");
const rawData = JSON.parse(fs.readFileSync(path.join(ROOT, "questions.json"), "utf8"));
const rawEn = JSON.parse(fs.readFileSync(path.join(ROOT, "questions_en.json"), "utf8"));
const C = new Function(
  coreSrc + "\nreturn {gradeAnswer,gradeSession,shuffleOptions,buildSession,pickExamSet,passLine,formatTime,scoreClass,letterAt,shuffle};"
)();

let pass = 0, fail = 0;
function ok(name, cond, extra) {
  if (cond) { pass++; console.log("  PASS  " + name); }
  else { fail++; console.log("  FAIL  " + name + (extra !== undefined ? "  -> " + JSON.stringify(extra) : "")); }
}
function eq(name, a, b) { ok(name, JSON.stringify(a) === JSON.stringify(b), { got: a, want: b }); }

console.log("\n=== 1. 채점 규칙 (1.0 / 0.5 / 0.0) ===");
const q = { correct: ["A", "C"] };
eq("완벽 일치 → 1.0", C.gradeAnswer(q, ["A", "C"]).score, 1.0);
eq("C만 선택(1누락) → 0.5", C.gradeAnswer(q, ["C"]).score, 0.5);
eq("A,C,D(1오선택) → 0.5", C.gradeAnswer(q, ["A", "C", "D"]).score, 0.5);
eq("A,B(오선택+누락) → 0.0", C.gradeAnswer(q, ["A", "B"]).score, 0.0);
eq("무응답(2누락) → 0.0", C.gradeAnswer(q, []).score, 0.0);
eq("B만 선택 → 0.0", C.gradeAnswer(q, ["B"]).score, 0.0);
eq("실수 개수 계산", C.gradeAnswer(q, ["A", "B"]).mistakes, 2);
eq("누락/오선택 분해", [C.gradeAnswer(q, ["A", "B"]).missed, C.gradeAnswer(q, ["A", "B"]).extra], [1, 1]);
eq("단일 정답 완벽 → 1.0", C.gradeAnswer({ correct: ["A"] }, ["A"]).score, 1.0);
/* 규칙을 문자 그대로 적용: 실수 개수로 채점하므로 '참 1개' 문항을 비우면 실수 1개 = 0.5점 */
eq("단일 정답 무응답(실수 1개) → 0.5", C.gradeAnswer({ correct: ["A"] }, []).score, 0.5);
eq("단일 정답 오답 선택(실수 2개) → 0.0", C.gradeAnswer({ correct: ["A"] }, ["B"]).score, 0.0);
eq("단일 정답 정답 선택 → 1.0", C.gradeAnswer({ correct: ["A"] }, ["A"]).score, 1.0);
eq("참 2개 문항 무응답(실수 2개) → 0.0", C.gradeAnswer({ correct: ["A", "B"] }, []).score, 0.0);
eq("3개 중 1누락 → 0.5", C.gradeAnswer({ correct: ["A", "B", "C"] }, ["A", "B"]).score, 0.5);
eq("3개 중 2누락 → 0.0", C.gradeAnswer({ correct: ["A", "B", "C"] }, ["A"]).score, 0.0);

console.log("\n=== 2. 보기 셔플 정합성 (500회 무작위 검증) ===");
let shuffleOk = true, seenOrder = {};
for (let t = 0; t < 500; t++) {
  const orig = { id: "X", options: ["o0", "o1", "o2", "o3", "o4"], correct: ["A", "C", "E"] };
  const s = C.shuffleOptions(orig);
  const wantTexts = orig.correct.map(function (c) { return orig.options[c.charCodeAt(0) - 65]; }).sort();
  const gotTexts = s.correct.map(function (c) { return s.options[c.charCodeAt(0) - 65]; }).sort();
  if (JSON.stringify(wantTexts) !== JSON.stringify(gotTexts)) shuffleOk = false;
  if (JSON.stringify(s.options.slice().sort()) !== JSON.stringify(orig.options.slice().sort())) shuffleOk = false;
  if (JSON.stringify(orig.correct) !== JSON.stringify(["A", "C", "E"])) shuffleOk = false;
  seenOrder[s.options.join("")] = 1;
}
ok("셔플 후에도 정답 문자가 올바른 보기 텍스트를 가리킴 (500회)", shuffleOk);
ok("셔플이 실제로 다양한 순서를 생성", Object.keys(seenOrder).length > 20, Object.keys(seenOrder).length);

console.log("\n=== 3. 세션 생성 / 실전 모드 구성 ===");
const sess = C.buildSession(rawData.questions, { shuffleQuestions: true, shuffleOptions: true });
eq("세션 문항 수 유지", sess.length, rawData.questions.length);
eq("sid 유일", new Set(sess.map(function (s) { return s.sid; })).size, sess.length);
sess[0].options[0] = "MUTATED";
ok("세션은 원본을 변형하지 않음", rawData.questions.every(function (qq) { return qq.options.indexOf("MUTATED") === -1; }));

let examOk = true, ratioOk = true;
for (let t = 0; t < 200; t++) {
  const ex = C.pickExamSet(rawData.questions, 15, 6);
  if (ex.length !== 15) examOk = false;
  if (new Set(ex.map(function (x) { return x.id; })).size !== 15) examOk = false;
  if (ex.filter(function (x) { return x.part === "B"; }).length !== 6) ratioOk = false;
}
ok("실전 세트: 15문항 중복 없이 추출", examOk);
ok("실전 세트: NumPy 정확히 6문항 포함", ratioOk);
console.log("\n=== 4. 기타 유틸 ===");
eq("formatTime(0)", C.formatTime(0), "00:00");
eq("formatTime(65)", C.formatTime(65), "01:05");
eq("formatTime(2700)", C.formatTime(2700), "45:00");
eq("formatTime(-5) 음수 방어", C.formatTime(-5), "00:00");
eq("passLine 실전 모드 = meta 값", C.passLine(15, rawData.meta, true), 7);
eq("passLine 연습 모드 = 60%", C.passLine(143, rawData.meta, false), 85.8);
eq("scoreClass", [C.scoreClass(1), C.scoreClass(0.5), C.scoreClass(0)], ["s10", "s05", "s00"]);

console.log("\n=== 5. 전체 채점 시뮬레이션 ===");
const allRight = {};
sess.forEach(function (s) { allRight[s.sid] = s.correct.slice(); });
const g1 = C.gradeSession(sess, allRight);
eq("전부 정답 → 총점 = 문항 수", g1.total, sess.length);
const allWrong = {};
sess.forEach(function (s) { allWrong[s.sid] = []; });
const g2 = C.gradeSession(sess, allWrong);
eq("전부 무응답 → 단일정답 문항만 0.5점 (실수 1개 규칙)",
  g2.total, sess.filter(function (s) { return s.correct.length === 1; }).length * 0.5);
const oneOff = {};
sess.forEach(function (s, i) { oneOff[s.sid] = i === 0 ? s.correct.slice(1) : s.correct.slice(); });
const g3 = C.gradeSession(sess, oneOff);
eq("첫 문항만 실수 1개 → 총점 = n - 0.5", g3.total, sess.length - 0.5);

console.log("\n=== 6. 빌드 산출물(HTML) 검증 ===");
const htmlPath = path.join(ROOT, "TheoryTest1_PracticeExam.html");
ok("HTML 파일 존재", fs.existsSync(htmlPath));
const html = fs.readFileSync(htmlPath, "utf8");
ok("app.js 포함됨", html.indexOf("app-logic") !== -1 && html.indexOf("renderHome") !== -1);
ok("core.js 포함됨", html.indexOf("core-logic") !== -1 && html.indexOf("function gradeAnswer") !== -1);
ok("템플릿 플레이스홀더 제거됨", html.indexOf("__TITLE__") === -1 && html.indexOf("<!--CORE_SCRIPT-->") === -1 && html.indexOf("<!--APP_SCRIPT-->") === -1);
ok("__PART2__/__PART3__ 마커 없음", html.indexOf("__PART2__") === -1 && html.indexOf("__PART3__") === -1);
const m = html.match(/window\.__QUESTION_DATA__ = ([\s\S]*?);<\/script>/);
ok("내장 JSON 추출 가능", !!m);
let embedded = null;
try { embedded = JSON.parse(m[1]); } catch (e) { embedded = null; }
ok("내장 JSON 파싱 성공", !!embedded);
eq("내장 문항 수 일치", embedded ? embedded.questions.length : -1, rawData.questions.length);
ok("내장 JSON 정답이 원본과 동일", embedded && embedded.questions.every(function (qq, i) {
  return JSON.stringify(qq.correct) === JSON.stringify(rawData.questions[i].correct);
}));

console.log("\n=== 7. 인쇄용 마크다운 검증 (한국어 + 영어) ===");
const mdPath = path.join(ROOT, "print_version.md");
ok("MD 파일 존재", fs.existsSync(mdPath));
const md = fs.readFileSync(mdPath, "utf8");
ok("한국어 문제 섹션 포함", md.indexOf("한국어 — 문제") !== -1);
ok("영어 문제 섹션 포함", md.indexOf("English — Questions") !== -1);
ok("문제/정답 섹션 포함", md.indexOf("## 정답 및 해설") !== -1 && md.indexOf("## Answers and explanations") !== -1);
eq("한국어 정답 라인 수 = 문항 수", (md.match(/정답: `/g) || []).length, rawData.questions.length);
eq("영어 정답 라인 수 = 문항 수", (md.match(/Answer: `/g) || []).length, rawData.questions.length);

console.log("\n=== 8. 모의고사 세트 검증 ===");
const mockPath = path.join(ROOT, "mocks.json");
ok("mocks.json 존재", fs.existsSync(mockPath));
const mk = JSON.parse(fs.readFileSync(mockPath, "utf8"));
const byId = {};
rawData.questions.forEach(function (q) { byId[q.id] = q; });
ok("모의고사 세트 수 = meta.count", mk.mocks.length === mk.meta.count, mk.mocks.length);
ok("실전 세트 10개 이상", mk.meta.primary >= 10, mk.meta.primary);
eq("세트당 문항 수", mk.meta.exam_questions, 15);
eq("세트당 NumPy 문항 수", mk.meta.numpy_per_mock, 6);
eq("세트 시간(분)", mk.meta.exam_minutes, 45);
eq("세트 통과 점수", mk.meta.exam_pass, 7);
let allSizeOk = true, allNumOk = true, allDupOk = true, allIdOk = true;
const covered = new Set();
let mockQTotal = 0;
mk.mocks.forEach(function (m) {
  mockQTotal += m.questions.length;
  if (!m.full && m.questions.length !== 15) allSizeOk = false;
  if (new Set(m.questions).size !== m.questions.length) allDupOk = false;
  if (!m.full && m.questions.filter(function (id) { return byId[id] && byId[id].part === "B"; }).length !== 6) allNumOk = false;
  if (!m.questions.every(function (id) { return !!byId[id]; })) allIdOk = false;
  m.questions.forEach(function (id) { covered.add(id); });
});
ok("모든 시험형식 세트가 정확히 15문항", allSizeOk);
ok("모든 세트에 문항 중복 없음", allDupOk);
ok("모든 시험형식 세트에 NumPy 정확히 6문항", allNumOk);
ok("모든 문항 ID가 문제은행에 존재", allIdOk);
ok("모든 문항이 최소 1회 출제됨 (커버리지 100%)", covered.size === rawData.questions.length,
  { covered: covered.size, total: rawData.questions.length });
const mockMd = fs.readFileSync(path.join(ROOT, "print_mocks.md"), "utf8");
ok("인쇄용 모의고사 파일 존재", mockMd.length > 10000);
ok("모의고사 정답 섹션 포함", mockMd.indexOf("## 정답 및 해설") !== -1);
eq("모의고사 정답 라인 수 = 총 문항 수", (mockMd.match(/정답: `/g) || []).length, mockQTotal);

console.log("\n=== 9. 모의고사 데이터가 HTML에 내장되었는지 ===");
const m2 = html.match(/window\.__MOCK_DATA__ = ([\s\S]*?);<\/script>/);
ok("내장 모의고사 JSON 추출 가능", !!m2);
let embeddedMocks = null;
try { embeddedMocks = JSON.parse(m2[1]); } catch (e) { embeddedMocks = null; }
ok("내장 모의고사 JSON 파싱 성공", !!embeddedMocks);
eq("내장 세트 수 일치", embeddedMocks ? embeddedMocks.mocks.length : -1, mk.mocks.length);
ok("내장 세트 내용 일치", embeddedMocks && embeddedMocks.mocks.every(function (m, i) {
  return JSON.stringify(m.questions) === JSON.stringify(mk.mocks[i].questions);
}));

console.log("\n=== 10. 이중 언어(영어 번역) 완전성 ===");
const enKeys = Object.keys(rawEn).filter(function (k) { return k.charAt(0) !== "_"; });
eq("영어 번역 수 = 문항 수", enKeys.length, rawData.questions.length);
const missingEn = [], optMismatch = [], emptyEn = [];
rawData.questions.forEach(function (qq) {
  const e = rawEn[qq.id];
  if (!e) { missingEn.push(qq.id); return; }
  if (e.options.length !== qq.options.length) optMismatch.push(qq.id);
  if (!e.prompt || !e.explanation || !e.topic) emptyEn.push(qq.id);
  e.options.forEach(function (o) { if (!o) emptyEn.push(qq.id + ":opt"); });
});
eq("영어 번역 누락 없음", missingEn, []);
eq("보기 개수 불일치 없음", optMismatch, []);
eq("영어 빈 필드 없음", emptyEn, []);
ok("내장 JSON에 한국어/영어 필드 모두 포함", !!embedded && embedded.questions.every(function (qq) {
  return qq.prompt_en && qq.prompt_ko && qq.options_en && qq.options_ko && qq.explanation_en && qq.explanation_ko;
}));
ok("내장 JSON meta 에 영어 안내문 포함", !!(embedded && embedded.meta.grading_note_en && embedded.meta.real_exam_note_en));
ok("HTML에 i18n 스크립트 포함", html.indexOf('id="i18n-logic"') !== -1);
ok("HTML에 언어 전환(지구본) 버튼 포함", html.indexOf('id="libLangBtn"') !== -1 && html.indexOf('aria-label="Language"') !== -1);

console.log("\n=== 10-b. 함정 단어 노트 (\"이 단어면 참\") ===");
let trapKo = 0, trapEn = 0, trapBad = [], trapNoEn = [];
rawData.questions.forEach(function (qq) {
  const koNotes = (qq.explanation.match(/⚠️ 함정: ([A-F])/g) || []);
  const e = rawEn[qq.id] || {};
  const enNotes = ((e.explanation || "").match(/⚠️ Trap: ([A-F])/g) || []);
  if (koNotes.length !== enNotes.length) trapNoEn.push(qq.id);
  koNotes.forEach(function (n) {
    trapKo++;
    const letter = n.slice(-1);
    if (qq.correct.indexOf(letter) !== -1) trapBad.push(qq.id + ":" + letter);   /* 참인 보기에 함정 노트 */
  });
  trapEn += enNotes.length;
});
ok("함정 노트가 180개 이상 있음", trapKo >= 180, trapKo);
eq("한국어/영어 함정 노트 수 일치", trapEn, trapKo);
eq("참인 보기에 함정 노트가 붙지 않음", trapBad, []);
eq("영어 해설에 함정 노트 누락 없음", trapNoEn, []);
ok("예시(L2-01 C: adding→subtracting) 노트 포함",
  rawData.questions[12].explanation.indexOf("⚠️ 함정: C") !== -1 &&
  rawData.questions[12].explanation.indexOf("빼는 방향") !== -1 &&
  (rawEn["L2-01"].explanation || "").indexOf("subtracting") !== -1);
ok("내장 JSON에도 함정 노트 포함", embedded.questions.some(function (qq) {
  return qq.explanation_ko.indexOf("⚠️ 함정") !== -1 && qq.explanation_en.indexOf("⚠️ Trap") !== -1;
}));

console.log("\n=== 10-c. 해설의 보기 문자 참조 ↔ 정답 키 일치 ===");
/* 해설이 "E는 거짓" 처럼 보기 문자를 참조한다. 그 문자가 실제 정답 키와 어긋나면
   (= 사용자가 '문제와 답이 안 맞는다'고 느끼는 상황) 실패시킨다.
   실제로 이 검사로 N-18 의 잘못된 정답 키(E가 정답에 포함)를 찾아 고쳤다. */
(function () {
  const RUN = "((?:[A-F]\\s*[·,]\\s*)*[A-F])";
  const NEG = "(?!\\s*(?:으?로|라고|인지|이라면|일\\s*수))";
  const BR = /\[[^\]]*\]/g;
  const errs = [];
  let checked = 0;
  rawData.questions.forEach(function (q) {
    const enTxt = (rawEn[q.id] || {}).explanation || "";
    const pairs = [["KO", q.explanation, new RegExp(RUN + "\\s*(?:은|는|이|가|도|와|과|를|을|의|로)?\\s*(참|거짓)" + NEG, "g")],
                   ["EN", enTxt, new RegExp(RUN + "\\s*(?:is|are)?\\s*(true|false)" + NEG, "g")]];
    pairs.forEach(function (p) {
      const tag = p[0], txt = p[1], re = p[2];
      let m;
      while ((m = re.exec(txt))) {
        const yes = (m[2] === "참" || m[2] === "true");
        (m[1].match(/[A-F]/g) || []).forEach(function (L) {
          checked++;
          if ((q.correct.indexOf(L) !== -1) !== yes) errs.push(q.id + " " + tag + " " + L);
        });
      }
    });
  });
  ok("해설의 참/거짓 표시가 정답 키와 일치 (" + checked + "곳 검사)", errs.length === 0, errs.slice(0, 6));
  ok("보기 범위 밖 문자를 참조하는 해설 없음", rawData.questions.every(function (q) {
    const n = q.options.length;
    return [q.explanation, (rawEn[q.id] || {}).explanation || ""].every(function (txt) {
      const bare = String(txt).replace(BR, " ");
      let m;
      const re = /(?<![A-Za-z0-9])([A-F])(?![A-Za-z0-9])/g;
      while ((m = re.exec(bare))) {
        if (m[1] > String.fromCharCode(64 + n)) return false;
      }
      return true;
    });
  }));
})();

console.log("\n=== 10-d. 지문(prompt)이 스스로 문맥을 담고 있는지 ===");
/* 보기만 보고 풀 수 없는 지문(=주제 없이 "옳은 것을 고르시오" 만 있는 경우,
   "같은 MLP" 처럼 지시 대상이 없는 경우)을 잡는다.  D-15/D-17/NP-13 이 이 검사로 수정됐다. */
(function () {
  const GEN_KO = /^\s*(다음\s*중\s*)?옳은\s*것을\s*모두\s*고르시오\.?\s*$/;
  const GEN_EN = /^\s*Which statements are true\??\s*$/;
  const DANG = /(같은\s*MLP|같은\s*가설|위\s*시그모이드|Without it|The same MLP)/i;
  const bad = [];
  rawData.questions.forEach(function (q) {
    const ko = String(q.prompt).trim();
    const e = String((rawEn[q.id] || {}).prompt || "").trim();
    if (GEN_KO.test(ko) || GEN_EN.test(e)) bad.push(q.id + " generic");
    if (DANG.test(ko) || DANG.test(e)) bad.push(q.id + " dangling");
    if (ko.length < 20 || e.length < 30) bad.push(q.id + " short");
  });
  ok("주제 없는 지문·지시 대상 없는 지문 없음 (" + rawData.questions.length + "문항)", bad.length === 0, bad.slice(0, 6));
  ok("지문 최소 길이 (한국어 20자 / 영어 30자)", rawData.questions.every(function (q) {
    return String(q.prompt).trim().length >= 20 && String((rawEn[q.id] || {}).prompt || "").trim().length >= 30;
  }));
})();

console.log("\n=== 10-e. 해설이 모든 보기를 다루는지 ===");
/* 해설은 각 보기에 대해 참/거짓을 밝혀야 한다 (사용자 요청: "해설도 전체적으로 다시 봐줘").
   2026-11-02 감사에서 5문항(L4-18/L6-03/S2-19/D-18/D-40)이 일부 보기를 설명하지 않아 보완했다. */
(function () {
  const REF_KO = /([A-F])(?=\s*(?:은|는|이|가|도|와|과|를|을|의|로)?\s*(?:참|거짓|—|,|·))/g;
  const REF_EN = /([A-F])(?=\s*(?:is|are)?\s*(?:true|false|—|,|·))/g;
  const missing = [];
  rawData.questions.forEach(function (q) {
    const n = q.options.length;
    const letters = "ABCDEF".slice(0, n);
    const seen = {};
    const collect = function (txt, re) {
      let m;
      const r = new RegExp(re.source, "g");
      while ((m = r.exec(txt))) seen[m[1]] = true;
    };
    collect(q.explanation, REF_KO);
    collect((rawEn[q.id] || {}).explanation || "", REF_EN);
    for (let i = 0; i < n; i++) {
      if (!seen[letters[i]]) missing.push(q.id + ":" + letters[i]);
    }
  });
  ok("해설이 모든 보기를 참/거짓으로 설명 (" + rawData.questions.length + "문항)", missing.length === 0, missing.slice(0, 8));
})();

console.log("\n=== 10-f. 문항의 출처 그룹 (1 DOCX / 2A 강의 / 2B L7 / 3 참고) ===");
/* dnd_question_classification.md (교수님 DOCX + 강의 PDF 대조, 2026-11-02):
   1-docx      = 교수님 DOCX 의 bullet            → 시험 범위
   2a-lecture  = ✗ 표시 없는 Lecture 1~6 슬라이드
   2b-lecture7 = ✗ 표시 없는 Lecture 7 슬라이드 (DOCX 는 Lectures 1-6)
   3-extra     = 자료에 없거나 ✗ 시험 제외 슬라이드에만 있는 내용 */
(function () {
  const G = ["1-docx", "2a-lecture", "2b-lecture7", "3-extra"];
  const bad = rawData.questions.filter(function (q) { return G.indexOf(q.group) === -1; });
  ok("모든 문항에 출처 그룹이 있음 (" + rawData.questions.length + "문항)", bad.length === 0,
    bad.map(function (q) { return q.id; }).slice(0, 5));
  const cnt = {};
  G.forEach(function (g) {
    cnt[g] = rawData.questions.filter(function (q) { return q.group === g; }).length;
  });
  eq("그룹별 문항 수 (1 DOCX 149 / 2A 101 / 2B 23 / 3 참고 44)",
    [cnt["1-docx"], cnt["2a-lecture"], cnt["2b-lecture7"], cnt["3-extra"]], [149, 101, 23, 44]);
  const byId = {};
  rawData.questions.forEach(function (q) { byId[q.id] = q; });
  ok("DOCX 예시 D-01~D-49 는 모두 그룹 1", (function () {
    for (let i = 1; i <= 49; i++) {
      const id = "D-" + (i < 10 ? "0" + i : i);
      if (!byId[id] || byId[id].group !== "1-docx") return false;
    }
    return true;
  })());
  ok("Lecture 7 슬라이드 문항은 그룹 2B", ["L7-01", "L7-05", "S1-22", "S2-30"].every(function (id) {
    return byId[id] && byId[id].group === "2b-lecture7";
  }));
  ok("자료에 없는 NumPy 는 그룹 3 참고, 강의 코드(NP-11~14)는 그룹 2A", (function () {
    const g3 = ["N-10", "NP-15", "M2-12", "S2-32"];
    const g2a = ["NP-11", "NP-12", "NP-13", "NP-14", "N-15"];
    return g3.every(function (id) { return byId[id] && byId[id].group === "3-extra"; }) &&
      g2a.every(function (id) { return byId[id] && byId[id].group === "2a-lecture"; });
  })());
  ok("그룹 메모(group_note)가 모든 문항에 문자열로 있음", rawData.questions.every(function (q) {
    return typeof q.group_note === "string";
  }));
  /* 그룹별 연습 세트 4개 */
  const gsets = mk.mocks.filter(function (m) { return m.group; });
  eq("출처 그룹별 세트 4개", gsets.length, 4);
  ok("세트 문항이 모두 해당 그룹 (1 DOCX 세트 = 149문항)", gsets.every(function (m) {
    return m.questions.length > 0 && m.questions.every(function (id) {
      return byId[id] && byId[id].group === m.group;
    });
  }));
  const s1 = gsets.filter(function (m) { return m.group === "1-docx"; })[0];
  ok("1 DOCX 세트 = 149문항", !!s1 && s1.questions.length === 149, s1 && s1.questions.length);
})();

console.log("\n=== 10-g. 중요도 티어 (A / B / C) — dnd_likely_exam_questions.md ===");
/* A = 교수님 DOCX bullet 그대로(49) · B = 강조된 슬라이드(47) · C = 나머지(221) */
(function () {
  const T = ["A", "B", "C"];
  const bad = rawData.questions.filter(function (q) { return T.indexOf(q.tier) === -1; });
  ok("모든 문항에 티어가 있음 (" + rawData.questions.length + "문항)", bad.length === 0,
    bad.map(function (q) { return q.id; }).slice(0, 5));
  const cnt = {};
  T.forEach(function (x) { cnt[x] = rawData.questions.filter(function (q) { return q.tier === x; }).length; });
  eq("티어별 문항 수 (A 49 / B 47 / C 221)", [cnt.A, cnt.B, cnt.C], [49, 47, 221]);
  const byId = {};
  rawData.questions.forEach(function (q) { byId[q.id] = q; });
  ok("DOCX 예시 D-01~D-49 는 모두 티어 A", (function () {
    for (let i = 1; i <= 49; i++) {
      const id = "D-" + (i < 10 ? "0" + i : i);
      if (!byId[id] || byId[id].tier !== "A") return false;
    }
    return true;
  })());
  ok("티어 B 47문항 = 이론 40 + NumPy 7", (function () {
    const b = rawData.questions.filter(function (q) { return q.tier === "B"; });
    return b.filter(function (q) { return q.part === "B"; }).length === 7 &&
      b.filter(function (q) { return q.part !== "B"; }).length === 40;
  })());
  ok("티어 B 는 근거(tier_note)가 있음", rawData.questions.every(function (q) {
    return q.tier !== "B" || (q.tier_note && q.tier_note.length > 3);
  }));
  ok("Lecture 7 과 그룹 3 은 티어 C", ["L7-01", "L7-18", "NP-01", "S2-40"].every(function (id) {
    return byId[id] && byId[id].tier === "C";
  }));
  /* 티어 세트 3개 (mock31~mock33) */
  const tsets = mk.mocks.filter(function (m) { return m.tier; });
  eq("티어 세트 3개", tsets.length, 3);
  ok("세트 문항이 모두 해당 티어", tsets.every(function (m) {
    const want = m.tier === "AB" ? ["A", "B"] : [m.tier];
    return m.questions.length > 0 && m.questions.every(function (id) {
      return byId[id] && want.indexOf(byId[id].tier) !== -1;
    });
  }));
  ok("티어 세트 id 는 mock31~mock33 (기존 id 재사용 없음)", tsets.map(function (m) { return m.id; }).join(",") ===
    "mock31,mock32,mock33", tsets.map(function (m) { return m.id; }).join(","));
  const sa = tsets.filter(function (m) { return m.tier === "A"; })[0];
  const sab = tsets.filter(function (m) { return m.tier === "AB"; })[0];
  ok("티어 A 세트 = 49문항 / A+B 세트 = 96문항",
    !!sa && sa.questions.length === 49 && !!sab && sab.questions.length === 96,
    { a: sa && sa.questions.length, ab: sab && sab.questions.length });
})();

console.log("\n=== 11. 용어집 (단어 + 핵심 문장) ===");
const glPath = path.join(ROOT, "glossary.json");
ok("glossary.json 존재", fs.existsSync(glPath));
const gl = JSON.parse(fs.readFileSync(glPath, "utf8"));
ok("용어 300개 이상", gl.terms.length >= 300, gl.terms.length);
ok("핵심 문장 40개 이상", gl.sentences.length >= 40, gl.sentences.length);
ok("모든 용어에 단어/뜻/설명/강의 있음", gl.terms.every(function (w) { return w.term && w.ko && w.en && w.lecture; }));
ok("모든 문장에 영어/한국어/강의 있음", gl.sentences.every(function (s) { return s.en && s.ko && s.lecture; }));
ok("모든 용어에 수업(과목) 태그가 있음", gl.terms.every(function (w) { return !!w.course; }));
ok("모든 문장에 수업(과목) 태그가 있음", gl.sentences.every(function (s) { return !!s.course; }));
eq("glossary.json meta.courses = [dnd]", gl.meta.courses, ["dnd"]);
eq("glossary.json meta.course_counts.dnd = 전체 용어 수", gl.meta.course_counts.dnd, gl.terms.length);
ok("용어 중복 없음", new Set(gl.terms.map(function (w) { return w.term.toLowerCase(); })).size === gl.terms.length);
const glHtml = fs.readFileSync(path.join(ROOT, "TheoryTest1_Glossary.html"), "utf8");
ok("용어집 HTML 존재(20KB 이상)", glHtml.length > 20000, glHtml.length);
ok("용어집 HTML에 데이터 내장", glHtml.indexOf("window.__GLOSSARY__") !== -1);
ok("용어집 HTML에 언어 토글 포함", glHtml.indexOf('data-lang="en"') !== -1);
ok("용어집 HTML에 플래시카드 UI 포함", glHtml.indexOf("btnKnow") !== -1 && glHtml.indexOf("cardWord") !== -1);
ok("용어집 HTML에 교수님 자료 참조 없음", !/(lecture_pdf|\.docx)/i.test(glHtml));

console.log("\n=== 11-b. 용어집 — 수업(과목) 표시 + 왼쪽 사이드바 ===");
ok("용어집에 사이드바 마크업(sbNav/sbFoot/sbToggle)", glHtml.indexOf('id="sbNav"') !== -1 &&
  glHtml.indexOf('id="sbFoot"') !== -1 && glHtml.indexOf('id="sbToggle"') !== -1 &&
  glHtml.indexOf('id="sbBackdrop"') !== -1);
ok("용어집에 curriculum.js 내장", glHtml.indexOf('id="curriculum-data"') !== -1 &&
  glHtml.indexOf("var CURRICULUM") !== -1);
ok("용어집에 shell.css 포함(.sidebar/.sbItem)", glHtml.indexOf(".sidebar{") !== -1 && glHtml.indexOf(".sbItem{") !== -1);
ok("용어집에 수업 필터 칩 컨테이너", glHtml.indexOf('id="courseChips"') !== -1);
ok("용어집 표 헤더가 '수업 · 강의'", glHtml.indexOf("수업 · 강의") !== -1);
ok("용어집에 수업 배지 스타일(.tag.course)", glHtml.indexOf(".tag.course{") !== -1);
ok("용어집에 인쇄 버튼/링크 없음", glHtml.indexOf("printBtn") === -1 && glHtml.indexOf("navPrint") === -1 &&
  glHtml.indexOf("print.html") === -1);
ok("용어집 카드에 출처 줄(cardMeta)", glHtml.indexOf('id="cardMeta"') !== -1);

console.log("\n=== 11-c. 앱 — 해시(#bank) 이동 + 과목별 용어집 링크 ===");
const appForHash = fs.readFileSync(path.join(ROOT, "TheoryTest1_PracticeExam.html"), "utf8");
ok("앱에 해시 라우팅 함수(viewFromHash/syncHash) 포함", appForHash.indexOf("function viewFromHash") !== -1 &&
  appForHash.indexOf("function syncHash") !== -1);
ok("부팅 때 주소의 화면을 연다(계정 기능 꺼짐)", appForHash.indexOf('go(hv || "overview")') !== -1);
ok("계정 기능이 켜지면 기본은 라이브러리 + 로그인 게이트", appForHash.indexOf('if (syncOn()) go(locked() ? "library" : (hv || "library"))') !== -1);
ok("사이드바 용어집 링크에 과목(?course=)을 붙임", appForHash.indexOf('it.href + "?course=" + c.id') !== -1);
ok("앱 내 이동은 pushState 로 남겨 뒤로가기를 지원", appForHash.indexOf("history.pushState") !== -1 &&
  appForHash.indexOf('addEventListener("popstate"') !== -1);

console.log("\n=== 12. 오프라인 파일 링크 정합성 ===");
const localApp = fs.readFileSync(path.join(ROOT, "TheoryTest1_PracticeExam.html"), "utf8");
ok("오프라인 앱이 로컬 용어집을 가리킴(사이드바 데이터)", localApp.indexOf('TheoryTest1_Glossary.html') !== -1);
ok("오프라인 앱에 깨진 상대 링크 없음", localApp.indexOf('href="glossary.html"') === -1 &&
  localApp.indexOf('href="print.html"') === -1 && localApp.indexOf("print.html") === -1);
ok("오프라인 용어집이 앱을 가리킴", glHtml.indexOf('href="TheoryTest1_PracticeExam.html"') !== -1);
ok("오프라인 용어집에 인쇄 페이지 링크 없음", glHtml.indexOf("PrintMocks") === -1);
const siteIndex = fs.readFileSync(path.join(ROOT, "site", "index.html"), "utf8");
ok("배포본 index 는 site 기준 링크 유지(사이드바 용어집)", siteIndex.indexOf('href: "glossary.html"') !== -1 &&
  siteIndex.indexOf("print.html") === -1);
ok("인쇄용 페이지가 완전히 제거됨 (파일 없음)", !fs.existsSync(path.join(ROOT, "TheoryTest1_PrintMocks.html")) &&
  !fs.existsSync(path.join(ROOT, "print_page.py")) &&
  !fs.existsSync(path.join(ROOT, "site", "print.html")));

console.log("\n=== 13. CSS 클래스 커버리지 (스타일 누락 방지) ===");
function classesUsed(src) {
  const set = {};
  const re = /class\s*=\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    m[1].split(/\s+/).forEach(function (c) { if (c) set[c] = 1; });
  }
  return set;
}
function classesDefined(css) {
  const set = {};
  const re = /\.([A-Za-z_][-\w]*)/g;
  let m;
  while ((m = re.exec(css)) !== null) set[m[1]] = 1;
  return set;
}
/* JS 훅 전용(스타일 없이 querySelector 용도) 클래스는 제외 */
const HOOK_ONLY = { lecfilter: 1, grpfilter: 1, tierfilter: 1, app: 1, s: 1, qres: 1, expl: 1 };
function cssCoverage(name, file) {
  const src = fs.readFileSync(file, "utf8");
  const css = src.replace(/<script[\s\S]*?<\/script>/g, function (blk) { return blk; });
  const styleBlocks = (src.match(/<style[\s\S]*?<\/style>/g) || []).join("\n");
  const used = classesUsed(src);
  const defined = classesDefined(styleBlocks);
  const missing = Object.keys(used).filter(function (c) {
    return !defined[c] && !HOOK_ONLY[c];
  });
  ok(name + " — 모든 클래스에 스타일이 정의됨", missing.length === 0, missing);
  ok(name + " — 스타일 블록이 비어 있지 않음", styleBlocks.length > 4000, styleBlocks.length);
}
cssCoverage("문제 앱", path.join(ROOT, "TheoryTest1_PracticeExam.html"));
cssCoverage("용어집", path.join(ROOT, "TheoryTest1_Glossary.html"));

console.log("\n=== 14. 반응형 CSS (데스크톱 / 노트북 / 태블릿 / 폰) ===");
const appBuilt = fs.readFileSync(path.join(ROOT, "TheoryTest1_PracticeExam.html"), "utf8");
ok("인라인 grid-template-columns 없음 (홈 화면 반응형 무력화 방지)",
  appBuilt.indexOf('style="grid-template-columns') === -1);
[1280, 1120, 1040, 860, 560].forEach(function (w) {
  ok("브레이크포인트 " + w + "px 포함", appBuilt.indexOf("max-width:" + w + "px") !== -1);
});
ok("폰 가로 화면 대응(orientation:landscape)", appBuilt.indexOf("orientation:landscape") !== -1);
ok("모바일 상단·하단 고정 바 스타일 포함",
  appBuilt.indexOf(".mbar{display:flex") !== -1 && appBuilt.indexOf(".mfoot{display:flex") !== -1);
ok("모바일에서 문항 목록 접힘 처리", appBuilt.indexOf("body.palette-open") !== -1);
ok("고정 바가 내용을 가리지 않도록 패딩", /body\.view-quiz \.wrap\{padding:56px 14px 86px\}/.test(appBuilt));
ok("시험 화면(폰)은 고정 바가 상단 바를 대신함", appBuilt.indexOf("body.view-quiz .topbar{display:none}") !== -1 &&
  appBuilt.indexOf('id="mHomeBtn"') !== -1);
ok("화면 종류별 여백 분리(view-home/quiz/result)", appBuilt.indexOf("body.view-quiz") !== -1);
ok("긴 영문·코드 넘침 방지(overflow-wrap)", appBuilt.indexOf("overflow-wrap:anywhere") !== -1);
ok("그리드 자식 축소 허용(min-width:0)", appBuilt.indexOf("min-width:0") !== -1);
ok("모바일 전용 바가 데스크톱에서 숨겨짐", /\.mbar,\.mfoot\{display:none\}/.test(appBuilt));
const glBuilt = fs.readFileSync(path.join(ROOT, "TheoryTest1_Glossary.html"), "utf8");
ok("용어집 표에 반응형 클래스", glBuilt.indexOf('class="grid responsive"') !== -1);
ok("용어집 모바일 카드형 목록 규칙", glBuilt.indexOf("table.grid.responsive tr{") !== -1);
ok("용어집 폰 브레이크포인트(560px)", glBuilt.indexOf("max-width:560px") !== -1);
ok("용어집에 사이드바 CSS 포함(shell.css)", glBuilt.indexOf(".sidebar{") !== -1 &&
  glBuilt.indexOf("body.sb-open .sidebar") !== -1);

console.log("\n=== 15. 학기/과목 커리큘럼 구조 ===");
const currSrc2 = fs.readFileSync(path.join(ROOT, "src", "curriculum.js"), "utf8");
ok("curriculum.js 존재", currSrc2.indexOf("var CURRICULUM") !== -1);
const appHtml3 = fs.readFileSync(path.join(ROOT, "TheoryTest1_PracticeExam.html"), "utf8");
ok("내장 curriculum 스크립트 포함", appHtml3.indexOf('id="curriculum-data"') !== -1);
ok("1학기(2026 가을학기) 포함", appHtml3.indexOf("2026 가을학기") !== -1);
ok("DND 과목 포함", appHtml3.indexOf("Deep Network Development") !== -1);
ok("2학기(2027 봄학기) 자리 포함", appHtml3.indexOf("2027 봄학기") !== -1);
["overview", "random", "mocks", "bank", "wrong", "glossary", "records"].forEach(function (id) {
  ok("섹션 id 정의: " + id, currSrc2.indexOf('id: "' + id + '"') !== -1);
});
ok("인쇄용 문제지 항목은 제거됨", currSrc2.indexOf('id: "print"') === -1 && currSrc2.indexOf("print.html") === -1);
ok("모든 라벨에 한국어/영어가 짝으로 있음", (function () {
  const ko = (currSrc2.match(/\bko:/g) || []).length;
  const en = (currSrc2.match(/\ben:/g) || []).length;
  return ko >= 13 && ko === en;
})());
ok("사이드바 CSS 포함(.sidebar/.sbNav/.sbItem)", appHtml3.indexOf(".sidebar{") !== -1 &&
  appHtml3.indexOf(".sbNav{") !== -1 && appHtml3.indexOf(".sbItem{") !== -1);
ok("모바일 드로어(sb-open) 규칙 포함", appHtml3.indexOf("body.sb-open .sidebar") !== -1);
ok("응시 화면에서 사이드바 숨김", appHtml3.indexOf("body.view-quiz .sidebar") !== -1);
ok("상단 바 고정: 줄바꿈 없음(flex-wrap:nowrap)", /\.topbar\{[^}]*flex-wrap:nowrap/.test(appHtml3));
ok("상단 바 오른쪽 항목은 줄어들지 않음(flex:0 0 auto)",
  appHtml3.indexOf(".topbar .langBox,.topbar .linkish{flex:0 0 auto;white-space:nowrap}") !== -1);
ok("breadcrumb 만 줄어들고 말줄임 처리", /\.crumbs\{[^}]*min-width:0/.test(appHtml3) &&
  /\.crumbs \.cur\{[^}]*text-overflow:ellipsis/.test(appHtml3));
ok("상단 바: StudyRoom 로고(홈) + 지구본(언어), 용어집/홈 링크 없음",
  appHtml3.indexOf('id="brandHome"') !== -1 && appHtml3.indexOf('id="libLangBtn"') !== -1 &&
  appHtml3.indexOf('class="linkish navGloss"') === -1 && appHtml3.indexOf('id="homeLink"') === -1 &&
  appHtml3.indexOf("navPaper") === -1);
ok("시험 화면에 나가기 버튼(exitBtn + mExitBtn)", appHtml3.indexOf('id="exitBtn"') !== -1 &&
  appHtml3.indexOf('id="mExitBtn"') !== -1);
ok("용어집 개수 상수가 glossary.json 과 일치", (function () {
  const gl = JSON.parse(fs.readFileSync(path.join(ROOT, "glossary.json"), "utf8"));
  return appHtml3.indexOf("GLOSSARY_COUNT = " + gl.terms.length) !== -1;
})());

console.log("\n=== 16. 연습 모드 시간 제한 없음 ===");
ok("무제한 타이머 CSS(.timer.free) 포함", appHtml3.indexOf(".timer.free") !== -1);
ok("경과 시간 라벨 CSS(.timerLabels.free) 포함", appHtml3.indexOf(".timerLabels.free") !== -1);
ok("모바일 무제한 배지 CSS(.mfree) 포함", appHtml3.indexOf(".mbar .mfree") !== -1);
ok("'시간 제한' 체크박스 마크업 포함", appHtml3.indexOf('id="optTimed"') !== -1);
ok("시간 제한 안내문 포함", appHtml3.indexOf("시간 제한 없이 연습") !== -1);
ok("i18n: 무제한 문자열 포함", appHtml3.indexOf("무제한") !== -1 && appHtml3.indexOf("untimed") !== -1);
ok("연습 모드 cfg 에 timed 플래그 사용", appHtml3.indexOf("timed: timed") !== -1 &&
  appHtml3.indexOf("timed: true") !== -1 && appHtml3.indexOf("timed: false") !== -1);
ok("실전 모드는 항상 시간 제한", /mode: "exam"[^}]*timed: true/.test(appHtml3));
ok("자동 제출은 시간 제한 모드에서만", appHtml3.indexOf("if (S.timed) {") !== -1 &&
  appHtml3.indexOf("S.remain <= 0") !== -1);

console.log("\n=== 16-b. 타이머 끄기 기능 (공포 방지) ===");
ok("타이머 설정 저장 키 포함", appHtml3.indexOf("dnd_tt1_timer") !== -1);
ok("개요/모의고사에 타이머 끄기 체크박스", appHtml3.indexOf('id="optTimerOff"') !== -1);
ok("시험 화면에 타이머 끄기 버튼", appHtml3.indexOf('id="timerToggle"') !== -1);
ok("모의고사 행에 '타이머 끔' 표시 지원", appHtml3.indexOf("home.mock.metaOff") !== -1);
ok("타이머 끄면 모의고사도 무제한 (설정 반영)", appHtml3.indexOf("&& !timerOffPref()") !== -1);
ok("안내문: 모의고사·실전도 시간 제한 사라짐", appHtml3.indexOf("모의고사·실전 모드에서도 시간 제한이 사라지고") !== -1);

console.log("\n=== 17. 레이아웃 가독성 회귀 방지 (한 글자씩 쪼개짐 방지) ===");
ok("모의고사 행이 2줄 그리드(.mockRow)", appHtml3.indexOf(".mockRow{display:grid") !== -1);
ok("모의고사 행 메타가 둘째 줄 전체 폭", appHtml3.indexOf(".mockRow .meta{grid-column:1 / -1") !== -1);
ok("행 텍스트는 단어 단위 유지(overflow-wrap:normal)",
  appHtml3.indexOf(".rowGrid,.rowGrid .name,.rowGrid .muted,.mockRow,.mockRow .name,.mockRow .meta,.mockRow .best") !== -1);
ok("좁은 flex 행에 overflow-wrap:anywhere 미적용",
  !/\.rowGrid[^{]*\{[^}]*overflow-wrap:anywhere/.test(appHtml3) &&
  !/\.mockRow[^{]*\{[^}]*overflow-wrap:anywhere/.test(appHtml3));
ok("긴 코드 텍스트에는 anywhere 유지(넘침 방지)", /\.qText[^{]*\{[^}]*overflow-wrap:anywhere/.test(appHtml3));
ok("사이드바(오른쪽 드로어) 폭 280px", appHtml3.indexOf("width:280px") !== -1);
ok("모의고사 링크 라벨 축약(mocks.titleShort)", appHtml3.indexOf("mocks.titleShort") !== -1 &&
  appHtml3.indexOf("실제 시험 형식") !== -1);
ok("모의고사 이름 줄바꿈 방지(nowrap+ellipsis)", appHtml3.indexOf(".mockRow .name{font-weight:600;white-space:nowrap") !== -1);

console.log("\n=== 18. ☁ 클라우드 동기화 (선택 기능) 배선·안전 점검 ===");
(function () {
  const syncCoreSrc = fs.readFileSync(path.join(ROOT, "src", "sync_core.js"), "utf8");
  const syncSrc = fs.readFileSync(path.join(ROOT, "src", "sync.js"), "utf8");
  /* 빌드 산출물에 스크립트 3종이 들어 있고, 설정은 비어 있으면 {} 로 주입된다 */
  ["sync-config", "sync-core", "sync-logic"].forEach(function (id) {
    ok("앱 HTML 에 " + id + " 스크립트 포함", appHtml3.indexOf('id="' + id + '"') !== -1);
  });
  ok("용어집 HTML 에도 동기화 스크립트 포함", glHtml.indexOf('id="sync-core"') !== -1 &&
    glHtml.indexOf('id="sync-logic"') !== -1 && glHtml.indexOf('id="sync-config"') !== -1);
  /* 주입된 설정은 sync_config.json 과 **항상 똑같아야** 한다 (켜짐/꺼짐 어느 상태든 검증) */
  const injectedCfg = function (h) {
    const m = h.match(/window\.__SYNC_CONFIG__ = (\{.*?\});<\/script>/);
    return m ? JSON.parse(m[1]) : null;
  };
  const wantCfg = (function () {
    const raw = JSON.parse(fs.readFileSync(path.join(ROOT, "sync_config.json"), "utf8"));
    const out = {};
    ["url", "anonKey", "emailDomain"].forEach(function (k) {
      const v = typeof raw[k] === "string" ? raw[k].trim() : "";
      if (v) out[k] = v;
    });
    /* 소셜 로그인: 허용 목록(google/kakao/github/apple/azure)에 있는 이름만, 중복 제거 → sync_build.py 와 같은 규칙 */
    let oa = raw.oauth;
    if (typeof oa === "string") oa = oa.split(",");
    if (Array.isArray(oa)) {
      const clean = [];
      oa.forEach(function (x) {
        const k = String(x == null ? "" : x).trim().toLowerCase();
        if (["google", "kakao", "github", "apple", "azure"].indexOf(k) !== -1 && clean.indexOf(k) === -1) clean.push(k);
      });
      if (clean.length) out.oauth = clean;
    }
    /* 가입 허용 도메인 (sync_build.py · sync_core.signupDomains 와 같은 규칙) */
    let dm = raw.signupDomains;
    if (typeof dm === "string") dm = dm.split(",");
    if (Array.isArray(dm)) {
      const dclean = [];
      dm.forEach(function (x) {
        const d = String(x == null ? "" : x).trim().toLowerCase().replace(/^@/, "");
        if (d && dclean.indexOf(d) === -1) dclean.push(d);
      });
      if (dclean.length) out.signupDomains = dclean;
    }
    return (out.url && out.anonKey) ? out : {};      /* 빈/반쪽 설정 → 꺼짐({}) 으로 주입 */
  })();
  ok("앱 HTML 의 주입 설정 = sync_config.json", JSON.stringify(injectedCfg(appHtml3)) === JSON.stringify(wantCfg),
    injectedCfg(appHtml3));
  ok("용어집 HTML 의 주입 설정도 동일", JSON.stringify(injectedCfg(glHtml)) === JSON.stringify(wantCfg),
    injectedCfg(glHtml));
  ok("계정 칸/모달 자리(acctBox, syncHost) 포함", appHtml3.indexOf('id="acctBox"') !== -1 &&
    appHtml3.indexOf('id="syncHost"') !== -1 && glHtml.indexOf('id="acctBox"') !== -1);
  /* 신기능 안내 창(공지): 자리 + 영어 문구 + 체크박스 + 전용 스타일 + 새 키 */
  ok("신기능 공지 자리(noticeHost) 포함", appHtml3.indexOf('id="noticeHost"') !== -1 &&
    glHtml.indexOf('id="noticeHost"') !== -1);
  ok("공지 문구(영어) + 체크박스 + 버튼", syncSrc.indexOf("Don't show this again for a week") !== -1 && syncSrc.indexOf("noticeChk") !== -1 &&
    syncSrc.indexOf("noticeOk") !== -1);
  ok("공지 = 모던 시트(배지/킥커/아이콘 항목/한 줄 팁/닫기 X)",
    ["noticeBadge", "noticeKicker", "noticeItem", "noticeIco", "noticeTip", "noticeX", "NOTICE_SVG"].every(function (c) {
      return syncSrc.indexOf(c) !== -1;
    }));
  ok("공지 스타일 포함(.noticeTitle/.noticeItem/.noticeChk/.noticeOkBtn)",
    [".noticeTitle{", ".noticeItem{", ".noticeChk{", ".noticeOkBtn{"].every(function (c) {
      return appHtml3.indexOf(c) !== -1 && glHtml.indexOf(c) !== -1;
    }));
  /* 창/시트: 화면을 넘지 않고(창 안에서만 스크롤) 배경 페이지는 잠근다 → 스크롤 막대가 두 개 생기지 않는다 */
  ok("창/시트: 창 높이 제한 + 배경 스크롤 잠금(sheetOpen)",
    ["body.sheetOpen{overflow:hidden}", "max-height:calc(100vh - 32px)", ".noticeBody{flex:1 1 auto;overflow:auto",
      ".noticeFoot{flex:0 0 auto"].every(function (c) {
        return appHtml3.indexOf(c) !== -1 && glHtml.indexOf(c) !== -1;
      }) &&
      syncSrc.indexOf("function syncScrollLock()") !== -1 &&
      syncSrc.indexOf('cur.push("sheetOpen")') !== -1 &&
      syncSrc.indexOf("syncScrollLock();") !== -1 &&
      /renderModal[\s\S]{0,400}syncScrollLock\(\)/.test(syncSrc) &&
      /closeNotice[\s\S]{0,600}syncScrollLock\(\)/.test(syncSrc));
  ok("공지는 새 키(dnd_tt1_notice)만 추가", syncSrc.indexOf('"dnd_tt1_notice"') !== -1);
  ok("동기화 UI 스타일 포함(.acctBox/.syncCard/.acctDot)", [".acctBox{", ".syncCard{", ".acctDot{"].every(function (c) {
    return appHtml3.indexOf(c) !== -1 && glHtml.indexOf(c) !== -1;
  }));
  /* 인프런 톤(초록 브랜드) + 로그인 창 리디자인 + 소셜 로그인 준비 */
  ok("브랜드 초록 + StudyRoom 워드마크 스타일", [".studyroom-logo-text{", "-brand:#00c471", "color:#00C471"].every(function (c) {
    return appHtml3.indexOf(c) !== -1 && glHtml.indexOf(c) !== -1;
  }));
  ok("로그인 창 스타일(로고·눈 아이콘·초록 버튼·링크 줄·소셜 로고)", [".syncLogo{", ".syncEye{", ".syncCard .btn.primary{",
      ".syncLinks{", ".oauthBtn{", ".oauthBtn svg{", ".oauthGoogle{", ".oauthKakao{"].every(function (c) {
    return appHtml3.indexOf(c) !== -1 && glHtml.indexOf(c) !== -1;
  }));
  ok("프로필 메뉴 스타일(이름·Student·항목·아이콘)", [".acctMenu{", ".acctMenuHead{", ".acctMenuItem{",
      ".acctMenuAvatar{"].every(function (c) {
    return appHtml3.indexOf(c) !== -1 && glHtml.indexOf(c) !== -1;
  }));
  ok("대시보드 스타일(보조 내비·카드·히트맵)", [".dashWrap{", ".dashNavItem{", ".dashCard{", ".dashHeat{",
      ".dashCell.lvl1{", ".dashDayDot{"].every(function (c) {
    return appHtml3.indexOf(c) !== -1;
  }) && appHtml3.indexOf("renderDashboard") !== -1 && appHtml3.indexOf("dashYearlyHtml") !== -1);
  ok("소셜 로그인은 설정에 적은 제공자만 노출", syncSrc.indexOf("oauthList") !== -1 &&
    syncSrc.indexOf("/auth/v1/authorize") === -1 && syncSrc.indexOf('authUrl("authorize?provider=') !== -1);
  /* 라이브러리 레이아웃: 인프런 실측 검색 알약(58px·테두리·radius 50px) · 검색창 가운데 정렬(인프런과 동일) */
  ok("라이브러리: 인프런 검색 알약 + 가운데 정렬", [".libWrap{max-width:none", "height:58px", "border-radius:50px",
      "max-width:520px", "margin:0 auto", ".libSearchBtn{flex:0 0 auto;width:42px;height:42px",
      "justify-content:flex-start", "justify-content:start", ".libTab:first-child{padding-left:0}",
      "grid-template-columns:repeat(auto-fill,218px)", "max-width:1460px"].every(function (c) {
    return appHtml3.indexOf(c) !== -1 && glHtml.indexOf(c) !== -1;
  }));
  /* 헤더 오른쪽(지구본·Sign in)도 인프런 실측값: 42px 회색 원 · radius 32px 알약 · 자리글씨 #868e96 */
  ok("헤더 = 인프런 톤(지구본 42px 원 · 회색 알약 Sign in)", [".iconBtn{display:inline-flex;align-items:center;justify-content:center;width:42px",
      "rgba(135,143,151,.1)", "border-radius:32px;font-size:16px", "color:#868e96"].every(function (c) {
    return appHtml3.indexOf(c) !== -1 && glHtml.indexOf(c) !== -1;
  }));
  ok("Montserrat 폰트 로드(워드마크) — 실패해도 폴백", appHtml3.indexOf("family=Montserrat:wght@700") !== -1 &&
    glHtml.indexOf("family=Montserrat:wght@700") !== -1);
  ok("좁은 화면에서 닉네임만 숨기는 규칙", appHtml3.indexOf(".acctName{display:none}") !== -1);
  /* fetch 는 window 로만 접근 (테스트 mock 가능 · node 전역 fetch 로 새지 않게) */
  ok("네트워크는 window.fetch 만 사용", syncSrc.indexOf("window.fetch") !== -1 &&
    !/\breturn fetch\(/.test(syncSrc));
  /* anon key 만 쓴다: service_role 문자열은 코드·설정·산출물 어디에도 없어야 한다 */
  const files = ["TheoryTest1_PracticeExam.html", "TheoryTest1_Glossary.html",
    path.join("site", "index.html"), path.join("site", "glossary.html"), "sync_config.json"];
  const badFiles = files.filter(function (f) {
    const p = path.join(ROOT, f);
    return fs.existsSync(p) && fs.readFileSync(p, "utf8").indexOf("service_role") !== -1;
  });
  ok("산출물·설정에 service_role 문자열 없음", badFiles.length === 0, badFiles);
  ok("소스에도 service_role 문자열 없음", syncCoreSrc.indexOf("service_role") === -1 &&
    syncSrc.indexOf("service_role") === -1);
  const syncBuildSrc = fs.readFileSync(path.join(ROOT, "sync_build.py"), "utf8");
  ok("빌드 스크립트가 anon role 이 아니면 중단", syncBuildSrc.indexOf('role != "anon"') !== -1);
  /* 새 API 키 형식: 관리자(sb_secret_)는 거부, 공개(sb_publishable_)는 허용 */
  ok("빌드 스크립트가 새 관리자 키(sb_secret_)도 중단", syncBuildSrc.indexOf('NEW_SECRET = "sb_secret_"') !== -1 &&
    syncBuildSrc.indexOf('startswith(NEW_SECRET)') !== -1);
  ok("빌드 스크립트가 새 공개 키(sb_publishable_)를 인지", syncBuildSrc.indexOf('NEW_PUBLISHABLE = "sb_publishable_"') !== -1);
  /* 소셜 로그인: 빌드가 **허용 목록에 있는 이름만** 사이트로 내보낸다 */
  ok("빌드가 소셜 제공자 허용 목록만 주입", syncBuildSrc.indexOf('OAUTH_PROVIDERS = ("google", "kakao", "github", "apple", "azure")') !== -1 &&
    syncBuildSrc.indexOf('if key in OAUTH_PROVIDERS and key not in picked') !== -1 && syncBuildSrc.indexOf('cfg["oauth"] = picked') !== -1);
  ok("주입된 소셜 목록도 허용 목록 안에서만", (function () {
    const c = injectedCfg(appHtml3);
    return !!(c && typeof c === "object") &&
      (!c.oauth || c.oauth.every(function (p) { return ["google", "kakao", "github", "apple", "azure"].indexOf(p) !== -1; })) &&
      JSON.stringify(c.oauth || null) === JSON.stringify(wantCfg.oauth || null);
  })(), injectedCfg(appHtml3));
  ok("배포 안전 점검이 sb_secret_ 도 검사", fs.readFileSync(path.join(ROOT, "build_site.py"), "utf8")
    .indexOf('"sb_secret_" in txt') !== -1);
  ok("keepalive 는 apikey 헤더만 사용(새 키 호환)", (function () {
    const y = fs.readFileSync(path.join(ROOT, "site", ".github", "workflows", "keepalive.yml"), "utf8");
    return y.indexOf("-H \"apikey: $SUPABASE_ANON_KEY\"") !== -1 &&
      y.indexOf("Authorization: Bearer $SUPABASE_ANON_KEY") === -1;
  })());
  /* 기존 저장 키 이름은 그대로, 새 키만 추가 */
  const appSrc2 = fs.readFileSync(path.join(ROOT, "src", "app.js"), "utf8");
  const glSrc2 = fs.readFileSync(path.join(ROOT, "src", "glossary.js"), "utf8");
  ok("기존 키 이름 유지(dnd_tt1_v1 / dnd_tt1_vocab / lang / timer)",
    appSrc2.indexOf('"dnd_tt1_v1"') !== -1 && appSrc2.indexOf('"dnd_tt1_timer"') !== -1 &&
    glSrc2.indexOf('"dnd_tt1_vocab"') !== -1 && glSrc2.indexOf('"dnd_tt1_lang"') !== -1);
  ok("새 키는 추가만 (auth/owner)", syncSrc.indexOf('"dnd_tt1_auth"') !== -1 &&
    syncSrc.indexOf('"dnd_tt1_owner"') !== -1 &&
    appSrc2.indexOf("dnd_tt1_auth") === -1 && glSrc2.indexOf("dnd_tt1_auth") === -1);
  /* sync.js 가 쓰는 문자열이 i18n(앱)과 용어집 STR 에 ko/en 모두 있는지 */
  const used = {};
  const re = /t\("(sync\.[A-Za-z]+)"/g;
  let m;
  while ((m = re.exec(syncSrc))) used[m[1]] = 1;
  const i18nSrc2 = fs.readFileSync(path.join(ROOT, "src", "i18n.js"), "utf8");
  const missing = Object.keys(used).filter(function (k) {
    const inApp = i18nSrc2.indexOf('"' + k + '"') !== -1;
    const inGloss = glSrc2.indexOf('"' + k + '"') !== -1;
    return !inApp || !inGloss;
  });
  ok("동기화 문자열이 앱 i18n + 용어집 STR 에 모두 있음 (" + Object.keys(used).length + "개)",
    missing.length === 0, missing);
})();


console.log("\n=== 결과: " + pass + " PASS / " + fail + " FAIL ===");
process.exit(fail === 0 ? 0 : 1);
