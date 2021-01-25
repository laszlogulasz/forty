import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
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
  margin-bottom: 40px;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
    margin-bottom: 300px;
  }
`
const Contact = () => {
  const { t } = useTranslation()
  return (
    <SectionWrapper color={colors.primaryDarkGray} id={'contact'}>
      <SectionHeader>
        <Slide direction={'left'} duration={300} delay={100} triggerOnce>
          {t('KONTAKT')}
        </Slide>
      </SectionHeader>
      <ContactItemsWrapper>
        <Newsletter />
        <ContactData />
      </ContactItemsWrapper>
    </SectionWrapper>
  )
}

export default Contact
