import { graphql, useStaticQuery } from 'gatsby'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import { useNodes } from '../helpers/useNodes'
import {
  device,
  GradientSectionWrapper,
  PageSectionHeader,
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
  & > * {
    color: ${(props: SpecialityList) => (props.invert ? 'white' : 'gray')};

    margin-left: 2em;
    padding: 0;
    text-align: left;
    font: 100 0.875em 'Lato';
    line-height: 1.5em;
    @media ${device.tablet} {
      font: 100 1em 'Lato';
      line-height: 2em;
    }
    @media ${device.laptop} {
      font: 100 1.2em 'Lato';
      line-height: 2em;
    }
  }
`
const GradientSpecialitySectionWrapper = styled(GradientSectionWrapper)`
  margin-top: -200px;
  padding-top: 200px;
`

const Speciality = () => {
  const data = useStaticQuery(graphql`
    query {
      list: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "nasza-specjalizacja" }
        }
      ) {
        nodes {
          blocks {
            ... on WpCoreHeadingBlock {
              originalContent
            }
            ... on WpCoreListBlock {
              originalContent
            }
          }
          translations {
            blocks {
              ... on WpCoreHeadingBlock {
                originalContent
              }
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
  const [specialityContent, setSpecialityContent] = useState(null)
  useEffect(() => {
    const range = document.createRange()
    const { content: headerNode } = useNodes({
      dataslug: data.list,
      nthNode: 0,
    })
    const { content: listNode } = useNodes({ dataslug: data.list, nthNode: 1 })

    const header = headerNode[`${language}`]
      ? parse(
          range.createContextualFragment(headerNode[`${language}`]).children[0]
            .innerHTML
        )
      : t('brak tłumaczenia')
    const list = listNode[`${language}`]
      ? parse(
          range.createContextualFragment(listNode[`${language}`]).children[0]
            .innerHTML
        )
      : t('brak tłumaczenia')
    const updatedData = {
      header,
      list,
    }
    setSpecialityContent(updatedData)
  }, [language])

  return (
    <GradientSpecialitySectionWrapper id="speciality">
      <PageSectionHeader invert>
        <Slide direction={'left'} duration={300} triggerOnce>
          {t('nasza specjalizacja')}
        </Slide>
      </PageSectionHeader>
      <SmallHeader invert={'row-reverse'}>
        {specialityContent?.header}
      </SmallHeader>

      <SpecialityList invert>
        <Fade>{specialityContent?.list}</Fade>
      </SpecialityList>
    </GradientSpecialitySectionWrapper>
  )
}

export default Speciality
