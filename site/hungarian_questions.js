/* ==========================================================================
   hungarian_questions.js — 헝가리어(Hungarian Language) 기초 문제은행 & 모의고사
   ELTE A1 레벨 기초 헝가리어 강좌 기준:
   - 알파벳 및 고유 발음 규칙 (sz, s, cs, gy, ty, ny, zs 등)
   - 기본 인사말, 안부, 감사, 사과
   - 숫자 (1~100), 요일, 시간
   - 기초 문법 (모음 조화, 장소 격접미사, 복수형 -k, van/nincs)
   ========================================================================== */
window.__HUN_QUESTION_DATA__ = {
  meta: {
    course: "hungarian",
    exam_questions: 10,
    exam_minutes: 20,
    exam_pass: 6
  },
  questions: [
    {
      id: "HUN-01",
      course: "hungarian",
      scope: "basics",
      lecture: "Lesson 1: Alphabet & Pronunciation",
      part: "A",
      group: "hun-basics",
      tier: "A",
      topic: "Pronunciation of SZ and S",
      prompt: "헝가리어 철자법에서 'sz'와 's'의 발음 규칙으로 올바른 것은 무엇입니까?\n(What is the correct pronunciation rule for 'sz' and 's' in Hungarian?)",
      options: [
        "'sz'는 영어의 [s] 발음이고, 's'는 영어의 [sh] /ʃ/ 발음이다.",
        "'sz'는 영어의 [z] 발음이고, 's'는 영어의 [s] 발음이다.",
        "'sz'는 영어의 [sh] /ʃ/ 발음이고, 's'는 영어의 [s] 발음이다.",
        "'sz'와 's'는 완전히 같은 [s] 발음이다."
      ],
      correct: ["A"],
      explanation: "헝가리어에서 단독 's'는 영어의 'sh'[ʃ] 소리가 나며(예: sonka = 숀카), 영어의 's'[s] 소리를 내기 위해서는 'sz'를 씁니다(예: szia = 씨아)."
    },
    {
      id: "HUN-02",
      course: "hungarian",
      scope: "basics",
      lecture: "Lesson 1: Alphabet & Pronunciation",
      part: "A",
      group: "hun-basics",
      tier: "A",
      topic: "Consonant digraph CS",
      prompt: "헝가리어 복합 자음 'cs'(예: család, csókolom)는 어떤 발음이 납니까?\n(How is the Hungarian consonant digraph 'cs' pronounced?)",
      options: [
        "영어의 'ch' [tʃ] 발음 (예: chocolate의 ch)",
        "영어의 'k' [k] 발음",
        "영어의 'ts' [ts] 발음",
        "영어의 's' [s] 발음"
      ],
      correct: ["A"],
      explanation: "'cs'는 한국어 'ㅊ' 또는 영어의 'ch'[tʃ] 발음입니다. 참고로 'ts' 소리는 'c'로 표기합니다."
    },
    {
      id: "HUN-03",
      course: "hungarian",
      scope: "basics",
      lecture: "Lesson 1: Alphabet & Pronunciation",
      part: "A",
      group: "hun-basics",
      tier: "A",
      topic: "Vowel length (a vs á, e vs é)",
      prompt: "헝가리어 모음에서 악센트 부호(accent mark: á, é 등)가 붙은 모음에 대한 설명으로 올바른 것은 무엇입니까?\n(Which statement about accented vowels like á, é is correct?)",
      options: [
        "소리의 길이(장모음)뿐만 아니라 입술 모양이나 혀의 위치(음가)도 함께 달라진다.",
        "음가는 전혀 변하지 않고 오직 강세(accent)만 세게 준다.",
        "영어처럼 묵음으로 처리된다.",
        "오직 단어의 맨 끝에서만 발음된다."
      ],
      correct: ["A"],
      explanation: "헝가리어의 악센트(양음 부호)는 단순한 강세가 아니라 장모음을 나타내며, 특히 'a[ɒ](둥근 아/오 중간)'와 'á[aː](밝고 긴 아)', 'e[ɛ](열린 에)'와 'é[eː](긴 에)'는 음가 자체가 다릅니다."
    },
    {
      id: "HUN-04",
      course: "hungarian",
      scope: "basics",
      lecture: "Lesson 1: Alphabet & Pronunciation",
      part: "A",
      group: "hun-basics",
      tier: "B",
      topic: "Consonant digraph GY",
      prompt: "헝가리어 'gy'(예: Magyar, gyerek)의 발음에 가장 가까운 것은 무엇입니까?\n(Which is closest to the pronunciation of 'gy' in Hungarian?)",
      options: [
        "부드러운 구개음 [ɟ] (한국어 '디/지'의 중간 느낌, 영어 duty의 d 발음)",
        "영어의 강한 'g' [ɡ] 발음",
        "영어의 'y' [j] 발음",
        "영어의 'h' [h] 발음"
      ],
      correct: ["A"],
      explanation: "'gy'는 유성 경구개 파열음 [ɟ]으로, 혀의 중간을 입천장에 대며 내는 부드러운 소리입니다. Magyar는 '머져르/머뎌르'처럼 소리 납니다."
    },
    {
      id: "HUN-05",
      course: "hungarian",
      scope: "conversation",
      lecture: "Lesson 2: Greetings & Politeness",
      part: "A",
      group: "hun-convo",
      tier: "A",
      topic: "Informal Greetings",
      prompt: "친구 한 명을 만났을 때 편하게 '안녕!'이라고 인사하는 헝가리어 표현은 무엇입니까?\n(What is the informal singular greeting for 'Hi/Bye' in Hungarian?)",
      options: [
        "Szia!",
        "Sziasztok!",
        "Jó napot kívánok!",
        "Viszontlátásra!"
      ],
      correct: ["A"],
      explanation: "한 명에게 친근하게 인사할 때는 'Szia!'를 씁니다. 만약 여러 명(친구들)에게 인사할 때는 'Sziasztok!'을 사용합니다."
    },
    {
      id: "HUN-06",
      course: "hungarian",
      scope: "conversation",
      lecture: "Lesson 2: Greetings & Politeness",
      part: "A",
      group: "hun-convo",
      tier: "A",
      topic: "Formal Greetings",
      prompt: "낮 시간대에 교수님이나 상점 주인 등에게 정중하게 건네는 '안녕하세요(좋은 하루 되세요)' 인사는 무엇입니까?\n(What is the polite/formal daytime greeting in Hungarian?)",
      options: [
        "Jó napot kívánok!",
        "Jó reggelt kívánok!",
        "Jó estét kívánok!",
        "Jó éjszakát kívánok!"
      ],
      correct: ["A"],
      explanation: "'Jó napot kívánok!'은 가장 널리 쓰이는 정중한 낮 인사입니다. 아침은 'Jó reggelt', 저녁은 'Jó estét', 밤/취침 전은 'Jó éjszakát'입니다."
    },
    {
      id: "HUN-07",
      course: "hungarian",
      scope: "conversation",
      lecture: "Lesson 2: Greetings & Politeness",
      part: "A",
      group: "hun-convo",
      tier: "A",
      topic: "Asking How Someone Is",
      prompt: "'Hogy vagy?' (어떻게 지내?)라는 질문에 '감사합니다, 잘 지내요.'라고 답할 때 가장 적절한 표현은 무엇입니까?\n(How do you answer 'Thank you, I am fine' to 'Hogy vagy?')",
      options: [
        "Köszönöm, jól.",
        "Kérem szépen.",
        "Bocsánat.",
        "Nem értem."
      ],
      correct: ["A"],
      explanation: "'Hogy vagy?'(너 어떻게 지내?)에 대한 답변으로 'Köszönöm, jól'(고마워, 잘 지내) 또는 'Megvagyok'(그럭저럭 지내)을 사용합니다."
    },
    {
      id: "HUN-08",
      course: "hungarian",
      scope: "conversation",
      lecture: "Lesson 2: Greetings & Politeness",
      part: "A",
      group: "hun-convo",
      tier: "A",
      topic: "Thank You and You're Welcome",
      prompt: "상대방이 'Köszönöm szépen!'(정말 감사합니다)라고 했을 때, '천만에요(별말씀을요)'로 답하는 표현은 무엇입니까?\n(How do you reply 'You are welcome' in Hungarian?)",
      options: [
        "Szívesen!",
        "Tessék!",
        "Bocsánat!",
        "Viszlát!"
      ],
      correct: ["A"],
      explanation: "'Köszönöm'에 대한 화답으로 'Szívesen!' (기꺼이요/천만에요) 또는 'Nincs mit' (별것 아닙니다)를 사용합니다."
    },
    {
      id: "HUN-09",
      course: "hungarian",
      scope: "conversation",
      lecture: "Lesson 2: Greetings & Politeness",
      part: "A",
      group: "hun-convo",
      tier: "B",
      topic: "Saying Goodbye Formally",
      prompt: "정중하게 '안녕히 가세요 / 안녕히 계세요 (다시 뵐 때까지)'라고 작별 인사하는 표현은 무엇입니까?\n(What is the formal farewell expression in Hungarian?)",
      options: [
        "Viszontlátásra!",
        "Szia!",
        "Csá!",
        "Helló!"
      ],
      correct: ["A"],
      explanation: "'Viszontlátásra!'는 격식 있는 작별 인사이며, 일상에서는 줄여서 'Viszlát!'이라고도 자주 말합니다."
    },
    {
      id: "HUN-10",
      course: "hungarian",
      scope: "conversation",
      lecture: "Lesson 3: Introduction & Identity",
      part: "A",
      group: "hun-convo",
      tier: "A",
      topic: "Self Introduction",
      prompt: "'저는 정찬인입니다.' 또는 '제 이름은 찬인입니다.'를 헝가리어로 표현한 것으로 올바른 것을 모두 고르십시오.\n(Which are correct ways to introduce your name in Hungarian?)",
      options: [
        "Jung Chanin vagyok.",
        "A nevem Chanin.",
        "Én lakom Chanin.",
        "Chanin beszél."
      ],
      correct: ["A", "B"],
      explanation: "자기 이름을 말할 때는 '[이름] vagyok' (~입니다) 또는 'A nevem [이름]' (제 이름은 ~입니다)를 씁니다. 헝가리어는 한국어처럼 성을 먼저, 이름을 나중에 쓰는 문화입니다."
    },
    {
      id: "HUN-11",
      course: "hungarian",
      scope: "basics",
      lecture: "Lesson 4: Numbers (1-10)",
      part: "A",
      group: "hun-basics",
      tier: "A",
      topic: "Numbers 1 to 5",
      prompt: "헝가리어 숫자 1, 2, 3, 4, 5의 순서로 올바른 것은 무엇입니까?\n(What is the correct order of numbers 1 to 5 in Hungarian?)",
      options: [
        "egy, kettő (két), három, négy, öt",
        "egy, három, kettő, öt, négy",
        "öt, négy, három, kettő, egy",
        "tíz, kilenc, nyolc, hét, hat"
      ],
      correct: ["A"],
      explanation: "1=egy, 2=kettő (명사 앞에서는 két), 3=három, 4=négy, 5=öt 입니다."
    },
    {
      id: "HUN-12",
      course: "hungarian",
      scope: "basics",
      lecture: "Lesson 4: Numbers (1-10)",
      part: "A",
      group: "hun-basics",
      tier: "A",
      topic: "Numbers 6 to 10",
      prompt: "헝가리어 숫자 6, 7, 8, 9, 10의 순서로 올바른 것은 무엇입니까?\n(What is the correct order of numbers 6 to 10 in Hungarian?)",
      options: [
        "hat, hét, nyolc, kilenc, tíz",
        "hét, hat, kilenc, nyolc, tíz",
        "hat, nyolc, hét, kilenc, tíz",
        "öt, hat, hét, nyolc, kilenc"
      ],
      correct: ["A"],
      explanation: "6=hat, 7=hét (주일/한 주의 뜻도 있음), 8=nyolc, 9=kilenc, 10=tíz 입니다."
    },
    {
      id: "HUN-13",
      course: "hungarian",
      scope: "basics",
      lecture: "Lesson 4: Numbers (Tens)",
      part: "A",
      group: "hun-basics",
      tier: "B",
      topic: "Tens (20, 30, 40)",
      prompt: "헝가리어로 20과 30을 바르게 짝지은 것은 무엇입니까?\n(What are 20 and 30 in Hungarian?)",
      options: [
        "20 = húsz, 30 = harminc",
        "20 = tizenkettő, 30 = tizenhárom",
        "20 = harminc, 30 = húsz",
        "20 = kettőtíz, 30 = háromtíz"
      ],
      correct: ["A"],
      explanation: "20은 húsz, 30은 harminc, 40은 negyven, 50은 ötven 입니다."
    },
    {
      id: "HUN-14",
      course: "hungarian",
      scope: "grammar",
      lecture: "Lesson 5: Vowel Harmony",
      part: "A",
      group: "hun-grammar",
      tier: "A",
      topic: "Concept of Vowel Harmony",
      prompt: "헝가리어의 핵심 문법 규칙인 **모음 조화(Vowel Harmony)**에 대한 설명으로 올바른 것은 무엇입니까?\n(What is the principle of Vowel Harmony in Hungarian?)",
      options: [
        "단어 어간의 모음 성질(후설 모음 vs 전설 모음)에 따라 결합하는 접미사의 모음 형태가 결정된다.",
        "모든 모음은 항상 알파벳 순서대로만 발음해야 한다.",
        "단어 내의 모음 개수가 항상 짝수여야 한다.",
        "외래어에만 적용되고 헝가리어 고유어에는 적용되지 않는다."
      ],
      correct: ["A"],
      explanation: "헝가리어는 교착어로, 단어 어간의 모음이 후설 모음(a, á, o, ó, u, ú)인지 전설 모음(e, é, i, í, ö, ő, ü, ű)인지에 따라 접미사(예: -ban/-ben, -nak/-nek)의 형태가 조화를 이룹니다."
    },
    {
      id: "HUN-15",
      course: "hungarian",
      scope: "grammar",
      lecture: "Lesson 5: Vowel Harmony",
      part: "A",
      group: "hun-grammar",
      tier: "A",
      topic: "Back vs Front Vowels",
      prompt: "다음 중 헝가리어의 **후설 모음(Back vowels / mély magánhangzók)**으로만 묶인 것은 무엇입니까?\n(Which set contains ONLY back vowels?)",
      options: [
        "a, á, o, ó, u, ú",
        "e, é, ö, ő, ü, ű",
        "i, í, e, é",
        "ö, ő, o, ó"
      ],
      correct: ["A"],
      explanation: "후설 모음(어두운 모음): a, á, o, ó, u, ú. 전설 모음(밝은 모음): e, é, i, í, ö, ő, ü, ű 입니다."
    },
    {
      id: "HUN-16",
      course: "hungarian",
      scope: "grammar",
      lecture: "Lesson 6: Location Cases",
      part: "A",
      group: "hun-grammar",
      tier: "A",
      topic: "Inessive Suffix (-ban / -ben)",
      prompt: "'~안에(in)'를 뜻하는 장소 격접미사 -ban / -ben 의 결합으로 올바른 것은 무엇입니까?\n(Which is the correct combination of the inessive suffix -ban / -ben?)",
      options: [
        "ház (집) → házban, kert (정원) → kertben",
        "ház (집) → házben, kert (정원) → kertban",
        "ház (집) → házat, kert (정원) → kertet",
        "ház (집) → házon, kert (정원) → kerten"
      ],
      correct: ["A"],
      explanation: "ház의 모음 'á'는 후설 모음이므로 -ban이 붙어 'házban'(집 안에서), kert의 모음 'e'는 전설 모음이므로 -ben이 붙어 'kertben'(정원 안에서)이 됩니다."
    },
    {
      id: "HUN-17",
      course: "hungarian",
      scope: "grammar",
      lecture: "Lesson 7: Plurals",
      part: "A",
      group: "hun-grammar",
      tier: "A",
      topic: "Plural Suffix -k",
      prompt: "헝가리어에서 명사의 **복수형(Plural)**을 만들 때 붙이는 대표적인 접미사는 무엇입니까?\n(What suffix marks the plural form of nouns in Hungarian?)",
      options: [
        "-k (연결 모음과 함께 -ok, -ek, -ök)",
        "-s",
        "-t",
        "-ban"
      ],
      correct: ["A"],
      explanation: "헝가리어 복수형은 기본적으로 '-k'를 붙입니다. 자음으로 끝나는 단어에는 모음 조화에 따라 연결 모음이 붙어 -ok, -ek, -ök (또는 -ak) 형태가 됩니다 (예: könyv → könyvek)."
    },
    {
      id: "HUN-18",
      course: "hungarian",
      scope: "grammar",
      lecture: "Lesson 8: Verbs van & nincs",
      part: "A",
      group: "hun-grammar",
      tier: "A",
      topic: "Existence: van vs nincs",
      prompt: "헝가리어에서 '있다(존재한다)'와 '없다'를 뜻하는 3인칭 단수 형태의 짝으로 올바른 것은 무엇입니까?\n(What are the 3rd person singular forms of 'there is' and 'there is not'?)",
      options: [
        "있다 = van, 없다 = nincs (nincsen)",
        "있다 = nem van, 없다 = van",
        "있다 = igen, 없다 = nem",
        "있다 = vagyok, 없다 = nem vagyok"
      ],
      correct: ["A"],
      explanation: "'있다'는 'van'이며, '없다'는 'nem van'이라고 쓰지 않고 전용 부정 동사 'nincs'(또는 'nincsen')를 사용합니다. 복수형은 vannak / nincsenek 입니다."
    },
    {
      id: "HUN-19",
      course: "hungarian",
      scope: "grammar",
      lecture: "Lesson 9: Personal Pronouns",
      part: "A",
      group: "hun-grammar",
      tier: "A",
      topic: "Personal Pronouns (I, You, He/She)",
      prompt: "헝가리어 인칭대명사 '나(I)', '너(You - informal)', '그/그녀(He/She)'의 바른 짝은 무엇입니까?\n(What are the personal pronouns for I, You, He/She?)",
      options: [
        "én (나), te (너), ő (그/그녀)",
        "te (나), én (너), mi (그/그녀)",
        "én (나), mi (너), ti (그/그녀)",
        "ő (나), te (너), én (그/그녀)"
      ],
      correct: ["A"],
      explanation: "인칭대명사는 én (나), te (너), ő (그/그녀 - 헝가리어는 성별 구분이 없음), mi (우리), ti (너희들), ők (그들) 입니다."
    },
    {
      id: "HUN-20",
      course: "hungarian",
      scope: "conversation",
      lecture: "Lesson 10: Essential Phrases",
      part: "A",
      group: "hun-convo",
      tier: "A",
      topic: "Useful Everyday Expressions",
      prompt: "'실례합니다 / 죄송합니다'와 '이해하지 못했습니다'를 나타내는 일상 헝가리어 표현으로 바르게 짝지은 것은 무엇입니까?\n(What are the Hungarian expressions for 'Excuse me/Sorry' and 'I do not understand'?)",
      options: [
        "실례합니다 = Elnézést / Bocsánat, 이해 못했어요 = Nem értem",
        "실례합니다 = Szívesen, 이해 못했어요 = Értem",
        "실례합니다 = Kérem, 이해 못했어요 = Nem tudom",
        "실례합니다 = Tessék, 이해 못했어요 = Sajnálom"
      ],
      correct: ["A"],
      explanation: "'Elnézést'(실례합니다) 또는 'Bocsánat'(죄송합니다), 그리고 상대의 말을 알아듣지 못했을 때 'Nem értem'(이해하지 못했습니다)을 사용합니다."
    }
  ]
};

window.__HUN_MOCK_DATA__ = {
  meta: {
    primary: "헝가리어 A1 기초 모의고사",
    numpy_per_mock: 0
  },
  mocks: [
    {
      id: "hun-mock-01",
      scope: "all",
      label: "헝가리어 A1 기초 모의고사 1회 (10문항)",
      label_en: "Hungarian A1 Practice Exam 1 (10 questions)",
      questions: ["HUN-01", "HUN-02", "HUN-05", "HUN-07", "HUN-09", "HUN-11", "HUN-14", "HUN-16", "HUN-18", "HUN-20"],
      minutes: 20,
      pass: 6
    },
    {
      id: "hun-mock-02",
      scope: "all",
      label: "헝가리어 A1 기초 모의고사 2회 (10문항)",
      label_en: "Hungarian A1 Practice Exam 2 (10 questions)",
      questions: ["HUN-03", "HUN-04", "HUN-06", "HUN-08", "HUN-10", "HUN-12", "HUN-13", "HUN-15", "HUN-17", "HUN-19"],
      minutes: 20,
      pass: 6
    }
  ]
};
