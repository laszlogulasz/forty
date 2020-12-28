import React from 'react'
import Blister from '../components/Blister'
import Layout from '../components/Layout'
import MachinePark from '../components/MachinePark'
import Plastics from '../components/Plastics'
// import Image from "../components/image"
import SEO from '../components/Seo'
import Speciality from '../components/Speciality'
import Thermoforming from '../components/Thermoforming'

const Technology: React.FC = () => (
  <Layout isHomePage>
    <SEO title="Technologia" />
    <Thermoforming />
    <Blister />
    <Speciality />
    <MachinePark />
    <Plastics />
  </Layout>
)

export default Technology
