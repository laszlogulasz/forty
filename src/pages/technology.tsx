import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import React, { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import Blister from '../components/Blister'
import Layout from '../components/Layout'
import MachinePark from '../components/MachinePark'
import Plastics from '../components/Plastics'
import SEO from '../components/Seo'
import Speciality from '../components/Speciality'
import Thermoforming from '../components/Thermoforming'

const Technology: React.FC = ({ location }: any) => {
  const { language } = React.useContext(I18nextContext)
  const { t } = useTranslation()
  useEffect(() => {
    smoothscroll.polyfill()
    !location.hash &&
      document.getElementById('main').scrollIntoView({ behavior: 'smooth' })
    return () => {}
  }, [])
  return (
    <Layout>
      <SEO title={`${t('technologia')}`} lang={language} />
      <Thermoforming />
      <Blister />
      <Speciality />
      <MachinePark />
      <Plastics />
    </Layout>
  )
}

export default Technology
