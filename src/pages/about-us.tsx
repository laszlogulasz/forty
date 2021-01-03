import React from 'react'
import Brands from '../components/Brands'
import Environment from '../components/Environment'
import History from '../components/History'
import ISO9001 from '../components/ISO9001'
import Layout from '../components/Layout'
import Mission from '../components/Mission'
import News from '../components/News'
import QualityPolicy from '../components/QualityPolicy'
import SEO from '../components/Seo'
import Work from '../components/Work'

const AboutUs: React.FC = () => (
  <Layout>
    <SEO title="O nas" />
    <News />
    <Mission />
    <History />
    <ISO9001 />
    <QualityPolicy />
    <Brands header={'Klienci:'} />
    <Environment />
    <Work />
  </Layout>
)

export default AboutUs
