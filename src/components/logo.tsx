import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Logo: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_light.png" }) {
        childImageSharp {
          fixed(width: 217, height: 81) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="logo firmy Forty"
      fadeIn={false}
    />
  )
}

export default Logo
