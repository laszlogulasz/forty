import { graphql, useStaticQuery } from 'gatsby'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { ReactFragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNodes } from '../helpers/useNodes'
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
  const data = useStaticQuery(graphql`
    query {
      hero: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "header" } }
      ) {
        nodes {
          translations {
            blocks {
              ... on WpCoreGroupBlock {
                innerBlocks {
                  ... on WpCoreHeadingBlock {
                    originalContent
                  }
                  ... on WpCoreParagraphBlock {
                    originalContent
                  }
                }
              }
            }
            language {
              code
            }
          }
          blocks {
            ... on WpCoreGroupBlock {
              innerBlocks {
                ... on WpCoreHeadingBlock {
                  originalContent
                }
                ... on WpCoreParagraphBlock {
                  originalContent
                }
              }
            }
          }
        }
      }
    }
  `)
  const { language } = React.useContext(I18nextContext)
  const { t } = useTranslation()
  const [heroList, setHeroList] = useState(null)

  useEffect(() => {
    const range = document.createRange()
    const newHeroList = data.hero.nodes[0].blocks.map((_el: any, i: any): {
      firstLine: ReactFragment
      secondLine: ReactFragment
      thirdLine: ReactFragment
    } => {
      const { content: firstLineNode } = useNodes({
        dataslug: data.hero,
        group: true,
        nthNode: i,
        innerNthNode: 0,
      })
      const { content: secondLineNode } = useNodes({
        dataslug: data.hero,
        group: true,
        nthNode: i,
        innerNthNode: 1,
      })
      const { content: thirdLineNode } = useNodes({
        dataslug: data.hero,
        group: true,
        nthNode: i,
        innerNthNode: 2,
      })
      const firstLine = firstLineNode[`${language}`]
        ? parse(
            range.createContextualFragment(firstLineNode[`${language}`])
              .children[0].innerHTML
          )
        : t('brak tłumaczenia')
      const secondLine = secondLineNode[`${language}`]
        ? parse(
            range.createContextualFragment(secondLineNode[`${language}`])
              .children[0].innerHTML
          )
        : t('brak tłumaczenia')
      const thirdLine = thirdLineNode[`${language}`]
        ? parse(
            range.createContextualFragment(thirdLineNode[`${language}`])
              .children[0].innerHTML
          )
        : t('brak tłumaczenia')

      return {
        firstLine,
        secondLine,
        thirdLine,
      }
    })
    setHeroList(newHeroList)
  }, [language])
  console.log(heroList)
  const slides = heroList?.map((el, i) => {
    return (
      <SwiperSlide key={i}>
        <SlideContent heroList={el} />
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
        >
          {slides}
        </Swiper>
      </Tablet>
    </StyledSlider>
  )
}
export default Slider
