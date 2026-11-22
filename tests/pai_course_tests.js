/* Principle of Artificial Intelligence course/data integrity checks. Run: node tests/pai_course_tests.js */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ROOT = path.join(__dirname, "..");
let pass = 0, fail = 0;
function ok(name, condition, detail) {
  if (condition) { pass++; console.log("PASS  " + name); }
  else { fail++; console.error("FAIL  " + name + (detail === undefined ? "" : " -> " + JSON.stringify(detail))); }
}
function eq(name, actual, expected) { ok(name, JSON.stringify(actual) === JSON.stringify(expected), { actual, expected }); }
function script(id) {
  const html = fs.readFileSync(path.join(ROOT, "site", "index.html"), "utf8");
  const m = html.match(new RegExp('<script id="' + id + '">([\\s\\S]*?)<\\/script>'));
  if (!m) throw new Error("Missing inline script: " + id);
  return m[1];
}
const context = { window: {}, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(ROOT, "site", "pai_questions.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(ROOT, "site", "pai_course.js"), "utf8"), context);
const data = context.window.__PAI_QUESTION_DATA__;
const mocks = context.window.__PAI_MOCK_DATA__;
const qs = data.questions;
eq("전체 원문 매핑 118개", qs.length, 118);
eq("주제별 개수 AI/Search/ML", ["general", "search", "ml"].map(s => qs.filter(q => q.scope === s).length), [12, 67, 39]);
eq("주제별 원문 번호 연속", ["general", "search", "ml"].map(s => qs.filter(q => q.scope === s).every((q, i) => q.sourceNumber === i + 1)), [true, true, true]);
eq("고정 ID 형식과 중복 없음", [qs.every(q => /^PAI-(G|S|ML)-\d{2}$/.test(q.id)), new Set(qs.map(q => q.id)).size], [true, 118]);
ok("모든 문항에 영어 지문·주제·해설", qs.every(q => q.prompt.length > 10 && q.topic && q.explanation.length > 40));
ok("단일정답 4지선다·보기 중복 없음", qs.every(q => q.options.length === 4 && new Set(q.options).size === 4 && q.correct.length === 1 && /^[A-D]$/.test(q.correct[0])));
ok("정답 문자가 실제 보기를 가리킴", qs.every(q => q.options["ABCD".indexOf(q.correct[0])]));
eq("정답 위치 A–D 분포", ["A", "B", "C", "D"].map(k => qs.filter(q => q.correct[0] === k).length > 20), [true, true, true, true]);
eq("모의고사 5세트", mocks.mocks.length, 5);
ok("모의고사 시간·연습 목표·문항 참조", mocks.mocks.every(m => m.minutes === 30 && m.pass === Math.ceil(m.questions.length * .6) && new Set(m.questions).size === m.questions.length && m.questions.every(id => qs.some(q => q.id === id))));
eq("종합 모의고사 각 20문항", mocks.mocks.filter(m => m.scope === "all").map(m => m.questions.length), [20, 20]);
eq("실제 시험 30분과 연습 설정 분리", [data.meta.exam_minutes, data.meta.exam_questions, data.meta.exam_pass], [30, 20, 12]);
const curriculum = new Function(script("curriculum-data") + "\nreturn CURRICULUM;")();
const course = curriculum.flatMap(s => s.courses).find(c => c.id === "pai");
ok("PAI 과목·대표 이미지·학습 항목 존재", course && course.image === "assets/courses/pai.jpg" && course.items.some(i => i.id === "bank") && course.items.some(i => i.id === "mocks"));
eq("PAI 학습 범위 4개", course.sections.map(s => s.scope), ["all", "general", "search", "ml"]);
eq("일정: 신청 시작 + 마감 3 + 시험 3", course.schedule.map(s => s.id), ["registration", "deadline1", "exam1", "deadline2", "exam2", "deadline3", "exam3"]);
eq("Z 코드 실제 도착 시간", course.schedule.filter(s => /^exam/.test(s.id)).map(s => s.at), ["2026-12-18T14:30", "2027-01-15T12:00", "2027-01-29T12:00"]);
const officialStarts = ["2026-12-18T14:00", "2027-01-15T11:30", "2027-01-29T11:30"];
const deadlines = course.schedule.filter(s => /^deadline/.test(s.id));
eq("48시간 전 권장 마감 계산", deadlines.map((d, i) => (new Date(officialStarts[i]) - new Date(d.at)) / 3600000), [48, 48, 48]);
ok("Neptun·Lovarda·최대 2회·부정행위 안내", [course.calendarIntro.ko, course.calendarFootnote.ko, course.calendarGrade.ko].join(" ").includes("Neptun") && course.calendarFootnote.ko.includes("Lovarda") === false && course.schedule.some(s => s.note.ko.includes("Lovarda")) && course.calendarIntro.ko.includes("최대 두") && course.calendarFootnote.ko.includes("자동 과목 낙제"));
const html = fs.readFileSync(path.join(ROOT, "site", "index.html"), "utf8");
["pai_questions.js", "pai_course.js", "pai_course.css", "__PAI_QUESTION_DATA__", "__PAI_MOCK_DATA__", "__PAICourseUI", 'q.course === "pai"'].forEach(token => ok("index 연결: " + token, html.includes(token)));
ok("인라인 app JavaScript 문법", (() => { try { new Function(script("app-logic")); return true; } catch (e) { console.error(e.message); return false; } })());
const host = { innerHTML: "", querySelectorAll: () => [] };
context.window.__PAICourseUI.render(host, "ko");
ok("학습 홈 렌더·118개·Z 일정·규정", host.innerHTML.includes("118") && host.innerHTML.includes("2026. 12. 18. 14:30") && host.innerHTML.includes("2027. 1. 29. 12:00") && host.innerHTML.includes("USB") && host.innerHTML.includes("공식 답안이 아닙니다"));
ok("About·Guide 렌더", context.window.__PAICourseUI.about("ko").includes("118") && context.window.__PAICourseUI.guide("en").includes("30-minute"));
ok("대표 SVG 실제 파일", fs.existsSync(path.join(ROOT, "site", "assets", "courses", "pai.svg")) && fs.readFileSync(path.join(ROOT, "site", "assets", "courses", "pai.svg"), "utf8").includes("<svg"));
ok("미완성 편집 마커 없음", !/\/\*\s*(NEXT|PAI_DETAILS)\s*\*\//.test(fs.readFileSync(path.join(ROOT, "site", "pai_questions.js"), "utf8") + fs.readFileSync(path.join(ROOT, "site", "pai_course.js"), "utf8") + html));
console.log("\nPAI TEST SUMMARY: " + pass + " PASS / " + fail + " FAIL");
process.exitCode = fail ? 1 : 0;
