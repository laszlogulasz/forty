import { graphql, useStaticQuery } from 'gatsby'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
// import { Fade, Slide } from 'react-awesome-reveal'
import { useNodes } from '../helpers/useNodes'
import {
  device,
  PageSectionHeader,
  SectionWrapper,
  SmallHeader,
} from './shared'
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
  }
`
const SpecialityListItem = styled.li`
  margin-left: 0;
  padding: 0;
  & > p {
    font: 100 0.875em 'Lato';
    line-height: 1.5em;
    text-align: left;
  }

  @media ${device.tablet} {
    & > p {
      font: 100 1em 'Lato';
      line-height: 1.5em;
      text-align: left;
    }
  }
  @media ${device.laptop} {
    & > p {
      font: 100 1.2em 'Lato';
      line-height: 1.5em;
      text-align: left;
    }
  }
`
const HistorySmallHeader = styled(SmallHeader)`
  margin: 1em 0 0 0;
`
const History = () => {
  const data = useStaticQuery(graphql`
    query {
      list: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "historia-firmy" }
        }
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
  const [historyList, setHistoryList] = useState(null)
  useEffect(() => {
    const range = document.createRange()
    const { content } = useNodes({
      dataslug: data.list,
    })
    const list =
      content[`${language}`] &&
      parse(
        range.createContextualFragment(content[`${language}`]).children[0]
          .innerHTML
      )
    const headers =
      content[`${language}`] && [...list]?.filter((_el, i) => i % 2 === 0)
    const texts =
      content[`${language}`] && [...list]?.filter((_el, i) => i % 2 !== 0)
    const historyData = { headers, texts }
    setHistoryList(historyData)
  }, [language])

  const historyItems =
    historyList?.headers?.map((_el, i) => (
      <Fade>
        <SpecialityListItem>
          <HistorySmallHeader>
            {historyList.headers[i].props.children}
          </HistorySmallHeader>
          <p>{historyList.texts[i].props.children}</p>
        </SpecialityListItem>
      </Fade>
    )) ?? t('brak tłumaczenia')
  return (
    <SectionWrapper id={'history'}>
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} triggerOnce>
          {t('historia firmy')}
        </Slide>
      </PageSectionHeader>
      <SpecialityList>{historyItems ?? null} </SpecialityList>
    </SectionWrapper>
  )
}

export default History
