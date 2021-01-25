import { graphql, useStaticQuery } from 'gatsby'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import { useNodes } from '../helpers/useNodes'
import { PageSectionHeader, SectionWrapper } from './shared'
import SliderBox from './SliderBox'

const Thermoforming = () => {
  const data = useStaticQuery(graphql`
    query {
      post: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "co-to-jest-termoformowanie" }
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
        filter: {
          wpParent: { node: { slug: { eq: "co-to-jest-termoformowanie" } } }
        }
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
    }
  `)
  const { language } = React.useContext(I18nextContext)
  const { t } = useTranslation()
  const [sliderData, setSliderData] = useState(null)
  useEffect(() => {
    const range = document.createRange()
    const { content } = useNodes({ dataslug: data[`post`] })

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

  return (
    <SectionWrapper id="thermoforming">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} triggerOnce>
          {t('co to jest termoformowanie')}
        </Slide>
      </PageSectionHeader>
      <SliderBox
        desc={sliderData?.desc}
        images={sliderData?.images}
        direction={'row'}
        tall={true}
      />
    </SectionWrapper>
  )
}

export default Thermoforming
