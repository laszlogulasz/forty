import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import GMap from './GMap'
import { colors, FlexWrapper, SectionWrapper } from './shared'

const FormAndMapWrapper = styled(SectionWrapper)`
  margin-top: -250px;
  margin-bottom: 130px;
  height: 585px;
`
const ShadowWrapper = styled(FlexWrapper)`
  box-shadow: 0 0 20px ${colors.primaryDarkGrayOpacity};
`

const FormAndMap = () => {
  return (
    <FormAndMapWrapper>
      <ShadowWrapper direction={'row'}>
        <ContactForm></ContactForm>
        <GMap></GMap>
      </ShadowWrapper>
    </FormAndMapWrapper>
  )
}

export default FormAndMap
