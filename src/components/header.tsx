import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import styled from 'styled-components'
import ContactDetails from './ContactDetails'
import { Tablet } from './Responsive'
import Slider from './Slider'
import TopNav from './TopNav'

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
    <BackgroundImage
      Tag="header"
      fluid={imageData}
      style={{
        height: `100vh`,
      }}
    >
      <TopNav />
      <Slider />
      <Tablet>
        <ContactDetails />
      </Tablet>
    </BackgroundImage>
  )
}

const HeaderWrapper = styled(Header)`
  display: flex;
  max-width: 50vw;
  padding-bottom: 50em;
  height: 100vh;
  /* justify-content: center;
  justify-items: center;
  align-content: center; */
`

export default HeaderWrapper
