import { Swiper, SwiperSlide } from 'swiper/react';
import SlideBoardItem from "./SildeBoardItem"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { styled } from 'styled-components';



export default function RecommandSlider() {

const Slider = styled.div`
    .swiper-button-prev,
    .swiper-button-next {
    /* background: var(--white-15, rgba(255, 255, 255, 0.15)); */ 
    /* background: #808080;
    opacity: 1;
    padding: 6px 15px ; */
    /* border-radius: 50%; */
    /* color: #FFFFFF !important;
    margin-bottom: 50px;  */
    display: none;
    
    };

    /* .swiper-button-prev:after,
    .swiper-button-next:after {
    font-size: 24px !important;
    font-weight: 600 !important;
} */
    .swiper {
        width: 1200px;
        margin: 0 auto;
    }
`
const RecommandBox = styled.div`
`
const SliderTitle = styled.div`
    width: 1200px;
    margin: 0 auto;

    p{
        color: #323334;
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 40px;
    }
`

  return (
    <RecommandBox>
        <SliderTitle>
            <p>이 상품에 관심있는 사람들이 함께 본 제품</p>
        </SliderTitle>
        <Slider>
            <Swiper
                // onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
                <SwiperSlide><SlideBoardItem/></SwiperSlide>
             </Swiper>
        </Slider>
    </RecommandBox>
    
  );
}
