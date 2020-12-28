import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import {
  GradientSectionWrapper,
  PageSectionHeader,
  SmallHeader,
} from './shared'
import SliderBox from './SliderBox'

interface SpecialityList {
  invert?: boolean
}
const SliderBoxShiftWrapper = styled.div`
  margin-top: -200px;
`
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

const Speciality = () => {
  const data = useStaticQuery(graphql`
    query {
      blister: allFile(filter: { dir: { regex: "/blister/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 585, height: 450, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const blister = {
    desc: (
      <span>
        Są produkty, które nie wymagają fantazyjnych opakowań. Wówczas stosuje
        się do nich <strong>opakowania blistrowe</strong>. Powstają one w
        oparciu o dowolne kształty i wymiary. Idealnie nadają się do pakowania
        wszelkiego rodzaju towaru. Stałe powodzenie gwarantuje im również
        możliwość pełnej prezentacji produktu. W takim opakowaniu jest on
        doskonale widoczny bez konieczności wyjmowania go.
      </span>
    ),
    images: data.blister,
  }
  return (
    <GradientSectionWrapper id="speciality">
      <SliderBoxShiftWrapper>
        <SliderBox
          desc={blister.desc}
          images={blister.images}
          direction={'row'}
          tall={true}
        />
      </SliderBoxShiftWrapper>
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
    </GradientSectionWrapper>
  )
}

export default Speciality
