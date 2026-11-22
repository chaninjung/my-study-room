/* Principle of Artificial Intelligence — course-specific study guide and exam briefing. */
(function () {
  "use strict";
  function esc(v) { return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function ko(lang, a, b) { return lang === "en" ? b : a; }

  var currentScope = "all";

  function topicCards(lang) {
    var topics = [
      ["general", "AI in General", "AI 일반", 12],
      ["search", "Search", "탐색", 67],
      ["ml", "Machine Learning", "머신러닝", 39]
    ];
    return topics.map(function (x) {
      var on = currentScope === x[0] ? " active" : "";
      return '<button type="button" class="paiTopic' + on + '" data-pai-scope="' + x[0] + '"><span>' + x[1] + '</span><b>' + x[3] + '</b><small>' + ko(lang, x[2] + " · 원문 질문 전체", "All supplied review prompts") + '</small><i>→</i></button>';
    }).join("");
  }

  function promptListHtml(lang) {
    if (!window.__PAI_QUESTION_DATA__ || !window.__PAI_QUESTION_DATA__.questions) return "";
    var qs = window.__PAI_QUESTION_DATA__.questions;
    if (currentScope !== "all") {
      qs = qs.filter(function (q) { return q.scope === currentScope; });
    }
    var items = qs.map(function (q) {
      var numLabel = (q.scope === "general" ? "AI #" : (q.scope === "search" ? "Search #" : "ML #")) + q.sourceNumber;
      return '<div class="paiPromptItem">' +
        '<span class="paiPromptNum">' + numLabel + '</span>' +
        '<span class="paiPromptText">' + esc(q.pdfPrompt || q.prompt) + '</span>' +
        '<button type="button" class="btn sm primary paiPromptAction" data-one="' + q.id + '">' + ko(lang, "풀기 →", "Practice →") + '</button>' +
        '</div>';
    }).join("");

    var title = currentScope === "general" ? "AI in General (12 prompts)" :
                (currentScope === "search" ? "Search (67 prompts)" :
                (currentScope === "ml" ? "Machine Learning (39 prompts)" : "All 118 PDF Review Prompts"));

    return '<div class="paiPromptViewer"><div style="display:flex;align-items:center;justify-content:space-between;margin:24px 0 12px;">' +
      '<h3 style="margin:0;font-size:17px;color:var(--text);">' + esc(title) + '</h3>' +
      '<span class="muted" style="font-size:12px;">' + qs.length + ' questions</span>' +
      '</div><div class="paiPromptList">' + items + '</div></div>';
  }

  function overview(host, lang) {
    if (!host) return;
    var scoped = window.__app && window.__app.scopedQuestions ? window.__app.scopedQuestions().length : 118;
    host.innerHTML = '<div class="paiCourse">' +
      '<section class="paiLead"><div><span class="paiKicker">PRINCIPLE OF ARTIFICIAL INTELLIGENCE</span><h1>' + ko(lang, "118개 복습 질문, 한 문제도 빠뜨리지 않고", "All 118 supplied review prompts") + '</h1><p>' + ko(lang, "교수님 PDF의 AI 일반 12 · Search 67 · Machine Learning 39 질문을 단일정답 연습 문항으로 변환했습니다. 아래에서 PDF 원문 질문을 그대로 읽어보거나 즉시 풀 수 있습니다.", "All 12 AI-general, 67 Search, and 39 Machine Learning prompts directly from questions.pdf. Read the prompts or practice immediately.") + '</p></div><div class="paiCount"><b>' + scoped + '</b><span>' + ko(lang, "현재 범위 문항", "questions in this scope") + '</span></div></section>' +
      '<section class="paiUrgent"><div><span>NEPTUN</span><h2>' + ko(lang, "시험 신청을 먼저 확인하세요", "Register before preparing to sit the exam") + '</h2><p>' + ko(lang, "12월 3일부터 신청 가능 · 시험 시작 약 48시간 전 등록 마감. 미등록 시 성적을 입력할 수 없습니다.", "Registration opens Dec 3 and closes about 48 hours before the exam. Without registration, no grade can be recorded.") + '</p></div><button type="button" class="paiButton paiButtonLight" data-pai-nav="calendar">' + ko(lang, "내 Z 코드 일정 보기", "View my Z-code schedule") + '</button></section>' +
      '<section class="paiSection"><div class="paiSectionHead"><div><span class="paiKicker">REVIEW MAP</span><h2>' + ko(lang, "주제를 선택해 PDF 질문 보기", "Choose a review scope") + '</h2></div><button type="button" class="paiLink" data-pai-nav="all">' + ko(lang, "전체 범위로 돌아가기", "Return to all topics") + ' →</button></div><div class="paiTopicGrid">' + topicCards(lang) + '</div>' + promptListHtml(lang) + '</section>' +
      '<section class="paiPractice"><div><span class="paiKicker">30-MINUTE PRACTICE</span><h2>' + ko(lang, "실제 시험 시간에 맞춰 시작", "Practise within the actual exam duration") + '</h2><p>' + ko(lang, "현재 범위에서 랜덤 20문항 · 30분 · 단일정답 · 60% 연습 목표.", "Random 20 questions in this scope · 30 minutes · single answer · 60% study target.") + '</p></div><div class="paiActions"><button type="button" class="paiButton" data-pai-action="exam">' + ko(lang, "30분 모의고사 시작", "Start 30-minute mock") + '</button><button type="button" class="paiButton paiButtonSecondary" data-pai-action="all">' + ko(lang, "현재 범위 전체 풀기", "Practise entire scope") + '</button><button type="button" class="paiButton paiButtonGhost" data-pai-nav="bank">' + ko(lang, "문제은행 검색", "Search question bank") + '</button></div></section>' +
      '<section class="paiSection"><div class="paiSectionHead"><div><span class="paiKicker">YOUR SECOND TURN · NEPTUN CODE Z</span><h2>' + ko(lang, "실제 시험은 30분 늦게 도착", "Arrive 30 minutes after the official start") + '</h2></div></div><div class="paiDates"><article><span>EXAM 1</span><h3>2026. 12. 18. 14:30</h3><p>' + ko(lang, "전체 14:00–15:30 · 신청 권장 마감 12/16 14:00", "Official slot 14:00–15:30 · safe registration deadline Dec 16, 14:00") + '</p></article><article><span>EXAM / RETAKE 2</span><h3>2027. 1. 15. 12:00</h3><p>' + ko(lang, "전체 11:30–13:00 · 신청 권장 마감 1/13 11:30", "Official slot 11:30–13:00 · safe registration deadline Jan 13, 11:30") + '</p></article><article><span>EXAM / RETAKE 3</span><h3>2027. 1. 29. 12:00</h3><p>' + ko(lang, "전체 11:30–13:00 · 신청 권장 마감 1/27 11:30", "Official slot 11:30–13:00 · safe registration deadline Jan 27, 11:30") + '</p></article></div><p class="paiFine">' + ko(lang, "Lovarda lab · 대면 객관식 · 차시당 약 30분 · 세 날짜 중 최대 두 번(본시험+재시험) 응시.", "Lovarda lab · in-person multiple choice · about 30 minutes per turn · at most two of three dates.") + '</p></section>' +
      '<section class="paiIntegrity"><span class="paiKicker">EXAM RULES</span><h2>' + ko(lang, "시험장에서는 오직 시험 창만", "Only the exam window during the real test") + '</h2><ul><li>' + ko(lang, "외부 도움·AI 사용 금지", "No external help or AI") + '</li><li>' + ko(lang, "브라우저 창 하나만 사용하고 바깥 클릭 금지", "One browser window; do not click outside it") + '</li><li>' + ko(lang, "USB 장치 사용 금지 · 부정행위 시 자동 과목 낙제", "No USB devices; cheating means automatic course failure") + '</li></ul></section>' +
      '<div class="paiDisclaimer"><b>' + ko(lang, "연습 자료 안내", "Practice-material notice") + '</b><p>' + ko(lang, "원본 PDF에는 보기와 정답이 없습니다. 이 사이트의 보기·정답·해설은 118개 원문 질문에 대응해 새로 작성한 학습용이며 교수님의 공식 답안이 아닙니다. 공식 강의 자료를 최종 기준으로 확인하세요.", "The supplied PDF has no choices or answer key. Choices, answers and explanations here were independently authored for all 118 prompts and are not official answers. Use the official lectures as the final source.") + '</p></div></div>';
    wire(host);
  }

  function about(lang) {
    return '<div class="cdSec"><h2 class="cdSecTitle">' + ko(lang, "이 과목에서 얻는 것", "What you will study") + '</h2><ul class="cdList">' +
      ["AI 역사와 철학, 핵심 탐색 알고리즘의 정의와 성질 구분", "BT1/BT2, graph search, A/A*/Ac, minimax와 진화 알고리즘 비교", "지도·비지도학습, 신경망, NLP, SVM, PCA까지 118개 원문 전체 복습", "30분 제한 모의고사와 오답 복습으로 실제 시험 시간 감각 익히기"].map(function (x) { return '<li><span class="cdCheck">✓</span><span>' + esc(x) + '</span></li>'; }).join("") + '</ul></div>' +
      '<div class="cdSec"><h2 class="cdSecTitle">' + ko(lang, "과정 소개", "About this course") + '</h2><p class="cdPara">' + ko(lang, "Principle of Artificial Intelligence 시험 대비 학습실입니다. 제공된 questions.pdf의 질문을 번호와 주제별로 대응시켜 문제은행·랜덤 모의고사·오답 복습으로 구성했습니다.", "A study room for Principle of Artificial Intelligence. Every supplied review prompt is mapped by topic and number into the question bank, timed mocks and wrong-answer review.") + '</p></div>' +
      '<div class="cdSec"><h2 class="cdSecTitle">' + ko(lang, "시험 정보", "Exam information") + '</h2><div class="cdInfoGrid">' +
      [["복습 질문", "118"], ["모의고사", "5 sets"], ["실제 시험", "약 30분 · 대면 객관식"], ["내 차시", "Z → 2nd turn"]].map(function (x) { return '<div class="cdInfoCard"><em>' + esc(x[0]) + '</em><b>' + esc(x[1]) + '</b></div>'; }).join("") + '</div><p class="cdPara" style="margin-top:14px">' + ko(lang, "12/18, 1/15, 1/29 중 최대 두 번 응시 · Lovarda lab · Neptun 사전 등록 필수. 실제 합격 기준과 문항 수는 제공된 공지에 없습니다.", "At most two of Dec 18, Jan 15 and Jan 29 · Lovarda lab · Neptun registration required. The official pass mark and question count were not supplied.") + '</p></div>' +
      '<div class="cdSec"><h2 class="cdSecTitle">' + ko(lang, "원문과 연습 문항의 차이", "Source prompts versus practice items") + '</h2><p class="cdPara">' + ko(lang, "PDF의 원문 질문 118개는 모두 포함했습니다. 다만 원본에는 선택지와 정답이 없으므로, 여기의 선택지·정답·해설은 별도로 작성한 연습용입니다. 공식 시험에 동일한 보기가 나온다는 뜻은 아닙니다.", "All 118 source prompts are included. Since the PDF contains no choices or answers, the choices, keys and explanations here are independently authored study aids; identical options are not promised for the real exam.") + '</p></div>';
  }

  function guide(lang) {
    var steps = ko(lang, ["AI 일반 12개 질문으로 역사·철학 개념을 먼저 확인합니다.", "Search 67개를 세부 단원으로 나눠 f, g, h와 알고리즘 성질을 비교합니다.", "Machine Learning 39개로 데이터 분할, 활성화·손실, NLP, 차원 축소를 복습합니다.", "30분 종합 모의고사를 두 세트 풀고 오답 복습에서 약한 개념만 다시 봅니다."], ["Review the 12 AI-general prompts on history and philosophy.", "Compare f, g, h and algorithm properties across the 67 Search prompts.", "Cover data splits, activations, losses, NLP and dimensionality reduction in the 39 ML prompts.", "Take both 30-minute comprehensive mocks, then revisit missed concepts."]);
    return '<div class="cdSec"><p class="cdPara">' + ko(lang, "영어 원문 질문에 익숙해진 뒤 시간을 재고 푸는 순서를 권장합니다. 연습용 60%는 공식 합격선이 아닙니다.", "Learn the English prompts first, then practise under time pressure. The 60% practice target is not an official pass mark.") + '</p></div><div class="cdSec"><h2 class="cdSecTitle">' + ko(lang, "학습 순서", "Study order") + '</h2><ol class="cdList">' + steps.map(function (x, i) { return '<li><span class="cdStepNum">' + (i + 1) + '</span><span>' + esc(x) + '</span></li>'; }).join("") + '</ol></div>' +
      '<div class="cdSec"><h2 class="cdSecTitle">' + ko(lang, "빠른 이동", "Quick links") + '</h2><div class="cdQuickRow"><button class="btn sm cdQuickBtn" type="button" data-pai-nav="bank">' + ko(lang, "118개 문제은행", "118-question bank") + '</button><button class="btn sm cdQuickBtn" type="button" data-pai-nav="wrong">' + ko(lang, "오답 복습", "Wrong-answer review") + '</button><button class="btn sm cdQuickBtn" type="button" data-pai-nav="overview">' + ko(lang, "학습 개요", "Study overview") + '</button></div></div>';
  }

  function wire(host) {
    if (!host || !host.querySelectorAll) return;
    host.querySelectorAll("[data-pai-scope]").forEach(function (b) {
      b.onclick = function () {
        currentScope = b.getAttribute("data-pai-scope");
        window.__app.setCourseSection(currentScope);
        overview(host, window.LANG || "ko");
      };
    });
    host.querySelectorAll("[data-pai-action]").forEach(function (b) { b.onclick = function () { window.__app.startMode(b.getAttribute("data-pai-action")); }; });
    host.querySelectorAll("[data-pai-nav]").forEach(function (b) {
      b.onclick = function () {
        var v = b.getAttribute("data-pai-nav");
        if (v === "calendar") { window.__app.setCourseTab("calendar"); }
        else if (v === "all") { currentScope = "all"; window.__app.setCourseSection("all"); overview(host, window.LANG || "ko"); }
        else { window.__app.go(v); }
      };
    });
    host.querySelectorAll("[data-one]").forEach(function (b) {
      b.onclick = function () { window.__app.startOne(b.getAttribute("data-one")); };
    });
  }

  window.__PAICourseUI = { render: overview, about: about, guide: guide, wire: wire };
})();
