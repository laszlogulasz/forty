import React from 'react'
import styled from 'styled-components'
import {
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
  font: 100 1.2em 'Lato';
  line-height: 2em;
  text-align: left;
`
const GradientSpecialitySectionWrapper = styled(GradientSectionWrapper)`
  margin-top: -200px;
  padding-top: 200px;
`

const Speciality = () => {
  return (
    <GradientSpecialitySectionWrapper id="speciality">
      <PageSectionHeader invert>Nasza specjalizacja</PageSectionHeader>
      <SmallHeader invert={'row-reverse'}>Specjalizujemy się w:</SmallHeader>
      <SpecialityList invert>
        <SpecialityListItem>
          produkcji palet transportowych dla przemysłu,
        </SpecialityListItem>
        <SpecialityListItem>
          produkcji wytłoczek do gier planszowych,
        </SpecialityListItem>
        <SpecialityListItem>
          produkcji blistrów do pakowania wyrobów gotowych dla różnych branż,
        </SpecialityListItem>
        <SpecialityListItem>
          pakowaniu wyrobów gotowych powierzonych przez Klienta w technologii
          skin-blister lub w-cz (zgrzewanie 2 elementów plastikowych),
        </SpecialityListItem>
        <SpecialityListItem>
          projektowaniu opakowań dla produktów klientów.
        </SpecialityListItem>
      </SpecialityList>
    </GradientSpecialitySectionWrapper>
  )
}

export default Speciality
