"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Slider({ children }: { children: React.ReactNode }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={3000}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
