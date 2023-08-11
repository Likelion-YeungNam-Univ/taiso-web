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
import SwiperSlide2 from "assets/images/mainpage/SwiperSlide2.png"
import SwiperSlide3 from "assets/images/mainpage/SwiperSlide3.jpg"
import SwiperSlide4 from "assets/images/mainpage/SwiperSlide4.jpg"
import SwiperSlide5 from "assets/images/mainpage/SwiperSlide5.jpg"
// import { ReactComponent as SlideLogo } from "assets/images/mainpage/SlideLogo.svg";
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

    .title-content {
        /* position: absolute; */
        /* top: 50%;
        left: 50%;
        transform: translate(-80%, -100%);
        color: white;
        padding: 10px;
        font-size: 85px; */
        /* display: flex;
        align-items: center;
        justify-content: center; */
    };

    .slide-logo {
        /* position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%; 
        transform: translate(20%, 40%);
        display: flex;
        align-items: center;
        justify-content: center;
         */
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
            <div className= "slider1">
                <img src={SwiperSlide1} alt=""/>
                {/* <div className="title-content">
                    <h3>더 이상 추천받지 않는 <br/>안전을 위하여,</h3>
                </div>
                <div className="slide-logo">
                    <SlideLogo/>
                </div> */}
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
      <Nav>
         <SearchForm/>
      </Nav>
    </MainPageSwiper>
  );
};

