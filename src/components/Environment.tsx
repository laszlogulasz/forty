import { graphql, useStaticQuery } from 'gatsby'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { useNodes } from '../helpers/useNodes'
import {
  BlackSectionWrapper,
  Description,
  PageSectionHeader,
  size,
  SmallHeader,
} from './shared'

const Quote = styled.blockquote`
  font: 200 italic 1.5em 'lato';
  width: 800px;
  color: white;
  line-height: 1.5em;
  margin-bottom: 50px;
`
const SmallHeaderLowerCase = styled(SmallHeader)`
  text-transform: none;
`
const Environment = () => {
  const data = useStaticQuery(graphql`
    query {
      headers: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "ekologia" } }
      ) {
        nodes {
          blocks {
            ... on WpCoreHeadingBlock {
              originalContent
            }
          }
          translations {
            blocks {
              ... on WpCoreHeadingBlock {
                originalContent
              }
            }
            language {
              code
            }
          }
        }
      }
      texts: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "ekologia" } }
      ) {
        nodes {
          blocks {
            ... on WpCoreParagraphBlock {
              originalContent
            }
          }
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
        }
      }
    }
  `)
  const { language } = React.useContext(I18nextContext)
  const { t } = useTranslation()
  const [paragraphsData, setParagraphsData] = useState(null)
  const [headersData, setHeadersData] = useState(null)
  useEffect(() => {
    const range = document.createRange()
    const paragraphsArr: any[] = data.texts.nodes[0].blocks
    const headersList: any[] = paragraphsArr
      .map((_el: any, i: number) => {
        const { content } = useNodes({ dataslug: data.headers, nthNode: i })
        const paragraph =
          content[`${language}`] &&
          range.createContextualFragment(content[`${language}`]).textContent
        return paragraph
      })
      .filter(el => el && el)

    const paragraphList: any[] = paragraphsArr
      .map((_el: any, i: number) => {
        const { content } = useNodes({ dataslug: data.texts, nthNode: i })
        const paragraph =
          content[`${language}`] &&
          range.createContextualFragment(content[`${language}`]).textContent
        return paragraph
      })
      .filter(el => el && el)

    setParagraphsData(paragraphList)
    setHeadersData(headersList)
  }, [language])
  const isLaptop = useMediaQuery({ minWidth: size.laptop })
  const col = isLaptop ? 2 : 1
  const content = paragraphsData?.map((el, i) => (
    <>
      <SmallHeaderLowerCase>{headersData[i]}</SmallHeaderLowerCase>
      <Description col={col}>{el}</Description>
    </>
  ))
  return (
    <BlackSectionWrapper id="environment">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} triggerOnce>
          {t('Ekologia')}
        </Slide>
      </PageSectionHeader>
      <Fade>
        {content ? (content.length ? content : t('brak tłumaczenia')) : null}
      </Fade>
    </BlackSectionWrapper>
  )
}

export default Environment
