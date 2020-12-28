import React from 'react'
import Layout from '../components/Layout'
import News from '../components/News'
import SEO from '../components/Seo'

const AboutUs: React.FC = () => (
  <Layout>
    <SEO title="O nas" />
    <News />
  </Layout>
)

export default AboutUs
