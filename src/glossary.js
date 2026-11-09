/* ===== glossary.js — 용어집/플래시카드 앱 (vanilla JS) ===== */
(function () {
  "use strict";
  var DATA = window.__GLOSSARY__ || { terms: [], sentences: [] };
  var TERMS = DATA.terms || [];
  var SENTS = DATA.sentences || [];
  var LS_LANG = "dnd_tt1_lang";
  var LS_VOCAB = "dnd_tt1_vocab";
  var LANG = "en";   /* 기본 언어 = 영어 (저장된 설정이 없을 때) */

  try { var v = localStorage.getItem(LS_LANG); if (v === "en" || v === "ko") LANG = v; } catch (e) { /* ignore */ }

  /* ---------- 문자열 ---------- */
  var STR = {
    "crumb": { ko: "용어집", en: "Glossary" },
    "navGloss": { ko: "용어집", en: "Glossary" },
    "navHome": { ko: "홈", en: "Home" },
    "tabList": { ko: "단어 목록", en: "Word list" },
    "tabCard": { ko: "플래시카드", en: "Flashcards" },
    "tabSent": { ko: "핵심 문장", en: "Key sentences" },
    "listTitle": { ko: "단어 목록", en: "Word list" },
    "thTerm": { ko: "단어", en: "Term" },
    "thKo": { ko: "뜻", en: "Meaning (Korean)" },
    "thDef": { ko: "영어 설명", en: "Definition" },
    "thLec": { ko: "수업 · 강의", en: "Course · Lecture" },
    "filterCourse": { ko: "수업 (어느 과목에서 나온 단어인지)", en: "Course (which class the word came from)" },
    "filterLec": { ko: "강의", en: "Lecture" },
    "allCourses": { ko: "수업 전체", en: "All courses" },
    "courseTip": { ko: "이 단어가 나온 수업", en: "The course this word came from" },
    "search": { ko: "단어 검색 / Search a word", en: "Search a word" },
    "found": { ko: "%s개 표시 중 (전체 %s개)", en: "showing %s of %s words" },
    "listNote": { ko: "단어를 클릭하면 검색창에 들어갑니다. 마지막 열에서 그 단어가 나온 수업과 강의를 볼 수 있습니다.",
                  en: "Click a word to search it. The last column shows the course and lecture it came from." },
    "cardTitle": { ko: "플래시카드", en: "Flashcards" },
    "cardHint": { ko: "카드를 클릭하면 뜻이 보입니다", en: "Click the card to reveal the meaning" },
    "cardHintEn": { ko: "카드를 클릭하면 뜻이 보입니다 (영어 설명 포함)", en: "Click the card to reveal the meaning" },
    "flip": { ko: "뒤집기 (Space)", en: "Flip (Space)" },
    "know": { ko: "알아요", en: "I know it" },
    "dunno": { ko: "몰라요", en: "Don't know" },
    "next": { ko: "다음 (→)", en: "Next (→)" },
    "shuffle": { ko: "섞기", en: "Shuffle" },
    "onlyUnknown": { ko: "모르는 단어만", en: "Only unknown" },
    "resetCards": { ko: "진행 초기화", en: "Reset progress" },
    "statKnown": { ko: "외운 단어", en: "Known" },
    "statUnknown": { ko: "모르는 단어", en: "Unknown" },
    "statProgress": { ko: "진행률", en: "Progress" },
    "cardCount": { ko: "%s / %s 번째", en: "card %s of %s" },
    "cardNote": { ko: "Space = 뒤집기, → = 다음, 1 = 알아요, 2 = 몰라요",
                  en: "Space = flip, Right arrow = next, 1 = know, 2 = don't know" },
    "cardNoteUnknown": { ko: "모르는 단어만 보는 중입니다. 모두 외우면 알림이 표시됩니다.",
                         en: "Showing only unknown words. You will be told when all are learned." },
    "sentTitle": { ko: "핵심 문장", en: "Key sentences" },
    "sentCount": { ko: "%s문장", en: "%s sentences" },
    "foot": { ko: "",
              en: "" },
    "allLectures": { ko: "전체", en: "All" },
    "confirmReset": { ko: "플래시카드 진행 상황을 지울까요?", en: "Reset your flashcard progress?" },
    "allLearned": { ko: "모르는 단어가 없습니다. 모두 외웠습니다!", en: "No unknown words left. All learned!" },

    /* ---------- 클라우드 동기화 (선택 기능 · sync.js 와 같은 키 이름) ---------- */
    "sync.needLogin":   { ko: "로그인", en: "Sign in" },
    "sync.title":       { ko: "계정 · 클라우드 동기화", en: "Account & cloud sync" },
    "sync.sub":         { ko: "로그인하면 다른 기기와 학습 기록(점수·오답·외운 단어)이 자동으로 맞춰집니다. 선택 기능이라 로그인하지 않아도 지금까지처럼 이 브라우저에만 저장됩니다.",
                          en: "Sign in to keep your progress (scores, wrong answers, learned words) in sync across devices. Optional — without it everything stays in this browser as before." },
    "sync.loginTab":    { ko: "로그인", en: "Sign in" },
    "sync.signupTab":   { ko: "가입", en: "Sign up" },
    "sync.nick":        { ko: "닉네임 (영문 소문자·숫자·밑줄, 3~20자)", en: "Nickname (a-z, 0-9, underscore · 3-20 chars)" },
    "sync.nickPh":      { ko: "닉네임 (영문 소문자·숫자·밑줄 3~20자)", en: "Nickname (a-z 0-9 _ · 3-20)" },
    "sync.pw":          { ko: "비밀번호 (8자 이상)", en: "Password (8+ characters)" },
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
    "sync.resetPushed": { ko: "서버 기록도 함께 초기화했어요.", en: "The server copy was cleared as well." }
  };

  function t(key) {
    var e = STR[key];
    if (!e) return key;
    return e[LANG] || e.ko;
  }
  function tf(key) {
    var s = t(key), args = Array.prototype.slice.call(arguments, 1), i = 0;
    return s.replace(/%s/g, function () { var x = args[i++]; return x === undefined ? "" : String(x); });
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function el(id) { return document.getElementById(id); }
  function loadSet() {
    try {
      var raw = JSON.parse(localStorage.getItem(LS_VOCAB));
      if (raw && typeof raw === "object") return { known: raw.known || {} };
    } catch (e) { /* ignore */ }
    return { known: {} };
  }
  function saveSet() {
    try { localStorage.setItem(LS_VOCAB, JSON.stringify(store)); } catch (e) { /* ignore */ }
    syncNotify();
  }
  /* 외운 단어가 바뀌면 (로그인 상태일 때만) 클라우드 동기화에 알린다 */
  function syncNotify() {
    try { if (window.__sync) window.__sync.onLocalChange(); } catch (e) { /* ignore */ }
  }
  /* 진행 초기화: 로컬뿐 아니라 서버 사본도 비운다 */
  function syncResetVocab() {
    try { if (window.__sync) window.__sync.resetRemote("vocab"); } catch (e) { /* ignore */ }
  }
  /* ---------- 클라우드 동기화(sync.js) 문자열 넘기기 ---------- */
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
  var store = loadSet();
  var state = { course: [], lec: [], sentLec: [], q: "", tab: "list", order: [], pos: 0, flipped: false, onlyUnknown: false };

  var LECS = ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "NP", "AC"];
  var LEC_NAME = {
    L1: { ko: "L1 개요", en: "L1 Intro" },
    L2: { ko: "L2 선형회귀", en: "L2 Linear regression" },
    L3: { ko: "L3 로지스틱", en: "L3 Logistic" },
    L4: { ko: "L4 신경망", en: "L4 Neural nets" },
    L5: { ko: "L5 MLP 학습", en: "L5 MLP training" },
    L6: { ko: "L6 역전파", en: "L6 Backprop" },
    L7: { ko: "L7 CNN", en: "L7 CNN" },
    NP: { ko: "NP NumPy", en: "NP NumPy" },
    AC: { ko: "AC 아카데믹", en: "AC Academic" }
  };
  function lecName(code) {
    var e = LEC_NAME[code];
    return e ? (e[LANG] || e.ko) : code;
  }
  function tagClass(code) { return "tag" + (code === "NP" || code === "AC" ? " " + code : ""); }

  /* ---------- 수업(과목) — curriculum.js 의 과목 목록을 그대로 쓴다 ---------- */
  function courseList() {
    var out = [];
    var cur = window.CURRICULUM || [];
    cur.forEach(function (sem) {
      (sem.courses || []).forEach(function (c) {
        out.push({
          id: c.id,
          label: c.label,
          short: c.short || c.label,
          sem: sem.label,
          items: c.items || []
        });
      });
    });
    return out;
  }
  function courseById(id) {
    var list = courseList();
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  function courseShort(id) {
    var c = courseById(id);
    if (!c) return id || "";
    return (c.short && (c.short[LANG] || c.short.ko)) || (c.label && (c.label[LANG] || c.label.ko)) || id;
  }
  function courseFull(id) {
    var c = courseById(id);
    return c && c.label ? (c.label[LANG] || c.label.ko) : (id || "");
  }
  /* 그 단어의 출처 배지: 수업 + 강의 */
  function srcBadges(courseId, lec) {
    return '<span class="tag course" title="' + esc(t("courseTip")) + ': ' + esc(courseFull(courseId)) + '">' +
      esc(courseShort(courseId)) + "</span> " +
      '<span class="' + tagClass(lec) + '">' + esc(lec) + "</span>";
  }

  /* ---------- 필터 ---------- */
  function filteredTerms() {
    var q = state.q.trim().toLowerCase();
    return TERMS.filter(function (w) {
      if (state.course.length && state.course.indexOf(w.course) === -1) return false;
      if (state.lec.length && state.lec.indexOf(w.lecture) === -1) return false;
      if (!q) return true;
      return (w.term + " " + w.ko + " " + w.en).toLowerCase().indexOf(q) !== -1;
    });
  }
  function filteredSents() {
    return SENTS.filter(function (s) {
      if (state.course.length && state.course.indexOf(s.course) === -1) return false;
      return !state.sentLec.length || state.sentLec.indexOf(s.lecture) !== -1;
    });
  }
  function countBy(list, key) {
    var m = {};
    list.forEach(function (x) { m[x[key]] = (m[x[key]] || 0) + 1; });
    return m;
  }

  /* ---------- 공통 UI ---------- */
  function applyStatic() {
    el("crumb").textContent = t("crumb");
    el("navGloss").textContent = t("navGloss");
    el("navHome").textContent = t("navHome");
    el("tabList").textContent = t("tabList");
    el("tabCard").textContent = t("tabCard");
    el("tabSent").textContent = t("tabSent");
    el("listTitle").textContent = t("listTitle");
    el("thTerm").textContent = t("thTerm");
    el("thKo").textContent = t("thKo");
    el("thDef").textContent = t("thDef");
    el("thLec").textContent = t("thLec");
    el("courseLabel").textContent = t("filterCourse");
    el("lecLabel").textContent = t("filterLec");
    el("q").setAttribute("placeholder", t("search"));
    el("listNote").textContent = t("listNote");
    el("cardTitle").textContent = t("cardTitle");
    el("btnFlip").textContent = t("flip");
    el("btnKnow").textContent = t("know");
    el("btnDunno").textContent = t("dunno");
    el("btnNext").textContent = t("next");
    el("btnShuffle").textContent = t("shuffle");
    el("btnOnlyUnknown").textContent = t("onlyUnknown");
    el("btnResetCards").textContent = t("resetCards");
    el("statKnownLabel").textContent = t("statKnown");
    el("statUnknownLabel").textContent = t("statUnknown");
    el("statProgressLabel").textContent = t("statProgress");
    el("sentTitle").textContent = t("sentTitle");
    el("foot").textContent = t("foot");
    document.documentElement.lang = LANG;
    var btns = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute("data-lang") === LANG;
      btns[i].className = "langBtn" + (on ? " on" : "");
      btns[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
  }

  /* 수업(과목) 칩 — 지금은 DND 한 과목이지만 과목이 늘어도 그대로 동작한다 */
  function renderCourseChips() {
    var counts = countBy(TERMS, "course");
    var html = '<label class="fchip"><input type="checkbox" data-course=""' +
      (state.course.length ? "" : " checked") + "> " + t("allCourses") + "</label>";
    courseList().forEach(function (c) {
      if (!counts[c.id]) return;
      html += '<label class="fchip"><input type="checkbox" data-course="' + esc(c.id) + '"' +
        (state.course.indexOf(c.id) !== -1 ? " checked" : "") + ' title="' +
        esc(c.label ? (c.label[LANG] || c.label.ko) : c.id) + '"> ' +
        esc(courseShort(c.id)) + ' <span class="muted">' + counts[c.id] + "</span></label>";
    });
    var box = el("courseChips");
    box.innerHTML = html;
    box.querySelectorAll("input[data-course]").forEach(function (c) {
      c.onchange = function () {
        var code = c.getAttribute("data-course");
        if (!code) {
          state.course = [];
        } else {
          var i = state.course.indexOf(code);
          if (c.checked && i === -1) state.course.push(code);
          if (!c.checked && i !== -1) state.course.splice(i, 1);
        }
        renderCourseChips();
        renderList();
        if (state.tab === "card") rebuildOrder();
        if (state.tab === "sent") renderSents();
        renderSidebarFoot();
      };
    });
  }

  function renderChips(containerId, list, key, stateKey, after) {
    var counts = countBy(list, key);
    var html = '<label class="fchip"><input type="checkbox" data-lec=""' +
      (state[stateKey].length ? "" : " checked") + "> " + t("allLectures") + "</label>";
    LECS.forEach(function (code) {
      if (!counts[code]) return;
      html += '<label class="fchip"><input type="checkbox" data-lec="' + code + '"' +
        (state[stateKey].indexOf(code) !== -1 ? " checked" : "") + "> " + esc(lecName(code)) +
        ' <span class="muted">' + counts[code] + "</span></label>";
    });
    var box = el(containerId);
    box.innerHTML = html;
    box.querySelectorAll("input[data-lec]").forEach(function (c) {
      c.onchange = function () {
        var code = c.getAttribute("data-lec");
        if (!code) {
          state[stateKey] = [];
        } else {
          var i = state[stateKey].indexOf(code);
          if (c.checked && i === -1) state[stateKey].push(code);
          if (!c.checked && i !== -1) state[stateKey].splice(i, 1);
        }
        after();
        renderChips(containerId, list, key, stateKey, after);
      };
    });
  }

  /* ---------- 왼쪽 사이드바 (학기 → 과목 → 섹션) ----------
     앱(index.html)과 같은 구조를 쓴다. 여기서는 '용어집'이 현재 항목이고,
     다른 섹션은 index.html#화면id 로 이동한다. */
  function currentCourseId() {
    if (state.course.length === 1) return state.course[0];
    var list = courseList();
    return list.length ? list[0].id : "";
  }
  function labelOf(o) { return (o && (o[LANG] || o.ko)) || ""; }
  function closeSidebar() {
    var b = document.body;
    if (b) b.className = String(b.className || "").replace(/\s*sb-open/g, "");
  }
  function renderSidebarFoot() {
    var box = el("sbFoot");
    if (!box) return;
    var knownN = Object.keys(store.known || {}).length;
    var total = TERMS.length;
    var pct = total ? Math.round((knownN / total) * 100) + "%" : "0%";
    box.innerHTML = '<div class="sbFootTitle">' + t("statProgress") + '</div><div class="sbProgress">' +
      "<div>" + t("statKnown") + "<b>" + knownN + " / " + total + "</b></div>" +
      "<div>" + t("statProgress") + "<b>" + pct + "</b></div></div>";
  }
  function renderSidebar() {
    var nav = el("sbNav");
    if (!nav) return;
    var cur = currentCourseId();
    var html = "";
    (window.CURRICULUM || []).forEach(function (sem) {
      html += '<div class="sbSem">';
      html += '<button class="sbSemHead' + (sem.open ? " open" : "") + '" data-sem="' + sem.id + '" type="button">' +
        '<span class="chev"></span><span>' + esc(labelOf(sem.label)) + "</span>" +
        '<span class="sbSemSub">' + esc(labelOf(sem.sub)) + "</span></button>";
      if (sem.open) {
        (sem.courses || []).forEach(function (c) {
          html += '<div class="sbCourse"><div class="sbCourseHead">' + esc(labelOf(c.label)) + "</div>";
          if (c.sub) html += '<div class="sbCourseSub">' + esc(labelOf(c.sub)) + "</div>";
          html += '<div class="sbItems">';
          (c.items || []).forEach(function (it) {
            if (it.href) {
              var href = it.id === "glossary" ? it.href + "?course=" + c.id : it.href;
              html += '<a class="sbItem' + (it.id === "glossary" ? " on" : "") + '" href="' + href + '"' +
                (it.id === "glossary" ? ' aria-current="page"' : "") + ">" + esc(labelOf(it.label)) + "</a>";
            } else {
              html += '<a class="sbItem" href="index.html#' + it.id + '">' + esc(labelOf(it.label)) + "</a>";
            }
          });
          html += "</div></div>";
        });
      }
      html += "</div>";
    });
    nav.innerHTML = html;
    nav.querySelectorAll("[data-sem]").forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-sem");
        (window.CURRICULUM || []).forEach(function (s) { if (s.id === id) s.open = !s.open; });
        renderSidebar();
      };
    });
    var bs = el("brandSub");
    if (bs) {
      var c = courseById(cur);
      var semLabel = c && c.sem ? labelOf(c.sem) : "";
      bs.textContent = (semLabel ? semLabel + " · " : "") + (c ? labelOf(c.label) : "");
    }
    renderSidebarFoot();
  }

  /* ---------- 탭 1: 단어 목록 ---------- */
  function renderList() {
    var rows = filteredTerms();
    el("listCount").textContent = tf("found", rows.length, TERMS.length);
    var html = rows.map(function (w) {
      return "<tr><td class='term' data-w='" + esc(w.term) + "'>" + esc(w.term) + "</td>" +
        "<td class='ko'>" + esc(w.ko) + "</td>" +
        "<td class='def'>" + esc(w.en) + "</td>" +
        "<td>" + srcBadges(w.course, w.lecture) + "</td></tr>";
    }).join("");
    el("tbody").innerHTML = html || "<tr><td colspan='4' class='muted'>-</td></tr>";
    el("tbody").querySelectorAll("[data-w]").forEach(function (td) {
      td.style.cursor = "pointer";
      td.onclick = function () {
        state.q = td.getAttribute("data-w");
        el("q").value = state.q;
        renderList();
      };
    });
  }

  /* ---------- 탭 2: 플래시카드 ---------- */
  function poolTerms() {
    var pool = filteredTerms();
    if (state.onlyUnknown) pool = pool.filter(function (w) { return !store.known[w.term]; });
    return pool;
  }
  function rebuildOrder() {
    state.order = poolTerms();
    state.pos = 0;
    state.flipped = false;
    renderCard();
  }
  function renderCard() {
    var total = state.order.length;
    var knownN = Object.keys(store.known).length;
    var termN = TERMS.length;
    el("statKnown").textContent = knownN;
    el("statUnknown").textContent = Math.max(0, termN - knownN);
    el("statProgress").textContent = termN ? Math.round((knownN / termN) * 100) + "%" : "0%";
    el("cardNote").textContent = state.onlyUnknown ? t("cardNoteUnknown") : t("cardNote");
    if (!total) {
      el("cardWord").textContent = "-";
      el("cardMeta").innerHTML = "";
      el("cardBack").hidden = true;
      el("cardBackEn").hidden = true;
      el("cardHint").textContent = t("allLearned");
      el("cardCount").textContent = "";
      return;
    }
    if (state.pos >= total) state.pos = 0;
    var w = state.order[state.pos];
    el("cardCount").textContent = tf("cardCount", state.pos + 1, total);
    el("cardWord").textContent = w.term;
    el("cardMeta").innerHTML = srcBadges(w.course, w.lecture);
    el("cardHint").textContent = t("cardHint");
    var back = el("cardBack"), backEn = el("cardBackEn");
    if (state.flipped) {
      back.textContent = w.ko;
      backEn.textContent = w.en;
      back.hidden = false;
      backEn.hidden = false;
    } else {
      back.hidden = true;
      backEn.hidden = true;
    }
  }
  function nextCard(step) {
    if (!state.order.length) return;
    state.pos = (state.pos + (step || 1) + state.order.length) % state.order.length;
    state.flipped = false;
    renderCard();
  }
  function mark(known) {
    if (!state.order.length) return;
    var w = state.order[state.pos];
    if (known) store.known[w.term] = 1;
    else delete store.known[w.term];
    saveSet();
    if (state.onlyUnknown && known) rebuildOrder();
    else nextCard(1);
  }


  /* ---------- 탭 3: 핵심 문장 ---------- */
  function renderSents() {
    var list = filteredSents();
    el("sentCount").textContent = tf("sentCount", list.length);
    el("sentBody").innerHTML = list.map(function (s) {
      return '<div class="sent"><div class="en">' + esc(s.en) + "</div>" +
        '<div class="koSent">' + esc(s.ko) + "</div>" +
        '<div style="margin-top:6px">' + srcBadges(s.course, s.lecture) + "</div></div>";
    }).join("") || '<div class="muted">-</div>';
  }

  /* ---------- 탭 전환 ---------- */
  function showTab(tab) {
    state.tab = tab;
    el("sec-list").hidden = tab !== "list";
    el("sec-card").hidden = tab !== "card";
    el("sec-sent").hidden = tab !== "sent";
    document.querySelectorAll(".tab").forEach(function (b) {
      b.className = "tab" + (b.getAttribute("data-tab") === tab ? " on" : "");
    });
    if (tab === "card") rebuildOrder();
    if (tab === "sent") renderSents();
    if (tab === "list") renderList();
  }

  /* ---------- 언어 ---------- */
  function setLang(v) {
    if (v !== "ko" && v !== "en") return;
    LANG = v;
    try { localStorage.setItem(LS_LANG, v); } catch (e) { /* ignore */ }
    applyStatic();
    renderSidebar();
    renderCourseChips();
    renderChips("lecChips", TERMS, "lecture", "lec", function () { renderList(); if (state.tab === "card") rebuildOrder(); });
    renderChips("sentChips", SENTS, "lecture", "sentLec", renderSents);
    if (state.tab === "card") renderCard();
    if (state.tab === "sent") renderSents();
    if (state.tab === "list") renderList();
    applySyncStrings();                 /* 계정 버튼/모달 문구도 함께 언어 전환 */
  }

  /* ---------- 주소의 ?course= 로 과목 미리 고르기 (사이드바 링크가 넘겨준다) ---------- */
  function preselectCourse() {
    var want = "";
    try {
      var m = /[?&]course=([A-Za-z0-9_\-]+)/.exec(String((window.location && window.location.search) || ""));
      if (m) want = m[1];
    } catch (e) { want = ""; }
    if (!want) return;
    if (courseById(want)) state.course = [want];
  }

  /* 아이콘 (이모지 대신 최소 SVG — 담백한 inflearn 스타일) */
  const LOCK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' +
    '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';
  /* ---------- 로그인 게이트 (계정 기능이 켜져 있을 때만) ----------
     로그인 전에는 내용을 감추고 "로그인 필요" 패널을 보여 준다. */
  function syncOnG() {
    try { return !!(window.__sync && window.__sync.configured()); } catch (e) { return false; }
  }
  function lockedG() {
    try { return syncOnG() && !(window.__sync && window.__sync.signedIn()); } catch (e) { return false; }
  }
  function renderLockPanel() {
    var host = el("glLock");
    if (!host) return;
    host.innerHTML = '<div class="lockPanel"><div class="lockPanelIcon">' + LOCK_SVG + "</div>" +
      '<div class="lockPanelTitle">' + esc(t("lib.locked")) + "</div>" +
      '<div class="lockPanelSub">' + esc(t("lib.signInHint")) + "</div>" +
      '<button class="btn primary" id="glLockBtn" type="button">' + esc(t("sync.needLogin")) + "</button></div>";
    var b = el("glLockBtn");
    if (b) b.onclick = function () { try { if (window.__sync) window.__sync.openModal(); } catch (e) { /* ignore */ } };
  }
  function applyGate() {
    var lock = lockedG();
    var b = document.body;
    if (b) {
      var cls = String(b.className || "");
      b.className = lock
        ? (cls.indexOf("sbLocked") === -1 ? (cls + " sbLocked").replace(/^\s+/, "") : cls)
        : cls.replace(/\s*sbLocked/g, "");
    }
    if (lock) renderLockPanel();
  }
  /* sync.js 가 로그인/로그아웃 때 호출 */
  window.__glossaryAuthChanged = function () {
    applyGate();
  };

  /* ---------- 부팅 (비밀번호 게이트가 있으면 복호화 후 호출) ---------- */
  function boot() {
    if (window.__GLOSSARY__) {
      DATA = window.__GLOSSARY__;
      TERMS = DATA.terms || [];
      SENTS = DATA.sentences || [];
    }
    preselectCourse();
    applyStatic();
    renderSidebar();
    renderCourseChips();
    renderChips("lecChips", TERMS, "lecture", "lec", function () { renderList(); if (state.tab === "card") rebuildOrder(); });
  renderChips("sentChips", SENTS, "lecture", "sentLec", renderSents);
  renderList();

  /* 클라우드 동기화(선택 기능) 연결 — 설정이 비어 있으면 조용히 넘어간다 */
  applySyncStrings();
  try { if (window.__sync) window.__sync.init(); } catch (e) { /* ignore */ }
  applyGate();                       /* 계정 기능이 켜져 있고 로그인 전이면 내용을 가린다 */

  /* 사이드바 열기/닫기 (폰·태블릿에서는 드로어) */
  if (el("sbToggle")) {
    el("sbToggle").onclick = function () {
      var open = String(document.body.className || "").indexOf("sb-open") === -1;
      document.body.className = open
        ? (String(document.body.className || "") + " sb-open").replace(/^\s+/, "")
        : String(document.body.className || "").replace(/\s*sb-open/g, "");
    };
  }
  if (el("sbBackdrop")) el("sbBackdrop").onclick = function () { closeSidebar(); };
  if (el("brandLink")) el("brandLink").onclick = function (e) { if (e && e.preventDefault) e.preventDefault(); };

  document.querySelectorAll(".tab").forEach(function (b) {
    b.onclick = function () { showTab(b.getAttribute("data-tab")); };
  });
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.onclick = function () { setLang(b.getAttribute("data-lang")); };
  });
  el("q").oninput = function () { state.q = el("q").value; renderList(); if (state.tab === "card") rebuildOrder(); };
  el("card").onclick = function () { state.flipped = !state.flipped; renderCard(); };
  el("btnFlip").onclick = function () { state.flipped = !state.flipped; renderCard(); };
  el("btnNext").onclick = function () { nextCard(1); };
  el("btnKnow").onclick = function () { mark(true); };
  el("btnDunno").onclick = function () { mark(false); };
  el("btnShuffle").onclick = function () {
    var pool = poolTerms();
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }
    state.order = pool;
    state.pos = 0;
    state.flipped = false;
    renderCard();
  };
  el("btnOnlyUnknown").onclick = function () {
    state.onlyUnknown = !state.onlyUnknown;
    el("btnOnlyUnknown").className = "btn" + (state.onlyUnknown ? " primary" : "");
    rebuildOrder();
  };
  el("btnResetCards").onclick = function () {
    if (!confirm(t("confirmReset"))) return;
    store = { known: {} };
    saveSet();
    syncResetVocab();               /* 서버 사본도 함께 비운다 */
    rebuildOrder();
  };

  document.addEventListener("keydown", function (e) {
    if (state.tab !== "card") return;
    var tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.key === " " || e.key === "Spacebar") { state.flipped = !state.flipped; renderCard(); e.preventDefault(); }
    else if (e.key === "ArrowRight") { nextCard(1); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { nextCard(-1); e.preventDefault(); }
    else if (e.key === "1") { mark(true); }
    else if (e.key === "2") { mark(false); }
  });

  }
  window.__bootGlossary = boot;
  if (!window.__GATED__) boot();      /* 비밀번호 게이트가 없으면 바로 시작 */

  /* 동기화가 외운 단어를 바꿨을 때: 메모리 store 를 다시 읽고 화면 숫자를 갱신 */
  window.__glossarySyncApply = function () {
    store = loadSet();
    renderSidebarFoot();
    if (state.tab === "card") renderCard();
    renderList();
  };

  /* 서버 콘텐츠(용어집)를 받은 뒤: 데이터를 다시 읽고 화면을 다시 그린다 */
  window.__glossaryContentReady = function () {
    if (window.__GLOSSARY__) {
      DATA = window.__GLOSSARY__;
      TERMS = DATA.terms || [];
      SENTS = DATA.sentences || [];
    }
    preselectCourse();
    applyStatic();
    renderSidebar();
    renderCourseChips();
    renderChips("lecChips", TERMS, "lecture", "lec", function () { renderList(); if (state.tab === "card") rebuildOrder(); });
    renderChips("sentChips", SENTS, "lecture", "sentLec", renderSents);
    renderList();
    if (state.tab === "card") renderCard();
    renderSents();
  };

  /* 디버그/테스트용 훅 */
  window.__glossary = {
    get lang() { return LANG; },
    setLang: setLang,
    showTab: showTab,
    get store() { return store; },
    terms: TERMS,
    sentences: SENTS,
    filteredTerms: filteredTerms,
    filteredSents: filteredSents,
    mark: mark,
    nextCard: nextCard,
    rebuildOrder: rebuildOrder,
    renderList: renderList,
    renderCard: renderCard,
    renderSents: renderSents,
    renderSidebar: renderSidebar,
    renderCourseChips: renderCourseChips,
    courseList: courseList,
    courseShort: courseShort,
    syncStrings: syncStrings,
    state: state
  };
})();

