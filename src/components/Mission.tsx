import { graphql, useStaticQuery } from 'gatsby'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import { useNodes } from '../helpers/useNodes'
import { BlackSectionWrapper, device, PageSectionHeader } from './shared'

const Quote = styled.blockquote`
  font: 200 italic 1.5em 'lato';
  width: 100%;
  color: white;
  line-height: 1.5em;
  margin-bottom: 50px;
  @media ${device.mobile} {
    font: 200 italic 1em 'lato';
  }
  @media ${device.tablet} {
    font: 200 italic 1.2em 'lato';
    width: 700px;
  }
  @media ${device.laptop} {
    width: 900px;
    font: 200 italic 1.5em 'lato';
  }
`
const Mission = () => {
  const data = useStaticQuery(graphql`
    query {
      quote: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "misja-firmy" } }
      ) {
        nodes {
          blocks {
            ... on WpCoreQuoteBlock {
              originalContent
            }
          }
          translations {
            blocks {
              ... on WpCoreQuoteBlock {
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
  const [quote, setQuote] = useState(null)
  useEffect(() => {
    const range = document.createRange()
    const { content } = useNodes({ dataslug: data.quote })
    const quote = content[`${language}`]
      ? parse(
          range.createContextualFragment(content[`${language}`]).textContent
        )
      : t('brak tłumaczenia')
    setQuote(quote)
  }, [language])
  return (
    <BlackSectionWrapper id="our-mision">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} triggerOnce>
          {t('misja firmy')}
        </Slide>
      </PageSectionHeader>
      <Quote>
        <Fade>{quote ?? null}</Fade>
      </Quote>
    </BlackSectionWrapper>
  )
}

export default Mission
