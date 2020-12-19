import React from 'react'
import styled from 'styled-components'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper.scss'
import SlideContent from './slideContent'

const StyledSlider = styled.section`
  display: flex;
  width: 100%;
  height: calc(100vh - 162px);
  border-top: 0.5px solid #737576;
`

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
const Slider = () => {
  return (
    <StyledSlider>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <SlideContent>Dupa</SlideContent>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </StyledSlider>
  )
}
export default Slider
