import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GradientSectionWrapper, PageSectionHeader } from './shared'
import SliderBox from './SliderBox'

const SliderBoxShiftWrapper = styled.div`
  margin-top: -200px;
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
    name: '',
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
    <GradientSectionWrapper>
      <SliderBoxShiftWrapper>
        <SliderBox
          name={blister.name}
          desc={blister.desc}
          images={blister.images}
          direction={'row'}
          tall={true}
        />
      </SliderBoxShiftWrapper>
      <PageSectionHeader invert>Nasza specjalizacja</PageSectionHeader>
    </GradientSectionWrapper>
  )
}

export default Speciality
