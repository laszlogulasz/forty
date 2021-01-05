import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { PageSectionHeader, SectionWrapper } from './shared'
import SliderBox from './SliderBox'

const Blister = () => {
  const data = useStaticQuery(graphql`
    query {
      blister: allFile(filter: { dir: { regex: "/blister/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 450, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const blister = {
    desc: (
      <>
        Są produkty, które nie wymagają fantazyjnych opakowań. Wówczas stosuje
        się do nich <strong>opakowania blistrowe</strong>. Powstają one w
        oparciu o dowolne kształty i wymiary. Idealnie nadają się do pakowania
        wszelkiego rodzaju towaru. Stałe powodzenie gwarantuje im również
        możliwość pełnej prezentacji produktu. W takim opakowaniu jest on
        doskonale widoczny bez konieczności wyjmowania go.
      </>
    ),
    images: data.blister,
  }
  return (
    <SectionWrapper id="blister">
      <PageSectionHeader>Co to jest blister</PageSectionHeader>
      <SliderBox
        desc={blister.desc}
        images={blister.images}
        direction={'row'}
        tall={true}
      />
    </SectionWrapper>
  )
}

export default Blister
