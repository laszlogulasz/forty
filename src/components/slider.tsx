import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { device, size } from './shared'
import SlideContent from './SlideContent'

const StyledSlider = styled.section`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  height: 100vh;
  @media ${device.tablet} {
    top: 185px;
    border-top: 0.5px solid #737576;
    height: calc(100vh - 185px);
    position: static;
  }
`

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Slider = () => {
  const isTablet = useMediaQuery({ minWidth: size.tablet })
  return (
    <StyledSlider>
      <Swiper
        id={'swiper-header'}
        spaceBetween={50}
        slidesPerView={1}
        navigation={isTablet}
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
