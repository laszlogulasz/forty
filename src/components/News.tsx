import { graphql, useStaticQuery } from 'gatsby'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
// import { Fade, Slide } from 'react-awesome-reveal'
import { useNodes } from '../helpers/useNodes'
import { device, PageSectionHeader, SectionWrapper } from './shared'
interface SpecialityList {
  invert?: boolean
}

const SpecialityList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  padding: 0;
  width: 100%;
  list-style: none;
  & > * {
    color: ${(props: SpecialityList) => (props.invert ? 'white' : 'gray')};
    margin-left: 0;
    padding: 0;
    text-align: left;
    margin-bottom: 0.5em;
    font: 100 0.875em 'Lato';
    & > strong {
      font: 400 0.875em 'Lato';
    }
    line-height: 1.5em;
    @media ${device.tablet} {
      font: 100 1em 'Lato';
      & > strong {
        font: 400 0.9em 'Lato';
      }
      line-height: 2em;
    }
    @media ${device.laptop} {
      font: 100 1.2em 'Lato';
      & > strong {
        font: 400 1em 'Lato';
      }
      line-height: 2em;
    }
  }
`
const SpecialityListItem = styled.li``
const News = () => {
  const data = useStaticQuery(graphql`
    query {
      list: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "aktualnosci" } }
      ) {
        nodes {
          blocks {
            ... on WpCoreListBlock {
              originalContent
            }
          }
          translations {
            blocks {
              ... on WpCoreListBlock {
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
  const [newsList, setNewsList] = useState(null)
  useEffect(() => {
    const range = document.createRange()
    const { content } = useNodes({
      dataslug: data.list,
    })
    const list = content[`${language}`]
      ? parse(
          range.createContextualFragment(content[`${language}`]).children[0]
            .innerHTML
        )
      : t('brak tłumaczenia')

    setNewsList(list)
  }, [language])
  return (
    <SectionWrapper id={'news'}>
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} triggerOnce>
          {t('aktualności')}
        </Slide>
      </PageSectionHeader>
      <SpecialityList>
        <Fade>{newsList ?? null}</Fade>
      </SpecialityList>
    </SectionWrapper>
  )
}

export default News
