import React from 'react'
import styled from 'styled-components'
import { device, PageSectionHeader, SectionWrapper } from './shared'
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
  text-align: left;
  margin-bottom: 0.5em;
  font: 100 0.875em 'Lato';
  & > span {
    font: 400 0.875em 'Lato';
  }
  line-height: 1.5em;
  @media ${device.tablet} {
    font: 100 1em 'Lato';
    & > span {
      font: 400 0.9em 'Lato';
    }
    line-height: 2em;
  }
  @media ${device.laptop} {
    font: 100 1.2em 'Lato';
    & > span {
      font: 400 1em 'Lato';
    }
    line-height: 2em;
  }
`
const News = () => {
  return (
    <SectionWrapper id={'news'}>
      <PageSectionHeader>Aktualności</PageSectionHeader>
      <SpecialityList>
        <SpecialityListItem>
          <span>21.09.2020</span> – zapraszamy do obejrzenia nowej wersji naszej
          strony internetowej.
        </SpecialityListItem>
        <SpecialityListItem>
          <span>27.07.2020</span> – Wdrożyliśmy nowy system do kontroli obiegu
          odpadów pochodzących z produkcji.
        </SpecialityListItem>
        <SpecialityListItem>
          <span>15.07.2020</span> – Witamy w naszych szeregach nowego
          specjalistę ds. sprzedaży. Życzymy Tomkowi dobrych wyników i miłej
          pracy.
        </SpecialityListItem>
        <SpecialityListItem>
          <span>01.07.2020</span> – Witamy w naszym gronie nowych magazynierów –
          Arek i Paweł – życzymy sukcesów w pracy.
        </SpecialityListItem>
        <SpecialityListItem>
          <span>30.06.2020</span> – Zakończyliśmy wdrożenie nowego systemu
          produkcyjnego w ramach systemu ERP, uwzględniającego moduł MES.
        </SpecialityListItem>
        <SpecialityListItem>
          <span>15.05.2020</span> – Wdrożyliśmy nowy system magazynowy w ramach
          systemu ERP. Zakończyliśmy optymalizację powierzchni magazynowej.
        </SpecialityListItem>
        <SpecialityListItem>
          <span>30.04.2020</span> – Rekrutacja wewnętrzna wyłoniła nowego
          kierownika Magazynu – Hubert, życzymy samych sukcesów w pracy.
        </SpecialityListItem>
        <SpecialityListItem>
          <span>15.07.2020</span> – Witamy w naszych szeregach nowego
          specjalistę ds. sprzedaży. Życzymy Tomkowi dobrych wyników i miłej
          pracy.
        </SpecialityListItem>
        <SpecialityListItem>
          <span>22.04.2020 </span>– Rozpoczynamy użytkowanie wózka bocznego
          STILL
        </SpecialityListItem>
        <SpecialityListItem>
          <span>15.04.2020</span> – Z przyjemnością informujemy o tym, że
          rozpoczęliśmy sprzedaż przyłbic ochronnych. Zapraszamy do
          naszegosklepu internetowego: sklep.forty.com.pl
        </SpecialityListItem>
        <SpecialityListItem>
          <span>15.02.2020</span> – Witamy w naszych szeregach nowego
          konstruktora. Marcin – życzymy sukcesów w pracy.
        </SpecialityListItem>
      </SpecialityList>
    </SectionWrapper>
  )
}

export default News
