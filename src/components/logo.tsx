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
          fixed(width: 217, height: 81) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dark: file(relativePath: { eq: "logo_dark.png" }) {
        childImageSharp {
          fixed(width: 217, height: 82) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log('logo ', data)
  return (
    <Img
      fixed={data[theme].childImageSharp.fixed}
      alt="logo firmy Forty"
      fadeIn={false}
    />
  )
}

export default Logo
