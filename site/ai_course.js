/* Vocabulary-first course guide. Kept separate from the exam app and its question banks. */
(function () {
  "use strict";
  var quizState = { index: 0, score: 0, picked: null, done: false };
  function esc(v) {
    return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function text(lang, ko, en) { return lang === "en" ? en : ko; }
  function local(lang, obj) { return obj && (obj[lang] || obj.ko) || ""; }
  function termLink(term, tab) {
    return "glossary.html?course=aihe&q=" + encodeURIComponent(term) + (tab ? "&tab=" + tab : "");
  }

  function quizHtml(lang) {
    var data = window.__AI_VOCAB_DATA__ || { quiz: [] };
    var list = data.quiz || [];
    if (!list.length) return "";
    if (quizState.done) {
      var pct = Math.round(quizState.score / list.length * 100);
      return '<div class="aiQuizResult" role="status"><span class="aiEyebrow">RESULT</span>' +
        '<strong>' + quizState.score + ' / ' + list.length + '</strong><b>' + pct + '%</b>' +
        '<p>' + esc(text(lang, "틀린 개념은 위의 비교 카드와 플래시카드에서 다시 확인해 보세요.", "Review missed concepts in the comparison cards and flashcards above.")) + '</p>' +
        '<button class="aiBtn aiBtnDark" id="aiQuizRestart" type="button">' + esc(text(lang, "다시 풀기", "Try again")) + '</button></div>';
    }
    var q = list[quizState.index];
    var answered = quizState.picked !== null;
    var options = q.options.map(function (opt, i) {
      var cls = "aiQuizOption";
      if (answered && i === q.answer) cls += " correct";
      if (answered && i === quizState.picked && i !== q.answer) cls += " wrong";
      return '<button type="button" class="' + cls + '" data-ai-option="' + i + '"' + (answered ? " disabled" : "") + '>' +
        '<span>' + String.fromCharCode(65 + i) + '</span>' + esc(opt) + '</button>';
    }).join("");
    var feedback = answered ? '<div class="aiQuizFeedback ' + (quizState.picked === q.answer ? "correct" : "wrong") + '" role="status">' +
      '<b>' + esc(text(lang, quizState.picked === q.answer ? "정답입니다" : "다시 확인할 개념입니다", quizState.picked === q.answer ? "Correct" : "Review this distinction")) + '</b>' +
      '<p>' + esc(local(lang, q.why)) + '</p></div>' : "";
    return '<div class="aiQuizTop"><span>' + esc(text(lang, "단어 확인 퀴즈", "Vocabulary check")) + '</span>' +
      '<b>' + (quizState.index + 1) + ' / ' + list.length + '</b></div>' +
      '<div class="aiQuizTrack"><i style="width:' + ((quizState.index + (answered ? 1 : 0)) / list.length * 100) + '%"></i></div>' +
      '<h3>' + esc(local(lang, q.q)) + '</h3><div class="aiQuizOptions">' + options + '</div>' + feedback +
      (answered ? '<button class="aiBtn aiBtnDark aiQuizNext" id="aiQuizNext" type="button">' +
        esc(text(lang, quizState.index === list.length - 1 ? "결과 보기" : "다음 문제", quizState.index === list.length - 1 ? "See result" : "Next question")) + '</button>' : "");
  }

  function wireQuiz(host, lang) {
    var box = host.querySelector("#aiQuizBox");
    if (!box) return;
    function redraw() { box.innerHTML = quizHtml(lang); bind(); }
    function bind() {
      box.querySelectorAll("[data-ai-option]").forEach(function (button) {
        button.onclick = function () {
          if (quizState.picked !== null) return;
          var data = window.__AI_VOCAB_DATA__;
          var q = data.quiz[quizState.index];
          quizState.picked = Number(button.getAttribute("data-ai-option"));
          if (quizState.picked === q.answer) quizState.score += 1;
          redraw();
        };
      });
      var next = box.querySelector("#aiQuizNext");
      if (next) next.onclick = function () {
        if (quizState.index >= window.__AI_VOCAB_DATA__.quiz.length - 1) quizState.done = true;
        else { quizState.index += 1; quizState.picked = null; }
        redraw();
      };
      var restart = box.querySelector("#aiQuizRestart");
      if (restart) restart.onclick = function () {
        quizState = { index: 0, score: 0, picked: null, done: false };
        redraw();
      };
    }
    bind();
  }

  function render(host, lang) {
    var data = window.__AI_VOCAB_DATA__;
    if (!host || !data) return;
    var core = data.terms.filter(function (w) { return w.core; });
    var categoryCards = data.categories.map(function (cat) {
      var count = data.terms.filter(function (w) { return w.lecture === cat.id; }).length;
      return '<a class="aiCategory" href="glossary.html?course=aihe&lec=' + cat.id + '">' +
        '<span>' + cat.id + '</span><b>' + esc(local(lang, cat)) + '</b><small>' + count + esc(text(lang, "개 단어", " terms")) + ' →</small></a>';
    }).join("");
    var coreCards = core.map(function (w) {
      return '<a class="aiTermCard" href="' + termLink(w.term) + '"><div><span>' + w.lecture + '</span><span>↗</span></div>' +
        '<h3>' + esc(w.term) + '</h3><b>' + esc(w.ko) + '</b><p>' + esc(w.en) + '</p></a>';
    }).join("");
    var contrastCards = data.contrasts.map(function (pair) {
      return '<article class="aiContrast"><h3>' + esc(pair.title) + '</h3><p>' + esc(local(lang, pair)) + '</p></article>';
    }).join("");
    var priorities = [
      { q: "Q37", title: "model", ko: "새 입력을 분류하는 학습된 내부 기반입니다. labeled data는 학습 사례이고 layer는 처리 구성 요소입니다.", en: "The learned basis used to classify new inputs. Labeled data are examples; a layer is a component." },
      { q: "Q15", title: "professional integrity", ko: "AI가 평가를 대신하는 것이 아니라, 공정하고 일관된 전문 기준으로 판단하는 태도입니다.", en: "Fair and consistent professional judgment, not delegating the decision itself to AI." },
      { q: "Q14 · Q18", title: "verification & image use", ko: "낯선 주장은 신뢰할 수 있는 출처로 확인하고, AI 이미지는 저작권·출처 표시·허용된 사용을 점검합니다.", en: "Verify unfamiliar claims and check copyright, attribution, and permitted use for AI-modified images." },
      { q: "Q9 · Q12 · Q30", title: "responsibility & learning", ko: "출력 검증·개인정보 보호·규정 준수는 사용자 책임입니다. 자동화는 반복 업무를 돕고, 스스로 사고하는 습관을 유지해야 합니다.", en: "Users remain responsible for verification, privacy, and rules. Automation supports routine work; independent thinking still matters." }
    ].map(function (p) {
      return '<article class="aiPriority"><span>' + p.q + '</span><div><h3>' + esc(p.title) + '</h3><p>' + esc(local(lang, p)) + '</p></div></article>';
    }).join("");

    host.innerHTML = '<div class="aiCourse">' +
      '<section class="aiHero"><div class="aiHeroInner"><span class="aiEyebrow">VOCABULARY FIRST · FINAL REVIEW</span>' +
      '<h1>Introduction to the use of Artificial Intelligence in Higher Education</h1>' +
      '<p>' + esc(text(lang, "기말고사 40문항에서 필요한 영어를 골라, 뜻보다 개념의 차이가 보이도록 정리했습니다.", "Essential English from the 40-question final review, organised around conceptual distinctions rather than translation alone.")) + '</p>' +
      '<div class="aiHeroActions"><a class="aiBtn aiBtnLight" href="glossary.html?course=aihe&tab=card">' + esc(text(lang, "플래시카드 시작", "Start flashcards")) + ' →</a>' +
      '<a class="aiBtn aiBtnGhost" href="glossary.html?course=aihe">' + esc(text(lang, "80개 단어 전체 보기", "View all 80 terms")) + '</a></div>' +
      '<div class="aiStats"><div><b>80</b><span>' + esc(text(lang, "핵심 용어", "core terms")) + '</span></div><div><b>24</b><span>' + esc(text(lang, "시험 표현", "key sentences")) + '</span></div><div><b>7</b><span>' + esc(text(lang, "개념 비교", "distinctions")) + '</span></div><div><b>10</b><span>' + esc(text(lang, "확인 문제", "quiz questions")) + '</span></div></div></div></section>' +
      '<section class="aiSection aiIntro"><div><span class="aiEyebrow">HOW TO STUDY</span><h2>' + esc(text(lang, "이 순서로 공부하세요", "Study in this order")) + '</h2></div>' +
      '<div class="aiSteps"><article><span>01</span><h3>' + esc(text(lang, "핵심 단어 익히기", "Learn the core terms")) + '</h3><p>' + esc(text(lang, "아래 16개부터 영어 뜻과 한국어 의미를 함께 읽습니다.", "Start with the 16 terms below; read both the English definition and Korean meaning.")) + '</p></article>' +
      '<article><span>02</span><h3>' + esc(text(lang, "카드로 인출하기", "Retrieve with cards")) + '</h3><p>' + esc(text(lang, "뜻을 보기 전에 스스로 설명하고, 모르는 단어만 다시 학습합니다.", "Explain before flipping, then review only unknown words.")) + '</p></article>' +
      '<article><span>03</span><h3>' + esc(text(lang, "문맥으로 구분하기", "Distinguish in context")) + '</h3><p>' + esc(text(lang, "비교 카드와 24개 문장으로 시험 속 쓰임을 확인하고 퀴즈를 풉니다.", "Use comparisons and 24 sentences to learn exam contexts, then take the quiz.")) + '</p></article></div></section>' +
      '<section class="aiSection"><div class="aiSectionHead"><div><span class="aiEyebrow">START HERE</span><h2>' + esc(text(lang, "먼저 외울 핵심 16단어", "16 terms to learn first")) + '</h2></div>' +
      '<a href="glossary.html?course=aihe&tab=card">' + esc(text(lang, "카드로 외우기 →", "Study with cards →")) + '</a></div><div class="aiTermGrid">' + coreCards + '</div></section>' +
      '<section class="aiSection aiMutedSection"><div class="aiSectionHead"><div><span class="aiEyebrow">DO NOT CONFUSE</span><h2>' + esc(text(lang, "시험에서 꼭 구분할 7쌍", "7 distinctions to know for the exam")) + '</h2></div></div><div class="aiContrastGrid">' + contrastCards + '</div></section>' +
      '<section class="aiSection"><div class="aiSectionHead"><div><span class="aiEyebrow">REVIEW PRIORITY</span><h2>' + esc(text(lang, "지난 복습에서 더 확인할 개념", "Priority concepts from your review")) + '</h2></div></div><div class="aiPriorityGrid">' + priorities + '</div></section>' +
      '<section class="aiSection aiMutedSection"><div class="aiSectionHead"><div><span class="aiEyebrow">ALL TOPICS</span><h2>' + esc(text(lang, "주제별로 80단어 찾기", "Browse all 80 terms by topic")) + '</h2></div>' +
      '<a href="glossary.html?course=aihe&tab=sent">' + esc(text(lang, "핵심 문장 24개 →", "24 key sentences →")) + '</a></div><div class="aiCategoryGrid">' + categoryCards + '</div></section>' +
      '<section class="aiSection aiQuizSection"><div class="aiQuizIntro"><span class="aiEyebrow">10-QUESTION CHECK</span><h2>' + esc(text(lang, "뜻을 아는지 바로 확인해 보세요", "Check what you know")) + '</h2><p>' + esc(text(lang, "정답을 고르면 바로 해설이 나옵니다. 점수는 다른 과목의 시험 기록에 저장되지 않는 연습용입니다.", "Choose an answer for immediate feedback. This practice score is separate from other courses' exam records.")) + '</p></div>' +
      '<div class="aiQuizBox" id="aiQuizBox">' + quizHtml(lang) + '</div></section>' +
      '</div>';
    wireQuiz(host, lang);
  }

  window.__AICourseUI = { render: render };
})();
