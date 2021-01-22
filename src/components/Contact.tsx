import React from 'react'
import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import ContactData from './ContactData'
import {
  colors,
  device,
  FlexWrapper,
  SectionHeader,
  SectionWrapper,
} from './shared'

const ContactItemsWrapper = styled(FlexWrapper)`
  width: 100%;
  margin-bottom: 40px;
  flex-direction: column;
  @media ${device.laptop} {
    justify-content: center;
    flex-direction: row;
    margin-bottom: 300px;
  }
`
const Contact = () => {
  return (
    <SectionWrapper color={colors.primaryDarkGray} id={'contact'}>
      <SectionHeader>
        <Slide direction={'left'} duration={300} delay={100} triggerOnce>
          kontakt
        </Slide>
      </SectionHeader>
      <ContactItemsWrapper>
        {/* <Newsletter /> */}
        <ContactData />
      </ContactItemsWrapper>
    </SectionWrapper>
  )
}

export default Contact
