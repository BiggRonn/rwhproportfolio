import "./projects.scss"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper';
import Portfolio from "../../components/portfolio/Portfolio";

export default function Projects() {
  return (
    <div className="projectsContainer" id="projects">
      <h1>Projects</h1>
      <div className="swiperContainer">
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
        <SwiperSlide><div className="projectSlide"> </div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      </div>
      <Portfolio></Portfolio>

    </div>
  )
}
