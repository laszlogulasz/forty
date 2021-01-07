import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BottomNav from './BottomNav'
import Contact from './Contact'
import ContactDetails from './ContactDetails'
import FormAndMap from './FormAndMap'
import Logo from './Logo'
import { Mobile, Tablet } from './Responsive'
import { colors, SectionWrapper } from './shared'
import Social from './Social'

const MobileFooterSectionWrapper = styled(SectionWrapper)`
  & > * {
    &:first-child {
      margin-top: 1em;
    }
    margin-bottom: 1em;
  }
`
const Footer = () => {
  return (
    <>
      <Mobile>
        <MobileFooterSectionWrapper color={colors.primaryDarkGray}>
          <Link to="/">
            <Logo theme={'light'} />
          </Link>
          <Social />
          <ContactDetails />
        </MobileFooterSectionWrapper>
      </Mobile>
      <Tablet>
        <Contact />
        <FormAndMap />
        <BottomNav />
      </Tablet>
    </>
  )
}

export default Footer
