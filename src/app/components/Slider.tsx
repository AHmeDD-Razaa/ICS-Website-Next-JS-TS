"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Slider({ data }: { data: { img: string }[] }) {
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
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <img
            src={item.img}
            alt=""
            className="object-cover  transition"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
