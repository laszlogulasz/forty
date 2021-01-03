import { navigate } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
import { MainHeader, Motto, TransparentButton, Welcome } from './shared'

const SlideContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset 0 0 10px black;
  margin: 50px 100px;
  padding-left: 80px;
  padding-right: 80px;
  height: calc(100% - 130px);
  align-self: stretch;
  border-radius: 60px;
  /* backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px); */
`
const SlideContent: React.FC = () => {
  return (
    <SlideContentWrapper>
      <Welcome>Witamy w Forty</Welcome>
      <MainHeader>
        Od 1995 roku <span>termoformujemy</span>
        <br /> tworzywa sztuczne
      </MainHeader>
      <Motto>Tworzymy rozwiązania czyte na miarę.</Motto>
      <TransparentButton
        onClick={e => {
          navigate('#contact')
          // @ts-ignore
          e.currentTarget.blur()
        }}
      >
        Kontakt
      </TransparentButton>
    </SlideContentWrapper>
  )
}

export default SlideContent
