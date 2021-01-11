import React from 'react'
import styled from 'styled-components'
import { BlackSectionWrapper, device, PageSectionHeader } from './shared'

const Quote = styled.blockquote`
  font: 200 italic 1.5em 'lato';
  width: 100%;
  color: white;
  line-height: 1.5em;
  margin-bottom: 50px;
  @media ${device.mobile} {
    font: 200 italic 1em 'lato';
  }
  @media ${device.tablet} {
    font: 200 italic 1.2em 'lato';
    width: 700px;
  }
  @media ${device.laptop} {
    width: 900px;
    font: 200 italic 1.5em 'lato';
  }
`
const Mission = () => {
  return (
    <BlackSectionWrapper id="our-mision">
      <PageSectionHeader>Misja firmy</PageSectionHeader>
      <Quote>
        &bdquo;Misją Forty jest produkcja opakowań i tac transportowych z
        tworzyw sztucznych najwyższej jakości, które w 100% będą poddane
        recyklingowi oraz popularyzacja zachowań proekologicznych. Naszą
        nadrzędną wartością jest szacunek wobec Klientów i
        Współpracowników.&rdquo;
      </Quote>
    </BlackSectionWrapper>
  )
}

export default Mission
