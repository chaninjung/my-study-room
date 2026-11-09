과목 대표 사진을 여기에 넣으세요 (파일 이름 = src/curriculum.js 의 course.image 와 같아야 함)

  예)  courses/dnd.jpg      → src/curriculum.js 의 dnd 과목 image: "assets/courses/dnd.jpg"
       avatar.jpg           → 상단 왼쪽 내 얼굴 사진 (없으면 닉네임 첫 글자가 나옵니다)

- 권장 크기: 카드 사진 가로 700px 이상 (16:9 정도), 아바타 200x200 정사각형
- 형식: jpg / png / webp  (gif·svg 도 가능)
- 파일을 넣고 `python build_site.py` 를 실행하면 site/assets/ 로 자동 복사됩니다.
  (오프라인 파일 TheoryTest1_PracticeExam.html 도 같은 상대경로를 쓰므로 그대로 보입니다)
- 파일이 없으면 카드에는 그라디언트 + 과목 이니셜, 아바타에는 첫 글자가 표시됩니다.
- ⚠️ 교수님 자료(pdf/docx)나 강의 슬라이드는 절대 넣지 마세요 — 빌드가 배포를 중단합니다.
