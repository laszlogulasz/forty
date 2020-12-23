import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import SwiperCore, { A11y, Pagination } from 'swiper'
// @ts-ignore
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react'
import { colors, Description, FlexWrapper, SmallHeader } from './shared'

interface Props {
  invert: string
}
const IndustryWrapper = styled(FlexWrapper)`
  max-width: 1170px;
  border-radius: 20px;
  box-shadow: 0 0 20px ${colors.primaryDarkGrayOpacity};
  margin: 20px 0;
  overflow: hidden;
`
const IndustrySliderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 585px;
  max-height: 290px;
  background-color: white;
`
const IndustryDescription = styled(FlexWrapper)`
  width: 100%;
  height: 290px;
  height: 290px;
  padding: 0 1.5em 0 1.5em;
  justify-content: center;

  background: ${(props: Props) =>
    props.invert === 'row-reverse'
      ? `linear-gradient(
    90deg,
    rgba(254, 96, 20, 1) 0%,
     rgba(252, 192, 117, 1) 100%
  )`
      : 'white'};
`
SwiperCore.use([Pagination, A11y])

const Industry = ({ name, desc, images, direction }) => {
  const imgs = images.edges
    ? images.edges.map(el => {
        return (
          <SwiperSlide>
            <Img
              fixed={el.node.childImageSharp.fixed}
              alt="produkt firmy"
              fadeIn={false}
            />
          </SwiperSlide>
        )
      })
    : null
  return (
    <IndustryWrapper direction={direction}>
      <IndustrySliderWrapper>
        <Swiper
          id={'swiper-industry'}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {imgs}
        </Swiper>
      </IndustrySliderWrapper>
      <IndustryDescription direction={'column'} invert={direction}>
        <SmallHeader invert={direction}>{name}</SmallHeader>
        <Description invert={direction}>{desc}</Description>
      </IndustryDescription>
    </IndustryWrapper>
  )
}

export default Industry
