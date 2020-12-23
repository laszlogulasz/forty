import React from 'react'
import styled from 'styled-components'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SlideContent from './SlideContent'

const StyledSlider = styled.section`
  display: flex;
  width: 100%;
  height: calc(100vh - 200px);
  border-top: 0.5px solid #737576;
`

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Slider = () => {
  return (
    <StyledSlider>
      <Swiper
        id={'swiper-header'}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
      </Swiper>
    </StyledSlider>
  )
}
export default Slider
