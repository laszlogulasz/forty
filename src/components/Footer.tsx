import { Link } from 'gatsby'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import BottomNav from './BottomNav'
import Contact from './Contact'
import ContactDetails from './ContactDetails'
import FormAndMap from './FormAndMap'
import Logo from './Logo'
import { Laptop, MobileAndTablet } from './Responsive'
import { colors, SectionHeader, SectionWrapper, size } from './shared'

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
              kontakt
            </Slide>
          </SectionHeader>
          {/* <Newsletter />
          <ContactForm /> */}
          <ContactDetails />
          <BottomLogoLink to="/">
            <Logo theme={'light'} />
          </BottomLogoLink>
          {/* <Social /> */}
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
