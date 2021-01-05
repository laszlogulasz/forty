import React from 'react'
import styled from 'styled-components'
import ContactData from './ContactData'
import Newsletter from './Newsletter'
import {
  colors,
  device,
  FlexWrapper,
  SectionHeader,
  SectionWrapper,
} from './shared'

const ContactItemsWrapper = styled(FlexWrapper)`
  width: 100%;
  margin-bottom: 400px;
  flex-direction: column-reverse;
  @media ${device.laptop} {
    flex-direction: row;
  }
`
const Contact = () => {
  return (
    <SectionWrapper color={colors.primaryDarkGray} id={'contact'}>
      <SectionHeader>kontakt</SectionHeader>
      <ContactItemsWrapper>
        <Newsletter />
        <ContactData />
      </ContactItemsWrapper>
    </SectionWrapper>
  )
}

export default Contact
