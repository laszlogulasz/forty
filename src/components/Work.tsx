import React from 'react'
import styled from 'styled-components'
import { colors, PageSectionHeader, SectionWrapper } from './shared'

interface SpecialityList {
  invert?: boolean
}
const QualitySectionWrapper = styled(SectionWrapper)`
  margin-bottom: 50px;
`
const OffersBox = styled.div`
  max-width: 1170;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  flex: 1 1 auto;
  margin-top: 30px;
`
const Offer = styled.a`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  width: 320px;
  height: 150px;
  justify-content: center;
  font: 400 1.2em 'lato';
  text-decoration: none;
  box-shadow: 0 0 10px ${colors.primaryGray};
  margin: 25px 20px;
  &:last-child {
  }
  &:nth-child(odd) {
    border: solid 2px ${colors.secondaryGray};
    color: ${colors.secondaryGray};
  }
  &:nth-child(even) {
    background: linear-gradient(
      90deg,
      rgba(252, 192, 117, 1) 0%,
      rgba(254, 96, 20, 1) 100%
    );
    color: white;
  }
`

const Work = () => {
  return (
    <QualitySectionWrapper id="work">
      <PageSectionHeader>Praca</PageSectionHeader>
      <OffersBox>
        <Offer
          href="/oferta_elektromechanik.pdf"
          title={'Oferta elektromechanik'}
        >
          Elektromechanik
        </Offer>
        <Offer
          href="/oferta_pecjalista_ds_produkcji.pdf"
          title={'Oferta specjalista ds. produkcji'}
        >
          Specjalista ds. produkcji
        </Offer>
        <Offer href="/oferta_slusarz.pdf" title={'Oferta Ślusarz / frezer'}>
          Ślusarz / frezer
        </Offer>
      </OffersBox>
    </QualitySectionWrapper>
  )
}

export default Work
