import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import SwiperCore, { A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { colors, PageSectionHeader, SectionWrapper } from './shared'

const BrandsSliderWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  align-self: center;
  width: 100%;
  height: 216px;
  background-color: white;
  margin: 30px 0 100px 0;
  border-top: 1px solid ${colors.primaryRed};
  border-bottom: 1px solid ${colors.primaryRed};
`
SwiperCore.use([A11y, Autoplay])

const Brands = ({ header }) => {
  const data = useStaticQuery(graphql`
    query {
      brands: allFile(filter: { dir: { regex: "/brands/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(height: 200, grayscale: true) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  const imgs = data.brands.edges
    ? data.brands.edges.map((el: any, i: number) => {
        return (
          <SwiperSlide key={i}>
            <Img
              fixed={el.node.childImageSharp.fixed}
              alt="logo marki"
              fadeIn={false}
            />
          </SwiperSlide>
        )
      })
    : null
  return (
    <SectionWrapper id="brands">
      <PageSectionHeader>{header}</PageSectionHeader>
      <BrandsSliderWrapper>
        <Swiper
          id={'swiper-header'}
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
