import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import SwiperSlide1 from "assets/images/mainpage/SwiperSlide1.png"
import SwiperSlide2 from "assets/images/mainpage/SwiperSlide2.png"
import SwiperSlide3 from "assets/images/mainpage/SwiperSlide3.png"
import SwiperSlide4 from "assets/images/mainpage/SwiperSlide4.png"
import SwiperSlide5 from "assets/images/mainpage/SwiperSlide5.png"
import { SearchForm } from 'components';


const MainPageSwiper = styled.div`
 
    position: relative;
    margin-bottom: 150px;
    display: flex;
    justify-content: center;
    img {
        width: 100%;
        height: 800px;
        object-fit:cover;
    };

    .swiper-pagination{
        margin-bottom: 130px;
        display:flex;
        justify-content: center;
        font-size: 40px;
     
    };

    .swiper-pagination-bullet {
        background: #FFFFFF !important;
        width: 20px;
        height: 20px;
        margin: 40px;
       
    };

    .swiper-button-prev,
    .swiper-button-next {
    background: var(--white-15, rgba(255, 255, 255, 0.15));
    opacity: 1;
    padding: 6px 15px ;
    border-radius: 50%;
    color: #FFFFFF !important;
    margin-left: 120px;
    margin-right: 120px;
    margin-bottom: 50px;
    };

    .swiper-button-prev:after,
    .swiper-button-next:after {
    font-size: 24px !important;
    font-weight: 600 !important;
}
`
const Nav = styled.div`
    position: absolute;
    z-index: 1;
    margin-top: 700px;
`

export default function MainPage() {
  return (
    <MainPageSwiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
                <img src={SwiperSlide1} alt=""/>
        </SwiperSlide>
        <SwiperSlide onClick={() => { window.location.href = 'https://www.hankooktire.com/kr/ko/company/media-list/media-detail.628638.html?tabCode=&contentType='; }}>
            <img src={SwiperSlide2} alt=""></img>
        </SwiperSlide>
        <SwiperSlide onClick={() => { window.location.href = 'https://www.nexentire.com/kr/media/news/1241108_1224.php'; }}>
            <img src={SwiperSlide3} alt=""></img>
        </SwiperSlide>
        <SwiperSlide onClick={() => { window.location.href = 'https://www.nexentire.com/kr/media/news/1240958_1224.php'; }}>
            <img src={SwiperSlide4} alt=""></img>
        </SwiperSlide>
        <SwiperSlide onClick={() => { window.location.href = 'https://www.businesspost.co.kr/BP?command=article_view&num=233620'; }}>
            <img src={SwiperSlide5} alt=""></img>
        </SwiperSlide>
      </Swiper>
      <Nav>
         <SearchForm/>
      </Nav>
    </MainPageSwiper>
  );
};

