import React from 'react'
import styled from 'styled-components'
import ContractProduction from '../components/ContractProduction'
import Layout from '../components/Layout'
import PackingServices from '../components/PackingServices'
// import Image from "../components/image"
import SEO from '../components/Seo'
import Workflow from '../components/Workflow'

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

const Offer: React.FC = () => (
  <Layout>
    <SEO title="Oferta" />
    <Workflow />
    <ContractProduction />
    <PackingServices />
  </Layout>
)

export default Offer
