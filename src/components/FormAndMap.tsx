import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import GMap from './GMap'
import { Laptop } from './Responsive'
import { colors, device, FlexWrapper, SectionWrapper, size } from './shared'

const FormAndMapWrapper = styled(SectionWrapper)`
  margin-top: -250px;
  margin-bottom: 130px;
  height: 585px;
`
const ShadowWrapper = styled(FlexWrapper)`
  box-shadow: 0 0 20px ${colors.primaryDarkGrayOpacity};
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`
interface IMapSize {
  mapSize: { width: string; height: string }
}
const FormAndMap = () => {
  const isDesktop = useMediaQuery({ minWidth: size.desktop })
  const mapSize = isDesktop
    ? { width: '585', height: '585' }
    : { width: '425', height: '540' }
  return (
    <FormAndMapWrapper>
      <ShadowWrapper>
        <Laptop>
          <ContactForm />
          <GMap width={mapSize.width} height={mapSize.height}></GMap>
        </Laptop>
      </ShadowWrapper>
    </FormAndMapWrapper>
  )
}

export default FormAndMap
