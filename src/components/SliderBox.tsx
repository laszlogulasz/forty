import Img from 'gatsby-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import React, { ReactNode } from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'
import styled from 'styled-components'
import SwiperCore, { A11y, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  BoxWrapper,
  Description,
  device,
  FlexWrapper,
  SmallHeader,
} from './shared'
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
  width: 100%;
  height: ${(props: Props) => (props.tall ? '420px' : '290px')};
  @media ${device.tablet} {
    width: 50%;
  }
`
const SliderBoxDescription = styled(FlexWrapper)`
  display: flex;
  width: 100%;
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
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.mobile} {
    background: linear-gradient(
      90deg,
      rgba(254, 96, 20, 1) 0%,
      rgba(252, 192, 117, 1) 100%
    );
    &:before {
      content: '';
      position: relative;
      display: flex;
      align-self: center;
      top: 10px;
      color: red;
      background-image: url("data:image/svg+xml;utf8,<svg version='1.1' id='si-ant-down' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120' fill='rgb(255, 255, 255)'><title  id='cmsi-ant-down-title'>icon down</title><path d='M198.2,2c-1.3-1.3-2.8-2-4.5-2s-3.2,0.7-4.5,2L100,96.1L10.7,2C9.4,0.7,7.9,0,6.2,0S3.1,0.7,1.8,2C0.6,3.3,0,4.8,0,6.6 s0.6,3.4,1.8,4.7l93.8,98.8c1.3,1.3,2.8,2,4.5,2c1.7,0,3.2-0.7,4.5-2l93.8-98.8c1.2-1.3,1.8-2.9,1.8-4.7S199.4,3.3,198.2,2z'/></svg>");
      width: 30px;
      height: 18px;
    }
  }
`
SwiperCore.use([Pagination, A11y])

const SliderBox: React.FC<SliderBoxProps> = ({
  name,
  desc,
  images,
  direction,
  tall,
}) => {
  const { t } = useTranslation()
  const imgs = images?.length
    ? images.map((el: any, i: number) => {
        return (
          <SwiperSlide key={i}>
            <Img
              fluid={el.node.localFile.childImageSharp.fluid}
              alt={el.node.altText}
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
        {name && (
          <Zoom triggerOnce duration={400}>
            <SmallHeader invert={direction}>{name}</SmallHeader>
          </Zoom>
        )}
        <Fade>
          <Description invert={direction}>{desc}</Description>
        </Fade>
      </SliderBoxDescription>
    </BoxWrapper>
  )
}

export default SliderBox
