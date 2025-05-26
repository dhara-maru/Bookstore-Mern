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
        <SwiperSlide><img src="https://res.cloudinary.com/dbupin7tz/image/upload/v1748247761/dnw_roytsc.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dbupin7tz/image/upload/v1748247774/wonderwoman_xgwwow.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dbupin7tz/image/upload/v1748247748/batman_hsqzvv.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dbupin7tz/image/upload/v1748247756/joker_hbthd6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dbupin7tz/image/upload/v1748247774/blackwidow_dl42pk.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dbupin7tz/image/upload/v1748247766/ironman_af9avl.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dbupin7tz/image/upload/v1748247776/wolverine_ryzdn6.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
