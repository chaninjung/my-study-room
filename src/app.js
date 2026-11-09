/* ===== app.js — 시험 대비 문제 앱 (vanilla JS, DOM) ===== */
(function () {
  "use strict";
  /* 데이터는 '부팅 시점'에 읽는다.
     비밀번호 게이트가 켜져 있으면 이 스크립트가 실행될 때는 아직 복호화 전(null)이고,
     게이트가 복호화를 마친 뒤 window.__bootApp() 을 호출한다. */
  let DATA = null, MOCKS = null, META = null, FULL = [], ALL = [];
  function resolveData() {
    DATA = window.__QUESTION_DATA__ || null;
    MOCKS = window.__MOCK_DATA__ || null;
    META = (DATA && DATA.meta) || {};
    FULL = (DATA && DATA.questions) || [];     /* 전체 문제은행 (범위 필터 없음) */
    refreshPool();                             /* ALL = 지금 단원(범위)의 문항만 */
  }
  /* ---------- 시험 범위(스코프): 이론1 = 강의 1–6 + NumPy · 이론2 = 강의 7 이상 ----------
     curriculum.js sections[].scope 로 정해지고 문제·모의고사·오답·랜덤이 이 범위로 필터된다.
     문항마다 lecture 태그가 있어 데이터를 옮기지 않고도 범위를 나눌 수 있다. */
  function lectureNo(l) {
    const m = /^Lecture (\d+)$/.exec(l || "");
    return m ? parseInt(m[1], 10) : 0;
  }
  function scopeOfQuestion(q) { return lectureNo(q && q.lecture) >= 7 ? "t2" : "t1"; }
  function sectionScope() {
    const s = sectionById(activeSectionId());
    return (s && s.scope) || "t1";
  }
  function scopedQuestions(scope) {
    const sc = scope || sectionScope();
    return FULL.filter(function (q) { return scopeOfQuestion(q) === sc; });
  }
  function refreshPool() { ALL = scopedQuestions(); }
  function scopedMocks() {
    const sc = sectionScope();
    return MOCKS ? MOCKS.mocks.filter(function (m) { return (m.scope || "t1") === sc; }) : [];
  }
  /* 지금 단원의 모의고사 형식 — 없으면 데이터 기본값(이론 테스트 1: 15문항/45분/통과 7) */
  function sectionExam() {
    const s = sectionById(activeSectionId());
    if (s && s.exam) return s.exam;
    return { questions: META.exam_questions || 15, minutes: META.exam_minutes || 45,
             pass: META.exam_pass || 7, numpy: (MOCKS && MOCKS.meta.numpy_per_mock) || 6 };
  }
  const LS_KEY = "dnd_tt1_v1";
  const LS_TIMER = "dnd_tt1_timer";     /* 타이머 끄기 설정 (이 브라우저에 저장) */
  const GLOSSARY_COUNT = 411;   /* glossary.json 의 용어 수 (테스트가 일치 여부를 검사) */
  const app = document.getElementById("app");

  /* ---------- 타이머 켜기/끄기 설정 ---------- */
  function timerOffPref() {
    try { return localStorage.getItem(LS_TIMER) === "off"; } catch (e) { return false; }
  }
  function setTimerOffPref(v) {
    try { localStorage.setItem(LS_TIMER, v ? "off" : "on"); } catch (e) { /* ignore */ }
  }

  /* ---------- 저장소 ---------- */
  let store = loadStore();
  function loadStore() {
    try {
      const s = JSON.parse(localStorage.getItem(LS_KEY));
      if (s && typeof s === "object") {
        return { history: s.history || [], wrong: s.wrong || {}, best: s.best || 0,
                 mockBest: s.mockBest || {}, randBest: s.randBest || s.rand10Best || 0,
                 randCount: s.randCount || 0 };
      }
    } catch (e) { /* ignore */ }
    return { history: [], wrong: {}, best: 0, mockBest: {}, randBest: 0, randCount: 0 };
  }
  function saveStore() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
    notifySync();
  }
  /* 기록이 바뀌면 (로그인 상태일 때만) 클라우드 동기화에 알린다 — sync.js 가 3초 디바운스 */
  function notifySync() {
    try { if (window.__sync) window.__sync.onLocalChange(); } catch (e) { /* ignore */ }
  }
  function syncNow() {
    try { if (window.__sync) window.__sync.syncNow("app"); } catch (e) { /* ignore */ }
  }
  /* 초기화: 로컬뿐 아니라 서버 사본도 비운다 (scope = "v1" | "vocab") */
  function resetRemote(scope) {
    try { if (window.__sync) window.__sync.resetRemote(scope); } catch (e) { /* ignore */ }
  }

  /* ---------- 유틸 ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function el(id) { return document.getElementById(id); }
  function byLecture(list) {
    const m = {};
    list.forEach(function (q) { m[q.lecture] = (m[q.lecture] || 0) + 1; });
    return m;
  }
  /* 현재 언어의 문항 텍스트 */
  function qf(q, field) { return questionField(q, field); }
  /* 모의고사 이름 (영어 이름이 있으면 사용) */
  function mockLabel(m) {
    let lbl = (LANG === "en" && m.label_en) ? m.label_en : m.label;
    lbl = lbl.replace(/⭐\s*/g, "");                 /* 별 이모지 제거 */
    lbl = lbl.replace(/\s*—\s*\d+ questions/g, "");  /* 영어 " — 49 questions" 제거 */
    lbl = lbl.replace(/\s*\(\d+문항\)/g, "");         /* 한국어 "(49문항)" 제거 */
    return lbl;
}
  /* 좁은 화면(모바일) 여부 — 테스트 스텁에서는 false */
  function isNarrow() {
    try {
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(max-width:860px)").matches;
      }
    } catch (e) { /* ignore */ }
    return false;
  }

  /* ---------- 상태 ---------- */
  let S = null;          // 현재 세션
  let timerId = null;

  /* 진행 중 세션의 짧은 breadcrumb — 상단 바가 길어져 내비게이션이 밀리지 않도록 */
  function crumbFor(cfg) {
    if (cfg.mode === "mock" && cfg.mockId && MOCKS) {
      const m = MOCKS.mocks.filter(function (x) { return x.id === cfg.mockId; })[0];
      if (m) return mockLabel(m);
    }
    const e = I18N["mode." + cfg.mode];
    const base = e ? (e[LANG] || e.ko) : cfg.label;
    if (cfg.detailKey) return base + " · " + tf(cfg.detailKey, cfg.detailArg);
    if (cfg.detail) return base + " · " + cfg.detail;
    return base;
  }

  function newSession(questions, cfg) {
    const qs = buildSession(questions, cfg);
    /* 타이머 끄기 설정이 켜져 있으면 모의고사·실전 모드도 시간 제한 없이 진행한다 */
    const timed = (cfg.timed !== false) && !timerOffPref();
    S = {
      cfg: cfg,
      questions: qs,
      answers: {},
      revealed: {},
      flags: {},
      bookmarks: {},
      visited: {},
      cur: 0,
      startAt: Date.now(),
      timed: timed,
      remain: timed ? cfg.minutes * 60 : 0,
      elapsed: 0,
      submitted: false,
      results: null,
      total: 0,
      pass: passLine(qs.length, META, cfg.mode === "exam" || cfg.mode === "mock")
    };
    qs.forEach(function (q) { S.answers[q.sid] = []; });
    setCrumb(crumbFor(cfg));
    startTimer();
  }

  function setCrumb(text) {
    const el2 = document.getElementById("crumbCur");
    if (el2) el2.textContent = text;
  }

  /* 현재 화면 종류를 body 클래스로 표시 (모바일 고정 바 여백 계산용) */
  function setView(v) {
    const b = document.body;
    if (!b) return;
    const cls = String(b.className || "").replace(/\s*view-\w+/g, "");
    b.className = (cls + " view-" + v).replace(/^\s+/, "");
  }

  /* Overview 통계 */
  function stats() {
    const n = S.questions.length;
    let visited = 0, answered = 0, marked = 0, book = 0;
    S.questions.forEach(function (q) {
      if (S.visited[q.sid]) visited++;
      if (S.answers[q.sid] && S.answers[q.sid].length) answered++;
      if (S.flags[q.sid]) marked++;
      if (S.bookmarks[q.sid]) book++;
    });
    return {
      total: n, visited: visited, notVisited: n - visited,
      answered: answered, notAnswered: visited - answered,
      marked: marked, book: book
    };
  }

  /* 시험 중 '타이머 끄기/켜기' — 설정은 브라우저에 저장되어 다음에도 유지된다 */
  function toggleTimer() {
    const off = timerOffPref();
    setTimerOffPref(!off);
    if (S) {
      if (!off) {
        /* 끄기: 남은 시간을 경과 시간으로 환산하고 카운트다운 중단 */
        const total = (S.cfg.minutes || META.exam_minutes) * 60;
        S.elapsed = S.timed ? Math.max(0, total - S.remain) : S.elapsed;
        S.timed = false;
        S.remain = 0;
      } else {
        /* 켜기: 카운트다운 재개 (모의고사는 설정된 시간, 연습은 60분) */
        S.timed = true;
        S.remain = (S.cfg.minutes || (S.cfg.mode === "mock" ? META.exam_minutes : 60)) * 60;
      }
      if (timerId) { clearInterval(timerId); timerId = null; }
      startTimer();
      renderQuiz();
    } else {
      renderView();
    }
  }

  function startTimer() {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(function () {
      if (!S || S.submitted) return;
      if (S.timed) {
        S.remain--;
        paintTimers();
        if (S.remain <= 0) { clearInterval(timerId); submit(true); }
      } else {
        /* 연습 모드: 제한 없음 → 경과 시간만 올라간다 (자동 제출 없음) */
        S.elapsed++;
        paintTimers();
      }
    }, 1000);
  }

  /* 데스크톱 우측 타이머 + 모바일 상단 타이머를 함께 갱신 */
  function timerClass() {
    if (!S.timed) return "timer free";
    return "timer" + (S.remain <= 60 ? " danger" : S.remain <= 300 ? " warn" : "");
  }
  function paintTimers() {
    const cls = timerClass();
    const text = S.timed ? formatClock(S.remain) : formatClock(S.elapsed);
    const t = el("timer");
    if (t) { t.textContent = text; t.className = cls; }
    document.querySelectorAll("[data-timer]").forEach(function (m) {
      m.textContent = text;
      m.className = cls + " mtimer";
    });
  }

  /* ---------- 화면 라우팅 (사이드바: 학기 → 과목 → 섹션) ---------- */
  let VIEW = "overview";
  let COURSE_ID = "";        /* 과목 상세 페이지에서 보고 있는 과목 id */
  let COURSE_TAB = "about";  /* 과목 상세 탭: about | mock | learners */
  let COURSE_SECTION = "";   /* 과목 단원(섹션) id — 이론1/이론2/코딩/오럴. 비면 그 과목의 첫 단원 */
  let APP_READY = false;     /* 부팅 전 주소 정리는 replace, 부팅 후 앱 내 이동은 push(뒤로가기 지원) */
  const LEC_ORDER = ["Lecture 1", "Lecture 2", "Lecture 3", "Lecture 4", "Lecture 5", "Lecture 6", "Lecture 7", "NumPy"];

  function label(o) { return (o && (o[LANG] || o.ko)) || ""; }
  function wrongCount() {
    /* 문제은행에 존재하는 문항만 센다 — 삭제된 문항 id 가 오답노트에 남아 있어도 숫자가 어긋나지 않도록 */
    return Object.keys(store.wrong).filter(function (id) {
      return store.wrong[id] > 0 && FULL.some(function (q) { return q.id === id; });
    }).length;
  }
  function courseFor(id) {
    const all = allCourses();
    for (let i = 0; i < all.length; i++) { if (all[i].course.id === id) return all[i]; }
    return all[0] || { sem: CURRICULUM[0], course: CURRICULUM[0].courses[0] };
  }
  function currentCourse() {
    if (VIEW === "course" && COURSE_ID) return courseFor(COURSE_ID);
    for (let i = 0; i < CURRICULUM.length; i++) {
      const sem = CURRICULUM[i];
      for (let j = 0; j < sem.courses.length; j++) {
        const c = sem.courses[j];
        for (let k = 0; k < c.items.length; k++) {
          if (c.items[k].id === VIEW) return { sem: sem, course: c };
        }
      }
    }
    return { sem: CURRICULUM[0], course: CURRICULUM[0].courses[0] };
  }
  /* ---------- 과목 단원(섹션): 이론1 · 이론2 · 코딩 · 오럴 ----------
     curriculum.js 의 course.sections 에서 온다. 비어 있으면 단원 기능이 없는 과목. */
  function courseSections() {
    const c = currentCourse().course;
    return (c && c.sections) || [];
  }
  function sectionById(id) {
    const s = courseSections();
    for (let i = 0; i < s.length; i++) { if (s[i].id === id) return s[i]; }
    return null;
  }
  /* 지금 고른 단원 id — 없으면 그 과목의 첫 단원(이론1) */
  function activeSectionId() {
    const s = courseSections();
    if (!s.length) return "";
    return sectionById(COURSE_SECTION) ? COURSE_SECTION : s[0].id;
  }
  /* 해시 조각이 단원 id 인가 (#dnd/theory2) */
  function sectionByHash(seg) {
    const s = courseSections();
    for (let i = 0; i < s.length; i++) { if (s[i].id === seg) return s[i].id; }
    return null;
  }
  function viewTitle() {
    const c = currentCourse().course;
    for (let k = 0; k < c.items.length; k++) {
      if (c.items[k].id === VIEW) return label(c.items[k].label);
    }
    return label(c.label);
  }
  function go(view) {
    /* 탐색 화면으로 이동 = 진행 중인 시험 세션 종료 */
    if (timerId) { clearInterval(timerId); timerId = null; }
    S = null;
    VIEW = view;
    const isLib = (view === "library");
    const isDash = (view === "dashboard");
    const isCourse = (view === "course");
    setView(isDash ? "dashboard" : (isLib ? "library" : (isCourse ? "course" : "browse")));
    closeSidebar();
    renderSidebar();
    renderView();
    if (isLib) setCrumb(t("lib.title"));
    else if (isDash) setCrumb(t("dash.dashboard"));
    else if (isCourse) { const cc = currentCourse(); setCrumb(label(cc.sem.label) + " › " + label(cc.course.label)); }
    else {
      const c = currentCourse();
      setCrumb(label(c.sem.label) + " › " + label(c.course.label) + " › " + viewTitle());
    }
    try { if (window.scrollTo) window.scrollTo(0, 0); } catch (e) { /* ignore */ }
    syncHash(view);
  }
  function renderView() {
    refreshPool();                     /* 단원(이론1/이론2) 범위에 맞게 문제 풀 갱신 */
    if (VIEW === "dashboard") return renderDashboard();
    if (VIEW === "library") return renderLibrary();
    if (VIEW === "course") return renderCourse();
    if (VIEW === "random") return renderRandom();
    if (VIEW === "mocks") return renderMocks();
    if (VIEW === "bank") return renderBank();
    if (VIEW === "wrong") return renderWrong();
    if (VIEW === "records") return renderRecords();
    return renderOverview();
  }
  function renderHome() { go("overview"); }

  /* ================= 라이브러리 (과목 카탈로그) =================
     계정(동기화) 기능이 켜져 있을 때만 동작한다. 꺼져 있으면(오프라인 파일·미설정 배포)
     라이브러리도 로그인 게이트도 없고 지금까지와 100% 같다. */
  function syncOn() {
    try { return !!(window.__sync && window.__sync.configured()); } catch (e) { return false; }
  }
  function signedIn() {
    try { return !!(window.__sync && window.__sync.signedIn()); } catch (e) { return false; }
  }
  /* 로그인해야 과목에 들어갈 수 있는 상태인가 (계정 기능이 꺼져 있으면 항상 false) */
  function locked() { return syncOn() && !signedIn(); }
  const AVATAR_SRC = "assets/avatar.jpg";      /* 있으면 얼굴 사진, 없으면 닉네임 이니셜 */
  let LIB_SEM = "";                             /* 선택된 학기 탭 */
  let LIB_Q = "";                               /* 검색어 */
  let LIB_ALL = false;                          /* 전체 보기(모든 학기를 한 번에) */
  let PENDING_COURSE = "";                      /* 로그인하면 들어가려던 과목 id */

  /* 아이콘 (이모지 대신 최소 SVG — 담백한 스타일) */
  const LIB_SVG = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round">' +
      '<circle cx="10" cy="10" r="8"/><path d="M15.9 15.9L21.5 21.5"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' +
      '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' +
      '<circle cx="12" cy="8.5" r="3.5"/><path d="M4.5 20c1.6-3.4 4.2-5 7.5-5s5.9 1.6 7.5 5"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
      'stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
      'stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>'
  };
  function avatarHtml() {
    let nick = "";
    try { const u = window.__sync && window.__sync.user(); nick = (u && u.nick) || ""; } catch (e) { nick = ""; }
    const inner = nick ? esc(nick.slice(0, 1).toUpperCase()) : LIB_SVG.user;
    return "<span>" + inner + '</span><img class="avatarImg" src="' + esc(AVATAR_SRC) + '" alt="">';
  }
  function wireAvatar() {
    const box = el("avatarBox");
    if (!box) return;
    box.innerHTML = avatarHtml();
    const img = (box.querySelector ? box.querySelector(".avatarImg") : null);
    if (img) img.onerror = function () { try { img.style.display = "none"; } catch (e) { /* ignore */ } };
  }
  function allCourses() {
    const out = [];
    CURRICULUM.forEach(function (s) { s.courses.forEach(function (c) { out.push({ sem: s, course: c }); }); });
    return out;
  }
  function courseById(id) {
    const hit = allCourses().filter(function (x) { return x.course.id === id; })[0];
    return hit ? hit.course : null;
  }
  function courseMatches(sem, c, q) {
    if (!q) return true;
    const hay = [label(sem.label), label(sem.sub), label(c.label), label(c.short || {}),
      label(c.sub || {}), label(c.tagline || {})].join(" ").toLowerCase();
    return hay.indexOf(q) !== -1;
  }
  function courseInitials(c) {
    const s = label(c.short || {}) || label(c.label) || "SR";
    return String(s).replace(/\s+/g, "").slice(0, 2).toUpperCase();
  }
  /* 대표 사진: 파일이 있으면 사진, 못 불러오면 그라디언트 + 이니셜 (wireLibrary 가 처리) */
  function coverHtml(c) {
    const img = c.image ? '<img class="libCoverImg" src="' + esc(c.image) + '" alt="" loading="lazy">' : "";
    return '<div class="libCover"><span>' + esc(courseInitials(c)) + "</span>" + img + "</div>";
  }

  function libTabsHtml(active) {
    let html = "";
    CURRICULUM.forEach(function (s) {
      html += '<button class="libTab' + (!LIB_Q && s.id === active ? " on" : "") +
        '" data-libsem="' + esc(s.id) + '" type="button">' + esc(label(s.label)) +
        ' <span class="libTabSub">' + esc(label(s.sub)) + "</span></button>";
    });
    return html;
  }
  function libGridHtml() {
    const q = String(LIB_Q || "").trim().toLowerCase();
    if (!LIB_SEM) LIB_SEM = (CURRICULUM[0] && CURRICULUM[0].id) || "";
    const active = (q || LIB_ALL) ? "" : LIB_SEM;   /* 검색·전체 보기면 모든 학기 */
    let cards = "";
    CURRICULUM.forEach(function (s) {
      if (active && s.id !== active) return;
      s.courses.forEach(function (c) {
        if (!courseMatches(s, c, q)) return;
        cards += '<button class="libCard" data-course="' + esc(c.id) +
          '" type="button">' + coverHtml(c) +
          '<div class="libBody"><div class="libTitle">' + esc(label(c.label)) + "</div>" +
          '<div class="libSub">' + esc(label(c.tagline || c.sub || {})) + "</div>" +
          '<div class="libFoot"><span>' + esc(label(s.label)) + "</span>" +
          (locked() ? '<span class="lockBadge">' + LIB_SVG.lock + esc(t("lib.locked")) + "</span>" : "") +
          "</div></div></button>";
      });
    });
    if (!cards) cards = '<div class="libEmpty">' + esc(q ? t("lib.searchEmpty") : t("lib.semEmpty")) + "</div>";
    return { tabs: libTabsHtml(active), grid: cards };
  }
  function wireLibrary(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll("[data-course]").forEach(function (b) {
      b.onclick = function () { enterCourse(b.getAttribute("data-course")); };
    });
    root.querySelectorAll("[data-libsem]").forEach(function (b) {
      b.onclick = function () { LIB_SEM = b.getAttribute("data-libsem"); LIB_Q = ""; renderLibraryGrid(); };
    });
    root.querySelectorAll(".libCoverImg").forEach(function (img) {
      img.onerror = function () { try { img.style.display = "none"; } catch (e) { /* ignore */ } };
    });
  }
  function renderLibraryGrid() {
    const h = libGridHtml();
    const tbox = el("libTabs"), gbox = el("libGrid");
    if (tbox) tbox.innerHTML = h.tabs;
    if (gbox) gbox.innerHTML = h.grid;
    wireLibrary(app);
    syncRowNav();
  }
  /* 가로 스크롤 한 칸(카드 3장) 이동 */
  function scrollBox(id, dir) {
    const box = el(id);
    if (!box) return;
    try {
      if (typeof box.scrollBy === "function") box.scrollBy({ left: dir * 714, behavior: "smooth" });
      else box.scrollLeft = (box.scrollLeft || 0) + dir * 714;
    } catch (e) { /* 구형 브라우저/스텁 — 조용히 무시 */ }
  }
  /* 스크롤할 내용이 없으면 화살표를 흐리게 (inflearn 은 항상 보인다) */
  function syncRowNav() {
    [["libGrid", ["libRowPrev", "libRowNext"]], ["libTabs", ["libTabsNext"]]].forEach(function (pair) {
      const box = el(pair[0]);
      const over = !!(box && typeof box.scrollWidth === "number" && typeof box.clientWidth === "number" &&
        box.scrollWidth > box.clientWidth + 2);
      pair[1].forEach(function (bid) { const b = el(bid); if (b) b.disabled = !over; });
    });
  }
  /* 과목 입장: 로그인 전이면 로그인 창을 띄우고, 로그인하면 그 과목으로 들어간다 */
  function enterCourse(id) {
    if (locked()) {
      PENDING_COURSE = id;
      try { if (window.__sync) window.__sync.openModal(); } catch (e) { /* ignore */ }
      return false;
    }
    COURSE_ID = id;
    COURSE_TAB = "about";
    go("course");       /* 과목 상세 페이지(히어로 + ABOUT/MOCK TEST/LEARNERS 탭)로 입장 */
    return true;
  }
  /* 오른쪽 아래 ‹ › (inflearn 의 가로 스크롤 화살표와 같은 자리) */
  function libRowNavHtml() {
    return '<div class="libRowNav" id="libRowNav">' +
      '<button class="rowNavBtn" id="libRowPrev" type="button" aria-label="Previous">' + LIB_SVG.chevL + "</button>" +
      '<button class="rowNavBtn" id="libRowNext" type="button" aria-label="Next">' + LIB_SVG.chevR + "</button>" +
      "</div>";
  }
  function renderLibrary() {
    const h = libGridHtml();
    const all = !!LIB_ALL;
    app.innerHTML =
      '<div class="libWrap">' +
      '<div class="libSearch">' +
      '<input id="libSearch" class="libSearchInput" type="search" autocomplete="off" ' +
      'placeholder="' + esc(t("lib.search")) + '" value="' + esc(LIB_Q) + '">' +
      '<button class="libSearchBtn" id="libSearchBtn" type="button" aria-label="Search">' + LIB_SVG.search + "</button>" +
      "</div>" +
      '<div class="libLogo"><b>' + esc(t("lib.section")) + "</b>" +
      '<button class="libViewAll" id="libViewAll" type="button">' +
      (all ? LIB_SVG.chevL + esc(t("lib.viewBySem")) : esc(t("lib.viewAll")) + LIB_SVG.chevR) + "</button></div>" +
      (all ? "" :
        '<div class="libTabsWrap"><div class="libTabs" id="libTabs">' + h.tabs + "</div>" +
        '<button class="rowNavBtn" id="libTabsNext" type="button" aria-label="More semesters">' +
        LIB_SVG.chevR + "</button></div>") +
      '<div class="' + (all ? "libGridAll" : "libRow") + '" id="libGrid">' + h.grid + "</div>" +
      (all ? "" : libRowNavHtml()) +
      (locked() ? '<div class="libHint">' + esc(t("lib.signInHint")) + "</div>" : "") +
      "</div>";
    const q0 = el("libSearch");
    if (q0) q0.oninput = function () { LIB_Q = q0.value; renderLibraryGrid(); };
    const sb = el("libSearchBtn");
    if (sb) sb.onclick = function () { if (q0) LIB_Q = q0.value; renderLibraryGrid(); };
    const va = el("libViewAll");
    if (va) va.onclick = function () { LIB_ALL = !LIB_ALL; renderLibrary(); };
    const tn = el("libTabsNext");
    if (tn) tn.onclick = function () { scrollBox("libTabs", 1); };
    const rp = el("libRowPrev");
    if (rp) rp.onclick = function () { scrollBox("libGrid", -1); };
    const rn = el("libRowNext");
    if (rn) rn.onclick = function () { scrollBox("libGrid", 1); };
    wireLibrary(app);
    syncRowNav();
  }

  /* ================= 과목 상세 페이지 (인프런풍 코스 페이지) =================
     라이브러리에서 과목 카드를 누르면 들어오는 화면.
     · 상단: 다크 히어로(카테고리 · 제목 · 설명 · 메타 · 태그 + 썸네일)
     · 탭: ABOUT / MOCK TEST / LEARNERS  (후기 탭은 두지 않는다 — 대신 '학습자'만)
     · 오른쪽: 무료 · 학습 시작 + 요약 카드 (스크롤해도 따라옴)
     데이터는 모두 이 브라우저의 store + CURRICULUM + MOCKS 에서 나온다. */
  const CD_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" ' +
    'stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';

  /* 이 과목을 공부한 '학습자' 목록 — 이 브라우저 기준(로그인 전이면 기록이 있을 때만 1명).
     후기(리뷰)는 절대 만들지 않는다: 이름 + 진도만 보여 준다. */
  function courseLearnerList() {
    const out = [];
    let nick = "";
    try { const u = window.__sync && window.__sync.user(); nick = (u && u.nick) || ""; } catch (e) { nick = ""; }
    const sessions = (store.history || []).length;
    if (sessions <= 0 && !signedIn()) return out;
    out.push({
      name: nick || t("cd.guest"),
      initial: esc(nick ? nick.slice(0, 1).toUpperCase() : (LANG === "en" ? "L" : "학")),
      img: '<img class="cdLearnImg" src="' + esc(AVATAR_SRC) + '" alt="">',
      meta: tf("cd.learnerMeta", sessions, store.best || 0, wrongCount())
    });
    return out;
  }
  function courseHeroHtml(cc) {
    const c = cc.course;
    const img = c.image ? '<img class="cdThumbImg" src="' + esc(c.image) + '" alt="" loading="lazy">' : "";
    const mockN = MOCKS ? MOCKS.mocks.length : 0;
    const tags = ((c && c.tags) || []).map(function (tg) { return '<span class="cdTag">#' + esc(tg) + "</span>"; }).join("");
    const thumbText = esc(String(label(c.short || c.label) || "SR").replace(/\s+/g, "").slice(0, 4).toUpperCase());
    return '<div class="cdHero"><div class="cdHeroIn">' +
      '<div class="cdHeroL">' +
      '<div class="cdCat">' + esc(label(cc.sem.label)) + " · " + esc(label(c.short || c.label)) + "</div>" +
      '<h1 class="cdTitle">' + esc(label(c.label)) + "</h1>" +
      '<p class="cdDesc">' + esc(label(c.sub || {})) + "</p>" +
      '<div class="cdHeroMeta"><span>' + esc(tf("cd.heroMeta", ALL.length, mockN, GLOSSARY_COUNT)) + "</span></div>" +
      '<div class="cdTags">' + tags + "</div>" +
      "</div>" +
      '<div class="cdHeroR"><div class="cdThumb">' + img + thumbText + "</div></div>" +
      "</div></div>";
  }
  function courseTabsHtml() {
    const tabs = [["about", t("cd.tab.about")], ["guide", t("cd.tab.guide")],
      ["calendar", t("cd.tab.calendar")], ["learners", t("cd.tab.learners")]];
    return tabs.map(function (tb) {
      return '<button class="cdTab' + (tb[0] === COURSE_TAB ? " on" : "") + '" data-cdtab="' + tb[0] +
        '" type="button">' + esc(tb[1]) + "</button>";
    }).join("");
  }
  /* ---------- 시험 캘린더 탭 ----------
     일정 데이터는 curriculum.js 의 course.schedule(교수님 평가 안내 PDF 기준).
     오늘과 비교해 D-day·지남 상태를 계산해 보여 준다. */
  function calParse(s) {
    if (!s) return null;
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function calDayStart(d) { const x = new Date(d.getTime()); x.setHours(0, 0, 0, 0); return x; }
  function calDaysUntil(d, now) { return Math.round((calDayStart(d) - calDayStart(now)) / 86400000); }
  /* 상태: 지남=done · 하루 일정 당일=today · 기간 진행 중=ongoing · 지각 제출 구간=late · 예정=up(+남은 날)
     · span(기간) 항목은 until 까지, late(최종 마감)가 있으면 그때까지 '지각 제출' 구간으로 본다. */
  function calStatus(it, now) {
    const d = calParse(it.at);
    if (!d) return { s: "up", days: 0 };
    const end = it.span ? calParse(it.until)
      : (it.late ? calParse(it.late) : new Date(d.getTime() + 3 * 3600000));
    if (end && now > end) return { s: "done", days: 0 };
    if (now >= d) {
      if (it.late) return { s: "late", days: 0 };
      return { s: it.span ? "ongoing" : "today", days: 0 };
    }
    return { s: "up", days: calDaysUntil(d, now) };
  }
  function calDayText(st) {
    if (st.s === "today") return t("cal.today");
    if (st.s === "ongoing") return t("cal.ongoing");
    if (st.s === "late") return t("cal.late");
    if (st.s === "done") return t("cal.done");
    return st.days <= 0 ? t("cal.dday0") : tf("cal.dday", st.days);
  }
  /* '11월 5일 (목) 17:45' · 기간 일정이면 '12월 14일 – 1월 29일' */
  function fmtCalWhen(it) {
    const loc = LANG === "en" ? "en-US" : "ko-KR";
    const d = calParse(it.at);
    if (!d) return "";
    const day = function (x) { return x.toLocaleDateString(loc, { month: "short", day: "numeric" }); };
    if (it.span && it.until) {
      const u = calParse(it.until);
      return day(d) + " – " + (u ? day(u) : "");
    }
    const md = (d.getHours() || d.getMinutes())
      ? " " + d.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit", hour12: false }) : "";
    return day(d) + " (" + d.toLocaleDateString(loc, { weekday: "short" }) + ")" + md;
  }
  function courseCalendarHtml(c) {
    const items = (c && c.schedule) || [];
    if (!items.length) return '<div class="cdEmpty"><b>' + esc(t("cal.empty")) + "</b></div>";
    const now = new Date();
    let next = null;
    items.forEach(function (it) {
      if (next) return;
      const st = calStatus(it, now);
      if (st.s !== "done") next = { it: it, st: st };
    });
    const banner = next
      ? '<div class="calNext"><span class="calNextTag">' + esc(t("cal.next")) + '</span>' +
        '<b class="calNextName">' + esc(label(next.it.name)) + '</b>' +
        '<span class="calNextWhen">' + esc(fmtCalWhen(next.it)) + '</span>' +
        '<span class="calNextDay">' + esc(calDayText(next.st)) + "</span></div>"
      : "";
    const rows = items.map(function (it) {
      const st = calStatus(it, now);
      const bits = [it.need ? tf("cal.ptPass", it.points, it.need) : tf("cal.ptNo", it.points)];
      if (it.retake) bits.push(tf("cal.retake", label(it.retake)));
      if (it.note) bits.push(label(it.note));
      return '<tr class="calRow ' + st.s + '"><td class="calName">' + esc(label(it.name)) +
        '<span class="calBadge ' + st.s + '">' + esc(calDayText(st)) + "</span></td>" +
        '<td class="calWhen">' + esc(fmtCalWhen(it)) + "</td>" +
        '<td class="calMeta">' + esc(bits.join(" · ")) + "</td></tr>";
    }).join("");
    return '<div class="cdSec"><p class="cdPara">' + t("cal.intro") + "</p></div>" + banner +
      '<div class="cdSec"><h2 class="cdSecTitle">' + t("cal.title") + '</h2>' +
      '<table class="grid calTable"><tr><th>' + t("cal.th.name") + "</th><th>" + t("cal.th.when") +
      "</th><th>" + t("cal.th.meta") + "</th></tr>" + rows + "</table>" +
      '<div class="note">' + t("cal.footnote") + "</div></div>" +
      '<div class="cdSec"><h2 class="cdSecTitle">' + t("cal.chain") + '</h2><p class="cdPara">' +
      t("cal.chainBody") + "</p></div>" +
      '<div class="cdSec"><h2 class="cdSecTitle">' + t("cal.gradeTitle") + '</h2><p class="cdPara">' +
      t("cal.gradeBody") + "</p></div>";
  }

  function courseAboutHtml(c) {
    const gains = ["cd.gain1", "cd.gain2", "cd.gain3", "cd.gain4"].map(function (k) {
      return '<li><span class="cdCheck">' + CD_CHECK + "</span><span>" + esc(t(k)) + "</span></li>";
    }).join("");
    const mockN = MOCKS ? MOCKS.mocks.length : 0;
    const info = [
      [t("cd.fact.questions"), String(FULL.length)],
      [t("cd.fact.mocks"), String(mockN)],
      [t("cd.fact.words"), String(GLOSSARY_COUNT)],
      [t("cd.fact.level"), c.level ? label(c.level) : t("cd.levelDefault")]
    ].map(function (row) {
      return '<div class="cdInfoCard"><em>' + esc(row[0]) + "</em><b>" + esc(row[1]) + "</b></div>";
    }).join("");
    const tags = ((c && c.tags) || []).map(function (tg) { return '<span class="cdTagSoft">#' + esc(tg) + "</span>"; }).join("");
    return '<div class="cdSec"><h2 class="cdSecTitle">' + t("cd.gain") + '</h2><ul class="cdList">' + gains + "</ul></div>" +
      '<div class="cdSec"><h2 class="cdSecTitle">' + t("cd.aboutTitle") + '</h2><p class="cdPara">' + t("cd.aboutBody") + "</p></div>" +
      '<div class="cdSec"><h2 class="cdSecTitle">' + t("cd.aboutExams") + '</h2><div class="cdInfoGrid">' + info + "</div>" +
      '<p class="cdPara" style="margin-top:14px">' + t("home.grading") + esc(gradingNote()) + " · " + esc(metaNote()) + "</p></div>" +
      '<div class="cdSec"><h2 class="cdSecTitle">' + t("cd.tags") + '</h2><div class="cdTagRow">' + tags + "</div></div>";
  }

  /* 학습 가이드 탭 — 공부 순서 · 화면별 사용법 · 시험 팁.
     모의고사 '세트 목록'은 앱 안(모의고사 화면)에 있으므로 여기서는 중복 없이 안내만 한다. */
  function courseGuideHtml() {
    const steps = ["cd.guide.s1", "cd.guide.s2", "cd.guide.s3", "cd.guide.s4", "cd.guide.s5"].map(function (k, i) {
      return '<li><span class="cdStepNum">' + (i + 1) + '</span><span>' + t(k) + "</span></li>";
    }).join("");
    const how = [
      ["cd.guide.h1", "cd.guide.h1d"], ["cd.guide.h2", "cd.guide.h2d"], ["cd.guide.h3", "cd.guide.h3d"],
      ["cd.guide.h4", "cd.guide.h4d"], ["cd.guide.h5", "cd.guide.h5d"]
    ].map(function (r) {
      return '<div class="cdInfoCard"><em>' + esc(t(r[0])) + "</em><b>" + esc(t(r[1])) + "</b></div>";
    }).join("");
    const tips = ["cd.guide.t1", "cd.guide.t2", "cd.guide.t3", "cd.guide.t4"].map(function (k) {
      return '<li><span class="cdCheck">' + CD_CHECK + "</span><span>" + t(k) + "</span></li>";
    }).join("");
    const quick = '<div class="cdSec"><h2 class="cdSecTitle">' + t("cd.guide.goto") + '</h2><div class="cdQuickRow">' +
      '<button class="btn sm cdQuickBtn" id="cdBank" type="button">' + esc(t("cd.gotoBank")) + "</button>" +
      '<button class="btn sm cdQuickBtn" id="cdRandom" type="button">' + esc(t("cd.gotoRandom")) + "</button>" +
      '<button class="btn sm cdQuickBtn" id="cdWrong" type="button">' + esc(t("cd.gotoWrong")) + "</button>" +
      '<button class="btn sm cdQuickBtn" id="cdOverview" type="button">' + esc(t("cd.gotoOverview")) + "</button>" +
      "</div></div>";
    return '<div class="cdSec"><p class="cdPara">' + t("cd.guide.intro") + "</p></div>" +
      '<div class="cdSec"><h2 class="cdSecTitle">' + t("cd.guide.order") + '</h2><ol class="cdList">' + steps + "</ol></div>" +
      '<div class="cdSec"><h2 class="cdSecTitle">' + t("cd.guide.how") + '</h2><div class="cdInfoGrid">' + how + "</div></div>" +
      '<div class="cdSec"><h2 class="cdSecTitle">' + t("cd.guide.tips") + '</h2><ul class="cdList">' + tips + "</ul></div>" +
      quick;
  }
  function courseLearnersHtml() {
    const learners = courseLearnerList();
    let body;
    if (!learners.length) {
      body = '<div class="cdEmpty"><b>' + esc(t("cd.learnersEmpty")) + "</b><span>" + esc(t("cd.learnersEmptySub")) +
        '</span><div><button class="btn primary" id="cdEmptyStart" type="button">' + esc(t("cd.enroll")) + "</button></div></div>";
    } else {
      body = '<div class="cdLearnGrid">' + learners.map(function (l) {
        return '<div class="cdLearnCard"><span class="cdLearnAv">' + l.initial + l.img + "</span>" +
          '<div class="cdLearnBody"><div class="cdLearnName">' + esc(l.name) +
          '<span class="cdLearnBadge">' + esc(t("cd.learnerBadge")) + "</span></div>" +
          '<div class="cdLearnMeta">' + esc(l.meta) + "</div></div></div>";
      }).join("") + "</div>";
    }
    return '<div class="cdSec"><h2 class="cdSecTitle">' + t("cd.learnersTitle") + "</h2>" +
      '<p class="cdPara" style="margin-bottom:16px">' + t("cd.learnersSub") + "</p>" + body + "</div>";
  }
  function courseTabHtml(c) {
    if (COURSE_TAB === "guide") return courseGuideHtml();
    if (COURSE_TAB === "calendar") return courseCalendarHtml(c);
    if (COURSE_TAB === "learners") return courseLearnersHtml();
    return courseAboutHtml(c);
  }
  function courseRailHtml(c) {
    const mockN = MOCKS ? MOCKS.mocks.length : 0;
    const facts = [
      [t("cd.fact.questions"), String(FULL.length)],
      [t("cd.fact.mocks"), String(mockN)],
      [t("cd.fact.words"), String(GLOSSARY_COUNT)],
      [t("cd.fact.level"), c.level ? label(c.level) : t("cd.levelDefault")],
      [t("cd.fact.period"), t("cd.unlimited")],
      [t("cd.fact.cert"), t("cd.notProvided")],
      [t("cd.fact.qa"), t("cd.qaProvided")]
    ].map(function (f) {
      return '<div class="cdFact"><dt>' + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>";
    }).join("");
    return '<div class="cdCard">' +
      '<div class="cdPrice">' + esc(t("cd.free")) + "</div>" +
      '<button class="cdEnroll" id="cdStart" type="button">' + esc(t("cd.enroll")) + "</button>" +
      '<dl class="cdFacts">' + facts + "</dl>" +
      '<div class="cdBack"><button id="cdBack" type="button">' + esc(t("lib.home")) + "</button></div>" +
      "</div>";
  }
  function wireCourse() {
    if (!app || !app.querySelectorAll) return;
    app.querySelectorAll("[data-cdtab]").forEach(function (b) {
      b.onclick = function () { COURSE_TAB = b.getAttribute("data-cdtab"); renderCourse(); };
    });
    const bind = function (id, fn) { const b = el(id); if (b) b.onclick = fn; };
    bind("cdStart", function () { go("overview"); });
    bind("cdBack", function () { go("library"); });
    bind("cdEmptyStart", function () { go("overview"); });
    bind("cdBank", function () { go("bank"); });
    bind("cdRandom", function () { go("random"); });
    bind("cdWrong", function () { go("wrong"); });
    bind("cdOverview", function () { go("overview"); });
    wireMockButtons();
    app.querySelectorAll(".cdThumbImg,.cdLearnImg").forEach(function (img) {
      img.onerror = function () { try { img.style.display = "none"; } catch (e) { /* ignore */ } };
    });
  }
  function renderCourse() {
    const cc = currentCourse();
    app.innerHTML = '<div class="cdWrap">' + courseHeroHtml(cc) +
      '<div class="cdBody">' +
      '<div class="cdTabs" id="cdTabs" role="tablist">' + courseTabsHtml() + "</div>" +
      '<div class="cdCols">' +
      '<div class="cdMain" id="cdMain">' + courseTabHtml(cc.course) + "</div>" +
      '<aside class="cdRail">' + courseRailHtml(cc.course) + "</aside>" +
      "</div></div></div>";
    wireCourse();
  }

  /* ================= 대시보드 (인프런풍) =================
     · 왼쪽 보조 내비(Profile/Dashboard/…) + 카드들(최근/주간/연간/스킬/수료증).
     · 데이터는 store.history(응시 기록의 at 타임스탬프)에서 뽑는다. 학습 시간·메모는 추적하지 않아 0. */
  const DASH_ICON = {
    profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.4" r="3.6"/><path d="M4.6 20c1.2-3.6 4.1-5.4 7.4-5.4s6.2 1.8 7.4 5.4"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.6" y="3.6" width="7" height="7" rx="1.6"/><rect x="13.4" y="3.6" width="7" height="7" rx="1.6"/><rect x="3.6" y="13.4" width="7" height="7" rx="1.6"/><rect x="13.4" y="13.4" width="7" height="7" rx="1.6"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6.5z"/><path d="M4 16a2 2 0 0 1 2-2h12"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2.4"/><circle cx="8" cy="17" r="2.4"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5h8l4 4v13H6z"/><path d="M14 3.5v4h4"/></svg>',
    cert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="3.5" width="15" height="12" rx="2"/><path d="M9 20l3-2 3 2v-4H9z"/></svg>',
    caret: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>'
  };
  let DASH_WEEK = 0;
  let DASH_YEAR = (new Date()).getFullYear();
  function dashDateKey(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function dashHistoryByDay() {
    const map = {};
    (store.history || []).forEach(function (h) {
      const d = new Date(h.at || h.time || 0);
      if (isNaN(d.getTime())) return;
      const k = dashDateKey(d);
      map[k] = (map[k] || 0) + 1;
    });
    return map;
  }
  function dashDays() {
    const times = (store.history || []).map(function (h) { return new Date(h.at || 0).getTime(); })
      .filter(function (t) { return isFinite(t) && t > 0; });
    if (!times.length) return 1;
    return Math.max(1, Math.floor((Date.now() - Math.min.apply(null, times)) / 86400000) + 1);
  }
  function dashWeekNo(d) {
    const start = new Date(d.getFullYear(), 0, 1);
    return Math.floor(Math.floor((d - start) / 86400000) / 7) + 1;
  }
  function dashMetric(icon, value, label) {
    return '<span class="dashMetric">' + icon + '<span class="dashMetricCol">' +
      (label ? "<em>" + esc(label) + "</em>" : "") + "<b>" + esc(String(value)) + "</b></span></span>";
  }
  /* 카드 제목 줄: 왼쪽 제목(＋기어) · 오른쪽 링크/내비 */
  function dashHead(title, right, gear) {
    return '<div class="dashCardHead"><div class="dashTitleRow"><b>' + esc(title) + "</b>" +
      (gear ? '<span class="dashGear" aria-hidden="true">' + DASH_ICON.gear + "</span>" : "") +
      "</div>" + (right || "") + "</div>";
  }
  function dashNavHtml() {
    const items = [
      ["profile", t("dash.profile"), DASH_ICON.profile],
      ["dashboard", t("dash.dashboard"), DASH_ICON.grid],
      ["learning", t("dash.learning"), DASH_ICON.book],
      ["settings", t("dash.settings"), DASH_ICON.gear]
    ];
    return items.map(function (it) {
      return '<button class="dashNavItem' + (it[0] === "dashboard" ? " on" : "") + '" data-dashnav="' + it[0] +
        '" type="button">' + it[2] + "<span>" + esc(it[1]) + "</span></button>";
    }).join("");
  }

  function dashRecentHtml() {
    const hs = (store.history || []).slice().sort(function (a, b) {
      return (new Date(b.at || 0).getTime() || 0) - (new Date(a.at || 0).getTime() || 0);
    }).slice(0, 4);
    let body;
    if (!hs.length) {
      body = '<div class="dashEmpty"><button class="dashBtn" id="dashExplore" type="button">' +
        esc(t("dash.explore")) + LIB_SVG.chevR + "</button></div>";
    } else {
      body = '<div class="dashList">' + hs.map(function (h) {
        return '<div class="dashListRow"><span class="dashListName">' + esc(h.mode || "") + '</span>' +
          '<span class="dashListMeta">' + esc(histDate(h)) + " · " + esc((h.total || 0) + "/" + (h.max || 0)) + "</span></div>";
      }).join("") + "</div>";
    }
    return '<div class="dashCard">' +
      dashHead(t("dash.recent"), '<button class="dashLink" id="dashMyLearning" type="button">' + esc(t("dash.learning")) + LIB_SVG.chevR + "</button>") +
      '<div class="dashRecentBody">' + body + "</div></div>";
  }
  function dashWeeklyHtml() {
    const ref = new Date(); ref.setDate(ref.getDate() - DASH_WEEK * 7);
    const monday = new Date(ref); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
    const byDay = dashHistoryByDay();
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let circles = "", weekCount = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday); d.setDate(monday.getDate() + i);
      const c = byDay[dashDateKey(d)] || 0; weekCount += c;
      circles += '<div class="dashDay' + (c ? " on" : "") + '"><span class="dashDayLab">' + labels[i] + "</span>" +
        '<span class="dashDayDot">' + (c || "") + "</span></div>";
    }
    const wkLabel = tf("dash.weekN", dashWeekNo(monday), (monday.getMonth() + 1) + "/" + monday.getDate());
    return '<div class="dashCard">' + dashHead(t("dash.weekly"), "", true) +
      '<div class="dashWeekNav">' +
      '<button class="dashArrow" id="dashWeekPrev" type="button" aria-label="Prev">' + LIB_SVG.chevL + "</button>" +
      '<span class="dashWeekLabel">' + esc(wkLabel) + DASH_ICON.caret + "</span>" +
      '<button class="dashArrow" id="dashWeekNext" type="button" aria-label="Next"' + (DASH_WEEK <= 0 ? " disabled" : "") + ">" + LIB_SVG.chevR + "</button>" +
      '</div><div class="dashWeekRow">' + circles + "</div>" +
      '<div class="dashMetrics">' + dashMetric(DASH_ICON.play, weekCount) +
      dashMetric(DASH_ICON.clock, tf("dash.min", 0)) + dashMetric(DASH_ICON.file, 0) + "</div></div>";
  }

  function dashYearlyHtml() {
    const year = DASH_YEAR;
    const byDay = dashHistoryByDay();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const first = new Date(year, 0, 1);
    const start = new Date(first); start.setDate(first.getDate() - ((first.getDay() + 6) % 7));   /* 그 주 월요일 */
    const WEEKS = 53;
    const weekMonth = [];
    for (let w = 0; w < WEEKS; w++) {
      let m = -1;
      for (let dd = 0; dd < 7; dd++) {
        const d = new Date(start); d.setDate(start.getDate() + w * 7 + dd);
        if (d.getFullYear() === year) { m = d.getMonth(); break; }
      }
      weekMonth.push(m);
    }
    let cells = "", total = 0;
    for (let w = 0; w < WEEKS; w++) {
      for (let dd = 0; dd < 7; dd++) {
        const d = new Date(start); d.setDate(start.getDate() + w * 7 + dd);
        const col = w + 2, row = dd + 2;
        if (d.getFullYear() !== year) { cells += '<i class="dashCell out" style="grid-column:' + col + ";grid-row:" + row + '"></i>'; continue; }
        const c = byDay[dashDateKey(d)] || 0; total += c;
        const lvl = c <= 0 ? 0 : c <= 5 ? 1 : c <= 10 ? 2 : c <= 20 ? 3 : 4;
        const cls = "dashCell lvl" + lvl;   /* 클래스 문자열을 먼저 만든다 */
        cells += '<i class="' + cls + '" style="grid-column:' + col + ";grid-row:" + row + '" title="' +
          esc(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " · " + c) + '"></i>';
      }
    }
    let mlabels = "";
    for (let m = 0; m < 12; m++) {
      const c0 = weekMonth.indexOf(m);
      if (c0 === -1) continue;
      let c1 = WEEKS;
      for (let m2 = m + 1; m2 < 12; m2++) { const x = weekMonth.indexOf(m2); if (x !== -1) { c1 = x; break; } }
      mlabels += '<span class="dashMlab" style="grid-column:' + (c0 + 2) + " / span " + Math.max(1, c1 - c0) + '">' + months[m] + "</span>";
    }
    const wd = ["Mon", "", "Wed", "", "Fri", "", "Sun"];
    let wlabels = "";
    for (let dd = 0; dd < 7; dd++) if (wd[dd]) wlabels += '<span class="dashWd" style="grid-row:' + (dd + 2) + ';grid-column:1">' + wd[dd] + "</span>";
    const legend = '<span class="dashLegItem">' + esc(t("dash.completed")) + '</span><span class="dashLegNum">0</span>' +
      '<i class="dashCell lvl1"></i><span class="dashLegR">1~5</span>' +
      '<i class="dashCell lvl2"></i><span class="dashLegR">6~10</span>' +
      '<i class="dashCell lvl3"></i><span class="dashLegR">11~20</span>' +
      '<i class="dashCell lvl4"></i><span class="dashLegR">' + esc(t("dash.20plus")) + '</span>';
    return '<div class="dashCard">' +
      dashHead(t("dash.yearly"), '<div class="dashYearNav"><button class="dashArrow" id="dashYearPrev" type="button" aria-label="Prev">' + LIB_SVG.chevL + "</button>" +
      '<span class="dashWeekLabel">' + year + "</span>" +
      '<button class="dashArrow" id="dashYearNext" type="button" aria-label="Next"' + (year >= (new Date()).getFullYear() ? " disabled" : "") + ">" + LIB_SVG.chevR + "</button></div>") +
      '<div class="dashHeatWrap"><div class="dashHeat">' + mlabels + wlabels + cells + "</div></div>" +
      '<div class="dashLegend">' + legend + "</div>" +
      '<div class="dashMetrics">' + dashMetric(DASH_ICON.play, total, t("dash.completed")) +
      dashMetric(DASH_ICON.clock, tf("dash.min", 0), t("dash.time")) +
      dashMetric(DASH_ICON.file, 0, t("dash.notes")) +
      dashMetric(DASH_ICON.cert, 0, t("dash.courseDone")) + "</div></div>";
  }

  function dashSkillHtml() {
    return '<div class="dashCard">' + dashHead(t("dash.skillTags")) +
      '<div class="dashLegendInline"><span class="dashDot" style="background:#4dabf7"></span>' +
      esc(t("dash.toBeAcquired")) + '<span class="dashDot" style="background:#12b886"></span>' + esc(t("dash.owned")) + "</div>" +
      '<div class="dashLines" aria-hidden="true"><i></i><i></i><i></i></div>' +
      '<div class="dashEmpty dashEmptyCol"><p class="dashEmptyTitle">' + esc(t("dash.noSkill")) + "</p>" +
      '<p class="dashEmptySub">' + esc(t("dash.noSkillSub")) + "</p></div></div>";
  }
  function renderDashboard() {
    app.innerHTML = '<div class="dashWrap">' +
      '<aside class="dashNav">' + dashNavHtml() + "</aside>" +
      '<section class="dashMain">' +
      '<div class="dashHead"><h1>' + esc(t("dash.dashboard")) + "</h1>" +
      '<span class="dashSub">' + esc(tf("dash.growing", dashDays())) + "</span></div>" +
      dashRecentHtml() + dashWeeklyHtml() + dashYearlyHtml() + dashSkillHtml() +
      "</section></div>";
    wireDashboard();
  }
  function wireDashboard() {
    if (!app || !app.querySelectorAll) return;
    app.querySelectorAll("[data-dashnav]").forEach(function (b) {
      b.onclick = function () { dashNavGo(b.getAttribute("data-dashnav")); };
    });
    ["dashExplore", "dashMyLearning"].forEach(function (id) {
      const b = el(id);
      if (b) b.onclick = function () { go("library"); };
    });
    const wp = el("dashWeekPrev"); if (wp) wp.onclick = function () { DASH_WEEK += 1; renderDashboard(); };
    const wn = el("dashWeekNext"); if (wn) wn.onclick = function () { if (DASH_WEEK > 0) { DASH_WEEK -= 1; renderDashboard(); } };
    const yp = el("dashYearPrev"); if (yp) yp.onclick = function () { DASH_YEAR -= 1; renderDashboard(); };
    const yn = el("dashYearNext"); if (yn) yn.onclick = function () { if (DASH_YEAR < (new Date()).getFullYear()) { DASH_YEAR += 1; renderDashboard(); } };
  }
  function dashNavGo(k) {
    if (k === "dashboard" || k === "profile") { renderDashboard(); return; }
    if (k === "learning") { go("library"); return; }
    if (k === "settings") { try { if (window.__sync) window.__sync.openModal(); } catch (e) { /* ignore */ } return; }
    try {
      if (typeof document !== "undefined" && document.createElement && document.body && document.body.appendChild) {
        const ex = el("dashToast");
        if (ex && ex.parentNode) ex.parentNode.removeChild(ex);
        const toast = document.createElement("div");
        toast.id = "dashToast"; toast.className = "dashToast"; toast.textContent = t("dash.soon");
        document.body.appendChild(toast);
        setTimeout(function () { try { if (toast.parentNode) toast.parentNode.removeChild(toast); } catch (e) { /* ignore */ } }, 1600);
      }
    } catch (e) { /* ignore */ }
  }

  /* ---------- 주소 해시(#bank)로 화면 열기 ----------
     용어집 페이지의 사이드바에서 index.html#bank 처럼 바로 이동할 수 있게 한다. */
  function viewIds() {
    const ids = [];
    CURRICULUM.forEach(function (sem) {
      sem.courses.forEach(function (c) {
        c.items.forEach(function (it) { if (!it.href) ids.push(it.id); });
      });
    });
    return ids;
  }
  /* 해시에 쓸 과목 slug — 사람이 읽기 좋은 전체 이름 (예: deepnetworkdevelopment) */
  function courseSlug(id) {
    const c = courseById(id);
    const s = String(label((c && c.label) || {}) || id).toLowerCase().replace(/[^a-z0-9]+/g, "");
    return s || id;
  }
  /* 해시로 과목 id 찾기 — 짧은 id(#dnd)와 전체 이름(#deepnetworkdevelopment) 둘 다 허용 */
  function courseByHash(h) {
    const all = allCourses();
    for (let i = 0; i < all.length; i++) {
      const id = all[i].course.id;
      if (h === id || h === courseSlug(id)) return id;
    }
    return null;
  }
  /* 화면 id ↔ 해시 조각 — 개요(overview)는 사람이 읽기 좋게 'learning' 으로 남긴다 */
  const VIEW_SEG = { overview: "learning" };
  function viewSegment(v) { return VIEW_SEG[v] || v; }
  function segmentView(s) { return s === "learning" ? "overview" : s; }
  /* 해시 → 화면. 과목 스코프(#<과목>/<화면>)와 예전 형식(#overview · #bank)을 모두 지원한다. */
  function viewFromHash() {
    let h = "";
    try { h = String((window.location && window.location.hash) || "").replace(/^#/, ""); } catch (e) { h = ""; }
    const slash = h.indexOf("/");
    if (slash !== -1) {
      /* #deepnetworkdevelopment/learning · #dnd/bank → 그 과목의 화면
         · #dnd/theory2 (단원) → 그 단원의 개요 화면 */
      const cid = courseByHash(h.slice(0, slash));
      const seg = h.slice(slash + 1);
      const sec = sectionByHash(seg);
      if (sec) { if (cid) COURSE_ID = cid; COURSE_SECTION = sec; return "overview"; }
      const v = segmentView(seg);
      if (viewIds().indexOf(v) !== -1) {
        if (cid) COURSE_ID = cid;
        if (v === "overview") COURSE_SECTION = "";   /* #…/learning → 첫 단원 */
        return v;
      }
      return null;
    }
    if (h === "library") return "library";
    if (h === "dashboard") return "dashboard";
    if (h === "course") return "course";
    const cid = courseByHash(h);          /* #dnd · #deepnetworkdevelopment → 과목 상세 페이지 */
    if (cid) { COURSE_ID = cid; COURSE_TAB = "about"; COURSE_SECTION = ""; return "course"; }
    const v = segmentView(h);             /* 뒤로호환: #overview · #learning · #bank … */
    return viewIds().indexOf(v) !== -1 ? v : null;
  }
  function syncHash(view) {
    try {
      if (!window.location || !window.history || !window.history.replaceState) return;
      let target;
      if (view === "course") {
        /* 과목 상세 페이지는 #course 대신 과목 slug(#dnd · #deepnetworkdevelopment)로 남긴다 */
        target = COURSE_ID ? courseSlug(COURSE_ID) : "course";
      } else if (view === "library" || view === "dashboard") {
        target = view;
      } else if (viewIds().indexOf(view) !== -1) {
        /* 개요·랜덤·모의고사·문제은행·오답·기록 → 과목 스코프(#<과목>/<화면> · 개요는 learning)
           개요는 지금 고른 단원을 남긴다 — 첫 단원(이론1)이면 기존처럼 learning. */
        const cid = COURSE_ID || currentCourse().course.id;
        const secs = (view === "overview") ? courseSections() : [];
        const secId = (view === "overview") ? activeSectionId() : "";
        const first = secs.length ? secs[0].id : "";
        target = courseSlug(cid) + "/" + ((secId && secId !== first) ? secId : viewSegment(view));
      } else {
        target = view;
      }
      if (String(window.location.hash || "").replace(/^#/, "") === target) return;
      const url = "#" + target;
      /* 부팅 때의 주소 정리는 replace(중복 항목 방지), 앱 내 이동은 push → 브라우저 뒤로가기로 되돌아갈 수 있다 */
      if (APP_READY && window.history.pushState) window.history.pushState(null, "", url);
      else window.history.replaceState(null, "", url);
    } catch (e) { /* ignore */ }
  }

  /* ---------- 사이드바 ---------- */
  function closeSidebar() {
    const b = document.body;
    if (b) b.className = String(b.className || "").replace(/\s*sb-open/g, "");
  }
  function renderSidebar() {
    /* 계정 기능이 켜져 있는데 로그인 전이면 사이드바를 감춘다 (자기 기록/진도를 볼 수 있을 때만 보임) */
    const hide = locked();
    const bd = document.body;
    if (bd) {
      const cls = String(bd.className || "");
      bd.className = hide
        ? (cls.indexOf("sbLocked") === -1 ? (cls + " sbLocked").replace(/^\s+/, "") : cls)
        : cls.replace(/\s*sbLocked/g, "");
    }
    if (hide) {
      const nav0 = el("sbNav"); if (nav0) nav0.innerHTML = "";
      const f0 = el("sbFoot"); if (f0) f0.innerHTML = "";
      const bs0 = el("brandSub"); if (bs0) bs0.textContent = "";
      return;
    }
    const nav = el("sbNav");
    if (nav) {
      let html = "";
      CURRICULUM.forEach(function (sem) {
        html += '<div class="sbSem">';
        html += '<button class="sbSemHead' + (sem.open ? " open" : "") + '" data-sem="' + sem.id + '" type="button">' +
          '<span class="chev"></span><span>' + esc(label(sem.label)) + "</span>" +
          '<span class="sbSemSub">' + esc(label(sem.sub)) + "</span></button>";
        if (sem.open) {
          if (!sem.courses.length) html += '<div class="sbSoon">' + t("sb.soon") + "</div>";
          sem.courses.forEach(function (c) {
            html += '<div class="sbCourse"><div class="sbCourseHead">' + esc(label(c.label)) + "</div>";
            if (c.sub) html += '<div class="sbCourseSub">' + esc(label(c.sub)) + "</div>";
            html += '<div class="sbItems">';
            c.items.forEach(function (it) {
              if (it.href) {
                /* 용어집은 그 과목의 단어만 보이도록 과목을 붙여 이동한다 */
                const href = it.id === "glossary" ? it.href + "?course=" + c.id : it.href;
                html += '<a class="sbItem" href="' + href + '">' + esc(label(it.label)) + "</a>";
              } else {
                html += '<button class="sbItem' + (VIEW === it.id ? " on" : "") + '" data-view="' + it.id +
                  '" type="button">' + esc(label(it.label)) + "</button>";
              }
            });
            html += "</div></div>";
          });
        }
        html += "</div>";
      });
      nav.innerHTML = html;
      nav.querySelectorAll("[data-view]").forEach(function (b) {
        b.onclick = function () { go(b.getAttribute("data-view")); };
      });
      nav.querySelectorAll("[data-sem]").forEach(function (b) {
        b.onclick = function () {
          const id = b.getAttribute("data-sem");
          CURRICULUM.forEach(function (s) { if (s.id === id) s.open = !s.open; });
          renderSidebar();
        };
      });
    }
    const bs = el("brandSub");
    if (bs) {
      const c = currentCourse();
      bs.textContent = label(c.sem.label) + " · " + label(c.course.label);
    }
    const foot = el("sbFoot");
    if (foot) {
      foot.innerHTML = '<div class="sbFootTitle">' + t("sb.progress") + '</div><div class="sbProgress">' +
        "<div>" + t("sb.best") + "<b>" + (store.best || 0) + "</b></div>" +
        "<div>" + t("sb.taken") + "<b>" + takenCount() + " / " +
        (MOCKS ? MOCKS.mocks.length : 0) + "</b></div>" +
        "<div>" + t("sb.wrong") + "<b>" + wrongCount() + "</b></div></div>";
    }
  }

  /* ---------- 공통 조각 ---------- */
  /* 응시한 세트 수 — 저장된 기록 중 **지금도 존재하는 세트**만 센다.
     (세트 구성이 바뀌어 사라진 옛 세트 id 의 기록이 남아 있어도 숫자가 틀리지 않게) */
  function takenCount() {
    const best = store.mockBest || {};
    if (!MOCKS) return Object.keys(best).length;
    return MOCKS.mocks.filter(function (m) { return best[m.id] !== undefined; }).length;
  }
  /* 저장된 'date' 문자열을 현재 언어로 다시 포맷하기 위한 파서 (at 없는 옛 기록용).
     ko: "11. 05. 오후 05:49" / en: "11/05, 05:49 PM" → Date (연도는 올해로 가정) */
  function parseHistDate(s) {
    if (!s || typeof s !== "string") return null;
    let m = /^(\d{1,2})\.\s*(\d{1,2})\.\s*(오전|오후)?\s*(\d{1,2}):(\d{2})$/.exec(s.trim());
    if (m) {
      let hh = parseInt(m[4], 10);
      if (m[3] === "오후" && hh < 12) hh += 12;
      if (m[3] === "오전" && hh === 12) hh = 0;
      const d = new Date();
      d.setMonth(parseInt(m[1], 10) - 1, parseInt(m[2], 10));
      d.setHours(hh, parseInt(m[5], 10), 0, 0);
      return isNaN(d.getTime()) ? null : d;
    }
    m = /^(\d{1,2})\/(\d{1,2}),\s*(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(s.trim());
    if (m) {
      let hh = parseInt(m[3], 10);
      if (/PM/i.test(m[5]) && hh < 12) hh += 12;
      if (/AM/i.test(m[5]) && hh === 12) hh = 0;
      const d = new Date();
      d.setMonth(parseInt(m[1], 10) - 1, parseInt(m[2], 10));
      d.setHours(hh, parseInt(m[4], 10), 0, 0);
      return isNaN(d.getTime()) ? null : d;
    }
    return null;
  }
  /* 기록 날짜 표시: at(ISO) 이 있으면 지금 언어로 다시 포맷한다 (영어 UI면 영어 날짜).
     at 이 없는 옛 기록도 저장된 date 문자열을 파싱해 같은 규칙으로 다시 포맷한다. */
  function histDate(h) {
    if (!h) return "";
    const opt = { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
    const loc = LANG === "en" ? "en-US" : "ko-KR";
    if (h.at) {
      try {
        const d = new Date(h.at);
        if (!isNaN(d.getTime())) return d.toLocaleString(loc, opt);
      } catch (e) { /* noop */ }
    }
    const d2 = parseHistDate(h.date);
    return d2 ? d2.toLocaleString(loc, opt) : (h.date || "");
  }
  /* 기록 표의 MODE 칸: 전체 라벨("범위 연습 · 무제한 · ⭐ A")은 좁은 칸에서 여러 줄로 깨진다.
     첫 조각(기본 모드 이름)만 보여 주고, 전체 라벨은 title 툴팁으로 남긴다. */
  function histMode(h) {
    const s = (h && h.mode) || "";
    const i = s.indexOf(" · ");
    return i === -1 ? s : s.slice(0, i);
  }
  function histRowsHtml(limit) {
    const hist = store.history.slice(-limit).reverse();
    if (!hist.length) return '<tr><td colspan="4" class="muted">' + t("home.noRecords") + "</td></tr>";
    return hist.map(function (h) {
      return "<tr><td>" + esc(histDate(h)) + '</td><td class="hmode" title="' + esc(h.mode) + '">' +
        esc(histMode(h)) + "</td><td>" + h.total + " / " + h.max +
        '</td><td class="' + (h.total >= h.pass ? "pass" : "fail") + '">' +
        (h.total >= h.pass ? "PASS" : "FAIL") + "</td></tr>";
    }).join("");
  }
  function histTableHtml(limit) {
    return '<table class="grid histTable"><tr><th>' + t("home.th.date") + "</th><th>" + t("home.th.mode") + "</th><th>" +
      t("home.th.score") + "</th><th>" + t("home.th.result") + "</th></tr>" + histRowsHtml(limit) + "</table>";
  }
  function mockRowHtml(m, i) {
    const best = (store.mockBest || {})[m.id];
    const isFinal = !!m.final;
    const isReal = m.kind === "real";
    const tagKey = isFinal ? "home.mock.tagFinal" : (isReal ? "home.mock.tagReal" : "home.mock.tagExtra");
    /* 이론1 화면에서는 강의 7(이론2 범위) 문항이 섞인 세트가 몇 문항인지 알려 준다 */
    const mix = (m.l7 && sectionScope() === "t1") ? tf("mock.mixedL7", m.l7) + " · " : "";
    return '<div class="mockRow' + (isFinal ? " final" : "") + '">' +
      '<span class="tag' + (isFinal ? " finalTag" : "") + '">' + t(tagKey) + "</span>" +
      '<span class="name">' + esc(mockLabel(m)) + "</span>" +
      '<span class="best">' + (best !== undefined ? tf("home.mock.best", best, m.questions.length) : t("home.mock.none")) + "</span>" +
      '<button class="btn sm primary" data-mock="' + m.id + '">' + t("home.start") + "</button>" +
      '<span class="meta">' + mix + (timerOffPref()
        ? tf("home.mock.metaOff", m.questions.length, m.pass)
        : tf("home.mock.meta", m.questions.length, m.minutes, m.pass)) + "</span>" +
      "</div>";
  }
  /* 최종 모의고사(있으면)와 나머지 세트를 나눈다 — 지금 단원(범위)의 세트만 */
  function splitMocks() {
    const list = scopedMocks();
    return {
      finalSet: list.filter(function (m) { return m.final; }),
      rest: list.filter(function (m) { return !m.final; })
    };
  }
  function wireMockButtons() {
    document.querySelectorAll("[data-mock]").forEach(function (b) {
      b.onclick = function () { startMock(b.getAttribute("data-mock")); };
    });
  }
  function wireGrpButtons() {
    document.querySelectorAll("[data-grpstart]").forEach(function (b) {
      b.onclick = function () { startGroup([b.getAttribute("data-grpstart")]); };
    });
  }
  function grpChipsHtml() {
    const c = grpCounts();
    return GRP_ORDER.filter(function (g) { return c[g]; }).map(function (g) {
      return '<label class="fchip"><input type="checkbox" class="grpfilter" value="' + g + '" checked> ' +
        t("grp." + g) + ' <span class="muted">' + c[g] + "</span></label>";
    }).join("");
  }
  function tierChipsHtml() {
    const c = tierCounts();
    return TIER_ORDER.filter(function (x) { return c[x]; }).map(function (x) {
      return '<label class="fchip"><input type="checkbox" class="tierfilter" value="' + x + '" checked> ' +
        t("tier." + x) + ' <span class="muted">' + c[x] + "</span></label>";
    }).join("");
  }
  function lecChipsHtml() {
    const lec = byLecture(ALL);
    return LEC_ORDER.filter(function (k) { return lec[k]; }).map(function (k) {
      return '<label class="fchip"><input type="checkbox" class="lecfilter" value="' + k + '"' +
        (k === "NumPy" ? "" : " checked") + "> " + k + ' <span class="muted">' + lec[k] + "</span></label>";
    }).join("");
  }
  function startOne(qid) {
    const q = ALL.filter(function (x) { return x.id === qid; })[0];
    if (!q) return;
    /* 문항 1개 연습은 항상 시간 제한 없음 */
    newSession([q], {
      mode: "one", detail: qid, label: t("mode.one") + " · " + qid, minutes: 0, timed: false,
      shuffleQuestions: false, shuffleOptions: false
    });
    renderQuiz();
  }
  function metaNote() {
    return (LANG === "en" && META.real_exam_note_en) ? META.real_exam_note_en : META.real_exam_note;
  }
  function gradingNote() {
    return (LANG === "en" && META.grading_note_en) ? META.grading_note_en : META.grading_note;
  }
  function statCard(key, value) {
    return "<div>" + t(key) + "<b>" + value + "</b></div>";
  }
  /* 시험 중요도 배지 (NumPy 문항 전용) — 마우스를 올리면 근거가 보인다 */
  function prioBadge(q) {
    if (!q || !q.prio) return "";
    const note = qf(q, "prio_note") || "";
    return '<span class="prio' + q.prio + '" title="' + esc(t("prio.tip") + ": " + note) + '">' +
      t("prio." + q.prio) + "</span>";
  }

  /* 출처 그룹 배지 (dnd_question_classification.md) — 마우스를 올리면 그룹 설명 + 메모 */
  const GRP_KEYS = { "1-docx": "1", "2a-lecture": "2a", "2b-lecture7": "2b", "3-extra": "3" };
  const GRP_ORDER = ["1-docx", "2a-lecture", "2b-lecture7", "3-extra"];
  function grpBadge(q) {
    if (!q || !q.group) return "";
    const k = GRP_KEYS[q.group] || "3";
    const note = qf(q, "group_note") || "";
    const tip = t("grp.tip." + k) + (note ? " · " + t("grp.noteLabel") + ": " + note : "");
    return '<span class="grp grp' + k + '" title="' + esc(tip) + '">' + t("grp." + q.group) + "</span>";
  }
  function grpCounts() {
    const m = {};
    GRP_ORDER.forEach(function (g) { m[g] = 0; });
    ALL.forEach(function (q) { if (q.group && m[q.group] !== undefined) m[q.group]++; });
    return m;
  }
  /* 선택한 출처 그룹만 모아 연습 시작 (기본 무제한) */
  function startGroup(groups) {
    const pool = ALL.filter(function (q) { return groups.indexOf(q.group) !== -1; });
    if (!pool.length) { alert(t("alert.noMock")); return; }
    const timed = timedChoice();
    const names = groups.map(function (g) { return t("grp." + g); }).join(", ");
    newSession(pool, {
      mode: "range", detail: names,
      label: modeLabel("mode.range", timed) + " · " + names,
      minutes: timed ? Math.max(10, Math.round(pool.length * 1.2)) : 0,
      timed: timed, shuffleQuestions: true, shuffleOptions: false
    });
    renderQuiz();
  }
  /* 중요도 티어 배지 — 별표로 표시 (A=5개, B=4개, C=3개) */
  const TIER_ORDER = ["A", "B", "C"];
  function tierBadge(q) {
    if (!q || !q.tier) return "";
    const note = qf(q, "tier_note") || "";
    const tip = t("tier.tip." + q.tier) + (note ? " · " + note : "");
    return '<span class="tier tier' + q.tier + '" title="' + esc(tip) + '">' + t("tier." + q.tier) + "</span>";
  }
  function tierCounts() {
    const m = { A: 0, B: 0, C: 0 };
    ALL.forEach(function (q) { if (q.tier && m[q.tier] !== undefined) m[q.tier]++; });
    return m;
  }
  /* 선택한 티어만 모아 연습 시작 (기본 무제한) */
  function startTier(tiers) {
    const pool = ALL.filter(function (q) { return tiers.indexOf(q.tier) !== -1; });
    if (!pool.length) { alert(t("alert.noMock")); return; }
    const timed = timedChoice();
    const names = tiers.map(function (x) { return t("tier." + x); }).join(" + ");
    newSession(pool, {
      mode: "range", detail: names,
      label: modeLabel("mode.range", timed) + " · " + names,
      minutes: timed ? Math.max(10, Math.round(pool.length * 1.2)) : 0,
      timed: timed, shuffleQuestions: true, shuffleOptions: false
    });
    renderQuiz();
  }
  /* 티어 시작 버튼(개요·문제은행 공용) — data-tier="A" / data-tier="AB" */
  function wireTierButtons() {
    document.querySelectorAll("[data-tierstart]").forEach(function (b) {
      b.onclick = function () {
        const v = b.getAttribute("data-tierstart");
        startTier(v === "AB" ? ["A", "B"] : [v]);
      };
    });
  }
  function panel(titleHtml, bodyHtml, extra) {
    return '<div class="panel"' + (extra || "") + "><div class=\"panelHead\">" + titleHtml + "</div>" + bodyHtml + "</div>";
  }

  /* ---------- 뷰 1: 개요 ---------- */
  /* 단원(섹션) 탭 바 — 개요 상단에 붙는다. 첫 단원(이론1)이 기본. */
  function sectionBarHtml(secs, active) {
    const tabs = secs.map(function (s, i) {
      const scopeTxt = s.scope === "t1" ? " " + t("sec.scope.t1") : (s.scope === "t2" ? " " + t("sec.scope.t2") : "");
      return '<button type="button" class="secTab' + (s.id === active ? " on" : "") +
        '" data-sec="' + esc(s.id) + '">' +
        '<span class="secTabNum">' + (i + 1) + "</span>" +
        "<span>" + esc(label(s.label)) + scopeTxt + "</span>" +
        (s.ready ? "" : '<span class="secTabSoon">' + esc(t("sec.soon")) + "</span>") + "</button>";
    }).join("");
    return '<div class="secBar"><div class="secBarLab">' + esc(t("sec.title")) + "</div>" +
      '<div class="secTabs" role="tablist">' + tabs + "</div></div>";
  }
  function wireSectionButtons() {
    document.querySelectorAll("[data-sec]").forEach(function (b) {
      b.onclick = function () {
        const id = b.getAttribute("data-sec");
        if (id === activeSectionId()) return;
        COURSE_SECTION = id;
        syncHash("overview");
        renderView();
      };
    });
  }

  function renderOverview() {
    const c = currentCourse();
    const sc = sectionScope();
    const ex = sectionExam();
    const scMocks = scopedMocks();
    const wrongN = ALL.filter(function (q) { return store.wrong[q.id] > 0; }).length;
    /* 단원(섹션): 이론1·이론2 는 시험 범위(강의)별로 문제·모의고사를 나눠 쓰고, 나머지는 '준비 중' 화면 */
    const secs = courseSections();
    const activeSec = activeSectionId();
    const secObj = sectionById(activeSec);
    const secReady = !secs.length || !!(secObj && secObj.ready);
    const secBar = secs.length ? sectionBarHtml(secs, activeSec) : "";
    const secNote = secReady && secObj && secObj.note
      ? '<div class="secScopeNote">' + esc(label(secObj.note)) + "</div>" : "";
    const scopeLine = secReady
      ? '<div class="secScopeNote">' + tf("sc.scope." + sc, ALL.length, scMocks.length) + "</div>" : "";
    const headPanel =
      '<div class="panel" style="margin-bottom:16px"><div class="panelBody">' +
      '<h1 class="pageTitle">' + esc(label(c.course.label)) + "</h1>" +
      '<div class="muted">' + esc(label(c.sem.label)) + " · " + esc(label(c.sub)) + "</div>" +
      '<div class="muted">' + t("home.grading") + esc(gradingNote()) + "</div>" +
      '<div class="stat" style="margin-top:16px">' +
      statCard("ov.questions", ALL.length) +
      statCard("ov.mocks", scMocks.length) +
      statCard("ov.words", (typeof GLOSSARY_COUNT !== "undefined" ? GLOSSARY_COUNT : 411)) +
      statCard("ov.best", store.best || 0) +
      "</div></div></div>";
    if (!secReady) {
      app.innerHTML = headPanel + secBar +
        panel(esc(label(secObj.label)),
          '<div class="panelBody secEmpty"><b class="secEmptyTitle">' + t("sec.soonTitle") + "</b>" +
          '<p class="muted">' + t("sec.soonBody") + "</p></div>");
      wireSectionButtons();
      return;
    }
    /* 주력: 티어별 연습 → 랜덤 → 오답 복습.  실전 모드/전체 연습은 접어 둔다(보조) */
    const quick =
      '<div class="rowGrid"><span class="name">' + t("home.mode.rand") + "</span>" +
      '<span class="muted">' + t("home.mode.rand.sub") +
        (store.randCount ? " · " + tf("rand.nLast", store.randCount) : "") + "</span>" +
      '<span class="grow"></span><button class="btn sm primary" id="mRand">' + t("home.start") + "</button></div>" +
      '<div class="rowGrid"><span class="name">' + t("home.mode.wrong") + "</span>" +
      '<span class="muted">' + tf("home.mode.wrong.sub", wrongN) + "</span>" +
      '<span class="grow"></span><button class="btn sm" id="mWrong"' + (wrongN ? "" : " disabled") + ">" +
      t("home.start") + "</button></div>" +
      '<details class="more"><summary>' + t("home.more") + "</summary>" +
      '<div class="rowGrid"><span class="name">' + t("home.mode.exam") + "</span>" +
      '<span class="muted">' + (sc === "t2"
        ? tf("home.mode.exam.subT2", ex.questions, ex.minutes)
        : tf("home.mode.exam.sub", ex.questions, ex.minutes)) + "</span>" +
      '<span class="grow"></span><button class="btn sm" id="mExam">' + t("home.start") + "</button></div>" +
      '<div class="rowGrid"><span class="name">' + t("home.mode.all") + "</span>" +
      '<span class="muted">' + tf("home.mode.all.sub", ALL.length) + "</span>" +
      '<span class="grow"></span><button class="btn sm" id="mAll">' + t("home.start") + "</button></div>" +
      "</details>" +
      '<div class="panelBody"><div class="row">' +
      '<label class="chk"><input type="checkbox" id="optTimed"> ' + t("opt.timed") + "</label>" +
      '<label class="chk"><input type="checkbox" id="optTimerOff"' +
      (timerOffPref() ? " checked" : "") + "> " + t("opt.timerOff") + "</label>" +
      '</div><div class="muted" style="margin-top:6px">' + t("opt.timedHint") + " " +
      t("opt.timerOffHint") + "</div></div>";
    const recent = histTableHtml(4) +
      '<div class="note"><button class="linkish" id="seeAll">' + t("ov.seeAll") + "</button></div>";
    const mockHead = t("ov.mocks") + '<span class="grow"></span><button class="linkish" id="mocksAll">' +
      t("mocks.titleShort") + " →</button>";
    const sm = splitMocks();
    const mockBody = MOCKS
      ? sm.finalSet.map(function (m, i) { return mockRowHtml(m, i); }).join("") +
        sm.rest.slice(0, sm.finalSet.length ? 2 : 3).map(function (m, i) { return mockRowHtml(m, i); }).join("") +
        '<div class="note">' + (sc === "t2" ? t("ov.noteT2") : tf("ov.note", MOCKS.meta.primary)) + "</div>"
      : '<div class="panelBody muted">' + t("home.mock.empty") + "</div>";

    const gc = grpCounts();
    const grpQuick = GRP_ORDER.filter(function (g) { return (gc[g] || 0) > 0; }).map(function (g) {
      const k = GRP_KEYS[g];
      return '<div class="rowGrid"><span class="grp grp' + k + '">' + t("grp." + g) + "</span>" +
        '<span class="name">' + t("grp.desc." + k) + "</span>" +
        '<span class="muted">' + tf("foundCount", gc[g]) + "</span>" +
        '<span class="grow"></span>' +
        '<button class="btn sm' + (g === "1-docx" ? " primary" : "") + '" data-grpstart="' + g + '">' +
        t("home.start") + "</button></div>";
    }).join("") + '<div class="note">' + t("grp.meta") + "</div>";

    /* ⭐ 중요도 티어: A 먼저, 그다음 B (가장 중요한 패널) */
    const tc = tierCounts();
    const tierRows = [
      ["A", tc.A, "tier.A", "tier.desc.A", " primary"],
      ["B", tc.B, "tier.B", "tier.desc.B", ""]
    ].map(function (r) {
      return '<div class="rowGrid"><span class="tier tier' + r[0] + '">' + t(r[2]) + "</span>" +
        '<span class="name">' + t(r[3]) + "</span>" +
        '<span class="muted">' + tf("foundCount", r[1]) + "</span>" +
        '<span class="grow"></span>' +
        '<button class="btn sm' + r[4] + '" data-tierstart="' + r[0] + '">' + t("home.start") + "</button></div>";
    }).join("") + '<div class="note">' + t("tier.meta") + "</div>";

    app.innerHTML = headPanel + secBar + secNote + scopeLine +
      '<div class="examWrap homeWrap">' +
      "<div>" +
      (sc === "t1" ? panel(t("tier.quick"), tierRows, ' style="margin-bottom:16px"') : "") +
      panel(t("grp.quick"), grpQuick, ' style="margin-bottom:16px"') +
      panel(t("ov.quick"), quick, ' style="margin-bottom:16px"') +
      panel(t("home.howto"), '<div class="panelBody muted">' + tf("home.howto.body", ex.minutes) + "</div>") +
      "</div>" +
      "<div>" +
      panel(t("ov.recent"), recent, ' style="margin-bottom:16px"') +
      panel(mockHead, mockBody) +
      "</div></div>";

    el("mExam").onclick = function () { startMode("exam"); };
    el("mRand").onclick = function () { startRandom(); };
    wireGrpButtons();
    wireTierButtons();
    el("mAll").onclick = function () { startMode("all"); };
    if (el("mWrong") && wrongN) el("mWrong").onclick = function () { startMode("wrong"); };
    if (el("optTimerOff")) {
      el("optTimerOff").onchange = function () { setTimerOffPref(!!el("optTimerOff").checked); };
    }
    el("seeAll").onclick = function () { go("records"); };
    el("mocksAll").onclick = function () { go("mocks"); };
    wireMockButtons();
    wireSectionButtons();
  }

  /* ---------- 뷰: 🎲 랜덤 문항 (1~100 직접 입력) ---------- */
  const RAND_MIN = 1, RAND_MAX = 100, RAND_DEFAULT = 10;
  const RAND_PRESETS = [1, 5, 10, 20, 50, 100];
  function randPool(scope) {
    if (scope === "theory") return ALL.filter(function (q) { return q.part !== "B"; });
    if (scope === "numpy") return ALL.filter(function (q) { return q.part === "B"; });
    if (scope === "tierA") return ALL.filter(function (q) { return q.tier === "A"; });
    if (scope === "tierB") return ALL.filter(function (q) { return q.tier === "B"; });
    if (scope === "tierAB") return ALL.filter(function (q) { return q.tier === "A" || q.tier === "B"; });
    if (scope.indexOf("grp:") === 0) {
      const g = scope.slice(4);
      return ALL.filter(function (q) { return q.group === g; });
    }
    return ALL.slice();
  }
  /* 범위 이름 (티어·그룹 범위도 같은 방식으로 표시) */
  function randScopeLabel(scope, n) {
    if (scope === "tierAB") return t("tier.AB") + " (" + tf("rand.nLabel", n) + ")";
    if (scope === "tierA" || scope === "tierB") {
      return t("tier." + scope.slice(4)) + " (" + tf("rand.nLabel", n) + ")";
    }
    if (scope.indexOf("grp:") === 0) return t("grp." + scope.slice(4)) + " (" + tf("rand.nLabel", n) + ")";
    return tf("rand.scope." + scope, n);
  }
  function randScope() {
    const e = el("randScope");
    if (e && e.value) return e.value;
    /* 결과 화면의 '다시 뽑기' 등: 직전 랜덤 세션의 범위를 그대로 쓴다 */
    if (S && S.cfg && S.cfg.mode === "random" && S.cfg.scope) return S.cfg.scope;
    return "all";
  }
  /* 사용자가 입력한 문항 수. 랜덤 뷰가 아니거나 입력칸이 없으면(개요/결과 화면)
     직전 값 → 저장값 → 기본값 순으로 쓴다.
     { want: 숫자|null, strict: 입력칸이 있었는지 } */
  function randRequest() {
    const e = el("randCount");
    if (VIEW !== "random" || !e) {
      if (S && S.cfg && S.cfg.mode === "random" && S.cfg.want) return { want: S.cfg.want, strict: false };
      return { want: store.randCount || RAND_DEFAULT, strict: false };
    }
    const raw = String(e.value === undefined || e.value === null ? "" : e.value).trim();
    if (!/^\d+$/.test(raw)) return { want: null, strict: true };
    return { want: parseInt(raw, 10), strict: true };
  }
  /* 지금 설정으로 실제 출제될 문항 수 (범위 크기로 잘라낸다) */
  function randPlan() {
    const req = randRequest();
    const scope = randScope();
    const pool = randPool(scope);
    const want = Math.min(req.want === null ? RAND_DEFAULT : req.want, RAND_MAX);
    return { scope: scope, pool: pool, want: want, n: Math.min(want, pool.length) };
  }
  function randMinutes(n) { return Math.max(5, n * 3); }   /* 시험과 같은 문항당 3분 */
  function updateRandMeta() {
    const box = el("randMeta");
    if (!box) return;
    const p = randPlan();
    box.textContent = randScopeLabel(p.scope, p.pool.length) + " · " +
      tf("rand.meta2", p.n, randMinutes(p.n));
  }
  function startRandom() {
    const req = randRequest();
    if (req.strict && (req.want === null || req.want < RAND_MIN || req.want > RAND_MAX)) {
      alert(t("rand.alertCount"));
      return;
    }
    const p = randPlan();
    if (p.n < 1) { alert(t("alert.noMock")); return; }
    store.randCount = p.want;                     /* 다음에 '바로 시작'할 때 재사용 */
    saveStore();
    const picked = shuffle(p.pool).slice(0, p.n);
    /* 화면에 시간 제한 체크박스가 없으면(결과 화면의 '다시 뽑기') 직전 설정을 유지 */
    const timed = el("optTimed") ? timedChoice() : !!(S && S.cfg && S.cfg.timed);
    newSession(picked, {
      mode: "random", scope: p.scope, want: p.want,
      detailKey: "rand.nLabel", detailArg: p.n,
      label: modeLabel("mode.random", timed) + " · " + randScopeLabel(p.scope, p.pool.length) +
             " · " + tf("rand.nLabel", p.n),
      minutes: timed ? randMinutes(p.n) : 0, timed: timed,
      shuffleQuestions: true,
      shuffleOptions: false
    });
    renderQuiz();
  }
  function renderRandom() {
    const isT1 = sectionScope() === "t1";
    const theoryN = ALL.filter(function (q) { return q.part !== "B"; }).length;
    const numpyN = ALL.filter(function (q) { return q.part === "B"; }).length;
    const last = store.randCount || RAND_DEFAULT;
    const best = store.randBest || 0;
    const hist = store.history.filter(function (h) { return h.mk === "random" || h.mk === "random10"; })
      .slice(-8).reverse();
    const rows = hist.length
      ? hist.map(function (h) {
          const passed = h.total >= h.pass;
          return "<tr><td>" + esc(histDate(h)) + "</td><td>" + h.total + " / " + h.max + '</td><td class="' +
            (passed ? "pass" : "fail") + '">' + (passed ? "PASS" : "FAIL") + "</td></tr>";
        }).join("")
      : '<tr><td colspan="3" class="muted">' + t("rand.none") + "</td></tr>";
    const presets = RAND_PRESETS.map(function (v) {
      return '<button class="btn sm" type="button" id="randP' + v + '">' + v + "</button>";
    }).join("");
    const gc = grpCounts();
    const tc = tierCounts();

    app.innerHTML =
      panel(t("rand.title"),
        '<div class="panelBody">' +
        '<div class="muted">' + t("rand.sub") + "</div>" +
        '<div class="row" style="margin-top:14px">' +
        '<span class="name">' + t("rand.count") + "</span>" +
        '<input id="randCount" class="search" type="number" min="' + RAND_MIN + '" max="' + RAND_MAX +
        '" step="1" value="' + last + '" style="max-width:110px">' +
        '<button class="btn primary" id="randStart">' + t("rand.start") + "</button>" +
        '<span class="grow"></span>' +
        '<label class="chk"><input type="checkbox" id="optTimed"> ' + t("opt.timed") + "</label>" +
        "</div>" +
        '<div class="row" style="margin-top:10px">' +
        '<span class="muted">' + t("rand.preset") + "</span>" + presets +
        '<span class="grow"></span>' +
        '<span class="name">' + t("rand.scope") + "</span>" +
        '<select id="randScope" class="search" style="max-width:210px">' +
        '<option value="all">' + tf("rand.scope.all", ALL.length) + "</option>" +
        (isT1 ? '<option value="tierAB">' + t("tier.AB") + " (" + tf("rand.nLabel", tc.A + tc.B) + ")</option>" +
          '<option value="tierA">' + t("tier.A") + " (" + tf("rand.nLabel", tc.A) + ")</option>" +
          '<option value="tierB">' + t("tier.B") + " (" + tf("rand.nLabel", tc.B) + ")</option>" : "") +
        (numpyN ? '<option value="theory">' + tf("rand.scope.theory", theoryN) + "</option>" +
          '<option value="numpy">' + tf("rand.scope.numpy", numpyN) + "</option>" : "") +
        GRP_ORDER.filter(function (g) { return gc[g]; }).map(function (g) {
          return '<option value="grp:' + g + '">' + t("grp." + g) + " (" + tf("rand.nLabel", gc[g]) + ")</option>";
        }).join("") +
        "</select>" +
        "</div>" +
        '<div class="muted" id="randMeta" style="margin-top:8px"></div>' +
        '<div class="muted" style="margin-top:4px">' + t("rand.hint") + " " + t("home.fixedOrder") + "</div></div>",
        ' style="margin-bottom:16px"') +
      panel(t("rand.recent") + '<span class="grow"></span><span class="muted">' +
        t("rand.bestLabel") + " " + (best ? best + t("rand.pts") : t("home.mock.none")) + "</span>",
        '<table class="grid histTable"><tr><th>' + t("home.th.date") + "</th><th>" + t("home.th.score") +
        "</th><th>" + t("home.th.result") + "</th></tr>" + rows + "</table>",
        ' style="margin-bottom:16px"') +
      '<div class="note"><button class="linkish" id="goMocks">' + t("mocks.titleShort") + " →</button> " +
      '<button class="linkish" id="goBank">' + t("bank.title") + " →</button> " +
      '<button class="linkish" id="goWrong">' + t("wrong.title") + " →</button></div>";

    el("randStart").onclick = function () { startRandom(); };
    el("randCount").oninput = function () { updateRandMeta(); };
    el("randScope").onchange = function () { updateRandMeta(); };
    el("optTimed").onchange = function () { updateRandMeta(); };
    RAND_PRESETS.forEach(function (v) {
      el("randP" + v).onclick = function () { el("randCount").value = String(v); updateRandMeta(); };
    });
    el("goMocks").onclick = function () { go("mocks"); };
    el("goBank").onclick = function () { go("bank"); };
    el("goWrong").onclick = function () { go("wrong"); };
    updateRandMeta();
  }

  /* ---------- 뷰 2: 모의고사 ---------- */
  function renderMocks() {
    if (!MOCKS) {
      app.innerHTML = panel(t("mocks.title"), '<div class="panelBody muted">' + t("home.mock.empty") + "</div>");
      return;
    }
    const sc = sectionScope();
    const ex = sectionExam();
    const sm = splitMocks();
    /* 세트 종류(kind)로 나눈다 — 실전 형식 / 그 밖(추가·연습·전체 점검) */
    const real = sm.rest.filter(function (m) { return m.kind === "real"; });
    const extra = sm.rest.filter(function (m) { return m.kind !== "real"; });
    const finalPanel = sm.finalSet.length
      ? '<div class="panel finalPanel" style="margin-bottom:16px">' +
        '<div class="panelHead">' + t("mocks.final") + "</div>" +
        '<div class="panelNote">' + t("mocks.finalNote") + "</div>" +
        sm.finalSet.map(function (m, i) { return mockRowHtml(m, i); }).join("") +
        "</div>"
      : "";
    app.innerHTML =
      finalPanel +
      '<div class="panel" style="margin-bottom:16px">' +
      '<div class="panelHead">' + t("mocks.titleShort") + "</div>" +
      '<div class="panelBody muted">' + tf("home.mock.meta", ex.questions, ex.minutes, ex.pass) +
      "<br>" + esc(sc === "t2" ? t("mocks.t2note") : metaNote()) + "</div>" +
      (real.length ? '<div class="panelHead">' + tf("mocks.real", real.length) + "</div>" : "") +
      '<div class="panelBody muted"><label class="chk"><input type="checkbox" id="optTimerOff"' +
      (timerOffPref() ? " checked" : "") + "> " + t("opt.timerOff") + "</label> " +
      t("opt.timerOffHint") + "</div>" +
      real.map(function (m, i) { return mockRowHtml(m, i); }).join("") +
      (extra.length ? '<div class="panelHead">' + tf("mocks.extraN", extra.length) + "</div>" : "") +
      extra.map(function (m, i) { return mockRowHtml(m, i); }).join("") +
      '<div class="note">' + (sc === "t2" ? t("ov.noteT2") : tf("ov.note", MOCKS.meta.primary)) + "</div></div>";
    wireMockButtons();
    if (el("optTimerOff")) {
      el("optTimerOff").onchange = function () { setTimerOffPref(!!el("optTimerOff").checked); };
    }
  }

  /* ---------- 뷰 3: 문제은행 ---------- */
  function renderBank() {
    const lec = byLecture(ALL);
    const order = LEC_ORDER.filter(function (k) { return lec[k]; });
    const lecRows = order.map(function (k) {
      return "<tr><td><span class='tag " + (k === "NumPy" ? "num" : "lec") + "'>" + esc(k) + "</span></td>" +
        "<td>" + lec[k] + "</td><td><button class='btn sm' data-lecstart='" + esc(k) + "'>" +
        t("bank.practice") + "</button></td></tr>";
    }).join("");
    /* 출처 그룹별 표 (1 DOCX 부터 공부할 수 있게) */
    const gc = grpCounts();
    const grpRows = GRP_ORDER.filter(function (g) { return (gc[g] || 0) > 0; }).map(function (g) {
      const k = GRP_KEYS[g];
      return "<tr><td><span class='grp grp" + k + "'>" + t("grp." + g) + "</span></td>" +
        "<td>" + t("grp.desc." + k) + "</td><td>" + gc[g] + "</td>" +
        "<td><button class='btn sm' data-grpstart='" + g + "'>" + t("bank.practice") + "</button></td></tr>";
    }).join("");
    /* 중요도 티어별 표 (A 부터 공부할 수 있게) */
    const tc2 = tierCounts();
    const tierRows = [
      ["A", tc2.A, "tier.desc.A"],
      ["B", tc2.B, "tier.desc.B"],
      ["C", tc2.C, "tier.desc.C"]
    ].map(function (r) {
      return "<tr><td><span class='tier tier" + r[0] + "'>" + t("tier." + r[0]) + "</span></td>" +
        "<td>" + t(r[2]) + "</td><td>" + r[1] + "</td>" +
        "<td><button class='btn sm' data-tierstart='" + r[0] + "'>" + t("bank.practice") + "</button></td></tr>";
    }).join("");
    const rows = ALL.map(function (q, i) {
      return '<tr data-idx="' + i + '" data-lec="' + esc(q.lecture) + '" data-grp="' + esc(q.group || "") +
        '" data-tier="' + esc(q.tier || "") + '" data-text="' +
        esc((q.id + " " + qf(q, "topic") + " " + qf(q, "prompt")).toLowerCase()) + '">' +
        "<td>" + (i + 1) + "</td><td class='mono'>" + esc(q.id) + "</td>" +
        "<td><span class='tag " + (q.part === "B" ? "num" : "lec") + "'>" + esc(q.lecture) + "</span></td>" +
        "<td>" + esc(qf(q, "topic")) + grpBadge(q) + tierBadge(q) + "</td>" +
        "<td class='mono'>" + q.correct.join(", ") + "</td>" +
        '<td><button class="btn sm" data-one="' + q.id + '">' + t("bank.practice") + "</button></td></tr>";
    }).join("");

    app.innerHTML =
      panel(t("bank.title") + '<span class="grow"></span><span class="muted" id="bankCount">' +
        tf("foundCount", ALL.length) + "</span>",
        '<div class="panelBody"><input id="bankQ" class="search" type="search" placeholder="' +
        t("bank.search") + '"><div class="filterRow" id="lecChips">' + lecChipsHtml() + "</div>" +
        (sectionScope() === "t1" ? '<div class="muted" style="margin-top:6px">' + t("tier.filter") + "</div>" +
        '<div class="filterRow" id="tierChips">' + tierChipsHtml() + "</div>" : "") +
        '<div class="muted" style="margin-top:6px">' + t("grp.filter") + "</div>" +
        '<div class="filterRow" id="grpChips">' + grpChipsHtml() + "</div>" +
        '<div class="row" style="margin-top:12px">' +
        '<button class="btn sm primary" id="mSel">' + t("home.startRange") + "</button>" +
        '<button class="btn sm" id="selAll">' + t("home.selAll") + "</button>" +
        '<button class="btn sm" id="selNone">' + t("home.selNone") + "</button>" +
        '<span class="grow"></span>' +
        '<label class="chk"><input type="checkbox" id="optTimed"> ' + t("opt.timed") + "</label>" +
        '<label class="chk"><input type="checkbox" id="optShufQ"> ' + t("home.shufQ") + "</label>" +
        "</div>" +
        '<div class="muted" style="margin-top:8px">' + t("bank.rangeHint") + " " + t("opt.timedHint") + "<br>" +
        t("home.fixedOrder") + "</div></div>",
        ' style="margin-bottom:16px"') +
      panel(t("bank.perLecture"),
        '<table class="grid"><tr><th>' + t("th.lecture") + "</th><th>" + t("th.count") + "</th><th></th></tr>" +
        lecRows + "</table>", ' style="margin-bottom:16px"') +
      panel(t("grp.title"),
        '<table class="grid"><tr><th>' + t("grp.title") + "</th><th>" + t("th.topic") + "</th><th>" +
        t("th.count") + "</th><th></th></tr>" + grpRows + "</table>", ' style="margin-bottom:16px"') +
      (sectionScope() === "t1" ? panel(t("tier.title"),
        '<table class="grid"><tr><th>' + t("tier.title") + "</th><th>" + t("th.topic") + "</th><th>" +
        t("th.count") + "</th><th></th></tr>" + tierRows + "</table>", ' style="margin-bottom:16px"') : "") +
      panel(t("bank.list"), '<table class="grid"><tr><th>#</th><th>ID</th><th>' + t("th.lecture") +
        "</th><th>" + t("th.topic") + "</th><th>" + t("bank.answer") + "</th><th></th></tr>" + rows + "</table>");

    el("bankQ").oninput = function () { filterBank(); };
    document.querySelectorAll("#lecChips .lecfilter").forEach(function (c) {
      c.onchange = function () { filterBank(); };
    });
    document.querySelectorAll("#grpChips .grpfilter").forEach(function (c) {
      c.onchange = function () { filterBank(); };
    });
    document.querySelectorAll("#tierChips .tierfilter").forEach(function (c) {
      c.onchange = function () { filterBank(); };
    });
    wireGrpButtons();
    wireTierButtons();
    document.querySelectorAll("[data-one]").forEach(function (b) {
      b.onclick = function () { startOne(b.getAttribute("data-one")); };
    });
    document.querySelectorAll("[data-lecstart]").forEach(function (b) {
      b.onclick = function () { startRange([b.getAttribute("data-lecstart")]); };
    });
    el("selAll").onclick = function () {
      document.querySelectorAll(".lecfilter").forEach(function (c) { c.checked = true; });
      filterBank();
    };
    el("selNone").onclick = function () {
      document.querySelectorAll(".lecfilter").forEach(function (c) { c.checked = false; });
      filterBank();
    };
    el("mSel").onclick = function () {
      startRange(Array.prototype.slice.call(document.querySelectorAll(".lecfilter:checked"))
        .map(function (c) { return c.value; }));
    };
  }

  /* 문제은행 표 필터 (검색어 + 강의 칩 + 출처 그룹 칩 + 티어 칩) */
  function filterBank() {
    const q = (el("bankQ") ? el("bankQ").value : "").trim().toLowerCase();
    const sel = Array.prototype.slice.call(document.querySelectorAll(".lecfilter:checked"))
      .map(function (c) { return c.value; });
    const grpEls = document.querySelectorAll(".grpfilter");
    const grpSel = Array.prototype.slice.call(document.querySelectorAll(".grpfilter:checked"))
      .map(function (c) { return c.value; });
    const tierEls = document.querySelectorAll(".tierfilter");
    const tierSel = Array.prototype.slice.call(document.querySelectorAll(".tierfilter:checked"))
      .map(function (c) { return c.value; });
    /* 칩이 아예 없으면(테스트 스텁 등) 그룹/티어 필터는 통과로 본다 */
    const grpAny = grpEls.length === 0;
    const tierAny = tierEls.length === 0;
    let shown = 0;
    document.querySelectorAll("tr[data-idx]").forEach(function (tr) {
      const okLec = sel.indexOf(tr.getAttribute("data-lec")) !== -1;
      const okGrp = grpAny || grpSel.indexOf(tr.getAttribute("data-grp")) !== -1;
      const okTier = tierAny || tierSel.indexOf(tr.getAttribute("data-tier")) !== -1;
      const okTxt = !q || tr.getAttribute("data-text").indexOf(q) !== -1;
      const show = okLec && okGrp && okTier && okTxt;
      tr.hidden = !show;
      if (show) shown++;
    });
    const c = el("bankCount");
    if (c) c.textContent = tf("foundCount", shown);
  }

  function startRange(lectures) {
    const pool = ALL.filter(function (q) { return lectures.indexOf(q.lecture) !== -1; });
    if (pool.length < 3) { alert(t("alert.minLecture")); return; }
    const timed = timedChoice();
    newSession(pool, {
      mode: "range", detail: lectures.join(", "),
      label: modeLabel("mode.range", timed) + " · " + lectures.join(", "),
      minutes: timed ? Math.max(10, Math.round(pool.length * 1.2)) : 0,
      timed: timed,
      shuffleQuestions: el("optShufQ") ? el("optShufQ").checked : false,
      shuffleOptions: false
    });
    renderQuiz();
  }

  /* ---------- 뷰 4: 오답 복습 ---------- */
  function renderWrong() {
    const list = ALL.filter(function (q) { return store.wrong[q.id] > 0; });
    if (!list.length) {
      app.innerHTML = panel(t("wrong.title"),
        '<div class="panelBody muted">' + t("wrong.empty") + "</div>" +
        '<div class="note"><button class="linkish" id="goMocks">' + t("mocks.titleShort") + " →</button></div>");
      el("goMocks").onclick = function () { go("mocks"); };
      return;
    }
    const rows = list.map(function (q) {
      return "<tr><td class='mono'>" + esc(q.id) + "</td>" +
        "<td><span class='tag " + (q.part === "B" ? "num" : "lec") + "'>" + esc(q.lecture) + "</span></td>" +
        "<td>" + esc(qf(q, "topic")) + "</td>" +
        "<td class='mono'>" + q.correct.join(", ") + "</td>" +
        "<td>" + (store.wrong[q.id] || 0) + "</td>" +
        '<td><button class="btn sm" data-one="' + q.id + '">' + t("bank.practice") + "</button></td></tr>";
    }).join("");
    app.innerHTML = panel(t("wrong.title") + '<span class="grow"></span><span class="muted">' +
      tf("foundCount", list.length) + "</span>",
      '<div class="panelBody row">' +
      '<button class="btn primary" id="wStart">' + t("wrong.start") + "</button>" +
      '<button class="btn" id="wClear">' + t("wrong.clear") + "</button></div>" +
      '<table class="grid"><tr><th>ID</th><th>' + t("th.lecture") + "</th><th>" + t("th.topic") +
      "</th><th>" + t("bank.answer") + "</th><th>" + t("wrong.count") + "</th><th></th></tr>" + rows + "</table>");
    el("wStart").onclick = function () {
      /* 오답 복습은 연습이므로 시간 제한 없음 */
      newSession(list, {
        mode: "wrong", label: modeLabel("mode.wrong", false), minutes: 0, timed: false,
        shuffleQuestions: false, shuffleOptions: false
      });
      renderQuiz();
    };
    el("wClear").onclick = function () {
      if (!confirm(t("alert.confirmWrongClear"))) return;
      store.wrong = {};
      saveStore();
      resetRemote("v1");       /* 서버 사본도 함께 비운다 */
      go("wrong");
    };
    document.querySelectorAll("[data-one]").forEach(function (b) {
      b.onclick = function () { startOne(b.getAttribute("data-one")); };
    });
  }

  /* ---------- 뷰 5: 학습 기록 ---------- */
  function renderRecords() {
    const hist = store.history;
    const total = hist.reduce(function (a, h) { return a + h.total; }, 0);
    const avg = hist.length ? Math.round((total / hist.length) * 10) / 10 : 0;
    const best = store.mockBest || {};
    const chips = (MOCKS ? MOCKS.mocks : []).map(function (m) {
      const b = best[m.id];
      return '<span class="scoreChip' + (b !== undefined ? " done" : "") + '">' +
        esc(mockLabel(m)) + "<b>" + (b !== undefined ? b : "-") + "</b></span>";
    }).join("");
    app.innerHTML =
      panel(t("rec.title") + '<span class="grow"></span><span class="muted">' +
        tf("foundCount", hist.length) + "</span>",
        '<div class="panelBody"><div class="stat">' +
        statCard("rec.attempts", hist.length) +
        statCard("rec.average", avg) +
        statCard("ov.best", store.best || 0) +
        statCard("rec.mockCount", takenCount() + " / " + (MOCKS ? MOCKS.mocks.length : 0)) +
        "</div></div>", ' style="margin-bottom:16px"') +
      panel(t("rec.summary"), '<div class="panelBody"><div class="scoreGrid">' + chips + "</div></div>",
        ' style="margin-bottom:16px"') +
      panel(t("home.records"),
        histTableHtml(50) +
        '<div class="note"><button class="btn sm" id="reset">' + t("home.reset") + "</button></div>");
    el("reset").onclick = function () {
      if (!confirm(t("alert.confirmReset"))) return;
      store = { history: [], wrong: {}, best: 0, mockBest: {}, randBest: 0, randCount: 0 };
      saveStore();
      resetRemote("v1");       /* 서버 사본도 함께 초기화 (안 하면 동기화가 옛 기록을 되살린다) */
      go("records");
    };
  }

  function startMock(mockId) {
    if (!MOCKS || !MOCKS.mocks) return;
    const m = MOCKS.mocks.filter(function (x) { return x.id === mockId; })[0];
    if (!m) return;
    const pool = m.questions.map(function (qid) {
      /* 세트 안에 범위 밖(예: 이론1 세트의 강의 7) 문항이 섞여 있을 수 있으므로 전체 문제은행에서 찾는다 */
      return FULL.filter(function (q) { return q.id === qid; })[0];
    }).filter(function (q) { return !!q; });
    if (!pool.length) { alert(t("alert.noMock")); return; }
    newSession(pool, {
      mode: "mock", mockId: m.id, label: mockLabel(m),
      minutes: m.minutes || sectionExam().minutes,
      shuffleQuestions: false, shuffleOptions: false
    });
    renderQuiz();
  }

  /* 연습 모드의 '시간 제한' 선택 (체크박스가 없으면 = 무제한) */
  function timedChoice() {
    const c = el("optTimed");
    return c ? !!c.checked : false;
  }
  function modeLabel(key, timed) {
    return t(key) + (timed ? "" : " · " + t("mode.untimed"));
  }

  function startMode(mode) {
    const shufQ = el("optShufQ") ? el("optShufQ").checked : false;
    /* 보기 순서는 섞지 않는다 — 해설이 보기 문자(A/B/C…)를 참조하므로 순서를 바꾸면 해설과 어긋난다 */
    const shufO = false;
    const timed = timedChoice();
    let pool, cfg;
    if (mode === "exam") {
      /* 실전 모드는 항상 시간 제한 (실제 시험과 동일) — 형식은 현재 단원(이론1/이론2) 기준 */
      const ex = sectionExam();
      pool = pickExamSet(ALL, ex.questions, ex.numpy);
      cfg = { mode: "exam", label: t("mode.exam"), minutes: ex.minutes,
              timed: true, shuffleQuestions: false, shuffleOptions: shufO };
    } else if (mode === "all") {
      pool = ALL.slice();
      cfg = { mode: "all", label: modeLabel("mode.all", timed), minutes: timed ? 60 : 0,
              timed: timed, shuffleQuestions: shufQ, shuffleOptions: shufO };
    } else {
      pool = ALL.filter(function (q) { return store.wrong[q.id] > 0; });
      cfg = { mode: "wrong", label: modeLabel("mode.wrong", timed),
              minutes: timed ? Math.max(10, Math.round(pool.length * 1.2)) : 0,
              timed: timed, shuffleQuestions: shufQ, shuffleOptions: shufO };
    }
    newSession(pool, cfg);
    renderQuiz();
  }

  /* 연습 모드에서만 '해설 보기/숨기기' 토글을 제공한다 (모의고사·실전은 시험처럼 숨김) */
  function canReveal() { return !!(S && S.cfg) && S.cfg.mode !== "exam" && S.cfg.mode !== "mock"; }

  /* 시험 중 나가기 — 응답이 있으면 확인 후, 시작했던 목록 화면으로 돌아간다 */
  function exitQuiz() {
    if (!S) { go("overview"); return; }
    if (!confirmIfAnswered()) return;
    go(VIEW || "overview");
  }

  /* 응답이 있으면 확인을 묻는다 (없으면 그냥 통과) */
  function confirmIfAnswered() {
    if (!S) return true;
    const answered = Object.keys(S.answers).filter(function (k) {
      return (S.answers[k] || []).length > 0;
    }).length;
    return answered === 0 || confirm(t("quiz.exitConfirm"));
  }

  /* 어디서든 '홈' — 시험 중이면 확인 후 개요 화면으로 */
  function goHome() {
    if (!confirmIfAnswered()) return;
    go("overview");
  }

  /* ---------- 문항 화면 (시험 포털 레이아웃) ---------- */
  function renderQuiz() {
    const n = S.questions.length;
    const q = S.questions[S.cur];
    const ans = S.answers[q.sid];
    const revealed = !!S.revealed[q.sid];
    setView("quiz");
    S.visited[q.sid] = true;
    const st = stats();

    const opts = qf(q, "options").map(function (txt, i) {
      const L = letterAt(i);
      const mine = ans.indexOf(L) !== -1;
      let cls = "opt";
      if (revealed) {
        if (q.correct.indexOf(L) !== -1) cls += " correct";
        else if (mine) cls += " wrong";
        if (mine) cls += " mine";
      } else if (mine) cls += " sel";
      return '<div class="' + cls + '" data-k="' + L + '"><span class="key">' + L.toLowerCase() +
        ")</span><span>" + esc(txt) + "</span>" +
        (revealed && mine ? '<span class="mineTag">' + t("quiz.mine") + "</span>" : "") + "</div>";
    }).join("");

    const palette = S.questions.map(function (x, i) {
      let cls = "pbtn";
      const isAns = S.answers[x.sid] && S.answers[x.sid].length > 0;
      if (S.flags[x.sid]) cls += " marked";
      else if (isAns) cls += " answered";
      else if (S.visited[x.sid]) cls += " notans";
      if (i === S.cur) cls += " cur";
      return '<button class="' + cls + '" data-jump="' + i + '">' + (i + 1) + "</button>";
    }).join("");

    const ovRow = function (label, val) {
      return '<div class="ovRow">' + label + "<span>" + val + "</span></div>";
    };

    app.innerHTML =
      '<div class="examWrap">' +

      /* ---- 모바일 전용: 상단 고정 바 (진행 / 타이머 / 문항 목록) ---- */
      '<div class="mbar">' +
      '<span class="mprog">Q ' + (S.cur + 1) + " / " + n + "</span>" +
      '<span class="timer mtimer" data-timer>' + (S.timed ? formatClock(S.remain) : formatClock(S.elapsed)) + "</span>" +
      (S.timed ? "" : '<span class="mfree">' + t("mode.free") + "</span>") +
      '<button class="btn sm" id="mPaletteBtn" aria-expanded="false">' + t("quiz.palette") + "</button>" +
      '<button class="btn sm" id="mHomeBtn">' + t("nav.home") + "</button>" +
      "</div>" +

      /* ---- 좌측: 섹션 / 팔레트 ---- */
      '<aside class="side left panel">' +
      '<div class="panelHead">' + t("quiz.sections") + "</div>" +
      '<div class="secTitle">' + t("quiz.section") + " <b>" + n + "</b></div>" +
      '<div class="palette">' + palette + "</div>" +
      '<div class="legend">' +
      '<div><span class="dot answered"></span>' + t("quiz.legend.answered") + "<b>" + st.answered + "</b></div>" +
      '<div><span class="dot notans"></span>' + t("quiz.legend.notans") + "<b>" + st.notAnswered + "</b></div>" +
      '<div><span class="dot marked"></span>' + t("quiz.legend.marked") + "<b>" + st.marked + "</b></div>" +
      '<div><span class="dot book"></span>' + t("quiz.legend.book") + "<b>" + st.book + "</b></div>" +
      '<div><span class="dot notvisited"></span>' + t("quiz.legend.notvisited") + "<b>" + st.notVisited + "</b></div>" +
      "</div></aside>" +

      /* ---- 중앙: 문제 ---- */
      '<main class="panel">' +
      '<div class="qHead"><span class="qNum">Q: ' + (S.cur + 1) + "</span>" +
      '<span class="tag ' + (q.part === "B" ? "num" : "lec") + '">' + esc(q.lecture) + "</span>" +
      '<span class="tag">' + esc(q.id) + "</span>" +
      '<span class="grow"></span>' +
      '<button class="linkish" id="flagBtn">' + t("quiz.mark") + "</button></div>" +
      '<div class="qTopic">' + t("quiz.topic") + " " + esc(qf(q, "topic")) + tierBadge(q) + grpBadge(q) + "</div>" +
      '<div class="qText">' + esc(qf(q, "prompt")) + "</div>" +
      '<div class="opts">' + opts + "</div>" +
      (revealed ? '<div class="opts"><div class="expl"><b>' + t("quiz.answer") + q.correct.join(", ") + "</b>\n" + esc(qf(q, "explanation")) +
        '<div class="revealHint">' + t("quiz.revealHint") + "</div></div></div>" : "") +
      '<div class="actionBar">' +
      '<label class="chk"><input type="checkbox" id="flagChk"' + (S.flags[q.sid] ? " checked" : "") + "> " + t("quiz.mark") + "</label>" +
      '<label class="chk"><input type="checkbox" id="bookChk"' + (S.bookmarks[q.sid] ? " checked" : "") + "> " + t("quiz.legend.book") + "</label>" +
      '<span class="grow"></span>' +
      '<button class="btn" id="prevBtn"' + (S.cur === 0 ? " disabled" : "") + ">" + t("quiz.prev") + "</button>" +
      '<button class="btn" id="clearBtn">' + t("quiz.clear") + "</button>" +
      (canReveal() ? '<button class="btn" id="revealBtn" aria-pressed="' + (revealed ? "true" : "false") + '">' + t(revealed ? "quiz.revealHide" : "quiz.reveal") + "</button>" : "") +
      '<button class="btn primary" id="nextBtn">' + (S.cur === n - 1 ? t("quiz.submit") : t("quiz.next")) + "</button>" +
      "</div></main>" +

      /* ---- 우측: 타이머 / Overview ---- */
      '<aside class="side right panel">' +
      '<div class="timerBox"><div class="' + timerClass() + '" id="timer">' +
      (S.timed ? formatClock(S.remain) : formatClock(S.elapsed)) + "</div>" +
      (S.timed
        ? '<div class="timerLabels"><span>Hrs</span><span>Min</span><span>Sec</span></div>'
        : '<div class="timerLabels free"><span>' + t("quiz.elapsed") + "</span></div>") +
      "</div>" +
      '<div class="sideBtns">' +
      '<button class="btn sm wide" id="timerToggle">' +
      t(timerOffPref() ? "quiz.timerOn" : "quiz.timerOff") + "</button>" +
      '<button class="btn sm wide" id="aboutBtn">' + t("quiz.about") + "</button>" +
      '<button class="btn sm wide" id="instrBtn">' + t("quiz.instr") + "</button>" +
      '<button class="btn sm wide" id="exitBtn">' + t("nav.exit") + "</button>" +
      "</div>" +
      '<div class="ov"><div class="ovTitle">' + t("quiz.overview") + "</div>" +
      ovRow(t("quiz.ov.total"), st.total) +
      ovRow(t("quiz.ov.visited"), st.visited) +
      ovRow(t("quiz.ov.notvisited"), st.notVisited) +
      ovRow(t("quiz.ov.answered"), st.answered) +
      ovRow(t("quiz.ov.notanswered"), st.notAnswered) +
      ovRow(t("quiz.ov.marked"), st.marked) +
      ovRow(t("quiz.ov.book"), st.book) +
      "</div>" +
      '<div class="sideSubmit"><button class="btn primary wide" id="submitBtn">' + t("quiz.submit") + "</button></div>" +
      "</aside>" +

      /* ---- 모바일 전용: 하단 고정 바 (이전 / 다음·제출) ---- */
      '<div class="mfoot">' +
      '<button class="btn sm" id="mPrevBtn"' + (S.cur === 0 ? " disabled" : "") + ">" + t("quiz.prev") + "</button>" +
      '<button class="btn sm" id="mExitBtn">' + t("nav.exit") + "</button>" +
      '<span class="grow"></span>' +
      '<button class="btn sm primary" id="mNextBtn">' + (S.cur === n - 1 ? t("quiz.submit") : t("quiz.next")) + "</button>" +
      "</div>" +
      "</div>" +

      '<div class="panel" style="margin-top:16px"><div class="bar"><i style="width:' +
      Math.round((st.answered / n) * 100) + '%"></i></div>' +
      '<div class="note">' + esc(S.cfg.label) + " · " + tf("quiz.answeredOf", st.answered, n) +
      " · " + t("quiz.halfNote") + "</div></div>";

    document.querySelectorAll(".opt").forEach(function (o) {
      o.onclick = function () { toggleOption(q, o.getAttribute("data-k")); };
    });
    document.querySelectorAll("[data-jump]").forEach(function (b) {
      b.onclick = function () {
        S.cur = parseInt(b.getAttribute("data-jump"), 10);
        closePaletteOnMobile();
        renderQuiz();
      };
    });
    /* 모바일: 문항 목록 열고 닫기 */
    function closePaletteOnMobile() {
      if (isNarrow()) {
        document.body.className = document.body.className.replace(/\s*palette-open/g, "");
      }
    }
    if (el("mPaletteBtn")) {
      el("mPaletteBtn").onclick = function () {
        const open = document.body.className.indexOf("palette-open") === -1;
        document.body.className = open
          ? (document.body.className + " palette-open").replace(/^\s+/, "")
          : document.body.className.replace(/\s*palette-open/g, "");
        el("mPaletteBtn").textContent = open ? t("quiz.paletteClose") : t("quiz.palette");
        el("mPaletteBtn").setAttribute("aria-expanded", open ? "true" : "false");
      };
    }
    if (el("mPrevBtn")) el("mPrevBtn").onclick = function () { if (S.cur > 0) { S.cur--; renderQuiz(); } };
    if (el("mNextBtn")) el("mNextBtn").onclick = function () {
      if (S.cur < n - 1) { S.cur++; renderQuiz(); } else { askSubmit(); }
    };
    /* 언어 전환/재렌더 후에도 목록 버튼 라벨 동기화 */
    if (el("mPaletteBtn") && document.body.className.indexOf("palette-open") !== -1) {
      el("mPaletteBtn").textContent = t("quiz.paletteClose");
      el("mPaletteBtn").setAttribute("aria-expanded", "true");
    }
    el("prevBtn").onclick = function () { if (S.cur > 0) { S.cur--; renderQuiz(); } };
    el("nextBtn").onclick = function () {
      if (S.cur < n - 1) { S.cur++; renderQuiz(); } else { askSubmit(); }
    };
    el("flagBtn").onclick = function () { S.flags[q.sid] = !S.flags[q.sid]; renderQuiz(); };
    el("flagChk").onchange = function () { S.flags[q.sid] = el("flagChk").checked; renderQuiz(); };
    el("bookChk").onchange = function () { S.bookmarks[q.sid] = el("bookChk").checked; renderQuiz(); };
    el("clearBtn").onclick = function () { S.answers[q.sid] = []; renderQuiz(); };
    if (el("revealBtn")) el("revealBtn").onclick = function () {
      S.revealed[q.sid] = !S.revealed[q.sid];
      renderQuiz();
    };
    el("submitBtn").onclick = function () { askSubmit(); };
    el("aboutBtn").onclick = function () {
      alert(tf("quiz.about.body", n, S.timed ? (S.cfg.minutes + t("unit.min")) : t("quiz.noLimit"), S.pass));
    };
    el("instrBtn").onclick = function () {
      alert(t("quiz.instr.body"));
    };
    el("exitBtn").onclick = exitQuiz;
    el("timerToggle").onclick = toggleTimer;
    if (el("mExitBtn")) el("mExitBtn").onclick = exitQuiz;
    if (el("mHomeBtn")) el("mHomeBtn").onclick = goHome;
  }

  function toggleOption(q, k) {
    const a = S.answers[q.sid];
    const i = a.indexOf(k);
    if (i === -1) a.push(k); else a.splice(i, 1);
    a.sort();
    renderQuiz();
  }

  function askSubmit() {
    const blank = S.questions.filter(function (x) { return S.answers[x.sid].length === 0; }).length;
    let msg = t("quiz.confirmSubmit");
    if (blank > 0) {
      msg = tf("quiz.confirmBlank", blank);
    }
    if (confirm(msg)) submit(false);
  }

  function submit(auto) {
    if (timerId) { clearInterval(timerId); timerId = null; }
    S.submitted = true;
    S.auto = !!auto;
    const g = gradeSession(S.questions, S.answers);
    S.results = g.results;
    S.total = g.total;

    /* 오답노트 저장 */
    g.results.forEach(function (r) {
      const id = r.q.id;
      if (r.score < 1.0) store.wrong[id] = (store.wrong[id] || 0) + 1;
      else delete store.wrong[id];
    });
    const rec = {
      date: new Date().toLocaleString(LANG === "en" ? "en-US" : "ko-KR", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }),
      mode: S.cfg.label, mk: S.cfg.mode, total: g.total, max: g.max, pass: S.pass,
      /* 클라우드 동기화용 (기존 기록에는 없다 → 병합 시 내용 기반 키로 중복 제거) */
      at: new Date().toISOString(),
      id: "h" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
    };
    store.history.push(rec);
    if (store.history.length > 50) store.history = store.history.slice(-50);
    if (g.total > store.best) store.best = g.total;
    if (S.cfg.mode === "random") {
      if (g.total > (store.randBest || 0)) store.randBest = g.total;
    }
    if (S.cfg.mode === "mock" && S.cfg.mockId) {
      const prev = store.mockBest[S.cfg.mockId];
      if (prev === undefined || g.total > prev) store.mockBest[S.cfg.mockId] = g.total;
    }
    saveStore();
    syncNow();                 /* 시험 제출 직후에는 바로 올린다 */
    renderResult(auto);
  }

  /* ---------- 결과 화면 ---------- */
  function renderResult(auto) {
    const n = S.questions.length;
    const passed = S.total >= S.pass;
    setView("result");
    const mistakes = S.results.reduce(function (a, r) { return a + r.mistakes; }, 0);
    const used = S.timed ? Math.max(0, S.cfg.minutes * 60 - S.remain) : S.elapsed;
    const wrongN = S.results.filter(function (r) { return r.score < 1.0; }).length;

    const rows = S.results.map(function (r, idx) {
      const q = r.q;
      const opts = qf(q, "options").map(function (t, i) {
        const L = letterAt(i);
        const isCorr = q.correct.indexOf(L) !== -1;
        const isSel = r.selected.indexOf(L) !== -1;
        let cls = "opt";
        if (isCorr && isSel) cls += " correct";
        else if (isCorr) cls += " missed";
        else if (isSel) cls += " wrong";
        return '<div class="' + cls + '"><span class="key">' + L + "</span><span>" + esc(t) + "</span></div>";
      }).join("");
      const mark = r.score === 1 ? t("res.perfect") : r.score === 0.5 ? t("res.oneMistake") : tf("res.mistakes", r.mistakes);
      return '<div class="qres"><div class="rHead"><span class="tag ' + (q.part === "B" ? "num" : "lec") + '">' +
        esc(q.lecture) + '</span><span class="tag">' + (idx + 1) + ". " + esc(q.id) + "</span>" +
        "<span>" + esc(qf(q, "topic")) + '</span><span class="grow"></span>' +
        '<span class="' + scoreClass(r.score) + '">' + r.score.toFixed(1) + t("res.pts") + " (" + mark + ")</span></div>" +
        '<div class="rBody"><div class="prompt">' + esc(qf(q, "prompt")) + "</div>" + opts +
        '<div class="muted" style="margin-top:10px">' + t("res.yourAnswer") + '<span class="mono">' +
        (r.selected.length ? r.selected.join(", ") : t("res.blank")) +
        '</span> · ' + t("res.answer") + '<span class="mono">' + q.correct.join(", ") + "</span></div>" +
        '<div class="expl">' + esc(qf(q, "explanation")) + "</div></div></div>";
    }).join("");

    app.innerHTML =
      '<div class="panel" style="margin-bottom:16px"><div class="resTop">' +
      '<div><div class="scoreNum ' + (passed ? "pass" : "fail") + '">' + S.total.toFixed(1) + " / " + n + "</div>" +
      '<div class="muted">' + esc(S.cfg.label) + (auto ? t("res.auto") : "") + tf("res.passLine", S.pass) + "</div></div>" +
      '<div class="grow"></div><div class="stat">' +
      '<div>' + t("res.result") + '<b class="' + (passed ? "pass" : "fail") + '">' + (passed ? "PASS" : "FAIL") + "</b></div>" +
      "<div>" + t("res.totalMist") + "<b>" + mistakes + "</b></div><div>" + t("res.wrongItems") + "<b>" + wrongN + "</b></div>" +
      "<div>" + t("res.usedTime") + "<b>" + formatTime(used) + "</b></div></div></div>" +
      '<div class="panelBody" style="border-top:1px solid #eceef1"><div class="row">' +
      '<button class="btn primary" id="again">' + t("res.again") + "</button>" +
      '<button class="btn" id="retryWrong"' + (wrongN ? "" : " disabled") + ">" + tf("res.retryWrong", wrongN) + "</button>" +
      (S.cfg.mode === "random" ? '<button class="btn" id="randAgain">' + t("rand.again") + "</button>" : "") +
      '<button class="btn" id="newExam">' + t("res.newExam") + "</button>" +
      '<button class="btn" id="homeBtn">' + t("res.home") + "</button>" +
      '<button class="btn" id="copyBtn">' + t("res.copy") + "</button>" +
      "</div></div></div>" +
      '<div class="note" style="margin-bottom:12px">' + t("res.legend") + "</div>" + rows;

    el("again").onclick = function () {
      const qs = S.questions.map(function (q) { const c = JSON.parse(JSON.stringify(q)); delete c.sid; return c; });
      newSession(qs, S.cfg);
      renderQuiz();
    };
    el("retryWrong").onclick = function () {
      const bad = S.results.filter(function (r) { return r.score < 1.0; })
        .map(function (r) { const c = JSON.parse(JSON.stringify(r.q)); delete c.sid; return c; });
      newSession(bad, { mode: "wrong", label: modeLabel("mode.wrong", false), minutes: 0, timed: false,
        shuffleQuestions: false, shuffleOptions: false });
      renderQuiz();
    };
    el("newExam").onclick = function () { startMode("exam"); };
    if (el("randAgain")) el("randAgain").onclick = function () { startRandom(); };
    el("homeBtn").onclick = function () { renderHome(); };
    el("copyBtn").onclick = function () {
      const lines = ["[" + S.cfg.label + "] " + S.total.toFixed(1) + " / " + n + " (" + (passed ? "PASS" : "FAIL") + ")"];
      S.results.forEach(function (r, i) {
        lines.push((i + 1) + ". [" + r.q.id + " / " + r.q.lecture + "] " + r.score.toFixed(1) + t("res.pts") + " — " +
          t("res.yourAnswer") + (r.selected.join(",") || t("res.blank")) + " / " + t("res.answer") + r.q.correct.join(","));
      });
      const txt = lines.join("\n");
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () { alert(t("res.copied")); },
        function () { prompt(t("res.copyPrompt"), txt); });
      else prompt(t("res.copyPrompt"), txt);
    };
  }

  /* ---------- 키보드 ---------- */
  document.addEventListener("keydown", function (e) {
    if (!S || S.submitted) return;
    const q = S.questions[S.cur];
    if (!q) return;
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.key >= "1" && e.key <= "6") {
      const i = parseInt(e.key, 10) - 1;
      if (i < q.options.length) { toggleOption(q, letterAt(i)); e.preventDefault(); }
    } else if ((e.key === "e" || e.key === "E") && canReveal()) {
      S.revealed[q.sid] = !S.revealed[q.sid]; renderQuiz(); e.preventDefault();
    } else if (e.key === "ArrowRight" || e.key === "Enter") {
      if (S.cur < S.questions.length - 1) { S.cur++; renderQuiz(); e.preventDefault(); }
    } else if (e.key === "ArrowLeft") {
      if (S.cur > 0) { S.cur--; renderQuiz(); e.preventDefault(); }
    } else if (e.key === "f" || e.key === "F") {
      S.flags[q.sid] = !S.flags[q.sid]; renderQuiz();
    } else if (e.key === "b" || e.key === "B") {
      S.bookmarks[q.sid] = !S.bookmarks[q.sid]; renderQuiz();
    }
  });

  /* ---------- 언어 전환 ---------- */
  function labelFor(cfg) {
    if (cfg.mode === "mock" && cfg.mockId && MOCKS) {
      const m = MOCKS.mocks.filter(function (x) { return x.id === cfg.mockId; })[0];
      if (m) return mockLabel(m);
    }
    const e = I18N["mode." + cfg.mode];
    return e ? (e[LANG] || e.ko) : cfg.label;
  }
  function rerender() {
    if (S) {
      S.cfg.label = labelFor(S.cfg);
      setCrumb(crumbFor(S.cfg));
      if (S.submitted) renderResult(S.auto); else renderQuiz();
    } else {
      renderSidebar();
      renderView();
      if (VIEW === "library") { setCrumb(t("lib.title")); return; }
      const c = currentCourse();
      setCrumb(label(c.sem.label) + " › " + label(c.course.label) + " › " + viewTitle());
    }
  }
  window.__setLang = function (v) {
    if (v === LANG) return;
    setLang(v);
    applyStaticI18n();
    applySyncStrings();
    rerender();
  };
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.onclick = function () { window.__setLang(b.getAttribute("data-lang")); };
  });

  /* ---------- 클라우드 동기화(sync.js) 연결 ----------
     · window.__sync 가 없으면(스크립트 미포함/설정 비어 있음) 전부 조용히 무시된다.
     · 문자열은 i18n 에서 sync.js 로 넘겨 준다 (언어를 바꾸면 다시 넘긴다). */
  const SYNC_UI_KEYS = ["needLogin", "title", "sub", "loginTab", "signupTab", "nick", "nickPh", "pw", "pwPh",
    "eye", "social", "elteBox", "domainBad", "findPw", "findId", "findPwMsg", "findIdMsg", "role", "menuDash", "menuLearn", "menuSettings", "idPh", "emailPh", "resetTitle", "sendReset", "recoverSent", "confirmSent", "newPw", "setPw", "pwChanged", "needEmail", "doLogin", "doSignup", "close", "logout", "now", "nickBad", "pwBad", "badCred", "nickTaken",
    "emailBad", "netErr", "serverErr", "statusIdle", "statusSyncing", "statusError", "statusSignedOut",
    "signingIn", "signingUp", "signedInAs", "ownerAsk", "loggedOut", "resetPushed",
    "otpTitle", "otpPh", "otpGo", "otpResend", "otpBack", "otpSent", "otpBad"];
  function syncStrings() {
    const out = {};
    SYNC_UI_KEYS.forEach(function (k) { out["sync." + k] = t("sync." + k); });
    return out;
  }
  function applySyncStrings() {
    try { if (window.__sync) window.__sync.setStrings(syncStrings()); } catch (e) { /* ignore */ }
  }
  function initSync() {
    if (!window.__sync) return;
    applySyncStrings();
    window.__sync.init();
  }
  /* 동기화가 로컬 기록을 바꿨을 때: 메모리의 store 를 다시 읽는다 (시험 중에는 손대지 않는다) */
  window.__appSyncApply = function () {
    store = loadStore();
    if (S) return;
    if (VIEW === "overview" || VIEW === "records" || VIEW === "wrong" || VIEW === "mocks") {
      renderSidebar();
      renderView();
    }
  };
  /* 서버 콘텐츠(문제은행)를 받은 뒤: 데이터 풀을 다시 계산하고 지금 화면을 다시 그린다 */
  window.__contentDataReady = function () {
    resolveData();
    if (!APP_READY) return;
    renderSidebar();
    renderView();
  };

  /* ---------- 로그인 상태 변화 반영 (사이드바 노출·게이트) ----------
     sync.js 가 로그인/로그아웃 때 호출한다. */
  function refreshAuthUI() {
    const bd = document.body;
    if (bd) {
      const cls = String(bd.className || "");
      bd.className = locked()
        ? (cls.indexOf("sbLocked") === -1 ? (cls + " sbLocked").replace(/^\s+/, "") : cls)
        : cls.replace(/\s*sbLocked/g, "");
    }
    wireAvatar();
    renderSidebar();
    if (VIEW === "library") renderLibrary();
  }
  window.__appAuthChanged = function (isIn) {
    refreshAuthUI();
    if (isIn && PENDING_COURSE) {
      const id = PENDING_COURSE;
      PENDING_COURSE = "";
      enterCourse(id);                       /* 로그인하면 들어가려던 과목으로 */
    } else if (!isIn && VIEW !== "library") {
      go("library");                          /* 로그아웃하면 카탈로그로 */
    }
  };

  /* ---------- 부팅 (게이트가 있으면 복호화 후 게이트가 호출) ---------- */
  function boot() {
    resolveData();
    /* 헤더: StudyRoom 로고 = 홈(서재) · 지구본 = 언어 전환 */
    if (el("brandHome")) el("brandHome").onclick = function () { if (confirmIfAnswered()) go(syncOn() ? "library" : "overview"); };
    if (el("libLangBtn")) el("libLangBtn").onclick = function () { window.__setLang(LANG === "ko" ? "en" : "ko"); };
    /* 사이드바 토글 / 상단 링크 */
    if (el("sbToggle")) {
      el("sbToggle").onclick = function () {
        const open = document.body.className.indexOf("sb-open") === -1;
        document.body.className = open
          ? (document.body.className + " sb-open").replace(/^\s+/, "")
          : document.body.className.replace(/\s*sb-open/g, "");
      };
    }
    if (el("sbBackdrop")) el("sbBackdrop").onclick = function () { closeSidebar(); };
    if (el("brandLink")) el("brandLink").onclick = function (e) { if (e && e.preventDefault) e.preventDefault(); go("overview"); };

    applyStaticI18n();
    initSync();
    refreshAuthUI();
    /* 주소에 #bank 처럼 화면이 적혀 있으면 그 화면으로 바로 들어간다.
       계정 기능이 켜져 있으면 기본은 라이브러리(과목 카탈로그)이고,
       로그인 전에는 과목 화면으로 바로 들어갈 수 없다(게이트). */
    const hv = viewFromHash();
    if (syncOn()) go(locked() ? "library" : (hv || "library"));
    else go(hv || "overview");
    APP_READY = true;                 /* 이후 앱 내 이동은 뒤로가기가 되도록 pushState 로 남긴다 */
    if (window.addEventListener) {
      const onHashNav = function () {
        const v = viewFromHash();
        if (v && v !== VIEW) go(syncOn() && locked() && v !== "library" ? "library" : v);
      };
      window.addEventListener("hashchange", onHashNav);
      window.addEventListener("popstate", onHashNav);   /* pushState 항목을 뒤/앞으로 이동할 때 */
    }
  }
  window.__bootApp = boot;
  if (!window.__GATED__) boot();     /* 비밀번호 게이트가 없으면 바로 시작 */

  /* 디버그/테스트용 훅 */
  window.__app = {
    get S() { return S; },
    get store() { return store; },
    get lang() { return LANG; },
    get view() { return VIEW; },
    get curriculum() { return CURRICULUM; },
    setLang: window.__setLang,
    go: go,
    renderSidebar: renderSidebar,
    /* 라이브러리(과목 카탈로그) + 로그인 게이트 — 테스트용 노출 */
    library: renderLibrary,
    dashboard: renderDashboard,
    course: renderCourse,
    setCourseTab: function (k) { COURSE_TAB = k; renderCourse(); },
    get courseTab() { return COURSE_TAB; },
    /* 시험 범위(이론1/이론2) — 테스트용 */
    scope: sectionScope, scopeOf: scopeOfQuestion, scopedMocks: scopedMocks,
    scopedQuestions: scopedQuestions, sectionExam: sectionExam,
    /* 시험 캘린더 — 날짜 계산(순수 함수) 테스트용 */
    calStatus: calStatus, calDaysUntil: calDaysUntil, calDayText: calDayText, fmtCalWhen: fmtCalWhen,
    get courseId() { return COURSE_ID; },
    setCourseSection: function (k) { COURSE_SECTION = k; if (VIEW === "overview") renderView(); },
    get courseSection() { return activeSectionId(); },
    libGrid: libGridHtml,
    libTabs: libTabsHtml,
    enterCourse: enterCourse,
    isLocked: locked,
    setLibQuery: function (q) { LIB_Q = q; renderLibraryGrid(); return libGridHtml(); },
    setLibSem: function (id) { LIB_SEM = id; LIB_Q = ""; renderLibraryGrid(); return libGridHtml(); },
    setLibAll: function (v) { LIB_ALL = !!v; renderLibrary(); return libGridHtml(); },
    isLibAll: function () { return !!LIB_ALL; },
    authChanged: function (v) { return window.__appAuthChanged(v); },
    renderHome: renderHome, renderQuiz: renderQuiz, renderResult: renderResult,
    startMode: startMode, startMock: startMock, startOne: startOne, startRange: startRange,
    startRandom: startRandom,
    submit: submit, askSubmit: askSubmit, toggleOption: toggleOption, exitQuiz: exitQuiz,
    toggleTimer: toggleTimer, timerOffPref: timerOffPref,
    syncStrings: syncStrings, initSync: initSync
  };
})();
