import React from 'react'
import ContractProduction from '../components/ContractProduction'
import Layout from '../components/Layout'
import OwnProducts from '../components/OwnProducts'
import PackingServices from '../components/PackingServices'
// import Image from "../components/image"
import SEO from '../components/Seo'
import Workflow from '../components/Workflow'

const Offer: React.FC = () => (
  <Layout>
    <SEO title="Oferta" />
    <Workflow />
    <ContractProduction />
    <PackingServices />
    <OwnProducts />
  </Layout>
)

export default Offer
