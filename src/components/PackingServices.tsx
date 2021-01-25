import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { Slide, Zoom } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { useNodes } from '../helpers/useNodes'
import {
  colors,
  Description,
  device,
  GradientSectionWrapper,
  PageSectionHeader,
  SectionWrapper,
  size,
} from './shared'
import SliderBox from './SliderBox'
interface WokflowProps {
  invert: 'row' | 'row-reverse'
}

const ContractList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -240px;
  margin-bottom: 40px;
  padding: 0;

  @media ${device.mobile} {
    max-width: 100vw;
  }
  @media ${device.tablet} {
    max-width: 390px;
  }
  @media ${device.laptop} {
    max-width: 780px;
    box-shadow: 0 0 30px ${colors.primaryGray};
  }
  @media ${device.desktop} {
    max-width: 1170px;
  }
`
const ContractBackgroundImage = styled(BackgroundImage)`
  background-position: 0 0;
  background-color: #fff;
  @media ${device.mobile} {
    margin-bottom: 1em;
  }
`
const ContractListItemWrapper = styled.div`
  width: 390px;
  height: 240px;
  background-color: ${colors.primaryDarkGrayOpacity1};
  &:hover {
    background-color: rgba(124, 89, 14, 0.534);
    filter: saturate(200%);
  }
  @media ${device.mobile} {
    width: 100vw;
    font: 400 1em 'Lato';
  }
`
const ContractListItem = styled.p`
  width: 390px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 400 1.2em 'Lato';
  padding: 0 30px;
  box-sizing: border-box;
  margin: 0;
  color: white;
  text-transform: uppercase;
  transition: background-color 0.2s ease;
  @media ${device.mobile} {
    width: 100vw;
    font: 400 1em 'Lato';
  }
`
const PackingBoxSectionWrapper = styled(SectionWrapper)`
  margin: 50px 0;
  @media ${device.mobileAndtablet} {
    margin: 10px 0 20px 0;
  }
`

const PackingServices = () => {
  const isLaptop = useMediaQuery({ minWidth: size.laptop })
  const col = isLaptop ? 2 : 1

  const data = useStaticQuery(graphql`
    query {
      posts: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "uslugi-pakowania" }
        }
      ) {
        nodes {
          id
          title
          translations {
            blocks {
              ... on WpCoreParagraphBlock {
                originalContent
              }
            }
            language {
              code
            }
            title
          }
          blocks {
            ... on WpCoreParagraphBlock {
              originalContent
            }
          }
        }
      }
      pics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "uslugi-pakowania" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 585, maxHeight: 290, cropFocus: CENTER) {
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
      text: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "produkcja-na-zlecenie" }
        }
      ) {
        nodes {
          blocks {
            dynamicContent
          }
          translations {
            blocks {
              ... on WpCoreGalleryBlock {
                originalContent
              }
            }
            language {
              code
            }
          }
        }
      }
      contractPics: allWpMediaItem(
        filter: {
          wpParent: { node: { slug: { eq: "produkcja-na-zlecenie" } } }
        }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 390, maxHeight: 240, cropFocus: CENTER) {
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
  const { language } = React.useContext(I18nextContext)
  const { t } = useTranslation()
  const [servicesList, setServicesList] = useState(null)
  const [sliderData, setSliderData] = useState(null)
  const [descData, setDescData] = useState(null)

  useEffect(() => {
    const range = document.createRange()
    const { content } = useNodes({
      dataslug: data.text,
      dynamic: language === 'pl' && true,
    })
    const figCaptions = range
      .createContextualFragment(content[`${language}`])
      .querySelectorAll('figcaption')
    const newServicesList = [...figCaptions].map(el => el.innerText)

    setServicesList(newServicesList)
  }, [language])

  useEffect(() => {
    const range = document.createRange()
    const { content } = useNodes({ dataslug: data[`posts`], nthNode: 1 })

    const desc =
      content[`${language}`] &&
      parse(
        range.createContextualFragment(content[`${language}`]).children[0]
          .innerHTML
      )
    const images = data[`pics`].edges
    const updatedData = {
      desc: content[`${language}`] ? desc : t('brak tłumaczenia'),
      images,
    }
    setSliderData(updatedData)
  }, [language])

  useEffect(() => {
    const range = document.createRange()
    const { content } = useNodes({ dataslug: data[`posts`] })
    const desc = content[`${language}`]
      ? range.createContextualFragment(content[`${language}`]).textContent
      : t('brak tłumaczenia')
    setDescData(desc)
  }, [language])

  const services = servicesList?.map((item: String, i: number) => {
    return (
      <ContractBackgroundImage
        Tag="li"
        fluid={data.contractPics.edges[i].node.localFile.childImageSharp.fluid}
        key={i}
      >
        <ContractListItemWrapper>
          <Zoom duration={300} triggerOnce>
            <ContractListItem>{item}</ContractListItem>
          </Zoom>
        </ContractListItemWrapper>
      </ContractBackgroundImage>
    )
  })

  return (
    <>
      <GradientSectionWrapper>
        <ContractList>{services}</ContractList>
        <PageSectionHeader invert id="packing-services">
          <Slide direction={'left'} duration={300} triggerOnce>
            {t('usługi pakowania')}
          </Slide>
        </PageSectionHeader>
        <Description invert={'row-reverse'} col={col}>
          {descData}
        </Description>
      </GradientSectionWrapper>
      <PackingBoxSectionWrapper>
        <SliderBox
          desc={sliderData?.desc}
          images={sliderData?.images}
          direction={'row'}
          tall={true}
        />
      </PackingBoxSectionWrapper>
    </>
  )
}

export default PackingServices
