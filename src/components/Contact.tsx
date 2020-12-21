import React from 'react'
import styled from 'styled-components'
import ContactData from './ContactData'
import Newsletter from './Newsletter'
import { colors, FlexWrapper, SectionHeader, SectionWrapper } from './shared'

const ContactItemsWrapper = styled(FlexWrapper)`
  width: 100%;
`
const Contact = () => {
  return (
    <SectionWrapper color={colors.primaryDarkGray}>
      <SectionHeader>kontakt</SectionHeader>
      <ContactItemsWrapper direction={'row'}>
        <Newsletter />
        <ContactData />
      </ContactItemsWrapper>
    </SectionWrapper>
  )
}

export default Contact
