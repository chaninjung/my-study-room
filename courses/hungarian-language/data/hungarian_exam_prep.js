window.__HUN_EXAM_PREP__ = {
  meta: {
    title: "Magyar nyelv · Written, Reading, Oral & Location Practice",
    updated: "2026-11-24",
    private: true,
    note: {
      ko: "실제 문항은 예고되지 않았습니다. 알려준 범위와 구술 흐름을 바탕으로 만든 사전 연습지입니다.",
      en: "The exact real-exam questions were not announced. This is a prediction pack based on the supplied scope."
    }
  },
  sections: [
    {
      id: "written",
      label: { ko: "쓰기 연습 · 20점", en: "Written practice · 20 pts" },
      instruction: {
        ko: "보기 없이 완전한 문장으로 답하세요. 철자와 악센트까지 확인하세요.",
        en: "Answer in complete sentences without notes. Check spelling and accents."
      },
      questions: [
        {
          id: "W1",
          points: 4,
          prompt: "다음 정보를 헝가리어 자기소개 문장 네 개로 쓰세요: 이름 Chanin / 한국인 / 33세 / 부다페스트 거주",
          answer: "A nevem Chanin.\nKoreai vagyok.\nHarminchárom éves vagyok.\nBudapesten élek."
        },
        {
          id: "W2",
          points: 4,
          prompt: "“저는 ELTE에서 AI를 공부합니다. 영어, 한국어, 일본어를 말하고 헝가리어도 조금 말합니다.”를 쓰세요.",
          answer: "Az ELTE-n mesterséges intelligenciát tanulok.\nAngolul, koreaiul és japánul beszélek, és egy kicsit magyarul is beszélek."
        },
        {
          id: "W3",
          points: 3,
          prompt: "빈칸을 채워 쓰세요: ___ napot kívánok! Egy meleg ___ és egy szelet csokoládétortát ___.",
          answer: "Jó napot kívánok! Egy meleg kávét és egy szelet csokoládétortát kérek."
        },
        {
          id: "W4",
          points: 3,
          prompt: "“아이스커피 하나, 설탕 없이 우유 조금 넣어서 주세요.”를 쓰세요.",
          answer: "Egy jeges kávét kérek cukor nélkül, egy kis tejjel."
        },
        {
          id: "W5",
          points: 2,
          prompt: "“총 얼마예요?”와 “카드로 결제하고 싶어요.”를 쓰세요.",
          answer: "Mennyibe kerül összesen?\nKártyával szeretnék fizetni."
        },
        {
          id: "W6",
          points: 4,
          prompt: "단수와 복수에 맞게 van/vannak를 넣으세요: A lámpa az asztalon ___. A könyvek a polcon ___.",
          answer: "A lámpa az asztalon van.\nA könyvek a polcon vannak."
        }
      ]
    },
    {
      id: "reading",
      label: { ko: "읽기 연습 · 20점", en: "Reading practice · 20 pts" },
      instruction: {
        ko: "지문을 읽고 질문에 한국어 또는 헝가리어 짧은 문장으로 답하세요.",
        en: "Read each passage and answer in Korean or with a short Hungarian sentence."
      },
      passage: "Péter Budapesten él és az ELTE-n tanul. Huszonöt éves és lengyel. Reggel bemegy egy kávézóba. Egy meleg teát és egy szendvicset kér. Sajnos nincs szendvics, de van pogácsa. Péter egy pogácsát kér. Összesen hatszázötven forintot fizet.",
      questions: [
        {
          id: "R1",
          points: 3,
          prompt: "Péter는 어디에 살고 무엇을 공부하나요?",
          answer: "부다페스트에 살고 ELTE에서 공부합니다. 지문에는 전공이 나와 있지 않습니다."
        },
        {
          id: "R2",
          points: 3,
          prompt: "Péter의 나이와 국적은?",
          answer: "25세, 폴란드인"
        },
        {
          id: "R3",
          points: 4,
          prompt: "처음 무엇을 주문했고, 왜 주문을 바꿨어요?",
          answer: "따뜻한 차와 샌드위치를 주문했지만 샌드위치가 없어서 바꿨습니다."
        },
        {
          id: "R4",
          points: 3,
          prompt: "Péter가 샌드위치 대신 최종적으로 주문한 것은?",
          answer: "포가차(pogácsa) 1개"
        },
        {
          id: "R5",
          points: 2,
          prompt: "총 금액은 얼마인가요?",
          answer: "650 forint"
        },
        {
          id: "R6",
          points: 5,
          prompt: "지문에서 élelmiszer(먹을 것)와 ital(마실 것)을 헝가리어로 찾아 쓰세요.",
          answer: "Étel: pogácsa / ital: tea"
        }
      ]
    },
    {
      id: "oral",
      label: { ko: "구술 대비", en: "Oral practice" },
      instruction: {
        ko: "스크립트를 보지 말고 1분씩 말하세요. 웨이터는 선생님이 맡는다고 가정합니다.",
        en: "Speak for about one minute without reading the script. Assume the teacher plays the waiter."
      },
      questions: [
        {
          id: "O1",
          points: 10,
          prompt: "자기소개: 인사 → 이름 → 국적 → 나이 → 거주지 → 학생/학교 → AI 전공 → 사용 언어",
          answer: "Jó napot kívánok!\nA nevem Chanin.\nKoreai vagyok.\nHarminchárom éves vagyok.\nBudapesten élek.\nDiák vagyok és az ELTE-n tanulok.\nMesterséges intelligenciát tanulok.\nAngolul, koreaiul és japánul beszélek.\nMagyarul tanulok, de még csak egy kicsit beszélek."
        },
        {
          id: "O2",
          points: 10,
          prompt: "Formal 주문: 인사 → 먹을 것 + 마실 것 → 따뜻한/차가운 상태 → 추가 주문 → 총액 → 결제 → 작별",
          answer: "Jó napot kívánok!\nEgy meleg cappuccinót és egy szelet csokoládétortát kérek.\nIgen, egy pohár hideg vizet is kérek.\nMennyibe kerül összesen?\nKártyával szeretnék fizetni.\nKöszönöm szépen! Viszontlátásra!"
        },
        {
          id: "O3",
          points: 10,
          prompt: "Informal 주문: 처음 주문한 케이크 품절 → 대체 케이크 확인 → 다시 주문 → 더 필요 없음 → 총액 재확인 → 결제",
          answer: "Szia! Egy jeges kávét és egy csokoládétortát kérek.\nÉrtem. Van ananásztorta?\nAkkor egy ananásztortát kérek.\nNem, köszönöm, mást nem kérek.\nBocsánat, mennyibe kerül összesen?\nTessék. Köszönöm! Szia!"
        },
        {
          id: "O4",
          points: 10,
          prompt: "방 그림: 전체 묘사 → 가구 색깔 2개 → asztal 위/옆/아래/뒤 물건 → szekrény 안 물건",
          answer: "A képen egy szobát látok.\nEgy asztal, egy szék, egy ágy és egy ablak van a szobában.\nAz asztal barna, a szék piros.\nAz asztalon egy lámpa és két könyv van.\nAz asztal mellett egy szék van.\nAz asztal alatt egy táska van.\nAz asztal mögött egy ablak van.\nA szekrényben ruhák vannak."
        },
        {
          id: "O5",
          points: 5,
          prompt: "선생님이 메뉴로 묻습니다: meleg/hideg, tej/cukor/jég, 더 주문할지 응답하세요.",
          answer: "Melegen kérem.\nCukor nélkül, egy kis tejjel kérem.\nJéggel kérem.\nKöszönöm, mást nem kérek."
        }
      ]
    },
    {
      id: "positions",
      label: { ko: "7. 위치 표현 집중", en: "7. Location expressions" },
      instruction: {
        ko: "사용자가 준 위치 표현 전부를 각각 완전한 문장으로 답하세요. 단수는 van, 복수는 vannak를 씁니다.",
        en: "Practice every supplied location expression in complete sentences. Use van for singular and vannak for plural."
      },
      questions: [
        {
          id: "P1",
          points: 2,
          prompt: "mellett — 의자는 책상 옆에 있어요.",
          answer: "A szék az asztal mellett van."
        },
        {
          id: "P2",
          points: 2,
          prompt: "mögött — 창문은 책상 뒤에 있어요.",
          answer: "Az ablak az asztal mögött van."
        },
        {
          id: "P3",
          points: 2,
          prompt: "előtt — 책상은 창문 앞에 있어요.",
          answer: "Az asztal az ablak előtt van."
        },
        {
          id: "P4",
          points: 2,
          prompt: "fölött — 램프는 책상 위에 있어요.",
          answer: "A lámpa az asztal fölött van."
        },
        {
          id: "P5",
          points: 2,
          prompt: "felett — 그림은 침대 위에 있어요.",
          answer: "A kép az ágy felett van."
        },
        {
          id: "P6",
          points: 2,
          prompt: "között — 책상은 침대와 창문 사이에 있어요.",
          answer: "Az asztal az ágy és az ablak között van."
        },
        {
          id: "P7",
          points: 2,
          prompt: "alatt — 가방은 책상 아래에 있어요.",
          answer: "A táska az asztal alatt van."
        },
        {
          id: "P8",
          points: 2,
          prompt: "-n — 책들이 책상 위에 있어요.",
          answer: "A könyvek az asztalon vannak."
        },
        {
          id: "P9",
          points: 2,
          prompt: "-ban/-ben — 사과는 바구니 안에 있어요.",
          answer: "Az alma a kosárban van."
        },
        {
          id: "P10",
          points: 2,
          prompt: "-ban/-ben — 책은 가방 안에 있어요.",
          answer: "A könyv a táskában van."
        },
        {
          id: "P11",
          points: 3,
          prompt: "Hol van? 다음 다섯 개를 완전한 문장으로 답하세요: 의자/책상, 가방/의자, 그림/침대, 컵/책상, 책/가방",
          answer: "A szék az asztal mellett van.\nA táska a szék alatt van.\nA kép az ágy felett van.\nA csésze az asztalon van.\nA könyv a táskában van."
        },
        {
          id: "P12",
          points: 3,
          prompt: "Mi van ...? 질문에 답하세요: 책상 위 / 책상 아래 / 책상 옆",
          answer: "Az asztalon egy lámpa és két könyv van.\nAz asztal alatt egy táska van.\nAz asztal mellett egy szék van."
        }
      ]
    }
  ]
};
