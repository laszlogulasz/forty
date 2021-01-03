import React from 'react'
import styled from 'styled-components'
import { BlackSectionWrapper, PageSectionHeader } from './shared'

const Quote = styled.blockquote`
  font: 200 italic 1.5em 'lato';
  width: 800px;
  color: white;
  line-height: 1.5em;
  margin-bottom: 50px;
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
