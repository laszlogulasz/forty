import React from 'react'
import styled from 'styled-components'
import {
  device,
  PageSectionHeader,
  SectionWrapper,
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
const PageSectionHeaderGray = styled(PageSectionHeader)`
  color: gray;
`
const SmallHeaderGray = styled(SmallHeader)`
  color: gray;
`
const MachinePark = () => {
  return (
    <SectionWrapper id={'machine-park'}>
      <PageSectionHeaderGray>Nasz park maszynowy</PageSectionHeaderGray>
      <SmallHeaderGray invert={'row'}>
        Posiadamy 41 maszyn do produkcji blistrów:
      </SmallHeaderGray>
      <SpecialityList>
        <SpecialityListItem>
          Do produkcji wielkoseryjnych mamy maszyny automatyczne: RDKP72,
          RDKP54, RV53, R45,
        </SpecialityListItem>
        <SpecialityListItem>
          Do produkcji wytłoczek z płyt mamy maszyny UA 150 i UA100 oraz
          urządzenie CNC do obróbki wykańczającej Geiss.
        </SpecialityListItem>
        <SpecialityListItem>
          Do produkcji średnio i małoseryjnej posiadamy termoformierki SB74 i
          SB53 w ciągu z prasami hydraulicznymi.
        </SpecialityListItem>
        <SpecialityListItem>
          Do produkcji średnio i małoseryjnej posidamy termoformierki SB74 i
          SB53 w ciągu z prasami hydraulicznymi.
        </SpecialityListItem>
        <SpecialityListItem>
          Posiadamy również zgrzewarki HSP35 oraz Geaf do pakowania wyrobów
          gotowych.
        </SpecialityListItem>
      </SpecialityList>
    </SectionWrapper>
  )
}

export default MachinePark
