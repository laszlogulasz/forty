import { Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import BottomNav from './BottomNav'
import Contact from './Contact'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import FormAndMap from './FormAndMap'
import Logo from './Logo'
import Newsletter from './Newsletter'
import { Laptop, MobileAndTablet } from './Responsive'
import { colors, SectionHeader, SectionWrapper, size } from './shared'
import Social from './Social'

const MobileFooterSectionWrapper = styled(SectionWrapper)`
  padding-bottom: 2em;
  & > * {
    &:first-child {
      margin-top: 1em;
    }
    margin-bottom: 1em;
  }
`
const BottomLogoLink = styled(Link)`
  & > * {
    height: 52px;
    width: 140px;
    display: block;
  }
`
const Footer = () => {
  const { t } = useTranslation()
  const isNotLaptop = useMediaQuery({ maxWidth: size.laptop - 1 })
  return (
    <>
      <MobileAndTablet>
        <MobileFooterSectionWrapper
          color={colors.primaryDarkGray}
          id={'contact'}
        >
          <SectionHeader>
            <Slide direction={'left'} duration={300} delay={100} triggerOnce>
              {t('KONTAKT')}
            </Slide>
          </SectionHeader>
          <Newsletter />
          <ContactForm />
          <ContactDetails />
          <BottomLogoLink to="/">
            <Logo theme={'light'} />
          </BottomLogoLink>
          <Social />
        </MobileFooterSectionWrapper>
      </MobileAndTablet>
      <Laptop>
        <Contact />
        <FormAndMap />
        <BottomNav />
      </Laptop>
    </>
  )
}

export default Footer
