import React from 'react'
import styled from 'styled-components'
import Brands from '../components/Brands'
import Industries from '../components/Industries'
import Layout from '../components/Layout'
// import Image from "../components/image"
import SEO from '../components/Seo'
import { colors } from '../components/shared'
const Background = styled.div`
  background: linear-gradient(
    90deg,
    rgba(252, 192, 117, 1) 0%,
    rgba(254, 96, 20, 1) 100%
  );
  box-shadow: 0 0 10px ${colors.primaryGray};
  position: relative;
  z-index: -1;
  top: 2500px;
  height: 1200px;
  margin-top: -1200px;
`
const IndexPage: React.FC = () => (
  <Layout isHomePage>
    <SEO title="Start" />
    <Background />
    <Industries />
    <Brands header={'Zaufali nam:'} />
  </Layout>
)

export default IndexPage
