import React from 'react'
import styled from 'styled-components'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mobile, Tablet } from './Responsive'
import { device } from './shared'
import SlideContent from './SlideContent'

const StyledSlider = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  @media ${device.tablet} {
    top: 185px;
    height: calc(100vh - 185px);
    position: static;
  }
  @media ${device.laptop} {
    border-top: 0.5px solid #737576;
  }
`

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Slider = () => {
  const slides = [...Array(4)].map((e, i) => {
    return (
      <SwiperSlide key={i}>
        <SlideContent />
      </SwiperSlide>
    )
  })

  return (
    <StyledSlider>
      <Mobile>
        <Swiper
          id={'swiper-header'}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {slides}
        </Swiper>
      </Mobile>
      <Tablet>
        <Swiper
          id={'swiper-header'}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {slides}
        </Swiper>
      </Tablet>
    </StyledSlider>
  )
}
export default Slider
