import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import {
  colors,
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
`
const Figcaption = styled.figcaption`
  width: 60%;
  margin-left: 20px;
  align-self: stretch;
  align-items: center;
`
const GradientImg = styled(Img)`
  width: 585px;
  display: flex;
  align-self: flex-start;
  box-shadow: 0 0 10px ${colors.primaryGray};
`
const PageSectionHeaderGray = styled(PageSectionHeader)`
  margin-top: 150px;
  color: gray;
`
const SmallHeaderGray = styled(SmallHeader)`
  color: gray;
  font-weight: 100;
`
const QualityPolicy = () => {
  const data = useStaticQuery(graphql`
    query {
      cert: file(relativePath: { eq: "certs/2.jpg" }) {
        childImageSharp {
          fixed(width: 417, height: 551) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <QualitySectionWrapper id="quality-policy">
      <PageSectionHeader>Nasza polityka jakości</PageSectionHeader>
      <Figure>
        <GradientImg
          //@ts-ignore
          fixed={data.cert.childImageSharp.fixed}
          alt="logo firmy Forty"
          fadeIn={false}
        />
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
