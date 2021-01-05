import Img from 'gatsby-image'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import SwiperCore, { A11y, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BoxWrapper, Description, FlexWrapper, SmallHeader } from './shared'

interface Props {
  invert?: string
  tall?: boolean
}
interface SliderBoxProps {
  name?: string
  desc: string | ReactNode
  images: any
  direction: string
  tall?: boolean
}

const SliderBoxSliderWrapper = styled.div`
  background-color: white;
  width: 50%;
  height: ${(props: Props) => (props.tall ? '420px' : '290px')};
`
const SliderBoxDescription = styled(FlexWrapper)`
  display: flex;
  width: 50%;
  padding-left: 1.5em;
  padding-right: 1.5em;
  box-sizing: border-box;
  justify-content: center;
  align-self: stretch;
  align-items: flex-start;
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

const SliderBox: React.FC<SliderBoxProps> = ({
  name,
  desc,
  images,
  direction,
  tall,
}) => {
  const imgs = images.edges
    ? images.edges.map((el: any, i: number) => {
        console.log(i)
        return (
          <SwiperSlide key={i}>
            <Img
              fluid={el.node.childImageSharp.fluid}
              alt="produkt firmy"
              fadeIn={false}
            />
          </SwiperSlide>
        )
      })
    : null
  return (
    <BoxWrapper direction={direction} wide tall>
      <SliderBoxSliderWrapper tall={tall}>
        <Swiper
          style={{ height: '100%' }}
          id={'swiper-industry'}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          centeredSlides={true}
        >
          {imgs}
        </Swiper>
      </SliderBoxSliderWrapper>
      <SliderBoxDescription direction={'column'} invert={direction} tall={tall}>
        {name && <SmallHeader invert={direction}>{name}</SmallHeader>}
        <Description invert={direction}>{desc}</Description>
      </SliderBoxDescription>
    </BoxWrapper>
  )
}

export default SliderBox
