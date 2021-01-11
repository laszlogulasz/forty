import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import {
  BlackSectionWrapper,
  Description,
  PageSectionHeader,
  size,
  SmallHeader,
} from './shared'

const Quote = styled.blockquote`
  font: 200 italic 1.5em 'lato';
  width: 800px;
  color: white;
  line-height: 1.5em;
  margin-bottom: 50px;
`
const SmallHeaderLowerCase = styled(SmallHeader)`
  text-transform: none;
`
const Environment = () => {
  const isLaptop = useMediaQuery({ minWidth: size.laptop })
  const col = isLaptop ? 2 : 1
  return (
    <BlackSectionWrapper id="environment">
      <PageSectionHeader>Ekologia</PageSectionHeader>
      <SmallHeaderLowerCase>
        Tworzywa sztuczne a środowisko
      </SmallHeaderLowerCase>
      <Description col={col}>
        Tworzywa sztuczne od początku ich wynalezienia funkcjonują w przestrzeni
        człowieka. Weszły do wszystkich gałęzi gospodarki i w pewnych obszarach
        wydają się niezastąpione. Same w sobie tworzywa sztuczne nie są
        niebezpiecznedla człowieka i środowiska. Tworzywa sztuczne łatwo poddają
        się recyklingowi. Dlatego najważniejszą rzeczą jest zapewnienie wysokiej
        świadomości społecznej, zapewnienie funkcjonowania tworzyw sztucznych w
        obiegu zamkniętymi poddawanie ich recyklingowi.
      </Description>
      <SmallHeaderLowerCase>Tworzywa sztuczne w Forty</SmallHeaderLowerCase>
      <Description col={col}>
        Projektujemy rozwiązania, w których odpad tworzyw sztucznych z produkcji
        jest minimalny. Dodatkowo, cały odpad trafia do firm, które robią z
        niego pełnowartościowe tworzywo.
      </Description>
      <SmallHeaderLowerCase>
        Jak sortować tworzywa sztuczne
      </SmallHeaderLowerCase>
      <Description col={col}>
        Zajmujemy się produkcją opakowań z tworzyw sztucznych, głównie PET, PS,
        PP i PVC. W trosce o środowisko promujemy zachowania proekologiczne i
        zachęcamy poprawnego do sortowania odpadów do których na koniec trafia
        część naszej produkcji. Chcemy, żeby 100% tworzyw sztucznych wróciła do
        nas ponownie jako przerobione tworzywo do kolejnej produkcji.
      </Description>
    </BlackSectionWrapper>
  )
}

export default Environment
