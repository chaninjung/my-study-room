/* Introduction to the use of Artificial Intelligence in Higher Education
   Vocabulary distilled from the 40-question final-test review supplied by the student. */
(function () {
  "use strict";
  var COURSE = "aihe";
  function T(term, ko, en, lecture, core) {
    var out = { term: term, ko: ko, en: en, lecture: lecture, course: COURSE };
    if (core) out.core = true;
    return out;
  }
  function S(en, ko, lecture) { return { en: en, ko: ko, lecture: lecture, course: COURSE }; }

  var terms = [
    /* M1 — How AI works */
    T("artificial intelligence (AI)", "인공지능", "Computer systems that perform tasks associated with human intelligence, such as recognizing patterns or generating content.", "M1"),
    T("traditional software", "전통적 소프트웨어 · 규칙 기반 프로그램", "Software that follows explicit rules written by programmers rather than learning patterns from examples.", "M1"),
    T("machine learning (ML)", "머신러닝 · 기계학습", "An approach in which a system learns patterns from data instead of following only fixed, hand-written rules.", "M1"),
    T("training", "학습 · 훈련", "The process of adjusting a system by learning patterns from examples.", "M1"),
    T("labeled data", "레이블된 데이터 · 정답이 표시된 데이터", "Training examples that include the correct category or target value; they are inputs for learning, not the learned model itself.", "M1"),
    T("model", "모델 · 학습된 내부 표현", "The learned internal basis derived from training data and later used to make predictions about new inputs.", "M1", true),
    T("pattern", "패턴 · 규칙성", "A recurring relationship or regularity in data that a system can learn.", "M1"),
    T("dataset", "데이터 세트 · 데이터 모음", "A collection of examples or records used for training, testing, or analysis.", "M1"),
    T("input", "입력 · 입력 데이터", "The data or instruction supplied to a system for processing.", "M1"),
    T("output", "출력 · 결과물", "The prediction, explanation, image, or other result produced by a system.", "M1"),
    T("prediction", "예측 · 추정", "An estimate for a new input based on a learned model; it is distinct from training and from the model.", "M1", true),
    T("generative artificial intelligence", "생성형 인공지능", "AI that generates new content, such as text, images, audio, or code, in response to a request.", "M1", true),

    /* M2 — Generative AI and prompting */
    T("large language model (LLM)", "대규모 언어 모델", "A model trained on large amounts of text to predict and generate language.", "M2"),
    T("prompt", "프롬프트 · AI에게 주는 지시", "The user's instruction or input given to an AI tool; it is the request, not the content generated in response.", "M2", true),
    T("AI-generated content", "AI 생성 콘텐츠", "Text, images, audio, or other material produced by an AI system.", "M2"),
    T("hallucination", "할루시네이션 · AI의 사실 아닌 생성", "Fluent and confident output that contains inaccurate, invented, or unsupported information.", "M2", true),
    T("bias", "편향 · 치우침", "A systematic tendency that can make outputs or decisions unfair or unrepresentative.", "M2"),
    T("output verification", "출력 검증", "Checking an AI result against original material or reliable sources before relying on it.", "M2", true),
    T("target audience", "대상 청중 · 대상 독자", "The specific people for whom content is intended; their background affects depth and style.", "M2", true),
    T("time frame", "시간 범위 · 사용 가능한 시간", "The amount of time available for a presentation, task, or response.", "M2"),
    T("desired output format", "원하는 출력 형식", "The structure the user wants, such as eight slides, a table, or a three-sentence summary.", "M2"),
    T("outline", "개요 · 구성안", "An organized plan showing the main sections and order of a presentation or piece of writing.", "M2"),
    T("constraint", "제약 조건", "A limit or requirement that the output must respect, such as using only the supplied data.", "M2"),
    T("refine a prompt", "프롬프트를 다듬다 · 구체화하다", "Improve a request by adding its purpose, audience, scope, constraints, and required format.", "M2"),

    /* M3 — Responsible use and academic integrity */
    T("responsible use of AI", "책임 있는 AI 사용", "Using AI in line with applicable rules, allowed purposes, transparency, and careful checking of its output.", "M3", true),
    T("academic integrity", "학문적 진실성", "Honesty and fairness in studying, assessment, research, and the presentation of one's own work.", "M3"),
    T("professional integrity", "직업적·전문적 진실성", "Making decisions according to fair and consistent professional standards rather than misusing AI or trusting it uncritically.", "M3", true),
    T("meaningful human oversight", "실질적인 인간의 감독", "Genuine human review with the ability to assess and change an AI-supported decision, especially in high-impact cases.", "M3", true),
    T("transparency and accountability", "투명성과 책임성", "Being open about how AI is used and accepting responsibility for checking outputs and final decisions.", "M3"),
    T("plagiarism", "표절", "Presenting another person's words, ideas, or work as one's own without appropriate acknowledgment.", "M3", true),
    T("source attribution", "출처 표시", "Identifying the original source of words, ideas, data, images, or other material.", "M3"),
    T("AI-use disclosure", "AI 사용 사실 공개", "Clearly stating where and how AI was used when a course or institution requires disclosure.", "M3", true),
    T("authorship", "저작자성 · 작성자로서의 책임", "Responsibility for the submitted work and for one's own contribution to it.", "M3"),
    T("copyright protection", "저작권 보호", "Legal protection for eligible original creative works; an AI-use disclosure is not the same thing.", "M3"),
    T("consent", "동의", "Permission for a specified use of personal data or other protected material.", "M3"),
    T("confidentiality", "기밀 유지", "Keeping sensitive information private and avoiding unauthorized disclosure.", "M3"),
    T("data protection", "개인정보·데이터 보호", "Rules and practices that govern safe and lawful collection, processing, storage, and sharing of data.", "M3"),
    T("identifiable data", "개인을 식별할 수 있는 데이터", "Information that can directly or indirectly reveal who a person is.", "M3", true),
    T("anonymized data", "익명화된 데이터", "Data processed so that a person can no longer reasonably be identified; simply removing names may not be enough.", "M3"),
    T("authorization", "승인 · 권한 부여", "Permission to access, upload, process, or share information for a particular purpose.", "M3"),

    /* M4 — Learning with AI */
    T("illusion of fluency", "유창성의 착각", "Overestimating one's understanding or skill because AI produces a smooth, well-written result.", "M4", true),
    T("cognitive debt", "인지 부채", "A long-term loss of independent thinking or ability after repeatedly outsourcing thinking to AI without reflection.", "M4", true),
    T("cognitive offloading", "인지 부하 전가 · 생각을 외부 도구에 맡기기", "Using an external tool to perform mental work; it becomes risky when it replaces independent thinking entirely.", "M4"),
    T("desirable difficulties", "바람직한 어려움", "Learning tasks that feel effortful but strengthen long-term retention and understanding.", "M4"),
    T("interleaving", "교차 학습", "Mixing related types of problems or topics instead of practicing only one block at a time.", "M4"),
    T("metacognition", "메타인지", "Awareness and regulation of one's own thinking and learning processes.", "M4"),
    T("metacognitive laziness", "메타인지적 게으름", "Reduced monitoring and evaluation of one's own thinking because AI supplies ready-made answers.", "M4"),
    T("self-reflection", "자기 성찰", "Deliberately examining what one understood, contributed, and still needs to improve.", "M4"),
    T("self-assessment", "자기 평가", "Checking one's own knowledge or performance rather than assuming that a good AI output proves learning.", "M4"),
    T("active recall", "능동적 인출", "Trying to retrieve an answer from memory before looking at notes or asking AI.", "M4"),
    T("targeted practice", "표적 연습 · 맞춤 연습", "Practicing specific weak points with tasks matched to the learner's needs.", "M4"),
    T("conceptual understanding", "개념적 이해", "Understanding principles and relationships, not merely recognizing a polished answer.", "M4"),
    T("line of reasoning", "사고·논리 전개 과정", "The connected steps through which a learner reaches and justifies a conclusion.", "M4"),
    T("outsource one's thinking", "자신의 사고를 외주화하다", "Hand intellectual work to AI instead of actively processing and judging it oneself.", "M4"),

    /* M5 — Work, judgment, and skills */
    T("automation", "자동화", "Using technology to perform tasks with reduced human intervention, especially repetitive or routine work.", "M5"),
    T("routine task", "반복적·일상적 업무", "A recurring task with predictable steps, such as sorting standard requests.", "M5"),
    T("professional judgment", "전문적 판단", "A decision based on expertise, context, evidence, and ethical standards rather than AI output alone.", "M5"),
    T("exception handling", "예외 처리", "Recognizing and managing unusual cases that do not fit an automated rule or standard procedure.", "M5"),
    T("AI complementary skills", "AI 보완 역량", "Human abilities that become more valuable alongside AI, such as critical judgment, creativity, and domain expertise.", "M5", true),
    T("jagged technological frontier", "들쭉날쭉한 기술의 최전선", "The uneven boundary between tasks AI performs well and seemingly similar tasks where it performs poorly.", "M5"),
    T("risk of complacency", "안일함·자만의 위험", "The danger of accepting AI output without sufficient scrutiny because it usually appears helpful.", "M5"),
    T("skill decay", "기능·역량 저하", "Gradual loss of ability when a person stops practicing a skill.", "M5"),
    T("supplementary AI", "보조적 AI", "AI used to support a person's work rather than replace responsibility, judgment, or learning.", "M5"),
    T("ethical bluewashing", "윤리적 블루워싱 · 겉으로만 윤리적인 태도", "Presenting AI use as ethical without matching meaningful practices or safeguards.", "M5"),
    T("equal treatment", "공정하고 동등한 대우", "Applying consistent standards without unfair differences between people.", "M5"),

    /* M6 — Academic English from the test */
    T("reliable source", "신뢰할 수 있는 출처", "A source with sufficient credibility and evidence to justify relying on it.", "M6"),
    T("bibliography", "참고문헌 목록", "A list of sources cited or consulted for a piece of academic work.", "M6"),
    T("relevance", "관련성", "The degree to which information or a feature directly helps with the stated task.", "M6"),
    T("unverifiable", "검증할 수 없는", "Not able to be checked against adequate evidence or a reliable source.", "M6"),
    T("fabricated", "날조된 · 지어낸", "Invented and presented as factual, such as a made-up study or source.", "M6"),
    T("fluent", "유창한", "Smooth and natural in expression; fluency alone does not establish factual accuracy.", "M6"),
    T("coherent", "일관되고 조리 있는", "Logically connected and easy to follow; coherence alone does not prove truth.", "M6"),
    T("persuasive", "설득력 있는", "Effective at convincing a reader; persuasive wording can still contain errors.", "M6"),
    T("generic", "일반적이고 구체성이 없는", "Broad and insufficiently tailored to the particular context or evidence.", "M6"),
    T("substantive processing", "실질적 처리·검토", "Genuinely engaging with content and evidence rather than merely adding superficial comments.", "M6"),
    T("course guidelines", "수업 지침", "The instructor's rules about permitted AI use, disclosure, collaboration, and assessment.", "M6"),
    T("good faith", "선의 · 성실한 의도", "An honest intention; good faith alone does not remove the need to check accuracy or disclose required AI use.", "M6"),
    T("irregular submission", "규정에 어긋난 제출", "A submission that fails to follow the applicable academic or assessment requirements.", "M6"),
    T("preliminary screening", "예비 심사 · 1차 선별", "An initial filtering step before a qualified person makes a substantive assessment or final decision.", "M6"),
    T("consistent criteria", "일관된 기준", "The same explicit standards applied across cases to support fair and professional decisions.", "M6")
  ];

  var sentences = [
    S("Machine learning systems learn patterns from examples rather than following only fixed rules.", "머신러닝 시스템은 고정된 규칙만 따르기보다 사례에서 패턴을 학습합니다.", "M1"),
    S("The model is the learned internal basis used to classify new inputs; labeled data are training examples, and a layer is only one processing component.", "model은 새 입력을 분류하는 데 쓰는 학습된 내부 기반이고, labeled data는 학습 사례이며, layer는 처리 구성 요소일 뿐입니다.", "M1"),
    S("Generative AI produces new content, while the prompt is the user's request and AI-generated content is the result.", "생성형 AI는 새 콘텐츠를 만들고, prompt는 사용자의 요청이며, AI-generated content는 그 결과입니다.", "M2"),
    S("Refine the prompt by specifying the target audience, time frame, desired output format, and required outline.", "대상 청중, 시간 범위, 원하는 출력 형식, 필요한 개요를 명시해 프롬프트를 구체화하세요.", "M2"),
    S("A response that is fluent, coherent, and persuasive may still be inaccurate or fabricated.", "유창하고 일관되며 설득력 있는 답변도 부정확하거나 날조된 내용일 수 있습니다.", "M2"),
    S("Compare the summary with the original text to verify accuracy instead of checking only its academic tone.", "학술적인 어조만 보지 말고 원문과 비교해 정확성을 검증하세요.", "M2"),
    S("An AI tool may present invented publication years, summaries, or references confidently.", "AI 도구는 지어낸 출판 연도, 요약, 참고문헌을 자신 있게 제시할 수 있습니다.", "M2"),
    S("For an unfamiliar AI-generated claim, identify the most important idea and check it against a reliable source.", "낯선 AI 생성 주장은 핵심 아이디어를 파악한 뒤 신뢰할 수 있는 출처와 대조하세요.", "M2"),
    S("Do not paste identifiable student records into a public AI tool without authorization.", "승인 없이 학생을 식별할 수 있는 기록을 공개 AI 도구에 붙여 넣으면 안 됩니다.", "M3"),
    S("Use anonymized data and remove details that could indirectly identify a person; deleting names alone may be insufficient.", "익명화된 데이터를 사용하고 간접 식별 가능한 세부 정보도 제거하세요. 이름만 지우는 것으로는 부족할 수 있습니다.", "M3"),
    S("Before uploading student data, clarify the tool's data-processing practices and the applicable institutional rules.", "학생 데이터를 업로드하기 전에 도구의 데이터 처리 방식과 해당 기관 규정을 확인하세요.", "M3"),
    S("Disclose AI assistance when required, even if you paraphrased every suggestion and acted in good faith.", "모든 제안을 바꿔 썼고 선의로 행동했더라도 요구되는 경우 AI 도움을 공개해야 합니다.", "M3"),
    S("Source attribution concerns the origin of material; AI-use disclosure concerns the use of AI assistance.", "source attribution은 자료의 출처를 밝히는 것이고, AI-use disclosure는 AI 도움을 사용한 사실을 밝히는 것입니다.", "M3"),
    S("Professional integrity means applying fair and consistent standards, not accepting AI rankings as final professional decisions.", "professional integrity는 AI 순위를 최종 전문 판단으로 받아들이지 않고 공정하고 일관된 기준을 적용하는 것입니다.", "M3"),
    S("Meaningful human oversight preserves substantive human assessment and final decision-making in high-impact cases.", "실질적인 인간의 감독은 영향이 큰 사안에서 인간의 실질적 평가와 최종 결정을 유지합니다.", "M3"),
    S("Automating routine tasks can free time for professional judgment and exception handling.", "반복 업무 자동화는 전문적 판단과 예외 처리에 쓸 시간을 확보해 줍니다.", "M5"),
    S("Preliminary AI screening does not replace a person's own line of reasoning or substantive processing.", "AI의 예비 선별이 사람 자신의 논리 전개나 실질적 검토를 대신하지는 않습니다.", "M5"),
    S("The illusion of fluency occurs when a polished AI answer makes you overestimate your own understanding.", "유창성의 착각은 다듬어진 AI 답변 때문에 자신의 이해도를 과대평가할 때 생깁니다.", "M4"),
    S("Cognitive debt concerns the longer-term effects of repeatedly outsourcing thinking without self-reflection.", "인지 부채는 자기 성찰 없이 사고를 반복적으로 외주화할 때의 장기적 영향을 뜻합니다.", "M4"),
    S("Test yourself first, ask for targeted practice, and try to reconstruct the reasoning without AI.", "먼저 스스로 시험 보고, 맞춤 연습을 요청하며, AI 없이 논리 전개를 재구성해 보세요.", "M4"),
    S("Desirable difficulties and interleaving can strengthen learning even when they feel harder in the moment.", "바람직한 어려움과 교차 학습은 순간적으로 더 어렵게 느껴져도 학습을 강화할 수 있습니다.", "M4"),
    S("Use AI as supplementary support while retaining ownership of your understanding and final work.", "이해와 최종 결과물에 대한 주인의식을 유지하면서 AI를 보조적 지원으로 사용하세요.", "M4"),
    S("AI complementary skills help people judge, contextualize, and improve what AI produces.", "AI 보완 역량은 사람이 AI 결과물을 판단하고 맥락화하며 개선하는 데 도움이 됩니다.", "M5"),
    S("Fairness and consistent criteria require human attention to unusual cases and incomplete information.", "공정성과 일관된 기준은 특수한 사례와 불완전한 정보에 대한 인간의 주의를 필요로 합니다.", "M5")
  ];

  var categories = [
    { id: "M1", en: "How AI works", ko: "AI 작동 원리" },
    { id: "M2", en: "Generative AI & prompting", ko: "생성형 AI·프롬프트" },
    { id: "M3", en: "Responsible use & integrity", ko: "책임 있는 사용·진실성" },
    { id: "M4", en: "Learning with AI", ko: "AI와 함께 학습하기" },
    { id: "M5", en: "Work, judgment & skills", ko: "업무·판단·역량" },
    { id: "M6", en: "Academic English", ko: "시험 속 학술 영어" }
  ];

  var contrasts = [
    { title: "model ≠ labeled data ≠ layer", ko: "model은 학습 후 새 입력을 분류하는 내부 기반, labeled data는 정답이 붙은 학습 사례, layer는 모델 안의 처리 구성 요소입니다.", en: "A model is the learned basis for new predictions, labeled data are training examples, and a layer is a processing component." },
    { title: "generative AI ≠ prompt ≠ output", ko: "generative AI는 새 콘텐츠를 만드는 시스템, prompt는 사용자 지시, output은 그 결과물입니다.", en: "Generative AI is the content-producing system, a prompt is the user's instruction, and the output is the result." },
    { title: "professional integrity ≠ human oversight", ko: "professional integrity는 공정한 전문 기준을 지키는 태도, meaningful human oversight는 인간이 실제로 검토하고 최종 결정하는 구조입니다.", en: "Professional integrity concerns fair professional standards; meaningful human oversight concerns genuine human review and final decision-making." },
    { title: "illusion of fluency ≠ cognitive debt", ko: "유창성의 착각은 현재 이해도를 과대평가하는 착각, 인지 부채는 사고를 반복적으로 맡긴 뒤 생기는 장기적 능력 저하입니다.", en: "Illusion of fluency is overestimating current understanding; cognitive debt is the longer-term cost of repeatedly outsourcing thinking." },
    { title: "source attribution ≠ AI-use disclosure", ko: "source attribution은 자료의 원출처, AI-use disclosure는 AI를 어디에 어떻게 사용했는지 밝히는 것입니다. 서로 대체할 수 없습니다.", en: "Source attribution identifies original sources; AI-use disclosure explains AI assistance. One does not replace the other." },
    { title: "anonymized ≠ names removed", ko: "이름만 지워도 조직, 날짜, 학번, 특이사항으로 개인을 알아볼 수 있습니다. 직접·간접 식별 정보를 함께 확인해야 합니다.", en: "Removing names may leave indirect identifiers. Check details that could identify someone directly or indirectly." },
    { title: "fluent / coherent / persuasive ≠ accurate", ko: "문장이 자연스럽고 논리적으로 보이고 설득력 있어도 사실과 다를 수 있습니다. 정확성은 별도로 검증합니다.", en: "Smooth, logical, persuasive language is not proof of factual accuracy. Verify the content separately." }
  ];

  var quiz = [
    { q: { ko: "학습 데이터에서 배웠고, 새로운 입력을 분류할 때 사용하는 내부 기반은?", en: "What is learned from training data and then used to classify new inputs?" }, options: ["labeled data", "layer", "model", "raw data"], answer: 2, why: { ko: "model이 정답입니다. labeled data는 학습 사례, layer는 처리 구성 요소입니다.", en: "The model is learned; labeled data are examples and a layer is a component." } },
    { q: { ko: "AI가 실제와 다른 출판 연도나 출처를 자신 있게 만드는 현상은?", en: "What is it called when AI confidently invents publication years or sources?" }, options: ["interleaving", "hallucination", "authorization", "automation"], answer: 1, why: { ko: "hallucination은 사실이 아니거나 근거 없는 내용을 그럴듯하게 생성하는 현상입니다.", en: "A hallucination is inaccurate or unsupported content presented plausibly." } },
    { q: { ko: "AI 요약을 받은 뒤 정확성을 확인하는 가장 좋은 방법은?", en: "What is the best way to check an AI summary for accuracy?" }, options: ["Check whether it sounds academic", "Count its paragraphs", "Compare it with the original text", "Accept a concise answer"], answer: 2, why: { ko: "문체가 아니라 원문이나 신뢰할 수 있는 출처와 비교해야 합니다.", en: "Verify content against the original or a reliable source, not its tone." } },
    { q: { ko: "공정하고 일관된 전문 기준으로 채점 결정을 내리는 태도는?", en: "What describes making grading decisions according to fair, consistent professional standards?" }, options: ["professional integrity", "illusion of fluency", "cognitive offloading", "time frame"], answer: 0, why: { ko: "professional integrity입니다. 인간 감독 구조와도 구분해 기억하세요.", en: "This is professional integrity, distinct from the structure of human oversight." } },
    { q: { ko: "잘 쓰인 AI 글 때문에 자신의 이해도를 과대평가하는 것은?", en: "What is overestimating your understanding because an AI answer is polished?" }, options: ["skill decay", "AI-use disclosure", "illusion of fluency", "preliminary screening"], answer: 2, why: { ko: "illusion of fluency는 현재 학습 상태에 대한 착각입니다.", en: "The illusion of fluency is a mistaken judgment about current learning." } },
    { q: { ko: "반성 없이 생각을 AI에 반복적으로 맡긴 뒤 생기는 장기적 능력 저하는?", en: "What is the long-term cost of repeatedly outsourcing thinking without reflection?" }, options: ["cognitive debt", "desired output format", "equal treatment", "source attribution"], answer: 0, why: { ko: "cognitive debt입니다. 일시적 착각인 illusion of fluency와 구분하세요.", en: "Cognitive debt is longer-term; the illusion of fluency is an immediate mistaken judgment." } },
    { q: { ko: "AI에게 작업을 요청하기 위해 사용자가 입력하는 지시는?", en: "What is the user's instruction given to an AI tool?" }, options: ["AI-generated content", "prediction", "model", "prompt"], answer: 3, why: { ko: "prompt는 요청이고 AI-generated content는 응답 결과입니다.", en: "The prompt is the request; AI-generated content is the response." } },
    { q: { ko: "고위험 채용에서 인간이 실질적으로 검토하고 최종 결정하는 것은?", en: "What is genuine human review and final decision-making in high-stakes recruitment?" }, options: ["meaningful human oversight", "metacognitive laziness", "copyright protection", "interleaving"], answer: 0, why: { ko: "meaningful human oversight는 형식적 확인이 아니라 실제 판단과 개입 가능성을 뜻합니다.", en: "Meaningful oversight requires substantive review and the ability to affect the final decision." } },
    { q: { ko: "AI가 발전할수록 함께 가치가 커지는 비판적 판단·창의성·전문지식은?", en: "What are critical judgment, creativity, and domain expertise that grow more valuable with AI?" }, options: ["routine tasks", "AI complementary skills", "irregular submissions", "bibliographies"], answer: 1, why: { ko: "AI complementary skills는 AI를 보완하는 인간 역량입니다.", en: "AI complementary skills complement, rather than merely compete with, AI." } },
    { q: { ko: "수업에서 요구할 때 AI 도움을 어디에 어떻게 사용했는지 밝히는 것은?", en: "What is stating where and how AI assistance was used when required?" }, options: ["AI-use disclosure", "automation", "active recall", "jagged technological frontier"], answer: 0, why: { ko: "AI-use disclosure이며, source attribution이나 좋은 의도로 대신할 수 없습니다.", en: "AI-use disclosure is distinct from source attribution and good intentions." } }
  ];

  var data = { terms: terms, sentences: sentences, categories: categories, contrasts: contrasts, quiz: quiz };
  window.__AI_VOCAB_DATA__ = data;

  /* One course definition is shared by the main app and the glossary. */
  function installCourse() {
    var curriculum = window.CURRICULUM || [];
    var exists = curriculum.some(function (sem) {
      return (sem.courses || []).some(function (c) { return c.id === COURSE; });
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
      terms: terms.length,
      gains: {
        ko: ["AI와 머신러닝의 기본 개념을 정확한 영어로 구분", "프롬프트 작성과 AI 출력 검증에 필요한 표현 학습", "개인정보 보호·출처 표시·AI 사용 공개의 차이 이해", "유창성의 착각·인지 부채 등 AI 시대 학습 전략 익히기"],
        en: ["Distinguish core AI and machine-learning concepts in English", "Learn expressions for prompting and output verification", "Understand privacy, source attribution, and AI-use disclosure", "Review the illusion of fluency, cognitive debt, and effective learning strategies"]
      },
      about: {
        ko: "제공해 주신 40문항 기말고사 복습 자료를 바탕으로 만든 단어 우선 학습실입니다. 단순 번역보다 시험 문맥에서 헷갈리는 개념을 구분하는 데 초점을 맞췄습니다. 공식 강의 자료와 수업 지침이 최종 기준입니다.",
        en: "A vocabulary-first study room based on your 40-question final-test review. It emphasizes contextual distinctions rather than translation alone. Official course materials and guidelines remain the final authority."
      },
      grading: {
        ko: "학습 가이드의 10문제 확인 퀴즈와 공통 용어집의 플래시카드를 사용합니다. 퀴즈 점수는 연습용이며 다른 과목의 문제은행·모의고사와 섞이지 않습니다.",
        en: "Use the 10-question check and shared flashcards. Quiz scores are for practice only and are isolated from other courses' question banks and mocks."
      },
      open: true,
      sections: [],
      items: [
        { id: "overview", label: { ko: "단어 학습 가이드", en: "Vocabulary Guide" } },
        { id: "glossary", label: { ko: "핵심 단어 80개 · 플래시카드", en: "80 Terms · Flashcards" }, href: "glossary.html" }
      ]
    };
    var sem = curriculum.filter(function (s) { return s.id === "s1"; })[0] || curriculum[0];
    var at = (sem.courses || []).findIndex(function (c) { return c.id === "hungarian"; });
    if (at < 0) at = sem.courses.length;
    sem.courses.splice(at, 0, course);
  }
  installCourse();

  /* Add the AI vocabulary to either the static glossary or freshly fetched remote content.
     Filtering first makes repeated sync/refresh calls idempotent and prevents duplicates. */
  window.__mergeAIGlossary = function (base) {
    base = base || {};
    var mergedTerms = (base.terms || []).filter(function (w) { return w.course !== COURSE; }).concat(terms);
    var mergedSentences = (base.sentences || []).filter(function (s) { return s.course !== COURSE; }).concat(sentences);
    var meta = Object.assign({}, base.meta || {});
    meta.totalTerms = mergedTerms.length;
    return { terms: mergedTerms, sentences: mergedSentences, meta: meta };
  };
  window.__GLOSSARY__ = window.__mergeAIGlossary(window.__GLOSSARY__);
})();
