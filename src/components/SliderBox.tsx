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
  display: flex;
  width: 100%;
  max-width: 585px;
  max-height: ${(props: Props) => (props.tall ? '420px' : '290px')};
  background-color: white;
`
const SliderBoxDescription = styled(FlexWrapper)`
  width: 100%;
  padding: 0 1.5em 0 1.5em;
  justify-content: center;
  align-self: stretch;
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
        return (
          <SwiperSlide key={i}>
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
    <BoxWrapper direction={direction} wide tall>
      <SliderBoxSliderWrapper tall={tall}>
        <Swiper
          id={'swiper-industry'}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
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
