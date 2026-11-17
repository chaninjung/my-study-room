/* ==========================================================================
   hungarian_notes.js — 헝가리어(Hungarian Language) 핵심 강의록 & 표현집
   구성:
   1. 헝가리안 ABC 읽는 법 (Alphabet & Pronunciation) + Forvo / bab.la 발음·예문 링크
   2. 인삿말 & 일상 표현 (Greetings & Daily Expressions)
   3. 인칭별 존재 동사 Lenni (én vagyok, te vagy, ő [생략]...)
   4. 자기소개 (Self-Introduction) & 격식(Formal) vs 비격식(Informal)
   각 항목: 1. 헝가리어 / 2. 한국어 / 3. 영어
   ========================================================================== */

window.__HUN_NOTES_DATA__ = [
  {
    chapterId: "alphabet",
    chapterNum: 1,
    title: { ko: "1. 헝가리안 ABC 읽는 법", en: "1. Hungarian Alphabet & Pronunciation" },
    desc: {
      ko: "헝가리어는 44개 문자로 구성되며, 철자와 발음이 1:1로 정확하게 대응합니다. 장모음과 독특한 자음 복합자를 익히면 어떤 단어든 바로 읽을 수 있습니다.",
      en: "The Hungarian alphabet consists of 44 letters with nearly 1:1 spelling-to-sound correspondence."
    },
    items: [
      {
        hu: "A, a",
        ko: "어/아 중간 소리 [ɒ] (입을 둥글게 모으고 짧게 '어'와 '아' 중간)",
        en: "Short, open back rounded vowel [ɒ] (between short 'o' and 'ah')",
        tip: "alma [얼머] = 사과 (apple)",
        word: "alma"
      },
      {
        hu: "Á, á",
        ko: "길고 밝은 아 [aː] (입을 크게 벌리고 길게 '아-')",
        en: "Long, open unrounded vowel [aː] (like 'father')",
        tip: "ház [하-즈] = 집 (house)",
        word: "haz"
      },
      {
        hu: "E, e",
        ko: "열린 짧은 에 [ɛ] (입을 살짝 크게 벌리고 짧게 '에')",
        en: "Short open 'e' [ɛ] (like in 'bed')",
        tip: "egyetem [에게템] = 대학교 (university)",
        word: "egyetem"
      },
      {
        hu: "É, é ★소리 주의",
        ko: "긴 닫힌 에 [eː] (혀를 높이고 입술을 양옆으로 바짝 당겨서, 한국인 귀에는 '이'와 '에'의 중간 또는 '이-'에 아주 가깝게 들림!)",
        en: "Long closed 'e' [eː] (close-mid front, sounds very close to 'ee' / [i] to Korean ears)",
        tip: "한국인 귀에는 '이'로 들리기 쉬움! (예: én [이-ㄴ/에-ㄴ] = 나, négy [니-기/네-기] = 4, szép [씨-프/세-프] = 예쁜)",
        word: "en"
      },
      {
        hu: "I, i / Í, í",
        ko: "i = 짧은 이 [i], í = 긴 이- [iː]",
        en: "Short [i] vs Long [iː]",
        tip: "itt [잍] = 여기에 (here) / ír [이-르] = 쓰다 (write)",
        word: "itt"
      },
      {
        hu: "O, o / Ó, ó",
        ko: "o = 짧은 오 [o], ó = 긴 오- [oː]",
        en: "Short [o] vs Long [oː]",
        tip: "orvos [오르보쉬] = 의사 (doctor) / óra [오-러] = 시계/시간 (clock)",
        word: "ora"
      },
      {
        hu: "Ö, ö / Ő, ő",
        ko: "ö = 짧은 외 [ø], ő = 긴 외- [øː] (독일어 ö와 동일)",
        en: "Short [ø] vs Long [øː] (front rounded, like German ö)",
        tip: "öt [옽] = 숫자 5 (five) / ő [외-] = 그/그녀 (he/she)",
        word: "ot"
      },
      {
        hu: "U, u / Ú, ú",
        ko: "u = 짧은 우 [u], ú = 긴 우- [uː]",
        en: "Short [u] vs Long [uː]",
        tip: "utca [욭처] = 거리 (street) / új [우-이] = 새로운 (new)",
        word: "utca"
      },
      {
        hu: "Ü, ü / Ű, ű",
        ko: "ü = 짧은 위 [y], ű = 긴 위- [yː] (독일어 ü와 동일)",
        en: "Short [y] vs Long [yː] (front rounded, like German ü)",
        tip: "ül [윌] = 앉다 (sit) / űr [위-르] = 우주 (space)",
        word: "ul"
      },
      {
        hu: "C, c",
        ko: "츠 [ts] (영어 'cats'의 ts 소리)",
        en: "Voiceless alveolar affricate [ts] (like 'ts' in 'cats')",
        tip: "cukor [추코르] = 설탕 (sugar)",
        word: "cukor"
      },
      {
        hu: "Cs, cs",
        ko: "치 [tʃ] (영어 'ch' 소리)",
        en: "Voiceless post-alveolar affricate [tʃ] (like 'ch' in 'chair')",
        tip: "család [철라-드] = 가족 (family)",
        word: "csalad"
      },
      {
        hu: "S, s ★주의",
        ko: "쉬 [ʃ] (영어의 'sh' 소리! 영어의 's'가 아님)",
        en: "Voiceless postalveolar fricative [ʃ] (like 'sh' in 'shoe')",
        tip: "sonka [숀커] = 햄 (ham), sör [쇠르] = 맥주 (beer)",
        word: "sonka"
      },
      {
        hu: "Sz, sz ★주의",
        ko: "스 [s] (영어의 's' 소리는 헝가리어에서 'sz'로 표기!)",
        en: "Voiceless alveolar fricative [s] (like 's' in 'sun')",
        tip: "szia [씨아] = 안녕 (hi), szép [세-프] = 아름다운 (beautiful)",
        word: "szia"
      },
      {
        hu: "Z, z",
        ko: "즈 [z] (유성음 z 소리)",
        en: "Voiced alveolar fricative [z] (like 'z' in 'zoo')",
        tip: "zene [제네] = 음악 (music)",
        word: "zene"
      },
      {
        hu: "Zs, zs",
        ko: "쥬/지 [ʒ] (부드러운 유성음 sh, 프랑스어 'je' 소리)",
        en: "Voiced postalveolar fricative [ʒ] (like 's' in 'pleasure')",
        tip: "zseb [졥] = 주머니 (pocket)",
        word: "zseb"
      },
      {
        hu: "Gy, gy",
        ko: "부드러운 구개음 [ɟ] (한국어 '디'와 '지/기'의 중간 느낌, 연음 시 '게/기' 소리로 자주 들림)",
        en: "Voiced palatal plosive [ɟ] (soft 'd/gy/g')",
        tip: "magyar [머겨르/머져르] = 헝가리의, gyerek [제레크/데레크] = 아이, négyezer [니-게-제르] = 4000",
        word: "gyerek"
      },
      {
        hu: "Ny, ny",
        ko: "니/녜 [ɲ] (스페인어 ñ, 프랑스어/이탈리아어 gn 소리)",
        en: "Palatal nasal [ɲ] (like 'ny' in 'canyon')",
        tip: "nyelv [녤브] = 혀/언어 (language)",
        word: "nyelv"
      },
      {
        hu: "Ty, ty",
        ko: "부드러운 무성 구개음 [c] (한국어 '티'와 '치'의 중간)",
        en: "Voiceless palatal plosive [c] (soft 't/ty')",
        tip: "kutya [쿠처] = 개/강아지 (dog)",
        word: "kutya"
      },
      {
        hu: "J, j / Ly, ly",
        ko: "이/예 [j] (둘 다 동일하게 영어의 'y' 소리)",
        en: "Palatal approximant [j] (both sound like 'y' in 'yes')",
        tip: "jó [요-] = 좋은 (good), hely [헤이] = 장소 (place)",
        word: "jo"
      }
    ]
  },
  {
    chapterId: "greetings",
    chapterNum: 2,
    title: { ko: "2. 인삿말 & 일상 필수 표현", en: "2. Greetings & Daily Expressions" },
    desc: {
      ko: "헝가리에서 매일 쓰이는 인사말과 감사, 사과, 안부 표현입니다. 1. 헝가리어 2. 한국어 3. 영어로 정리되어 있습니다.",
      en: "Essential daily expressions for greetings, politeness, and checking in on others."
    },
    items: [
      {
        hu: "Szia!",
        ko: "안녕! (친구 1명 만날 때 / 헤어질 때)",
        en: "Hi! / Bye! (informal, to 1 person)",
        tip: "발음: 씨아!",
        word: "szia"
      },
      {
        hu: "Sziasztok!",
        ko: "안녕, 너희들! (친구 여러 명 만날 때 / 헤어질 때)",
        en: "Hi, guys! / Bye, guys! (informal, plural)",
        tip: "발음: 씨아스톡!",
        word: "sziasztok"
      },
      {
        hu: "Csókolom! (Kezit csókolom!)",
        ko: "안녕하세요! (어르신, 교수님, 상점 어른께 공손한 인사 - 손에 키스한다는 뜻의 전통 공손 표현)",
        en: "My respects / Hello (polite greeting to elders/ladies)",
        tip: "발음: 초-콜롬!",
        word: "csokolom"
      },
      {
        hu: "Jó reggelt kívánok!",
        ko: "좋은 아침입니다! (아침 정중한 인사)",
        en: "Good morning! (polite)",
        tip: "발음: 요- 레겔트 키-바-녹!",
        word: "jo_reggelt"
      },
      {
        hu: "Jó napot kívánok!",
        ko: "안녕하세요! (낮 시간 가장 보편적인 정중한 인사)",
        en: "Good afternoon! / Hello! (polite daytime)",
        tip: "발음: 요- 나폿 키-바-녹!",
        word: "jo_napot"
      },
      {
        hu: "Jó estét kívánok!",
        ko: "좋은 저녁입니다! (저녁 정중한 인사)",
        en: "Good evening! (polite)",
        tip: "발음: 요- 에스테-트 키-바-녹!",
        word: "jo_estet"
      },
      {
        hu: "Jó éjszakát kívánok!",
        ko: "안녕히 주무세요! / 좋은 밤 되세요!",
        en: "Good night! (polite)",
        tip: "발음: 요- 에-이서카-트 키-바-녹!",
        word: "jo_ejszakat"
      },
      {
        hu: "Viszlát!",
        ko: "또 봐요! / 안녕! (헤어질 때 일상적인 표현)",
        en: "Bye! / See you! (casual farewell)",
        tip: "발음: 비슬라-트!",
        word: "viszlat"
      },
      {
        hu: "Viszontlátásra!",
        ko: "안녕히 가세요 / 안녕히 계세요! (다시 만날 때까지 - 가장 격식 있는 작별 인사)",
        en: "Goodbye! (formal farewell)",
        tip: "발음: 비손틀라-타-sh러!",
        word: "viszontlatasra"
      },
      {
        hu: "Hogy vagy?",
        ko: "어떻게 지내? 잘 지내? (친구나 편한 사이)",
        en: "How are you? (informal)",
        tip: "발음: 호지 버지?",
        word: "hogy_vagy"
      },
      {
        hu: "Hogy van?",
        ko: "어떻게 지내시나요? (교수님, 어르신, 정중한 존칭)",
        en: "How are you? (formal)",
        tip: "발음: 호지 번?",
        word: "hogy_van"
      },
      {
        hu: "Köszönöm, jól.",
        ko: "고마워, 잘 지내.",
        en: "Thank you, I'm doing well.",
        tip: "발음: 쾨쇠뇜, 요-ㄹ.",
        word: "koszonom"
      },
      {
        hu: "Megvagyok.",
        ko: "그럭저럭 지내요. (그냥 지낼 만해요)",
        en: "I'm okay / surviving.",
        tip: "발음: 메그버족.",
        word: "megvagyok"
      },
      {
        hu: "Minden rendben!",
        ko: "모든 게 다 좋아! / 다 괜찮아!",
        en: "Everything is fine! / All good!",
        tip: "발음: 민덴 렌드벤!",
        word: "rendben"
      },
      {
        hu: "Semmi különös!",
        ko: "별일 없어! / 특별한 일은 없어!",
        en: "Nothing special!",
        tip: "발음: 쉠미 퀼뢰뇌쉬!",
        word: "kulonos"
      },
      {
        hu: "Köszönöm! (Köszönöm szépen!)",
        ko: "고마워요! (정말 감사합니다!)",
        en: "Thank you! (Thank you very much!)",
        tip: "발음: 쾨쇠뇜! (쾨쇠뇜 세-펜!)",
        word: "koszonom"
      },
      {
        hu: "Szívesen!",
        ko: "천만에요! / 기꺼이요!",
        en: "You're welcome! / My pleasure!",
        tip: "발음: 씨-베셴!",
        word: "szivesen"
      },
      {
        hu: "Bocsánat!",
        ko: "미안해요! / 죄송합니다! / 실례합니다!",
        en: "Sorry! / Excuse me!",
        tip: "발음: 보차-놋!",
        word: "bocsanat"
      },
      {
        hu: "Elnézést!",
        ko: "실례합니다! / 죄송합니다! (지나갈 때나 질문 전)",
        en: "Excuse me! (polite)",
        tip: "발음: 엘네-제-쉬트!",
        word: "elnezest"
      },
      {
        hu: "Tessék?",
        ko: "네? 뭐라고요? (상대방 말을 못 알아들었을 때 되묻기)",
        en: "Pardon? / What did you say?",
        tip: "발음: 텟셰-크?",
        word: "tessek"
      },
      {
        hu: "Tessék!",
        ko: "여기 있습니다! / 어서 오세요! (물건을 건네거나 부를 때)",
        en: "Here you go! / Please! / Come in!",
        tip: "발음: 텟셰-크!",
        word: "tessek"
      },
      {
        hu: "Jó étvágyat kívánok!",
        ko: "맛있게 드세요!",
        en: "Bon appétit! / Enjoy your meal!",
        tip: "발음: 요- 에-트바-조트 키-바-녹!",
        word: "etvagy"
      },
      {
        hu: "Egészségedre!",
        ko: "(너를 위한) 건배! / (재채기했을 때) 건강하렴!",
        en: "Cheers! (to you, singular) / Bless you!",
        tip: "발음: 에게-쉬-셰-게드레!",
        word: "egeszsegedre"
      },
      {
        hu: "Egészségünkre!",
        ko: "(우리를 위한) 건배!",
        en: "Cheers! (to all of us)",
        tip: "발음: 에게-쉬-셰-귄크레!",
        word: "egeszsegunkre"
      },
      {
        hu: "Szeretlek!",
        ko: "사랑해!",
        en: "I love you!",
        tip: "발음: 세레틀레크!",
        word: "szeretlek"
      }
    ]
  },
  {
    chapterId: "tobe",
    chapterNum: 3,
    title: { ko: "3. 인칭별 존재 동사 'Lenni' (To be: ~이다)", en: "3. Verb 'Lenni' (To be) by Person" },
    desc: {
      ko: "헝가리어에서 가장 중요한 동사 'lenni'(이다/있다)의 현재 시제 변화입니다. ★핵심: 3인칭(ő, ők, Ön, Önök)에서 명사나 형용사를 서술할 때는 동사를 전혀 쓰지 않고 생략합니다!",
      en: "Conjugation of 'lenni' (to be). Crucial rule: in the 3rd person present tense, the verb is omitted when stating identity or quality."
    },
    items: [
      {
        hu: "Én vagyok diák.",
        ko: "나는 학생이다. (Én = 나, vagyok = ~이다)",
        en: "I am a student. (én + vagyok)",
        tip: "én은 생략하고 'Diák vagyok.'로 더 자주 씁니다.",
        word: "vagyok"
      },
      {
        hu: "Te vagy diák.",
        ko: "너는 학생이다. (Te = 너, vagy = ~이다)",
        en: "You are a student. (te + vagy)",
        tip: "의문문: 'Diák vagy?' = 너 학생이야?",
        word: "vagy"
      },
      {
        hu: "Ő diák. ★동사 안 씀!",
        ko: "그/그녀는 학생이다. (ő + 명사/형용사 직결, van 쓰면 틀림!)",
        en: "He/She is a student. (NO verb used here!)",
        tip: "주의: 'Ő van diák' ❌ (틀림!). 그냥 'Ő diák'이 맞습니다.",
        word: "diak"
      },
      {
        hu: "Ő kedves. ★동사 안 씀!",
        ko: "그/그녀는 친절하다. (형용사 서술에도 동사 없음)",
        en: "He/She is kind.",
        tip: "3인칭 단수 형용사 서술도 동사 생략!",
        word: "kedves"
      },
      {
        hu: "Ön diák? ★동사 안 씀!",
        ko: "당신은 학생이십니까? (Ön = 당신/존칭 2인칭, 문법상 3인칭 취급)",
        en: "Are you a student? (formal 'you', verb omitted)",
        tip: "Ön 뒤에서도 동사를 쓰지 않습니다.",
        word: "on"
      },
      {
        hu: "Mi diákok vagyunk.",
        ko: "우리는 학생들이다. (Mi = 우리, vagyunk = ~이다)",
        en: "We are students. (mi + vagyunk)",
        tip: "diák(학생)에 복수형 접미사 -ok이 붙음",
        word: "vagyunk"
      },
      {
        hu: "Ti diákok vagytok.",
        ko: "너희들은 학생들이다. (Ti = 너희들, vagytok = ~이다)",
        en: "You (all) are students. (ti + vagytok)",
        tip: "의문문: 'Ti diákok vagytok?' = 너희 학생이야?",
        word: "vagytok"
      },
      {
        hu: "Ők diákok. ★동사 안 씀!",
        ko: "그들은 학생들이다. (ők + 복수명사, vannak 쓰면 틀림!)",
        en: "They are students. (NO verb used here!)",
        tip: "주의: 'Ők vannak diákok' ❌ (틀림!). 그냥 'Ők diákok'이 맞습니다.",
        word: "diakok"
      },
      {
        hu: "Önök diákok? ★동사 안 씀!",
        ko: "당신들은 학생분들이십니까? (Önök = 당신들/존칭 2인칭 복수)",
        en: "Are you students? (formal plural, verb omitted)",
        tip: "Önök 뒤에서도 동사 생략!",
        word: "onok"
      },
      {
        hu: "Itt van / Itt vannak (존재/위치일 때만 van/vannak 사용)",
        ko: "여기에 있다 / 여기에 있다(복수)",
        en: "Here is / Here are (used ONLY for existence/location)",
        tip: "신분/상태가 아니라 '어디에 존재함'을 말할 때만 3인칭에 van/vannak을 씁니다. (예: Hol van? = 어디 있어요?)",
        word: "van"
      }
    ]
  },
  {
    chapterId: "intro",
    chapterNum: 4,
    title: { ko: "4. 자기소개 & 격식(Formal) vs 비격식(Informal)", en: "4. Self-Introduction & Formal vs Informal" },
    desc: {
      ko: "자신의 이름, 국적, 학교, 거주지, 구사 언어를 소개하는 실전 문장과 상황에 따른 격식/비격식 표현 비교입니다.",
      en: "Practical sentences for introducing yourself and comparing formal vs informal communication."
    },
    items: [
      {
        hu: "Jó napot kívánok!",
        ko: "안녕하세요!",
        en: "Hello! / Good day!",
        tip: "인사의 시작",
        word: "jo_napot"
      },
      {
        hu: "Chanin vagyok. / A nevem Chanin.",
        ko: "찬인입니다. / 제 이름은 찬인입니다.",
        en: "I am Chanin. / My name is Chanin.",
        tip: "헝가리는 성을 앞에, 이름을 뒤에 씁니다: Jung Chanin vagyok.",
        word: "vagyok"
      },
      {
        hu: "Koreai vagyok.",
        ko: "한국인입니다.",
        en: "I am Korean.",
        tip: "Korea (한국) + -i (출신/사람 접미사) = koreai",
        word: "koreai"
      },
      {
        hu: "Budapesten élek.",
        ko: "부다페스트에 살아요.",
        en: "I live in Budapest.",
        tip: "Budapest + -en (표면/도시 격접미사)",
        word: "budapest"
      },
      {
        hu: "Az ELTE-n tanulok.",
        ko: "ELTE 대학교에서 공부해요.",
        en: "I study at ELTE.",
        tip: "tanulok = 나는 공부한다 (tanul 동사의 1인칭 단수)",
        word: "tanulok"
      },
      {
        hu: "Egyetemista vagyok. / Diák vagyok.",
        ko: "대학생입니다. / 학생입니다.",
        en: "I am a university student. / I am a student.",
        tip: "egyetem (대학) + -ista = 대학생",
        word: "egyetemista"
      },
      {
        hu: "Koreaiul, angolul és japánul beszélek.",
        ko: "한국어, 영어, 일본어를 해요 (말할 수 있어요).",
        en: "I speak Korean, English, and Japanese.",
        tip: "-ul / -ül = ~언어로 (japánul = 일본어로), és = 그리고, beszélek = 나는 말한다",
        word: "japan"
      },
      {
        hu: "Most magyarul tanulok.",
        ko: "지금은 헝가리어를 배우고 있어요.",
        en: "Now I am learning Hungarian.",
        tip: "most = 지금, magyarul = 헝가리어로",
        word: "magyarul"
      },
      {
        hu: "Örülök, hogy megismertem!",
        ko: "만나서 반갑습니다! (알게 되어 기뻐요)",
        en: "Nice to meet you!",
        tip: "친한 사이에는 'Örülök, hogy megismertelek!'",
        word: "orulok"
      },
      {
        hu: "[비격식] Hogy vagy? vs [격식] Hogy van?",
        ko: "너 어떻게 지내? (친구) vs 어떻게 지내시나요? (교수님/어르신/처음 만난 분)",
        en: "How are you? (Informal - Te) vs How are you? (Formal - Ön)",
        tip: "te(너) → vagy / Ön(당신) → van (3인칭 동사 취급)",
        word: "hogy_vagy"
      },
      {
        hu: "[비격식] Hogy hívnak? vs [격식] Hogy hívják Önt?",
        ko: "이름이 뭐야? (친구) vs 성함이 어떻게 되시나요? (격식)",
        en: "What is your name? (Informal) vs What is your name? (Formal)",
        tip: "hívnak (2인칭 비격식) vs hívják (3인칭 격식)",
        word: "hogy_hivnak"
      },
      {
        hu: "[비격식] Honnan jössz? vs [격식] Honnan jön?",
        ko: "어디서 왔어? (어느 나라/도시 출신이야?) vs 어디서 오셨나요?",
        en: "Where are you from? (Informal) vs Where are you from? (Formal)",
        tip: "답변: Koreából jövök. (한국에서 왔어요.)",
        word: "honnan_jossz"
      }
    ]
  },
  {
    chapterId: "verbs",
    chapterNum: 5,
    title: { ko: "5. 동사 현재 시제 규칙 변화", en: "5. Present Tense Regular Verbs" },
    desc: {
      ko: "주어(인칭)와 모음 조화에 따른 동사 현재 시제 어미 변화입니다. ★3인칭 단수(ő, Ön)는 어미가 붙지 않는 '기본형' 그대로 쓰입니다!",
      en: "Present tense verb conjugation by subject and vowel harmony. Note: 3rd person singular takes NO ending (bare stem)."
    },
    items: [
      {
        hu: "1인칭 단수 (Én) → -ok / -ek, -ök",
        ko: "tanulok (나는 공부한다) / olvasok (나는 읽는다) / beszélek (나는 말한다)",
        en: "I study (tanulok) / I read (olvasok) / I speak (beszélek)",
        tip: "후설 모음: -ok (tanulok), 전설 모음: -ek (beszélek), 원순 전설: -ök (ülök)",
        word: "tanulok"
      },
      {
        hu: "2인칭 단수 반말 (Te) → -sz / -ol, -el, -öl",
        ko: "tanulsz (너는 공부한다) / olvasol (너는 읽는다) / beszélsz (너는 말한다)",
        en: "You study (tanulsz) / You read (olvasol) / You speak (beszélsz)",
        tip: "일반적으로 -sz! 단, 어간이 s, sz, z로 끝나면 발음상 -ol/-el/-öl 사용 (olvas + ol = olvasol)",
        word: "tanulsz"
      },
      {
        hu: "3인칭 단수 (Ő) → ★어미 없음 (기본형)",
        ko: "tanul (그/그녀는 공부한다) / olvas (그/그녀는 읽는다) / beszél (그/그녀는 말한다)",
        en: "He/She studies (tanul) / reads (olvas) / speaks (beszél) [NO ending!]",
        tip: "사전에 나오는 동사의 어간 그 자체가 바로 3인칭 단수 현재형입니다!",
        word: "tanul"
      },
      {
        hu: "2인칭 단수 존칭 (Ön) → ★어미 없음 (3인칭과 동일)",
        ko: "Ön tanul (당신은 공부하십니다) / Ön olvas (당신은 읽으십니다)",
        en: "You (formal) study (Ön tanul) / read (Ön olvas) [Same as 3rd person!]",
        tip: "존칭인 Ön은 2인칭이지만 문법적으로는 항상 3인칭 단수 동사 형태를 씁니다.",
        word: "on"
      },
      {
        hu: "1인칭 복수 (Mi) → -unk / -ünk",
        ko: "tanulunk (우리는 공부한다) / olvasunk (우리는 읽는다) / beszélünk (우리는 말한다)",
        en: "We study (tanulunk) / We read (olvasunk) / We speak (beszélünk)",
        tip: "후설 모음: -unk (tanulunk), 전설 모음: -ünk (beszélünk)",
        word: "tanulunk"
      },
      {
        hu: "2인칭 복수 반말 (Ti) → -tok / -tek, -tök",
        ko: "tanultok (너희들은 공부한다) / olvastok (너희들은 읽는다) / beszéltek (너희들은 말한다)",
        en: "You all study (tanultok) / read (olvastok) / speak (beszéltek)",
        tip: "후설 모음: -tok (tanultok), 전설 모음: -tek (beszéltek), 원순 전설: -tök (ültök)",
        word: "tanultok"
      },
      {
        hu: "3인칭 복수 (Ők) / 2인칭 복수 존칭 (Önök) → -nak / -nek",
        ko: "tanulnak (그들은 공부한다) / olvasnak (그들은 읽는다) / beszélnek (그들은 말한다)",
        en: "They study (tanulnak) / read (olvasnak) / speak (beszélnek)",
        tip: "후설 모음: -nak (tanulnak), 전설 모음: -nek (beszélnek)",
        word: "tanulnak"
      },
      {
        hu: "[실전 예시 1] Mit tanulsz? — Magyarul tanulok.",
        ko: "너 뭐 공부해? — 헝가리어 공부해.",
        en: "What are you studying? — I am studying Hungarian.",
        tip: "tanulsz (너는 공부한다) / tanulok (나는 공부한다)",
        word: "tanul"
      },
      {
        hu: "[실전 예시 2] Mit olvasol? — Egy könyvet olvasok.",
        ko: "너 뭐 읽어? — 책 한 권 읽고 있어.",
        en: "What are you reading? — I am reading a book.",
        tip: "olvasol (너는 읽는다, s 뒤라 -ol) / olvasok (나는 읽는다)",
        word: "olvas"
      },
      {
        hu: "[실전 예시 3] Beszélsz angolul? — Igen, beszélek.",
        ko: "너 영어 할 줄 알아? — 응, 할 줄 알아.",
        en: "Do you speak English? — Yes, I speak.",
        tip: "beszélsz (너는 말한다) / beszélek (나는 말한다)",
        word: "beszel"
      }
    ]
  },
  {
    chapterId: "numbers",
    chapterNum: 6,
    title: { ko: "6. 숫자 (Számok / Numbers)", en: "6. Numbers (Számok)" },
    desc: {
      ko: "0부터 10000까지의 헝가리어 숫자 체계와 합성 규칙입니다. 11~19는 tizen-, 21~29는 huszon- 접두사를 쓰며, 소수점은 쉼표(,)를 사용합니다.",
      en: "Hungarian number system from 0 to 10,000, compounding rules, and decimal notation."
    },
    items: [
      {
        hu: "0 — nulla",
        ko: "0 (영 / 제로) [눌러]",
        en: "Zero",
        tip: "기본 숫자 0",
        word: "nulla"
      },
      {
        hu: "1 — egy",
        ko: "1 (일) [에지/에디]",
        en: "One",
        tip: "부정관사 'a/an'으로도 쓰임",
        word: "egy"
      },
      {
        hu: "2 — kettő (két)",
        ko: "2 (이) [켙퇴 / 케-트]",
        en: "Two",
        tip: "명사 앞 수량 표현 시에는 주로 'két' 사용 (예: két alma = 사과 2개)",
        word: "ketto"
      },
      {
        hu: "3 — három",
        ko: "3 (삼) [하-롬]",
        en: "Three",
        tip: "기본 숫자 3",
        word: "harom"
      },
      {
        hu: "4 — négy",
        ko: "4 (사) [니-지 / 네-기 / 니-디]",
        en: "Four",
        tip: "é가 좁은 모음이라 한국인 귀에는 '니-'에 가깝고, gy는 부드러운 '기/디' 소리로 들립니다",
        word: "negy"
      },
      {
        hu: "5 — öt",
        ko: "5 (오) [옽]",
        en: "Five",
        tip: "기본 숫자 5",
        word: "ot"
      },
      {
        hu: "6 — hat",
        ko: "6 (육) [핱]",
        en: "Six",
        tip: "기본 숫자 6",
        word: "hat"
      },
      {
        hu: "7 — hét",
        ko: "7 (칠) [헤-트]",
        en: "Seven",
        tip: "숫자 7 외에 '주일/주(week)'라는 뜻도 있음",
        word: "het"
      },
      {
        hu: "8 — nyolc",
        ko: "8 (팔) [뇰츠]",
        en: "Eight",
        tip: "기본 숫자 8",
        word: "nyolc"
      },
      {
        hu: "9 — kilenc",
        ko: "9 (구) [킬렌츠]",
        en: "Nine",
        tip: "기본 숫자 9",
        word: "kilenc"
      },
      {
        hu: "10 — tíz",
        ko: "10 (십) [티-즈]",
        en: "Ten",
        tip: "10 이상의 합성수에서는 'tizen-'으로 변형",
        word: "tiz"
      },
      {
        hu: "11 — tizenegy",
        ko: "11 (십일) [티제네지] (10 tizen- + 1 egy)",
        en: "Eleven",
        tip: "10(tíz) + en + 1(egy)",
        word: "tizenegy"
      },
      {
        hu: "12 — tizenkettő (tizenkét)",
        ko: "12 (십이) [티젠켙퇴 / 티젠케-트]",
        en: "Twelve",
        tip: "명사 앞에서는 tizenkét 명사",
        word: "tizenketto"
      },
      {
        hu: "13 — tizenhárom",
        ko: "13 (십삼) [티젠하-롬]",
        en: "Thirteen",
        tip: "tizen- + három",
        word: "tizenharom"
      },
      {
        hu: "14 — tizennégy",
        ko: "14 (십사) [티젠니-지 / 티젠네-기]",
        en: "Fourteen",
        tip: "tizen- + négy",
        word: "tizennegy"
      },
      {
        hu: "15 — tizenöt",
        ko: "15 (십오) [티젠옽]",
        en: "Fifteen",
        tip: "tizen- + öt",
        word: "tizenot"
      },
      {
        hu: "16 — tizenhat",
        ko: "16 (십육) [티젠핱]",
        en: "Sixteen",
        tip: "tizen- + hat",
        word: "tizenhat"
      },
      {
        hu: "17 — tizenhét",
        ko: "17 (십칠) [티젠헤-트]",
        en: "Seventeen",
        tip: "tizen- + hét",
        word: "tizenhet"
      },
      {
        hu: "18 — tizennyolc",
        ko: "18 (십팔) [티젠뇰츠]",
        en: "Eighteen",
        tip: "tizen- + nyolc",
        word: "tizennyolc"
      },
      {
        hu: "19 — tizenkilenc",
        ko: "19 (십구) [티젠킬렌츠]",
        en: "Nineteen",
        tip: "tizen- + kilenc",
        word: "tizenkilenc"
      },
      {
        hu: "20 — húsz",
        ko: "20 (이십) [후-스]",
        en: "Twenty",
        tip: "20 이상의 합성수에서는 'huszon-'으로 변형",
        word: "husz"
      },
      {
        hu: "21 — huszonegy",
        ko: "21 (이십일) [후소네지] (20 huszon- + 1 egy)",
        en: "Twenty-one",
        tip: "huszon- + egy",
        word: "huszonegy"
      },
      {
        hu: "22 — huszonkettő (huszonkét)",
        ko: "22 (이십이) [후손켙퇴 / 후손케-트]",
        en: "Twenty-two",
        tip: "명사 앞에서는 huszonkét 명사",
        word: "huszonketto"
      },
      {
        hu: "23 — huszonhárom",
        ko: "23 (이십삼) [후손하-롬]",
        en: "Twenty-three",
        tip: "huszon- + három",
        word: "huszonharom"
      },
      {
        hu: "24 — huszonnégy",
        ko: "24 (이십사) [후손니-지 / 후손네-기]",
        en: "Twenty-four",
        tip: "huszon- + négy",
        word: "huszonnegy"
      },
      {
        hu: "25 — huszonöt",
        ko: "25 (이십오) [후손옽]",
        en: "Twenty-five",
        tip: "huszon- + öt",
        word: "huszonot"
      },
      {
        hu: "26 — huszonhat",
        ko: "26 (이십육) [후손핱]",
        en: "Twenty-six",
        tip: "huszon- + hat",
        word: "huszonhat"
      },
      {
        hu: "27 — huszonhét",
        ko: "27 (이십칠) [후손헤-트]",
        en: "Twenty-seven",
        tip: "huszon- + hét",
        word: "huszonhet"
      },
      {
        hu: "28 — huszonnyolc",
        ko: "28 (이십팔) [후손뇰츠]",
        en: "Twenty-eight",
        tip: "huszon- + nyolc",
        word: "huszonnyolc"
      },
      {
        hu: "29 — huszonkilenc",
        ko: "29 (이십구) [후손킬렌츠]",
        en: "Twenty-nine",
        tip: "huszon- + kilenc",
        word: "huszonkilenc"
      },
      {
        hu: "30 — harminc",
        ko: "30 (삼십) [하르민츠]",
        en: "Thirty",
        tip: "31부터는 변형 없이 harminc 뒤에 바로 숫자를 붙임",
        word: "harminc"
      },
      {
        hu: "31 — harmincegy",
        ko: "31 (삼십일) [하르민체지]",
        en: "Thirty-one",
        tip: "harminc + egy",
        word: "harmincegy"
      },
      {
        hu: "32 — harminckettő",
        ko: "32 (삼십이) [하르민츠켙퇴]",
        en: "Thirty-two",
        tip: "harminc + kettő",
        word: "harmincketto"
      },
      {
        hu: "33 — harminchárom",
        ko: "33 (삼십삼) [하르민츠하-롬]",
        en: "Thirty-three",
        tip: "harminc + három",
        word: "harmincharom"
      },
      {
        hu: "34 — harmincnégy",
        ko: "34 (삼십사) [하르민츠니-지 / 하르민츠네-기]",
        en: "Thirty-four",
        tip: "harminc + négy",
        word: "harmincnegy"
      },
      {
        hu: "35 — harmincöt",
        ko: "35 (삼십오) [하르민츁]",
        en: "Thirty-five",
        tip: "harminc + öt",
        word: "harmincot"
      },
      {
        hu: "36 — harminchat",
        ko: "36 (삼십육) [하르민츠핱]",
        en: "Thirty-six",
        tip: "harminc + hat",
        word: "harminchat"
      },
      {
        hu: "40 — negyven",
        ko: "40 (사십) [네지벤]",
        en: "Forty",
        tip: "négy(4)의 변형 + ven",
        word: "negyven"
      },
      {
        hu: "50 — ötven",
        ko: "50 (오십) [옽벤]",
        en: "Fifty",
        tip: "öt(5) + ven",
        word: "otven"
      },
      {
        hu: "60 — hatvan",
        ko: "60 (육십) [핱번]",
        en: "Sixty",
        tip: "hat(6) + van",
        word: "hatvan"
      },
      {
        hu: "70 — hetven",
        ko: "70 (칠십) [헽벤]",
        en: "Seventy",
        tip: "hét(7) + ven",
        word: "hetven"
      },
      {
        hu: "80 — nyolcvan",
        ko: "80 (팔십) [뇰츠번]",
        en: "Eighty",
        tip: "nyolc(8) + van",
        word: "nyolcvan"
      },
      {
        hu: "90 — kilencven",
        ko: "90 (구십) [킬렌츠벤]",
        en: "Ninety",
        tip: "kilenc(9) + ven",
        word: "kilencven"
      },
      {
        hu: "100 — száz",
        ko: "100 (백) [사-즈]",
        en: "One hundred",
        tip: "200 = kétszáz, 300 = háromszáz...",
        word: "szaz"
      },
      {
        hu: "1000 — ezer",
        ko: "1000 (천) [에제르]",
        en: "One thousand",
        tip: "2000 = kétezer, 3000 = háromezer...",
        word: "ezer"
      },
      {
        hu: "350 — háromszázötven",
        ko: "350 (삼백오십) [하-롬사-즅벤]",
        en: "Three hundred fifty",
        tip: "300(háromszáz) + 50(ötven)",
        word: "haromszaz"
      },
      {
        hu: "4000 — négyezer",
        ko: "4000 (사천) [니-게-제르 / 네-게제르]",
        en: "Four thousand",
        tip: "négy(니기) + ezer(에제르)가 연음되어 실제 원어민 귀에는 정확히 [니-게-제르]로 들립니다!",
        word: "negyezer"
      },
      {
        hu: "8250 — nyolcezer-kettőszázötven",
        ko: "8250 (팔천이백오십) [뇰체제르-켙퇴사-즅벤]",
        en: "Eight thousand two hundred fifty",
        tip: "헝가리어 정서법: 2000 이상 숫자의 복합 결합 시 세 자리 단위마다 하이픈(-) 사용",
        word: "nyolcezer"
      },
      {
        hu: "6123 — hatezer-százhuszonhárom",
        ko: "6123 (육천백이십삼) [핱에제르-사-즈후손하-롬]",
        en: "Six thousand one hundred twenty-three",
        tip: "6000(hatezer) + 100(száz) + 23(huszonhárom)",
        word: "hatezer"
      },
      {
        hu: "10 000 — tízezer",
        ko: "10,000 (만 / 일만) [티-제제르]",
        en: "Ten thousand",
        tip: "10(tíz) + 1000(ezer). 헝가리어는 큰 숫자 표기 시 쉼표 대신 공백을 씁니다 (10 000)",
        word: "tizezer"
      },
      {
        hu: "[보너스] 소수점 표기 — 3,5 (három egész öt tized / három vessző öt)",
        ko: "3.5 (삼 점 오) — 헝가리어는 소수점에 점(.) 대신 쉼표(,)를 씁니다!",
        en: "3.5 (three point five) — Hungarian uses a comma (,) called 'vessző' [베쎄-] for decimals",
        tip: "구어체로는 'három vessző öt'(3 쉼표 5)라고 쉽게 읽습니다.",
        word: "vesszo"
      }
    ]
  }
];
