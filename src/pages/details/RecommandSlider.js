
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SlideBoardItem from "./SildeBoardItem"
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';

// // import required modules
// import { FreeMode, Pagination } from 'swiper';

// export default function RecommandSlider() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide><SlideBoardItem/></SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

   
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SlideBoardItem from "./SildeBoardItem"
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// // import required modules
// import { Pagination } from 'swiper';
// import { styled } from 'styled-components';

// const Slider = styled.div`

//     .swiper-slide, swiper-slide {
//     flex-shrink: 0;
//     width: 256px;
//     height: 600px;
//     position: relative;
//     transition-property: transform;
//     display: block;
// }
// .swiper, swiper-container {
//     /* margin-left: auto;
//     margin-right: auto; */
//     position: relative;
//     overflow: hidden;
//     list-style: none;
//     padding: 0;
//     z-index: 1;
//     display: block;
// }
// .swiper-wrapper {
//     position: relative;
//     width: 265px;
//     height: 100%;
//     z-index: 1;
//     display: flex;
//     transition-property: transform;
//     transition-timing-function: var(--swiper-wrapper-transition-timing-function,initial);
//     box-sizing: content-box;
// }
// `


// export default function RecommandSlider() {
//   return (
//     <Slider>
//       <Swiper
//         slidesPerView={4}
//         centeredSlides={true}
//         spaceBetween={30}
//         grabCursor={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide><SlideBoardItem/></SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </Slider>
//   );
// }

// Import Swiper React components
// import { useState } from 'react';
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
        width: 1250px;
    }
`

  return (
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
      </Swiper>
    </Slider>
  );
}
