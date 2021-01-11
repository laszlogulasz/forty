import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
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
      cert: file(relativePath: { eq: "certs/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 417, maxHeight: 551) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <QualitySectionWrapper id="quality-policy">
      <PageSectionHeader>Nasza polityka jakości</PageSectionHeader>
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
            Interesuje nas wyłącznie najwyższa jakość…
          </PageSectionHeaderGray>
          <SmallHeaderGray>Nie ma tu miejsca na kompromisy.</SmallHeaderGray>
        </Figcaption>
      </Figure>
    </QualitySectionWrapper>
  )
}

export default QualityPolicy
