import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from '../../assets/banner/banner1.jpg'
import img2 from '../../assets/banner/banner2.jpg'

const Banner = () => {
    return (
        <div>
        <Swiper className="h-screen w-full">
        <SwiperSlide><img className='h-full object-cover w-full' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full object-cover w-full' src={img2} alt="" /></SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Banner;