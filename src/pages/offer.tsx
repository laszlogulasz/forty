import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import React, { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import ContractProduction from '../components/ContractProduction'
import Layout from '../components/Layout'
import OwnProducts from '../components/OwnProducts'
import PackingServices from '../components/PackingServices'
import SEO from '../components/Seo'
import Workflow from '../components/Workflow'

const Offer: React.FC = ({ location }: any) => {
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
      <SEO title={`${t('oferta')}`} lang={language} />
      <Workflow />
      <ContractProduction />
      <PackingServices />
      <OwnProducts />
    </Layout>
  )
}

export default Offer
