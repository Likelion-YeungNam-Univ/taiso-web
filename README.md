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
├── Test1.js
├── Test2.js
├── assets
│   └── images
│       ├── hot
│       │   └── tires
│       │       ├── Fire.svg
│       │       ├── tire1.svg
│       │       ├── tire2.svg
│       │       └── tire3.svg
│       ├── login
│       │   ├── GoogleIcon.png
│       │   ├── GoogleLogo.png
│       │   ├── KakaoIcon.png
│       │   ├── KakaoLogo.png
│       │   ├── Mask group.svg
│       │   ├── NaverIcon.png
│       │   ├── NaverLogo.png
│       │   └── TireLogo.jpg
│       ├── logo
│       │   ├── FooterLogo.svg
│       │   └── HeaderLogo.svg
│       ├── mainpage
│       │   ├── Ad.svg
│       │   ├── SlideLogo.svg
│       │   ├── SwiperSlide1.png
│       │   ├── SwiperSlide2.png
│       │   ├── SwiperSlide3.jpg
│       │   ├── SwiperSlide4.jpg
│       │   └── SwiperSlide5.jpg
│       ├── mypage
│       │   ├── Image.svg
│       │   └── Tire.png
│       ├── news
│       │   ├── BigNews.svg
│       │   ├── News.svg
│       │   ├── News2.svg
│       │   ├── News3.svg
│       │   ├── News4.svg
│       │   ├── News5.svg
│       │   ├── News6.svg
│       │   ├── News7.svg
│       │   ├── News8.svg
│       │   └── NewsContent.svg
│       ├── recommand
│       │   ├── ThumbUp.svg
│       │   ├── brand
│       │   │   ├── Continental.svg
│       │   │   └── Kumho.svg
│       │   └── tires
│       │       ├── ct_dw506.svg
│       │       └── kh_hp71.svg
│       ├── review
│       │   ├── ReviewIcon.svg
│       │   ├── person1.svg
│       │   ├── person2.svg
│       │   ├── person3.svg
│       │   ├── person4.svg
│       │   ├── person5.svg
│       │   └── person6.svg
│       ├── search
│       │   ├── SearchPageAd.svg
│       │   ├── emptylike.svg
│       │   ├── filllike.svg
│       │   ├── kh_hp71_d14.svg
│       │   ├── kh_hp71_d15.svg
│       │   └── kh_hp71_d16.svg
│       └── story
│           ├── StoryIcon.svg
│           ├── picture1.svg
│           └── picture2.svg
├── components
│   ├── auth
│   ├── filter
│   │   ├── BrandFilter.js
│   │   ├── CategoryFilter.js
│   │   ├── SearchFilter.js
│   │   ├── SizeFilter.js
│   │   ├── TypeFilter.js
│   │   ├── WeatherFilter.js
│   │   ├── index.js
│   │   └── sizeFilter
│   │       ├── Inch.js
│   │       ├── SectionWidth.js
│   │       ├── SideBySide.js
│   │       └── SizeFooter.js
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
│   │   │   ├── HotList.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   ├── recommand
│   │   │   ├── RecommandBoard.js
│   │   │   ├── RecommandItem.js
│   │   │   ├── RecommandList.js
│   │   │   └── index.js
│   │   ├── review
│   │   │   ├── ReviewBoard.js
│   │   │   ├── ReviewItem.js
│   │   │   └── ReviewList.js
│   │   └── story
│   │       ├── StoryBoard.js
│   │       ├── StoryItem.js
│   │       ├── StoryList.js
│   │       └── index.js
│   ├── mypage
│   │   ├── Mybookmark.js
│   │   ├── MybookmarkBoard.js
│   │   ├── MybookmarkItem.js
│   │   ├── MybookmarkList.js
│   │   ├── Mycar.js
│   │   ├── Myprofile.js
│   │   ├── RegisterCar.js
│   │   └── index.js
│   ├── news
│   │   ├── HotNews
│   │   │   ├── HotNBoard.js
│   │   │   ├── HotNItem.js
│   │   │   ├── HotNList.js
│   │   │   └── index.js
│   │   ├── RecentNews
│   │   │   ├── RecentBoard.js
│   │   │   ├── RecentItem.js
│   │   │   ├── RecentList.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── search
│   │   ├── Pagination.js
│   │   ├── ResultBoard.js
│   │   ├── ResultItem.js
│   │   ├── ResultList.js
│   │   ├── SearchRecommendBoard.js
│   │   ├── SearchRecommendItem.js
│   │   ├── SearchRecommendList.js
│   │   ├── Tires.js
│   │   └── index.js
│   └── topbar
│       ├── TopBar.js
│       └── index.js
├── index.js
└── pages
    ├── auth
    │   ├── SignInPage.js
    │   └── index.js
    ├── index.js
    ├── main
    │   ├── AdPart.js
    │   ├── MainPage.js
    │   ├── Slider.js
    │   └── index.js
    ├── mypage
    │   ├── Mypage.js
    │   ├── RegisterCarPage.js
    │   └── index.js
    ├── news
    │   ├── NewsPage.js
    │   └── index.js
    └── search
        ├── PageAd.js
        ├── SearchHeader.js
        ├── SearchPage.js
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
