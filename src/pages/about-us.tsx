import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import React, { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
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

const AboutUs: React.FC = ({ location }: any) => {
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
      <SEO title={`${t('o nas')}`} lang={language} />
      <News />
      <Mission />
      <History />
      <ISO9001 />
      <QualityPolicy />
      <Brands header={t('klienci')} />
      <Environment />
      <Work />
    </Layout>
  )
}

export default AboutUs
