# YU LIKELION

### 📌 Branch Naming Convention

```
main ── develop ── feature/ ??

```

### 컴포넌트 구성하기

C:.
│ App.js
│ index.js
│
├───assets (이미지 파일 넣는 곳 - 예) LoginForm.jpg )
├───components
│ │ index.js
│ │
│ ├───auth
│ │ index.js
│ │ LoginForm.js (네이버, 카카오, 구글 버튼) 수비
│ │  
│ ├───topbar 강록

│ │ TopBar.js

│ │
│ ├───header 강록
│ │ index.js
│ │ Header.js
│ │  
│ ├───footer 강록

│ │ Footer.js

│ │
│ └───main

│ HotBoard.js (인기 타이어 전체 화면) 수비

│ - HotList.js (인기 타이어 아이템 전체 화면)

│ - HotItem.js (인기 타이어 각각 아이템 화면)

│ RecommandBoard.js (타이어 추천 전체 화면) 민정

│ - RecommandList.js (타이어 추천 아이템 전체 화면)

│ - RecommandItem.js (타이어 추천 각각 아이템 화면)

│ ReviewBoard.js (타이어 후기 전체 화면) 민정

│ - ReviewList.js (타이어 후기 아이템 전체 아이템 화면)

│ - ReviewItem.js (타이어 후기 각각 아이템 화면)

│ StoryBoard.js (타이어 이야기 전체 화면) 민정

│ - StoryList.js (타이어 이야기 아이템 전체 화면)

│ - StoryItem.js (타이어 이야기 각각 아이템 전체 화면)

│ SearchForm.js (차종으로 찾기) 민정  
└───pages
│ index.js
│

     ├───auth
     │       index.js

     │       SignInPage.js (로그인 전체 페이지) 수비
     │
     └───main
              index.js
              MainPage.js (메인 화면 타이어 이미지) 강록
