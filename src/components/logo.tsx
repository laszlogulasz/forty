import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

interface LogoProps {
  theme: string
}
const Logo: React.FC<LogoProps> = ({ theme }) => {
  const data = useStaticQuery(graphql`
    query {
      light: file(relativePath: { eq: "logo_light.png" }) {
        childImageSharp {
          fluid(maxWidth: 217) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      dark: file(relativePath: { eq: "logo_dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 217) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data[theme].childImageSharp.fluid}
      alt="logo firmy Forty"
      fadeIn={false}
    />
  )
}

export default Logo
