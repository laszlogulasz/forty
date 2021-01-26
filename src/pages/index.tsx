import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Brands from '../components/Brands'
import Industries from '../components/Industries'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { colors, size } from '../components/shared'

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
const IndexPage: React.FC = () => {
  const { language } = React.useContext(I18nextContext)
  const { t } = useTranslation()
  const isLaptop = useMediaQuery({ minWidth: size.laptop })

  return (
    <Layout isHomePage>
      <SEO title={`${t('strona główna')}`} lang={language} />
      {isLaptop && <Background />}
      <Industries />
      <Brands header={t('zaufali nam')} />
    </Layout>
  )
}

export default IndexPage
