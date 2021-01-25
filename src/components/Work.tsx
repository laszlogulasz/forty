import { graphql, useStaticQuery } from 'gatsby'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import { useNodes } from '../helpers/useNodes'
import { colors, PageSectionHeader, SectionWrapper } from './shared'

interface SpecialityList {
  invert?: boolean
}
const WorkSectionWrapper = styled(SectionWrapper)`
  margin-bottom: 50px;
`
const OffersBox = styled.div`
  max-width: 1170;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  flex: 1 1 auto;
  margin-top: 30px;
  & > * {
    display: flex;
    flex-direction: row;
    align-self: stretch;
    align-items: center;
    width: 320px;
    height: 150px;
    justify-content: center;
    font: 400 1.2em 'lato';
    text-decoration: none;
    box-shadow: 0 0 10px ${colors.primaryGray};
    margin: 25px 20px;
    &:last-child {
    }
    &:nth-child(odd) {
      border: solid 2px ${colors.secondaryGray};
      color: ${colors.secondaryGray};
    }
    &:nth-child(even) {
      background: linear-gradient(
        90deg,
        rgba(252, 192, 117, 1) 0%,
        rgba(254, 96, 20, 1) 100%
      );
      color: white;
    }
  }
`
const Offer = styled.a`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  width: 320px;
  height: 150px;
  justify-content: center;
  font: 400 1.2em 'lato';
  text-decoration: none;
  box-shadow: 0 0 10px ${colors.primaryGray};
  margin: 25px 20px;
  &:last-child {
  }
  &:nth-child(odd) {
    border: solid 2px ${colors.secondaryGray};
    color: ${colors.secondaryGray};
  }
  &:nth-child(even) {
    background: linear-gradient(
      90deg,
      rgba(252, 192, 117, 1) 0%,
      rgba(254, 96, 20, 1) 100%
    );
    color: white;
  }
`

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      offers: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "praca" } }
      ) {
        nodes {
          blocks {
            ... on WpCoreFileBlock {
              originalContent
            }
          }
          translations {
            blocks {
              ... on WpCoreFileBlock {
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
  const [offersData, setOffersData] = useState(null)

  useEffect(() => {
    const range = document.createRange()
    const offersArr: any[] = data.offers.nodes[0].blocks
    const offersList: any[] = offersArr
      .map((_el: any, i: number) => {
        const { content } = useNodes({ dataslug: data.offers, nthNode: i })
        const offer =
          content[`${language}`] &&
          parse(
            range.createContextualFragment(content[`${language}`]).children[0]
              .innerHTML
          )
        return offer
      })
      .filter(el => el && el)

    setOffersData(
      offersList && offersList.length ? offersList : t('brak tłumaczenia')
    )
  }, [language])

  return (
    <WorkSectionWrapper id="work">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} triggerOnce>
          {t('Praca')}
        </Slide>
      </PageSectionHeader>
      <Fade>
        <OffersBox>{offersData ?? null}</OffersBox>
      </Fade>
    </WorkSectionWrapper>
  )
}

export default Work
