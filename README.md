# YU LIKELION

### 📌 Branch Naming Convention

```
main ── develop ── feature/"
```

### 📌 컴포넌트 구성하기

```
.
├── App.js
├── App.test.js
├── assets
│   ├── googleLogo.png
│   ├── images
│   │   ├── FooterLogo.svg
│   │   ├── HeaderLogo.svg
│   │   ├── mainpage
│   │   │   ├── SlideLogo.svg
│   │   │   ├── SwiperSlide1.png
│   │   │   ├── SwiperSlide2.jpg
│   │   │   ├── SwiperSlide3.jpg
│   │   │   ├── SwiperSlide4.jpg
│   │   │   └── SwiperSlide5.jpg
│   │   └── recommand
│   │       ├── ThumbUp.svg
│   │       ├── brand
│   │       │   ├── Continental.svg
│   │       │   └── Kumho.svg
│   │       └── tires
│   │           ├── ct_dw506.svg
│   │           └── kh_hp71.svg
│   ├── kakaoLogo.png
│   ├── naverLogo.png
│   ├── tire1.png
│   └── tireLogo.jpg
├── components
│   ├── auth
│   ├── footer
│   │   ├── Footer.js
│   │   └── index.js
│   ├── header
│   │   ├── Header.js
│   │   └── index.js
│   ├── index.js
│   ├── main
│   │   ├── SearchForm.js
│   │   ├── hot
│   │   │   ├── HotBoard.js
│   │   │   ├── HotItem.js
│   │   │   └── HotList.js
│   │   ├── recommand
│   │   │   ├── RecommandBoard.js
│   │   │   ├── RecommandItem.js
│   │   │   └── RecommandList.js
│   │   ├── review
│   │   │   ├── ReviewBoard.js
│   │   │   ├── ReviewItem.js
│   │   │   └── ReviewList.js
│   │   └── story
│   │       ├── StoryBoard.js
│   │       ├── StoryItem.js
│   │       └── StoryList.js
│   └── topbar
│       ├── TopBar.js
│       └── index.js
├── index.js
└── pages
    ├── auth
    │   ├── NaverLogin.js
    │   ├── SignInPage.js
    │   └── index.js
    ├── index.js
    └── main
        ├── MainPage.js
        ├── Slider.js
        └── index.js
```

### 📌 Commit Convention

| emoji                       | message  | description                                           |
| --------------------------- | -------- | ----------------------------------------------------- |
| :sparkles:                  | feat     | 새로운 기능 추가, 기존 기능을 요구 사항에 맞추어 수정 |
| :bug:                       | fix      | 기능에 대한 버그 수정                                 |
| :green_heart:               | build    | 빌드 관련 수정                                        |
| :pushpin:                   | chore    | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore    |
| :construction_worker:       | ci       | CI 관련 설정 수정                                     |
| :closed_book:               | docs     | 문서(주석) 수정                                       |
| :art:                       | style    | 코드 스타일, 포맷팅에 대한 수정                       |
| :recycle:                   | refactor | 기능 변화가 아닌 코드 리팩터링                        |
| :white_check_mark:          | test     | 테스트 코드 추가/수정                                 |
| :bookmark:                  | release  | 버전 릴리즈                                           |
| :ambulance:                 | hotfix   | 긴급 수정                                             |
| :twisted_rightwards_arrows: | branch   | 브랜치 추가/병합                                      |
