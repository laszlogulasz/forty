import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
// import Image from "../components/image"
import SEO from '../components/Seo'

const MainSection = styled.section`
  display: flex;
`
const MainTextWrapper = styled.div`
  width: 55%;
`
const ImageWrapper = styled.div`
  width: 45%;
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const Technology: React.FC = () => (
  <Layout isHomePage>
    <SEO title="Home" />
  </Layout>
)

export default Technology
