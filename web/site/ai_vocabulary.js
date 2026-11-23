/* Public course shell. Vocabulary and quiz content are loaded from the private API. */
(function () {
  "use strict";
  var COURSE = "aihe";
  var loading = null;
  var endpoint = location.hostname === "localhost"
    ? "http://localhost:8000"
    : "https://dnd-coding-test-runner.onrender.com";

  window.__AI_VOCAB_DATA__ = null;

  window.__mergeAIGlossary = function (base) {
    var data = window.__AI_VOCAB_DATA__;
    base = base || {};
    var terms = (base.terms || []).filter(function (word) { return word.course !== COURSE; });
    var sentences = (base.sentences || []).filter(function (sentence) { return sentence.course !== COURSE; });
    if (data) {
      terms = terms.concat(data.terms || []);
      sentences = sentences.concat(data.sentences || []);
    }
    return { terms: terms, sentences: sentences, meta: base.meta || {} };
  };

  window.__setAIVocabulary = function (data) {
    if (window.__AI_VOCAB_DATA__ === data) return data;
    if (!data || !Array.isArray(data.terms) || !Array.isArray(data.quiz)) {
      throw new Error("The private AI vocabulary payload is invalid.");
    }
    window.__AI_VOCAB_DATA__ = data;
    window.__GLOSSARY__ = window.__mergeAIGlossary(window.__GLOSSARY__);
    try {
      if (typeof window.__contentDataReady === "function") window.__contentDataReady();
      if (typeof window.__glossaryContentReady === "function") window.__glossaryContentReady();
    } catch (error) {
      console.error("Could not refresh AI vocabulary content.", error);
    }
    return data;
  };

  window.__loadAIVocabulary = function () {
    if (window.__AI_VOCAB_DATA__) return Promise.resolve(window.__AI_VOCAB_DATA__);
    var auth = window.__sync && window.__sync._auth && window.__sync._auth();
    if (!auth || !auth.access_token) return Promise.resolve(null);
    if (loading) return loading;
    loading = fetch(endpoint + "/api/exams/aihe", {
      headers: { Authorization: "Bearer " + auth.access_token }
    }).then(function (response) {
      if (!response.ok) throw new Error("Private AI vocabulary request failed with " + response.status + ".");
      return response.json();
    }).then(function (payload) {
      window.__setAIVocabulary(payload);
      return payload;
    }).catch(function (error) {
      loading = null;
      console.error("Could not load the private AI vocabulary.", error);
      return null;
    });
    return loading;
  };

  function installCourse() {
    var curriculum = window.CURRICULUM || [];
    var exists = curriculum.some(function (semester) {
      return (semester.courses || []).some(function (course) { return course.id === COURSE; });
    });
    if (exists || !curriculum.length) return;
    var course = {
      id: COURSE,
      label: { ko: "Introduction to the use of Artificial Intelligence in Higher Education", en: "Introduction to the use of Artificial Intelligence in Higher Education" },
      short: { ko: "AI·HE", en: "AI·HE" },
      image: "assets/courses/aihe.jpg",
      sub: { ko: "핵심 영단어 · 책임 있는 AI 활용 · 학습 전략", en: "Core Vocabulary · Responsible AI · Learning Strategies" },
      tagline: { ko: "기말고사 복습 핵심 단어 80개 · 플래시카드 · 확인 퀴즈", en: "80 final-review terms · flashcards · vocabulary quiz" },
      tags: ["artificial-intelligence", "higher-education", "vocabulary", "responsible-ai", "academic-integrity"],
      level: { ko: "초급 · 단어 집중", en: "Beginner · Vocabulary first" },
      heroQuestions: 0,
      heroMocks: 0,
      terms: 80,
      gains: {
        ko: ["AI와 머신러닝의 기본 개념을 정확한 영어로 구분", "프롬프트 작성과 AI 출력 검증에 필요한 표현 학습", "개인정보 보호·출처 표시·AI 사용 공개의 차이 이해", "유창성의 착각·인지 부채 등 AI 시대 학습 전략 익히기"],
        en: ["Distinguish core AI and machine-learning concepts in English", "Learn expressions for prompting and output verification", "Understand privacy, source attribution, and AI-use disclosure", "Review the illusion of fluency, cognitive debt, and effective learning strategies"]
      },
      about: {
        ko: "40문항 기말고사 복습 자료를 바탕으로 만든 단어 우선 학습실입니다. 로그인한 사용자에게만 비공개 학습 자료를 제공합니다.",
        en: "A vocabulary-first study room based on a 40-question final review. The private learning content is available only after sign-in."
      },
      grading: {
        ko: "학습 가이드의 10문제 확인 퀴즈와 공통 용어집의 플래시카드를 사용합니다. 퀴즈와 단어장은 로그인한 사용자에게만 제공됩니다.",
        en: "Use the 10-question check and shared flashcards. The quiz and vocabulary are available only after sign-in."
      },
      open: true,
      sections: [],
      items: [
        { id: "overview", label: { ko: "단어 학습 가이드", en: "Vocabulary Guide" } },
        { id: "glossary", label: { ko: "핵심 단어 80개 · 플래시카드", en: "80 Terms · Flashcards" }, href: "glossary.html" }
      ]
    };
    var semester = curriculum.filter(function (item) { return item.id === "s1"; })[0] || curriculum[0];
    var position = (semester.courses || []).findIndex(function (item) { return item.id === "hungarian"; });
    if (position < 0) position = semester.courses.length;
    semester.courses.splice(position, 0, course);
  }

  installCourse();
  window.__loadAIVocabulary();
}());
