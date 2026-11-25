/* =====================================================================
   포트폴리오 내용 — 이 파일만 고치면 사이트 내용이 바뀝니다.
   Portfolio content — edit only this file to change what the site shows.

   새 자료 추가 방법 (How to add an entry)
   1. 아래 ENTRIES 안의 블록 하나 { ... }, 를 통째로 복사해서 붙여 넣으세요.
   2. id 를 새로 정하세요 (영문 소문자, 숫자, 하이픈만 / 다른 id 와 겹치면 안 됨).
   3. section 을 정하세요:
        "works"  = 작품 (작품 이해: 맥락 조사, 노트, 분석)
        "paper1" = Paper 1
        "paper2" = Paper 2
        "exams"  = 시험지들 (수업 중 손으로 쓴 시험 에세이)
        "io"     = 구술 에세이
   4. works 에 이 자료가 다루는 작품 id 를 넣으세요 (아래 WORKS 참고).
      section 이 "works" 인 자료는 works 의 첫 번째 작품 아래에 표시됩니다.
   5. date 는 "2026-03-14" 형식으로 쓰세요. 비워 두면 "날짜 미정"으로 표시됩니다.
   6. links 의 url 에 Google 문서 주소를 붙여 넣으세요. 비워 두면 "링크 준비 중"으로 표시됩니다.
   7. 사진(손노트 등)은 images 폴더에 올리고 images 에 {src:"images/파일이름.jpg", alt:"설명"} 을 넣으세요.
   8. description(설명)과 reflection(배운 점)은 지금 사이트에 표시되지 않습니다.
   9. 각 섹션의 Reflection 문단은 site.reflections 에 쓰세요 (works, paper1, paper2, io).
      비워 두면 공개 사이트에는 Reflection 상자가 보이지 않습니다. 문단을 나누려면 \n\n 을 쓰세요.
   ===================================================================== */

window.PORTFOLIO = {
  site: {
    "owner": "Younsang Chang",
    "ownerKo": "장윤상",
    "course": "IB DP 한국어 A: 언어와 문학",
    "level": "SL",
    "updated": "2026-11-25",
    "intro": "IB DP 한국어 A: 언어와 문학 과정에서 공부한 작품 노트, Paper 1·Paper 2 연습, 개인 구술(IO) 준비 자료, 수업 중 손으로 쓴 시험 에세이를 모은 학습 기록입니다. 각 자료에는 날짜와 짧은 설명이 있으며, 버튼을 누르면 원본 문서가 열립니다.",
    "reflections": {
      "works": "처음 박지원을 공부할 때는 역사적 맥락을 조사하고 줄거리를 정리하는 데 시간을 꽤 썼다. 그런데 작품이 쌓일수록 결국 중요한 건 줄거리가 아니라 '기법이 어떻게 작가의 주제를 전달하느냐' 였다. 그래서 아예 작품마다 수업 슬라이드, 맥락 조사, 에세이 연습을 한곳에 몰아넣는 '완전 노트/무기고' 방식으로 정리했다. 카프카 노트를 쓰다가는 내가 자꾸 작가의 의도를 섣불리 단정 짓는 버릇이 있다는 걸 알아서, 고쳐야 할 점으로 따로 메모해 두었다. 『1984』 주제, 상징 연구처럼 같이 분석한 활동은 확실히 혼자 읽을 때랑 달랐다. 나 혼자서는 못 봤을 해석이 꽤 나와서 시야가 좀 넓어진 느낌이다. 특히 작품의 맥락을 함께 파고든 게 큰 도움이 됐다. 그냥 문학 기법만 떼어 놓고 분석하는 게 아니라, 작가가 왜 하필 그 시대에 그런 기법을 꺼내 들었는지까지 훨씬 넓게 이해하게 됐다. 이런 인사이트 (철학적/역사적) 인사이트를 P2 결말에 쓰니 좋다. 가장 중요한 거는 나만의 유연한(versatile)한 에세이 템플렛이랑 분석 포인트들을 지니고 있는 것이다. 이걸 계속 단련해나가는게 남은 5개월의 과제다.",
      "paper1": "Paper 1을 준비하면서 기사문, 사설/칼럼/블로그, 비주얼텍스트 특징을 정리하고 '차, 차, 차' 기사, 환경부 친환경 설 명절 인포그래픽, '비빔밥 다문화' 칼럼 기출 지문으로 에세이를 써 봤다. 제일 남는 게 많았던 건 피드백을 받고 다시 고쳐 쓴 작업이다. 수정본에서는 서론에 출처-->갈래-->목적을 먼저 깔고, '비빔밥'이라는 확장 은유처럼 핵심 기법 중심으로 문단을 짰다. 선생님이 주신 문단 구조대로 한 문단에 기법 하나와 그 효과만 다루려고 신경 쓰니까 분석이 요약으로 새는 일도 줄었다. 다만 앞으로 보완할 점이 많다. 먼저 텍스트 안에서 단서를 끌어내 타깃 독자를 처음부터 정확하게 짚어내는 연습이 더 필요하다. 타깃 수용자를 잘못 잡으면 와르르 무너지기 때문. 인포그래픽 같은 텍스트에서는 비쥬열/텍스트 분석의 균형을 맞추는 것도 과제고, 지금까지 수업에서 쓴 에세이 대부분이 비주얼이나 인포그래픽 중심이었던 만큼 이제는 글 위주의 텍스트 지문에도 익숙해져야겠다.",
      "paper2": "제일 시간을 많이 들인 파트다. 처음 서론 연습을 할 때는 박지원의 두 작품을 질문에 맞춰 소개하는 것만 해도 막막했는데, 기출문제를 하나씩 플래닝하면서 thesis statement랑 토픽센텐스부터 세우는 걸 반복하다 보니 에세이 뼈대를 잡는 속도가 붙었다. 특히 '스토리의 늪'에서 빠져나와 줄거리 대신 작가적 기법을 분석하고,  독자가 아니라 분석가의 시선으로 작품을 보기 시작한 게 가장 큰 전환점이었다. 선생님 예시 에세이를 보고 같은 질문으로 다시 써 보며 두 작품을 하나의 기준으로 엮는 감도 잡았고, 질문을 unpack한 뒤 문단 끝마다 '이와 같이...'로 돌아오는 습관도 들였다. '난공불락 P2 준비'에 네 작품의 핵심적이고 폭넓은 기법들을 미리 정리해 둔 것도 어떤 질문이 나와도 바로 꺼내 쓸 수 있어서 유용했다. 마지막으로 수업 시간에 직접 손으로 시험 에세이를 써 본 덕분에 실전 시간 배분 감각도 확실히 익혔다. 더 손으로 쎠야한다.",
      "io": "준비하면서 제일 까다로웠던 건 글로벌 이슈를 잡는 일이었다. Mock IO 때는 윤동주의 「간」과 신혜란의 『우리는 모두 조선족이다』 6장으로 '경계인으로서 이주민들이 겪는 사회적 소외와 심리적 불안'을 잡았는데, 막상 짜 보니 범위가 너무 넓어 초점이 흐려졌다. 그래서 Final IO에서는 작품을 「양지쪽」으로 바꾸고, 이슈도 '이주민에게 상시적 불안을 남기는 주류 사회의 배제'로 좁혔다. 결과(소외) 대신 원인(배제)으로 초점을 옮기니 문학과 비문학 발췌문이 하나의 논지로 훨씬 깔끔하게 맞물렸다. 보통 민족주의적이거나 종교적인 관점에서 읽히는 윤동주의 시를 디아스포라라는 시각으로 비틀어 본 게  꽤 흥미로왔다. 구술 분석 자체는 그동안 Paper 2에서 쌓아 둔 분석 경험이 그대로 바탕이 되어 큰 도움이 됐고, 스크립트 있는 버전과 없는 버전을 각각 녹화하며 연습한 과정은 발표나 커뮤니케이션 감각을 키우는 데도 꽤 남는 게 많았다."
    }
  },

  works: [
    {
      "id": "parkjiwon",
      "author": "박지원",
      "title": "",
      "short": "호질 · 허생전",
      "about": "「호질」·「허생전」 · 조선 후기 문인 (1737–1805) · 한국어 원작"
    },
    {
      "id": "solzhenitsyn",
      "author": "알렉산드르 솔제니친",
      "title": "이반 데니소비치의 하루",
      "short": "이반 데니소비치의 하루",
      "about": "1962년 발표 · 러시아어 원작 번역 작품"
    },
    {
      "id": "kimyoungha",
      "author": "김영하",
      "title": "작별인사",
      "short": "작별인사",
      "about": "2022년 발표 · 한국어 원작"
    },
    {
      "id": "kafka",
      "author": "프란츠 카프카",
      "title": "",
      "short": "변신 · 선고",
      "about": "「변신」·「선고」 등 단편 · 독일어 원작 번역 작품"
    },
    {
      "id": "orwell",
      "author": "조지 오웰",
      "title": "1984",
      "short": "1984",
      "about": "1949년 발표 · 영어 원작 번역 작품"
    },
    {
      "id": "yundongju",
      "author": "윤동주",
      "title": "하늘과 바람과 별과 시",
      "short": "하늘과 바람과 별과 시",
      "about": "1948년 출간 시집 · 한국어 원작"
    }
  ],

  entries: [
    {
      "id": "pj-context",
      "section": "works",
      "works": [
        "parkjiwon"
      ],
      "title": "박지원 맥락 조사",
      "date": "",
      "type": "맥락 조사",
      "description": "작가 박지원과 작품이 쓰인 조선 후기의 시대적 맥락을 조사한 Canva 자료",
      "reflection": "",
      "links": [
        {
          "label": "Canva 열기",
          "url": "https://www.canva.com/design/DAGv7bUv2eI/C2HPJrRwWaC1m4P5vIBkaQ/edit"
        }
      ],
      "images": []
    },
    {
      "id": "pj-notes",
      "section": "works",
      "works": [
        "parkjiwon"
      ],
      "title": "박지원 완전 노트",
      "date": "2025-08-18",
      "type": "작품 노트",
      "description": "「호질」과 「허생전」의 맥락, 주제, 기법을 Paper 2 대비용으로 정리한 노트",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1-4kyZdffYolV6LpoQg-Tta71_VKvgXOHxZiykTgW7Kc/edit?tab=t.0"
        }
      ],
      "images": []
    },
    {
      "id": "sz-notes",
      "section": "works",
      "works": [
        "solzhenitsyn"
      ],
      "title": "『이반 데니소비치의 하루』 완전 노트",
      "date": "2025-09-13",
      "type": "작품 노트",
      "description": "문학적 기법과 주제(인간의 존엄성과 개인성 등)를 정리한 에세이 준비 노트",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1GUf49-_AoQEw9RFCbZbiLZhNYD_VysqRd9Pz5vfv6y4/edit?usp=sharing"
        }
      ],
      "images": []
    },
    {
      "id": "kf-notes",
      "section": "works",
      "works": [
        "kafka"
      ],
      "title": "카프카 완전 노트",
      "date": "2025-12-09",
      "type": "작품 노트",
      "description": "「변신」과 「선고」를 다룬 서론 구조와 에세이 연습을 정리한 노트",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/14VGd6J3blRpjW_BzPrX-sNOVe5FVjE2vY3ABzZmpA64/edit?usp=sharing"
        }
      ],
      "images": []
    },
    {
      "id": "ow-notes",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "『1984』 완전 노트",
      "date": "2026-01-01",
      "type": "작품 노트",
      "description": "시점과 세뇌 과정 등 수업 내용을 정리한 노트",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1BsnVIMQ8wE3W-QsELJjVHeCtKe4YELSgKKrgpEtOgdk/edit?tab=t.0"
        }
      ],
      "images": []
    },
    {
      "id": "pr-newspeak",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "작품 속 '신어' 정리 및 분석",
      "date": "",
      "type": "친구 수업 발표",
      "description": "『1984』의 신어(Newspeak)가 만들어진 목적과 특징을 정리한 발표 · 발표: Hae Yeon Lee",
      "reflection": "",
      "links": [
        {
          "label": "발표 슬라이드 (PDF)",
          "url": "files/1984-presentations/newspeak.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "pr-language",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "언어와 사고의 관계",
      "date": "",
      "type": "친구 수업 발표",
      "description": "『1984』 작품 연구 1차 조사로 언어와 사고의 관계를 다룬 발표 · 발표: Eunbi Shin",
      "reflection": "",
      "links": [
        {
          "label": "발표 슬라이드 (PDF)",
          "url": "files/1984-presentations/language-and-thought.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "pr-orwell",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "조지 오웰의 작가와 작품 세계",
      "date": "",
      "type": "친구 수업 발표",
      "description": "조지 오웰의 생애와 작품 세계를 소개한 발표 · 발표: 서다영",
      "reflection": "",
      "links": [
        {
          "label": "발표 슬라이드 (PDF)",
          "url": "files/1984-presentations/orwell-life-and-work.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "pr-totalitarianism",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "전체주의란 무엇인가",
      "date": "",
      "type": "친구 수업 발표",
      "description": "전체주의의 뜻과 역사, 독재와의 차이, 작품과의 연결을 다룬 발표 · 발표: 최하람",
      "reflection": "",
      "links": [
        {
          "label": "발표 슬라이드 (PDF)",
          "url": "files/1984-presentations/totalitarianism.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "pr-surveillance",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "작품 속 지배계층의 감시와 통제",
      "date": "",
      "type": "친구 수업 발표",
      "description": "빅 브라더 등 『1984』 속 감시와 통제의 상징을 다룬 발표 · 발표: 김희온",
      "reflection": "",
      "links": [
        {
          "label": "발표 슬라이드 (PDF)",
          "url": "files/1984-presentations/surveillance-and-control.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "yd-note-1",
      "section": "works",
      "works": [
        "yundongju"
      ],
      "title": "윤동주 노트 예시 1",
      "date": "",
      "type": "손노트",
      "description": "「무서운 시간」과 「십자가」에 직접 주석을 단 개인 노트",
      "reflection": "",
      "links": [],
      "images": [
        {
          "src": "images/yundongju-note-1.jpg",
          "alt": "「무서운 시간」, 「십자가」 주석 노트"
        }
      ]
    },
    {
      "id": "yd-note-2",
      "section": "works",
      "works": [
        "yundongju"
      ],
      "title": "윤동주 노트 예시 2",
      "date": "",
      "type": "손노트",
      "description": "「간판 없는 거리」와 「태초의 아침」에 직접 주석을 단 개인 노트",
      "reflection": "",
      "links": [],
      "images": [
        {
          "src": "images/yundongju-note-2.jpg",
          "alt": "「간판 없는 거리」, 「태초의 아침」 주석 노트"
        }
      ]
    },
    {
      "id": "yd-group",
      "section": "works",
      "works": [
        "yundongju"
      ],
      "title": "윤동주 그룹 분석",
      "date": "",
      "type": "교내 활동",
      "description": "「간」을 모둠으로 분석한 포스터 (교내 그룹 활동)",
      "reflection": "",
      "links": [],
      "images": [
        {
          "src": "images/yundongju-group.jpg",
          "alt": "「간」 모둠 분석 포스터"
        }
      ]
    },
    {
      "id": "yd-poetry-theory",
      "section": "works",
      "works": [
        "yundongju"
      ],
      "title": "시 이론 슬라이드",
      "date": "",
      "type": "수업 자료",
      "description": "시를 분석할 때 쓰는 이론을 정리한 슬라이드 (PDF)",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "https://drive.google.com/file/d/1GQ6NnVIt2sYhvTZgFYq0MeVaJp0CM3bP/view"
        }
      ],
      "images": []
    },
    {
      "id": "t-pj-classics",
      "section": "works",
      "works": [
        "parkjiwon"
      ],
      "title": "한국 고전소설의 세계",
      "date": "2025-08-18",
      "type": "수업 자료",
      "description": "한국 고전소설의 특징과 흐름을 정리한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/korean-classic-novels.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-pj-overview",
      "section": "works",
      "works": [
        "parkjiwon"
      ],
      "title": "연암 박지원의 작품 개요",
      "date": "2025-08-18",
      "type": "수업 자료",
      "description": "박지원의 생애와 주요 작품을 소개한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/parkjiwon-works-overview.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-pj-style",
      "section": "works",
      "works": [
        "parkjiwon"
      ],
      "title": "연암 박지원의 문체 분석",
      "date": "2025-08-19",
      "type": "수업 자료",
      "description": "박지원 문체의 특징을 분석한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/parkjiwon-style.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-pj-heosaeng",
      "section": "works",
      "works": [
        "parkjiwon"
      ],
      "title": "「허생전」 수업 슬라이드",
      "date": "2025-09-01",
      "type": "수업 자료",
      "description": "「허생전」의 줄거리, 인물, 주제를 다룬 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/heosaengjeon-intro.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-sz-intro",
      "section": "works",
      "works": [
        "solzhenitsyn"
      ],
      "title": "작품 소개: 『이반 데니소비치의 하루』",
      "date": "2025-09-10",
      "type": "수업 자료",
      "description": "작가 솔제니친과 작품의 시대 배경을 소개한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/ivan-intro.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-sz-column",
      "section": "works",
      "works": [
        "solzhenitsyn"
      ],
      "title": "칼럼, 어떻게 쓸 것인가",
      "date": "2025-10-07",
      "type": "수업 자료",
      "description": "칼럼 쓰기 과제를 위해 칼럼의 구성과 쓰는 법을 정리한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/how-to-write-a-column.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "my-sz-column",
      "section": "works",
      "works": [
        "solzhenitsyn"
      ],
      "title": "칼럼 쓰기: 『이반 데니소비치의 하루』",
      "date": "2025-10-13",
      "type": "칼럼",
      "description": "작품을 바탕으로 신문 칼럼 형식으로 쓴 글 (수업 과제)",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/ivan-column.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "grp-sz-themes",
      "section": "works",
      "works": [
        "solzhenitsyn"
      ],
      "title": "그룹워크: 주제별 분석 및 근거 정리",
      "date": "2025-10-15",
      "type": "그룹 활동",
      "description": "Paper 2 준비를 위해 모둠별로 주제와 근거를 정리한 공유 폴더",
      "reflection": "",
      "links": [
        {
          "label": "그룹 폴더 열기",
          "url": "https://drive.google.com/drive/folders/1BBxZSjXz61S0yg2EYo3dxZxCudPwH8AvkvmrTaho7r3dCVjlRccMuuQiRcKAtZ8FypalL6wm"
        }
      ],
      "images": []
    },
    {
      "id": "t-kyh-intro",
      "section": "works",
      "works": [
        "kimyoungha"
      ],
      "title": "Intro: 『작별인사』",
      "date": "2025-10-22",
      "type": "수업 자료",
      "description": "김영하와 『작별인사』를 소개한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/farewell-intro.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "my-kyh-topics",
      "section": "works",
      "works": [
        "kimyoungha"
      ],
      "title": "『작별인사』 에세이 주제 준비",
      "date": "2025-11-09",
      "type": "작품 노트",
      "description": "정체성 등 큰 주제별로 Paper 2 답안을 준비한 노트",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/farewell-essay-topics.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/14FYSjqLu5xlrJWhe-IG-6PC8-5MysBXKB9fuVVEFECQ/edit"
        }
      ],
      "images": []
    },
    {
      "id": "t-kf-kafkaesque",
      "section": "works",
      "works": [
        "kafka"
      ],
      "title": "카프카에스크(kafkaesque)란 무엇인가",
      "date": "2025-12-15",
      "type": "수업 자료",
      "description": "카프카에스크의 뜻과 특징을 정리한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/kafkaesque.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-kf-metamorphosis",
      "section": "works",
      "works": [
        "kafka"
      ],
      "title": "「변신」 수업 슬라이드",
      "date": "2025-12-15",
      "type": "수업 자료",
      "description": "「변신」을 읽으며 다룬 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/metamorphosis-lesson.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-kf-existentialism",
      "section": "works",
      "works": [
        "kafka"
      ],
      "title": "실존주의 문학",
      "date": "2025-12-18",
      "type": "수업 자료",
      "description": "실존주의 문학의 배경과 특징을 정리한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/existentialist-literature.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-kf-hunger",
      "section": "works",
      "works": [
        "kafka"
      ],
      "title": "「어느 단식 광대」 수업 슬라이드",
      "date": "2026-01-14",
      "type": "수업 자료",
      "description": "「어느 단식 광대」를 다룬 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/hunger-artist.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-kf-oedipus",
      "section": "works",
      "works": [
        "kafka"
      ],
      "title": "오이디푸스 컴플렉스와 카프카",
      "date": "2026-01-27",
      "type": "수업 자료",
      "description": "오이디푸스 컴플렉스로 카프카 작품을 읽는 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/oedipus-and-kafka.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-ow-reading",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "조지 오웰의 『1984』 읽기",
      "date": "2026-02-10",
      "type": "수업 자료",
      "description": "『1984』를 읽기 위한 배경과 핵심 개념을 정리한 선생님 수업 슬라이드와 수업 영상",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/reading-1984.pdf"
        },
        {
          "label": "영상: What \"Orwellian\" really means",
          "url": "https://www.youtube.com/watch?v=oe64p-QzhNE"
        }
      ],
      "images": []
    },
    {
      "id": "t-ow-foucault",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "미셸 푸코의 『감시와 처벌』 읽기",
      "date": "2026-02-11",
      "type": "수업 자료",
      "description": "감시와 처벌 개념을 『1984』와 연결해 읽는 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/foucault-discipline-and-punish.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "my-ow-presentation",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "『1984』 작품 연구 1차 조사 & 발표 (내 발표)",
      "date": "2026-02-16",
      "type": "내 발표",
      "description": "『1984』 작품 연구 1차 조사로 만든 내 발표 슬라이드 (Canva)",
      "reflection": "",
      "links": [
        {
          "label": "Canva 열기",
          "url": "https://www.canva.com/design/DAHA_qNAtdk/opUldER064IVjgp7rmwZ9Q/edit"
        }
      ],
      "images": []
    },
    {
      "id": "t-ow-steal",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "STEAL 인물연구",
      "date": "2026-03-04",
      "type": "수업 자료",
      "description": "STEAL 방법으로 인물을 분석하는 활동지",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/steal-characterisation.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "grp-ow-symbols",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "『1984』 상징 연구 (챕터 1–6) 공동 문서",
      "date": "2026-03-08",
      "type": "그룹 활동",
      "description": "반 친구들과 상징을 하나씩 맡아 함께 정리한 공동 문서",
      "reflection": "",
      "links": [
        {
          "label": "공동 문서 열기",
          "url": "https://docs.google.com/document/d/1-hRlYUgIDVDXg18nkh61ByoGwY85IV72wVsU4eFLugg/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-ow-themes",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "『1984』 주제 연구 (그룹)",
      "date": "2026-03-09",
      "type": "그룹 활동",
      "description": "계급 분열, 자유의 억압 등 모둠별 주제 질문에 답한 내 정리와 그룹 폴더",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/1984-themes.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1iEPGeTd4AyDMS0q5MBtDAVFI7Lei7X7qWFBH9fM4j2Y/edit"
        },
        {
          "label": "그룹 폴더",
          "url": "https://drive.google.com/drive/folders/1dzThQqL5Az5AG1Qp8zYws3WHN1-eTz5GXfUvVAfAzg-4W5kQt6x7XSDwD-gvKbpMwfAKPs4a"
        }
      ],
      "images": []
    },
    {
      "id": "my-ow-onetext",
      "section": "works",
      "works": [
        "orwell"
      ],
      "title": "One-text Paper 2 에세이 (짝 활동)",
      "date": "2026-03-16",
      "type": "에세이",
      "description": "텔레스크린과 사상경찰의 상징으로 감시의 위험성을 분석한 짝 에세이",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/1984-one-text-essay.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1eMjBcqwIPDsrn545GK-VzrkwLCHWyW1QF6m-Sj4pgN8/edit"
        },
        {
          "label": "선생님 질문지",
          "url": "https://docs.google.com/document/d/1TAlT0TmyWe16_sLfViMYbQWsRYCNqGvfH3JbroyBCwY/edit"
        }
      ],
      "images": []
    },
    {
      "id": "t-p1-news",
      "section": "paper1",
      "works": [],
      "title": "기사문, 어떻게 쓸 것인가",
      "date": "2026-05-26",
      "type": "수업 자료",
      "description": "기사문의 구조와 특징을 정리한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/how-to-write-news.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-p1-opinion",
      "section": "paper1",
      "works": [],
      "title": "사설과 칼럼과 블로그, 어떻게 다른가",
      "date": "2026-05-26",
      "type": "수업 자료",
      "description": "사설, 칼럼, 블로그의 차이를 비교한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/editorial-column-blog.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-p1-visual",
      "section": "paper1",
      "works": [],
      "title": "비주얼텍스트 분석",
      "date": "2026-05-27",
      "type": "수업 자료",
      "description": "포스터, 광고 등 비주얼텍스트를 분석하는 방법을 정리한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/visual-text-analysis.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "grp-p1-media",
      "section": "paper1",
      "works": [],
      "title": "매체별 특징 정리 (짝 활동)",
      "date": "2026-05-27",
      "type": "그룹 활동",
      "description": "매체 유형별 특징을 짝과 함께 정리한 Padlet 보드",
      "reflection": "",
      "links": [
        {
          "label": "Padlet 열기",
          "url": "https://padlet.com/sarahmoon3/yutndulfwasi2w84"
        }
      ],
      "images": []
    },
    {
      "id": "t-p1-guide",
      "section": "paper1",
      "works": [],
      "title": "Paper 1 시험 안내",
      "date": "2026-08-25",
      "type": "수업 자료",
      "description": "Paper 1 시험 형식과 준비 방법을 안내한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/paper1-guide.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "t-p1-structure",
      "section": "paper1",
      "works": [],
      "title": "Paper 1 에세이 문단 구조",
      "date": "2026-08-25",
      "type": "수업 자료",
      "description": "Paper 1 분석 에세이의 문단 구성 방법 (v2027)",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/paper1-paragraph-structure.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "my-p1-chachacha",
      "section": "paper1",
      "works": [],
      "title": "May 2013 T1 '차, 차, 차' 에세이",
      "date": "2026-08-27",
      "type": "에세이",
      "description": "자동차 전시회 소개 기사를 분석한 Paper 1 에세이 (기출문제 연습)",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p1-chachacha.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/18RydldaFjkSl5QMK7snihxPzTOzYVHseywjUIAAmvL4/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-p1-eco",
      "section": "paper1",
      "works": [],
      "title": "다시 쓰기: 친환경 설 명절 보내기",
      "date": "2026-09-03",
      "type": "에세이",
      "description": "환경부 인포그래픽 포스터를 분석한 에세이의 수정본",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p1-rewrite-eco-holiday.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1pJBQTKnTThxTTuy2gT5eJpwYGJl1kLq-5Q-LaXmtSGo/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-p1-bibimbap",
      "section": "paper1",
      "works": [],
      "title": "다시 쓰기: 비빔밥과 다문화",
      "date": "2026-09-14",
      "type": "에세이",
      "description": "비빔밥을 은유로 다문화 사회를 다룬 칼럼을 분석한 에세이의 수정본",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p1-rewrite-bibimbap.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1hWhS4IegVSShAObVeTbpCOA2kViNmI0qXL2AgKkYrYk/edit"
        }
      ],
      "images": []
    },
    {
      "id": "p2-intro-1",
      "section": "paper2",
      "works": [
        "parkjiwon"
      ],
      "title": "서론 연습 1",
      "date": "2025-09-02",
      "type": "서론 연습",
      "description": "47번 문제(편견)로 쓴 서론과 토픽 센텐스 연습",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1Pi2MoujVoMrqMthEZr5_0jSv1AuPv38ydTMgi2BfXH8/edit?tab=t.0"
        }
      ],
      "images": []
    },
    {
      "id": "p2-intro-2",
      "section": "paper2",
      "works": [
        "parkjiwon"
      ],
      "title": "서론 연습 2",
      "date": "2025-09-02",
      "type": "서론 연습",
      "description": "48번 문제(윤리와 도덕)로 쓴 서론과 토픽 센텐스 연습",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1s-4YS5RqDibeWFvMQ9zFJ0w1E4wNFuWmZ2Iad2h3sHY/edit?tab=t.0"
        }
      ],
      "images": []
    },
    {
      "id": "p2-intro-notes",
      "section": "paper2",
      "works": [
        "parkjiwon"
      ],
      "title": "서론 시험 준비 손노트",
      "date": "",
      "type": "손노트",
      "description": "박지원 작품으로 서론 구성과 외울 문장을 정리한 손노트",
      "reflection": "",
      "links": [],
      "images": [
        {
          "src": "images/p2-seoron-sonnote.jpg",
          "alt": "박지원 서론 준비 손노트"
        }
      ]
    },
    {
      "id": "p2-compare",
      "section": "paper2",
      "works": [
        "solzhenitsyn"
      ],
      "title": "비교 에세이 연습",
      "date": "2025-10-20",
      "type": "에세이",
      "description": "『이반 데니소비치의 하루』에서 희망의 개념을 분석한 에세이 연습 (수업 과제)",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1fRWXqlq2AjtB8i1SBbV4yZ2oW9JLUBSFjndzERvrKAA/edit?tab=t.0"
        }
      ],
      "images": []
    },
    {
      "id": "p2-sz-essay",
      "section": "paper2",
      "works": [
        "solzhenitsyn"
      ],
      "title": "『이반 데니소비치의 하루』 단독 에세이",
      "date": "2025-10-26",
      "type": "에세이",
      "description": "Paper 2 준비를 위해 한 작품에 집중해 쓴 에세이",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/15_CsaMIJKTCn22vI7CVSFRkVPoHQSlrxpm1Y01x6H9w/edit?tab=t.c2scag5cuoj8"
        }
      ],
      "images": []
    },
    {
      "id": "p2-essays",
      "section": "paper2",
      "works": [
        "parkjiwon",
        "solzhenitsyn"
      ],
      "title": "Paper 2 준비 에세이 연습 모음",
      "date": "2025-11-12",
      "type": "에세이",
      "description": "Paper 2 기출 문제마다 입장과 개요를 정리한 복습 문서",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1RDhWIOyqsegAzLtN2aAx334H5njvCYXvso8KxPlhgj4/edit?usp=sharing"
        }
      ],
      "images": []
    },
    {
      "id": "p2-fortress",
      "section": "paper2",
      "works": [
        "kimyoungha",
        "solzhenitsyn",
        "kafka",
        "orwell"
      ],
      "title": "난공불락 P2 준비",
      "date": "2026-03-23",
      "type": "에세이 준비",
      "description": "네 작품의 인물, 결말, 기법을 비교할 수 있게 정리한 Paper 2 준비 문서",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1Ha2TFz7tw_zF3La6oABP0Zu2LR4J9rO-Cat0ow4_jCY/edit?usp=sharing"
        }
      ],
      "images": []
    },
    {
      "id": "p2-intro-class",
      "section": "paper2",
      "works": [
        "kafka"
      ],
      "title": "서론 연습 교내 활동",
      "date": "2026-05-22",
      "type": "서론 연습",
      "description": "수업 시간에 고른 문제로 서론을 완성한 활동",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1OD-IsaU3fLzuyxCIVgOUwmLXcJTkImnwfHdPIbfRbhw/edit?usp=sharing"
        }
      ],
      "images": []
    },
    {
      "id": "p2-endings",
      "section": "paper2",
      "works": [],
      "title": "결말의 유형 슬라이드",
      "date": "",
      "type": "수업 자료",
      "description": "소설 결말의 여러 유형을 정리한 슬라이드 (PDF)",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "https://drive.google.com/file/d/12ZA19zomDx8cu-RG-NoCPpQi3JD3u_oF/view"
        }
      ],
      "images": []
    },
    {
      "id": "tip-how-to",
      "section": "paper2",
      "works": [],
      "title": "Paper 2 잘 쓰는 법",
      "date": "",
      "type": "수업 자료",
      "description": "Mrs. Sarah Moon이 정리한 Paper 2 에세이 쓰는 방법",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/class/paper2-how-to-write.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "tip-tricks",
      "section": "paper2",
      "works": [],
      "title": "Paper Two Essay: Mrs. Moon's Tips and Tricks",
      "date": "",
      "type": "수업 자료",
      "description": "질문을 unpack하는 방법 등 Paper 2 에세이 팁 정리",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/class/paper2-tips-and-tricks.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "p2-sample-conflict",
      "section": "paper2",
      "works": [
        "solzhenitsyn",
        "kafka"
      ],
      "title": "선생님 예시 에세이: 등장인물 간의 갈등은 소설에 극적인 효과를 가져다 준다",
      "date": "",
      "type": "예시 에세이",
      "description": "선생님이 쓴 Paper 2 비교 예시 에세이 (인쇄본 사진과 옮겨 적은 글)",
      "reflection": "",
      "links": [
        {
          "label": "옮겨 적은 글 (PDF)",
          "url": "files/paper2/sample-character-conflict.pdf"
        }
      ],
      "images": [
        {
          "src": "images/paper2/sample-conflict-1.jpg",
          "alt": "선생님 예시 에세이 인쇄본 1쪽"
        },
        {
          "src": "images/paper2/sample-conflict-2.jpg",
          "alt": "선생님 예시 에세이 인쇄본 2쪽"
        },
        {
          "src": "images/paper2/sample-conflict-3.jpg",
          "alt": "선생님 예시 에세이 인쇄본 3쪽"
        }
      ],
      "imageLabel": "인쇄본 사진 보기"
    },
    {
      "id": "t-p2-literature",
      "section": "paper2",
      "works": [],
      "title": "문학이란 무엇인가",
      "date": "2025-10-29",
      "type": "수업 자료",
      "description": "Paper 2를 위해 문학의 기능을 복습한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/what-is-literature.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "my-p2-sample-rewrite",
      "section": "paper2",
      "works": [
        "solzhenitsyn",
        "kafka"
      ],
      "title": "샘플보고 P2 에세이 다시 쓰기",
      "date": "2025-11-12",
      "type": "에세이",
      "description": "선생님 예시 에세이를 보고 같은 질문(등장인물 간의 갈등)으로 다시 쓴 에세이",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p2-rewrite-after-sample.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1s-r7I4RwGi5m2exkPIkS7Mc7RkdOHNgHQarsAz5k91E/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-p2-q1-4",
      "section": "paper2",
      "works": [],
      "title": "에세이 완성: 기출문제 1–4번 중 택1",
      "date": "2025-11-17",
      "type": "에세이",
      "description": "2번(작가는 등장인물을 통해 사상을 전달한다)을 골라 쓴 에세이",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p2-essay-q1-4.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1WQHbtyy0Ok81Oe7PveMtbHW2ELHM9cIRDsEOYgnkQ3E/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-p2-q5-8-plan",
      "section": "paper2",
      "works": [],
      "title": "브레인스토밍: 기출문제 5–8번",
      "date": "2025-11-25",
      "type": "플래닝",
      "description": "기출문제 5–8번의 입장과 개요를 정리한 브레인스토밍",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p2-brainstorm-q5-8.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1P3sCa_MBg1HVlKJPGE6PX0LKnIhaYrS8271IaWaBF1g/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-p2-q5-8",
      "section": "paper2",
      "works": [],
      "title": "에세이: 기출문제 5–8번 중 택1",
      "date": "2025-11-26",
      "type": "에세이",
      "description": "5번(문학은 지식 전달뿐 아니라 감동을 주는 예술이다)을 골라 쓴 에세이",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p2-essay-q5-8.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1f1np42MUhpkNwnBb5qctxpPrFYy3pHYN5Ygg46fdMXg/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-p2-q17-26-plan",
      "section": "paper2",
      "works": [],
      "title": "브레인스토밍: 기출문제 #17–26 플래닝과 서론",
      "date": "2026-10-28",
      "type": "플래닝",
      "description": "23번 등 두 문제를 골라 플래닝하고 서론, 토픽센텐스, 결론까지 쓴 문서",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p2-planning-q17-26.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1m9tRjDfyWH9TqIJX_0hDlkWEU86efdkm-LVHc5Fml9g/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-p2-q17-26-ts",
      "section": "paper2",
      "works": [],
      "title": "기출문제 #17–26: thesis statement와 토픽센텐스",
      "date": "2026-11-04",
      "type": "플래닝",
      "description": "나머지 여섯 문제의 thesis statement와 토픽센텐스를 정리한 문서",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p2-thesis-q17-26.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1HBrnhizn5uE17fNArWyHMLDfeRvuELq0UgbX7cDrN0o/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-p2-q17-26",
      "section": "paper2",
      "works": [],
      "title": "기출문제 #17–26: 한 문제 골라서 에세이 완성",
      "date": "2026-11-05",
      "type": "에세이",
      "description": "26번(작가의 의무는 모든 부정에 항거하는 것이다)을 골라 수업 시간에 쓴 에세이",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/p2-essay-q17-26.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1IIjWxUk732sWfAsikCk9Ncd8VWUgB4sn1yqHUuBM1Ug/edit"
        }
      ],
      "images": []
    },
    {
      "id": "ex-mirror",
      "section": "exams",
      "works": [
        "solzhenitsyn",
        "kimyoungha"
      ],
      "title": "'문학은 인생의 거울이다' 이 말에 동의하는가",
      "date": "",
      "type": "Paper 2 에세이",
      "description": "Paper 2 비교 에세이",
      "reflection": "",
      "links": [
        {
          "label": "옮겨 적은 글 (PDF)",
          "url": "files/exam-essays/mirror-of-life.pdf"
        }
      ],
      "images": [
        {
          "src": "images/exams/exam-mirror-1.jpg",
          "alt": "원본 답안지 1쪽"
        },
        {
          "src": "images/exams/exam-mirror-2.jpg",
          "alt": "원본 답안지 2쪽"
        },
        {
          "src": "images/exams/exam-mirror-3.jpg",
          "alt": "원본 답안지 3쪽"
        }
      ],
      "imageLabel": "원본 사진 보기"
    },
    {
      "id": "ex-fiction-truth",
      "section": "exams",
      "works": [
        "solzhenitsyn",
        "kimyoungha"
      ],
      "title": "문학은 허구임에도 진실을 추구한다",
      "date": "",
      "type": "Paper 2 에세이",
      "description": "Paper 2 비교 에세이",
      "reflection": "",
      "links": [
        {
          "label": "옮겨 적은 글 (PDF)",
          "url": "files/exam-essays/fiction-and-truth.pdf"
        }
      ],
      "images": [
        {
          "src": "images/exams/exam-fiction-truth-1.jpg",
          "alt": "원본 답안지 1쪽"
        },
        {
          "src": "images/exams/exam-fiction-truth-2.jpg",
          "alt": "원본 답안지 2쪽"
        },
        {
          "src": "images/exams/exam-fiction-truth-3.jpg",
          "alt": "원본 답안지 3쪽"
        }
      ],
      "imageLabel": "원본 사진 보기"
    },
    {
      "id": "ex-writers-duty",
      "section": "exams",
      "works": [
        "solzhenitsyn",
        "orwell"
      ],
      "title": "작가의 의무는 모든 부정에 항거하는 것이다",
      "date": "",
      "type": "Paper 2 에세이",
      "description": "Paper 2 비교 에세이",
      "reflection": "",
      "links": [
        {
          "label": "옮겨 적은 글 (PDF)",
          "url": "files/exam-essays/writers-duty.pdf"
        }
      ],
      "images": [
        {
          "src": "images/exams/exam-writers-duty-1.jpg",
          "alt": "원본 답안지 1쪽"
        },
        {
          "src": "images/exams/exam-writers-duty-2.jpg",
          "alt": "원본 답안지 2쪽"
        },
        {
          "src": "images/exams/exam-writers-duty-3.jpg",
          "alt": "원본 답안지 3쪽"
        }
      ],
      "imageLabel": "원본 사진 보기"
    },
    {
      "id": "ex-symbols-kafka",
      "section": "exams",
      "works": [
        "kafka"
      ],
      "title": "작가가 상징을 사용해 사상을 전달하는 방식 분석",
      "date": "",
      "type": "Paper 2 에세이",
      "description": "「변신」과 「선고」의 상징을 분석한 Paper 2 에세이",
      "reflection": "",
      "links": [
        {
          "label": "옮겨 적은 글 (PDF)",
          "url": "files/exam-essays/symbols-kafka.pdf"
        }
      ],
      "images": [],
      "imageLabel": "원본 사진 보기"
    },
    {
      "id": "ex-symbols-1984",
      "section": "exams",
      "works": [
        "orwell"
      ],
      "title": "상징의 방식과 효과를 분석하시오",
      "date": "",
      "type": "문학 분석 에세이",
      "description": "『1984』의 상징을 분석한 에세이",
      "reflection": "",
      "links": [
        {
          "label": "옮겨 적은 글 (PDF)",
          "url": "files/exam-essays/symbols-1984.pdf"
        }
      ],
      "images": [
        {
          "src": "images/exams/exam-symbols-1984-1.jpg",
          "alt": "원본 답안지 1쪽"
        },
        {
          "src": "images/exams/exam-symbols-1984-2.jpg",
          "alt": "원본 답안지 2쪽"
        }
      ],
      "imageLabel": "원본 사진 보기"
    },
    {
      "id": "io-outline",
      "section": "io",
      "works": [
        "yundongju"
      ],
      "title": "Mock IO 개요",
      "date": "2026-05-13",
      "type": "IO 개요",
      "description": "글로벌 이슈(경계인으로서 이주민들이 겪는 사회적 소외와 심리적 불안)와 두 발췌문을 정한 계획서. 문학: 윤동주 「간」 · 비문학: 신혜란 『우리는 모두 조선족이다』 6장",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/15PbqrRJFsKBz60UpjerSRVHgMi3oUqkk_o_YKixc674/edit?usp=sharing"
        }
      ],
      "images": []
    },
    {
      "id": "io-draft",
      "section": "io",
      "works": [
        "yundongju"
      ],
      "title": "Mock IO 초안",
      "date": "2026-05-22",
      "type": "IO 스크립트",
      "description": "같은 글로벌 이슈와 발췌문으로 쓴 IO 스크립트 초안",
      "reflection": "",
      "links": [
        {
          "label": "Google 문서 열기",
          "url": "https://docs.google.com/document/d/1y9uDKM1kEXZA8NF4xWIeGDh5g9NyL0m5P-ZUTxNUtRw/edit?usp=sharing"
        }
      ],
      "images": []
    },
    {
      "id": "io-gi",
      "section": "io",
      "works": [
        "yundongju"
      ],
      "title": "G.I 만들기",
      "date": "",
      "type": "교내 활동",
      "description": "윤동주 시집과 『우리는 모두 조선족이다』를 바탕으로 글로벌 이슈를 정할 때 도움이 된 교내 활동지",
      "reflection": "",
      "links": [],
      "images": [
        {
          "src": "images/io-gi-mandeulgi.jpg",
          "alt": "디아스포라 기반 글로벌 이슈 활동지"
        }
      ]
    },
    {
      "id": "t-io-guide",
      "section": "io",
      "works": [],
      "title": "Individual Oral 안내",
      "date": "2026-03-25",
      "type": "수업 자료",
      "description": "IO의 형식, 평가기준, 준비 과정을 안내한 선생님 수업 슬라이드",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/teacher/individual-oral-guide.pdf"
        }
      ],
      "images": []
    },
    {
      "id": "my-io-planner1",
      "section": "io",
      "works": [
        "yundongju"
      ],
      "title": "IO Planner Step 1",
      "date": "2026-05-13",
      "type": "IO 개요",
      "description": "도입과 글로벌 이슈, 두 작품의 맥락을 정리한 첫 번째 플래너",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/io-planner-step1.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1Wlx_Z_tles2XLL1_6azotwQ_RlyUW5h75-sqKL0R1a0/edit"
        }
      ],
      "images": []
    },
    {
      "id": "my-io-extracts",
      "section": "io",
      "works": [
        "yundongju"
      ],
      "title": "IO 발췌문",
      "date": "2026-09-16",
      "type": "IO 발췌문",
      "description": "Final IO에 사용한 문학·비문학 발췌문 제출본 (PDF)",
      "reflection": "",
      "links": [
        {
          "label": "Google Drive에서 열기",
          "url": "https://drive.google.com/file/d/16FvsuWT34h-wzqqlFUl1usYBYqn-7hdY/view"
        }
      ],
      "images": []
    },
    {
      "id": "my-io-final",
      "section": "io",
      "works": [
        "yundongju"
      ],
      "title": "Final IO 스크립트",
      "date": "2026-09-23",
      "type": "IO 스크립트",
      "description": "Final IO를 위해 완성한 스크립트",
      "reflection": "",
      "links": [
        {
          "label": "PDF 열기",
          "url": "files/classroom/my-work/io-final-script.pdf"
        },
        {
          "label": "Google 문서",
          "url": "https://docs.google.com/document/d/1q4k97H_OmjhvvBtIr32HqdK7phv4pUIOkrr6w8lCMH4/edit"
        }
      ],
      "images": []
    }
  ]
};
