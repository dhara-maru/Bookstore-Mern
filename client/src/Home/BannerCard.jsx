import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './BannerCard.css';
// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src="src/assets/dnw.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/wonderwoman.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/batman.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/joker.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/blackwidow.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/ironman.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/wolverine.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
