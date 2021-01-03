import React from 'react'
import styled from 'styled-components'
import { PageSectionHeader, SectionWrapper, SmallHeader } from './shared'
interface SpecialityList {
  invert?: boolean
}

const SpecialityList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  padding: 0;
  width: 100%;
  list-style: none;
  & > * {
    color: ${(props: SpecialityList) => (props.invert ? 'white' : 'gray')};
  }
`
const SpecialityListItem = styled.li`
  margin-left: 0;
  padding: 0;
  & > p {
    font: 100 1.2em 'Lato';
    line-height: 1.5em;
    text-align: left;
  }
`
const HistorySmallHeader = styled(SmallHeader)`
  margin: 1em 0 0 0;
`
const History = () => {
  return (
    <SectionWrapper id={'history'}>
      <PageSectionHeader>Historia firmy</PageSectionHeader>
      <SpecialityList>
        <SpecialityListItem>
          <HistorySmallHeader>1994</HistorySmallHeader>
          <p>
            Założenie Firmy Forty przez dwóch Wspólników: Andrzeja Korczyńskiego
            i Mirosławy Tytkowskiej. Zakup maszyn do termoformowania.
            Rozpoczęcie działalności usługowej w wynajętym w Truskawiu zakładzie
            stolarskim o powierzchni ca 100 m2 i pierwsza produkcja: pakowanie
            baterii dla Firmy Gillette.
          </p>
        </SpecialityListItem>
        <SpecialityListItem>
          <HistorySmallHeader>1996</HistorySmallHeader>
          <p>
            Zakup nowego zakładu od Spółdzielni Mototransport w Różanie.
            Rozpoczęcie produkcji w nowej lokalizacji.
          </p>
        </SpecialityListItem>
        <SpecialityListItem>
          <HistorySmallHeader>1996 - 2000</HistorySmallHeader>
          <p>
            Zakup kolejnych maszyn do termoformowania Firmy ILLIG oraz urządzeń
            towarzyszących. Remont hali produkcyjneji pomieszczeń socjalnych
            oraz adaptacja Zakładu do potrzeb produkcyjnych.
          </p>
        </SpecialityListItem>
        <SpecialityListItem>
          <HistorySmallHeader>2004</HistorySmallHeader>
          <p>
            Zakup nowoczesnych obrabiarek CNC. Urządzenie własnej narzędziowni i
            Biura Konstrukcyjnego.
          </p>
        </SpecialityListItem>
        <SpecialityListItem>
          <HistorySmallHeader>2006</HistorySmallHeader>
          <p>
            Zakup Zakładu od Polmozbytu w Różanie po drugiej stronie ulicy o
            powierzchni Ca 500m2 i adaptacja do celów produkcyjnych. Rozpoczęcie
            produkcji na nowo zakupionych maszynach do termoformowania płyt wraz
            z centrum obróbczym Firmy Geiss.
          </p>
        </SpecialityListItem>
        <SpecialityListItem>
          <HistorySmallHeader>2016</HistorySmallHeader>
          <p>
            Wybudowanie nowoczesnego biura handlowego w Warszawie przy ulicy
            Kopalnianej 6A.
          </p>
        </SpecialityListItem>
        <SpecialityListItem>
          <HistorySmallHeader>2018</HistorySmallHeader>
          <p>
            Zakończenie budowy nowej hali produkcyjnej i magazynu wysokiego
            składowania w Różanie przy ul. Warszawskiej 42.
          </p>
        </SpecialityListItem>
        <SpecialityListItem>
          <HistorySmallHeader>2020</HistorySmallHeader>
          <p>
            Wdrożenie nowoczesnego programu zarządzania ERP Optima XL, zakup
            wózka widłowego STILL. Planowana wymiana wentylacji na hali
            produkcyjnej, która znacznie poprawi warunki pracy naszych
            pracowników. Nasze następne cele rozwojowe: Powiększenie powierzchni
            magazynowej (projekt i budowa magazynu wysokiego składowania),
            dalsza automatyzacja procesu produkcji.
          </p>
        </SpecialityListItem>
      </SpecialityList>
    </SectionWrapper>
  )
}

export default History

// 2006
//

// 2016
// Wybudowanie nowoczesnego biura handlowego w Warszawie przy ulicy Kopalnianej 6A.

// 2018
// Zakończenie budowy nowej hali produkcyjnej i magazynu wysokiego składowania w Różanie przy ul. Warszawskiej 42

// 2019
// Zakup nowoczesnego automatu do termoformowania Firmy ILLIG.

// 2020
// Wdrożenie nowoczesnego programu zarządzania ERP Optima XL, zakup wózka widłowego STILL. Planowana wymiana wentylacji na hali produkcyjnej, która znacznie poprawi warunki pracy naszych pracowników.
// Nasze następne cele rozwojowe: Powiększenie powierzchni magazynowej
// (projekt i budowa magazynu wysokiego składowania), dalsza automatyzacja procesu produkcji.
