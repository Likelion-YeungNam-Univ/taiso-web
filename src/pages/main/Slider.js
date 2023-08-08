// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import SwiperSlide1 from "assets/images/mainpage/SwiperSlide1.png"
import SwiperSlide2 from "assets/images/mainpage/SwiperSlide2.jpg"
import SwiperSlide3 from "assets/images/mainpage/SwiperSlide3.jpg"
import SwiperSlide4 from "assets/images/mainpage/SwiperSlide4.jpg"
import SwiperSlide5 from "assets/images/mainpage/SwiperSlide5.jpg"
import { ReactComponent as SlideLogo } from "assets/images/mainpage/SlideLogo.svg";

const MainPageSwiper = styled.div`

    img {
        width: 100%;
        height: 800px;
        object-fit:cover;
    };

    .title-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-110%, -130%);
        color: white;
        padding: 10px;
        font-size: 85px;
    };

    .slide-logo {
        position: absolute;
        
        top: 50%;
        left: 50%;
        transform: translate(60%, 40%);
        
    };
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
            <div>
                <img src={SwiperSlide1} alt=""/>
                <div className="title-content">
                    <h3>더 이상 추천받지 않는 <br/>안전을 위하여,</h3>
                </div>
                <div className="slide-logo">
                    <SlideLogo/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={SwiperSlide2} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={SwiperSlide3} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={SwiperSlide4} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={SwiperSlide5} alt=""></img>
        </SwiperSlide>
      </Swiper>
    </MainPageSwiper>
  );
};
