import React from 'react'
import styled from 'styled-components'
import {
  device,
  GradientSectionWrapper,
  PageSectionHeader,
  SmallHeader,
} from './shared'
interface SpecialityList {
  invert?: boolean
}

const SpecialityList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  padding: 0;
  width: 100%;
  & > * {
    color: ${(props: SpecialityList) => (props.invert ? 'white' : 'gray')};
  }
`
const SpecialityListItem = styled.li`
  margin-left: 1em;
  padding: 0;
  font: 100 0.875em 'Lato';
  line-height: 1.5em;
  @media ${device.tablet} {
    font: 100 1em 'Lato';
    line-height: 2em;
  }
  @media ${device.laptop} {
    font: 100 1.2em 'Lato';
    line-height: 2em;
  }
  text-align: left;
`
const Plastics = () => {
  return (
    <GradientSectionWrapper id="plastics">
      <PageSectionHeader invert>Rodzaje tworzyw sztucznych</PageSectionHeader>
      <SmallHeader invert={'row-reverse'}>
        Wykorzystując nasze bogate zaplecze techniczne oraz doświadczenie w
        termoformowaniu wykonujemy usługi tłoczenia płyt m. in. PS, ABS, HIPS,
        PVC, PET, a także materiałów ESDo grubości do 10 mm np.:
      </SmallHeader>
      <SpecialityList invert>
        <SpecialityListItem>kasetony i szyldy reklamowe,</SpecialityListItem>
        <SpecialityListItem>
          osłony i obudowy maszyn i pojazdów odporne na działanie czynników
          atmosferycznych,
        </SpecialityListItem>
        <SpecialityListItem>wanny i brodziki,</SpecialityListItem>
        <SpecialityListItem>palety transportowe,</SpecialityListItem>
        <SpecialityListItem>
          elementy wnętrza pojazdów wykonane z materiałów ognioodpornych,
        </SpecialityListItem>
        <SpecialityListItem>elementy lad chłodniczych.</SpecialityListItem>
      </SpecialityList>
    </GradientSectionWrapper>
  )
}

export default Plastics
