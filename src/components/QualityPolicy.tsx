import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import React, { useEffect, useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import { useNodes } from '../helpers/useNodes'
import {
  colors,
  device,
  PageSectionHeader,
  SectionWrapper,
  SmallHeader,
} from './shared'

interface SpecialityList {
  invert?: boolean
}
const QualitySectionWrapper = styled(SectionWrapper)`
  margin-bottom: 30px;
`
const Figure = styled.figure`
  max-width: 1170px;
  display: flex;
  flex-direction: row;

  margin: 0;
  @media ${device.mobileAndtablet} {
    flex-direction: column;
  }
`
const ImgWrapper = styled.div`
  align-self: center;
  width: 417px;
  @media ${device.mobile} {
    width: 320px;
  }
  @media ${device.mobileAndtablet} {
    margin-bottom: 2em;
  }
`
const Figcaption = styled.figcaption`
  width: 50%;
  @media ${device.mobileAndtablet} {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  align-self: stretch;
  align-items: center;
`
const GradientImg = styled(Img)`
  box-shadow: 0 0 10px ${colors.primaryGray};
`
const PageSectionHeaderGray = styled(PageSectionHeader)`
  margin-top: 150px;
  color: gray;
  @media ${device.mobileAndtablet} {
    margin: 0;
  }
`
const SmallHeaderGray = styled(SmallHeader)`
  color: gray;
  font-weight: 100;
  margin: 0;
`
const QualityPolicy = () => {
  const data = useStaticQuery(graphql`
    query {
      headers: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "nasza-polityka-jakosci" }
        }
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
      cert: file(relativePath: { eq: "certs/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 417, maxHeight: 551) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { language } = React.useContext(I18nextContext)
  const { t } = useTranslation()
  const [headersData, setHeadersData] = useState(null)
  useEffect(() => {
    const range = document.createRange()
    const { content: headerNode } = useNodes({
      dataslug: data.headers,
      nthNode: 0,
    })
    const { content: smallHeaderNode } = useNodes({
      dataslug: data.headers,
      nthNode: 1,
    })
    const header = headerNode[`${language}`]
      ? range.createContextualFragment(headerNode[`${language}`]).textContent
      : t('brak tłumaczenia')
    const smallHeader = smallHeaderNode[`${language}`]
      ? range.createContextualFragment(smallHeaderNode[`${language}`])
          .textContent
      : t('brak tłumaczenia')
    setHeadersData({ header, smallHeader })
  }, [language])
  return (
    <QualitySectionWrapper id="quality-policy">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} triggerOnce>
          {t('Nasza polityka jakości')}
        </Slide>
      </PageSectionHeader>
      <Figure>
        <ImgWrapper>
          <GradientImg
            //@ts-ignore
            fluid={data.cert.childImageSharp.fluid}
            alt="skan dokumentu Polityka Jakosci Firmy FORTY Sp.j."
            fadeIn={false}
          />
        </ImgWrapper>
        <Figcaption>
          <PageSectionHeaderGray>
            {headersData?.header ?? null}
          </PageSectionHeaderGray>
          <SmallHeaderGray>{headersData?.smallHeader ?? null}</SmallHeaderGray>
        </Figcaption>
      </Figure>
    </QualitySectionWrapper>
  )
}

export default QualityPolicy
