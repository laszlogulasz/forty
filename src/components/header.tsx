import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import styled from 'styled-components'
import ContactDetails from './contactDetails'
import Nav from './nav'
import Slider from './slider'

const Header: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "heroBackgroundImage.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage Tag="header" fluid={imageData}>
      <Nav />
      <Slider />
      <ContactDetails />
    </BackgroundImage>
  )
}

const HeaderWrapper = styled(Header)`
  display: flex;
  max-width: 50vw;
  padding-bottom: 50em;
  background-size: 100% auto;
  position: relative;
  height: 100vh;
  align-self: stretch;
`

export default HeaderWrapper
