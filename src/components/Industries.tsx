import { graphql, useStaticQuery } from 'gatsby'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import React, { useEffect, useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import { inDustrySlugsOrder } from '../data'
import { useNodes } from '../helpers/useNodes'
import { device, PageSectionHeader, SectionWrapper } from './shared'
import SliderBox from './SliderBox'

const Industries = () => {
  const { language } = React.useContext(I18nextContext)
  const isMobileAndTablet = useMediaQuery({ maxWidth: device.mobileAndtablet })
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      motoryzacyjnaPost: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "motoryzacyjna" }
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
      motoryzacyjnaPics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "motoryzacyjna" } } } }
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
      przemyslowaPost: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "przemyslowa" } }
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
      przemyslowaPics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "przemyslowa" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 585, maxHeight: 290) {
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
      kosmetycznaPost: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "kosmetyczna" } }
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
      kosmetycznaPics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "kosmetyczna" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 585, maxHeight: 290) {
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
      farmaceutycznaPost: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "farmaceutyczna" }
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
      farmaceutycznaPics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "farmaceutyczna" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 585, maxHeight: 290) {
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
      elektrotechnicznaPost: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "elektrotechniczna" }
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
      elektrotechnicznaPics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "elektrotechniczna" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 585, maxHeight: 290) {
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
      gierPost: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "gier" } }
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
      gierPics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "gier" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 585, maxHeight: 290) {
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
      domIOgrodPost: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "dom-i-ogrod" } }
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
      domIOgrodPics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "dom-i-ogrod" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 585, maxHeight: 290) {
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
      detalicznaPost: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "detaliczna" } }
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
      detalicznaPics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "detaliczna" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 585, maxHeight: 290) {
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
      spozywczaPost: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "spozywcza" } }
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
      spozywczaPics: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "spozywcza" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 585, maxHeight: 290) {
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

  const [sliderData, setSliderData] = useState(null)
  useEffect(() => {
    const updatedData = inDustrySlugsOrder.map((slug: String) => {
      const range = document.createRange()
      const { titles, content } = useNodes({ dataslug: data[`${slug}Post`] })
      const name = titles[`${language}`]
      const desc = range.createContextualFragment(
        content[`${language}`] ?? t('brak tłumaczenia')
      ).textContent

      const images = data[`${slug}Pics`].edges
      return {
        name,
        desc,
        images,
      }
    })
    setSliderData(updatedData)
  }, [language])

  const industries = sliderData?.map(
    (
      industry: { name: string; desc: React.ReactNode; images: any },
      i: number
    ) => (
      <SliderBox
        key={i}
        name={industry.name}
        desc={industry.desc}
        images={industry.images}
        direction={!isMobileAndTablet && i % 2 > 0 ? 'row-reverse' : 'row'}
        tall={false}
      />
    )
  )

  return (
    <SectionWrapper id="industries">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} delay={100} triggerOnce>
          {t('dla jakich branż pracujemy')}
        </Slide>
      </PageSectionHeader>
      {industries}
    </SectionWrapper>
  )
}

export default Industries
