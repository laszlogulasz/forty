import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import { inDustrySlugsOrder } from '../data'
import { device, PageSectionHeader, SectionWrapper } from './shared'
import SliderBox from './SliderBox'

const Industries = () => {
  const isMobileAndTablet = useMediaQuery({ maxWidth: device.mobileAndtablet })

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
      const name = data[`${slug}Post`].nodes[0].title
      const desc = document
        .createRange()
        .createContextualFragment(
          data[`${slug}Post`].nodes[0].blocks[0].originalContent
        ).textContent

      const images = data[`${slug}Pics`].edges
      return {
        name,
        desc,
        images,
      }
    })
    setSliderData(updatedData)
  }, [])

  // const ImageNodes = imagesFromWpCoreGalleryBlock.map(
  //   (el: { originalContent: string }) => {
  //     const imageNode = document
  //       .createRange()
  //       .createContextualFragment(el.originalContent)
  //       .querySelectorAll('img')[1]

  //     const imageNodes = document
  //       .createRange()
  //       .createContextualFragment(el.originalContent)
  //       .querySelectorAll('img')

  //     const sizes = '(max-width: 585px) 100vw, 585px'
  //     const src = imageNode?.getAttribute('src')
  //     const srcSet = imageNode?.getAttribute('srcSet')

  //     const ImageData = {
  //       sizes,
  //       src,
  //       srcSet,
  //     }

  //     return ImageData
  //   }
  // )

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
          Branże dla których pracujemy
        </Slide>
      </PageSectionHeader>
      {industries}
    </SectionWrapper>
  )
}

export default Industries
