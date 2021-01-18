import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import SwiperCore, { A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { colors, device, PageSectionHeader, SectionWrapper } from './shared'

const BrandsSliderWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  align-self: center;
  width: 100%;
  background-color: white;
  margin: 30px 0 100px 0;
  border-top: 1px solid ${colors.primaryRed};
  border-bottom: 1px solid ${colors.primaryRed};
  @media ${device.tablet} {
    width: 100%;
  }
`
const ImgWrapper = styled.div`
  width: 100px;
  height: 66px;
  @media ${device.tablet} {
    width: 200px;
    height: 133px;
  }
  @media ${device.laptop} {
    width: 250px;
    height: 166px;
  }
  @media ${device.desktop} {
    width: 300px;
    height: 200px;
  }
`
SwiperCore.use([A11y, Autoplay])

const Brands = ({ header }) => {
  const data = useStaticQuery(graphql`
    query {
      allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "zaufali-nam" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxHeight: 180, maxWidth: 300, grayscale: true) {
                  src
                  srcSet
                  sizes
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  `)
  const imgs = data.allWpMediaItem.edges
    ? data.allWpMediaItem.edges.map((el: any, i: number) => {
        return (
          <SwiperSlide key={i}>
            <ImgWrapper>
              <Img
                fluid={el.node.localFile.childImageSharp.fluid}
                alt={el.node.altText}
                fadeIn={false}
              />
            </ImgWrapper>
          </SwiperSlide>
        )
      })
    : null
  return (
    <SectionWrapper id="brands">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} delay={100} triggerOnce>
          {header}
        </Slide>
      </PageSectionHeader>
      <BrandsSliderWrapper>
        <Swiper
          id={'swiper-brands'}
          spaceBetween={35}
          slidesPerView={3}
          slidesPerGroup={3}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 2000 }}
        >
          {imgs}
        </Swiper>
      </BrandsSliderWrapper>
    </SectionWrapper>
  )
}

export default Brands
