import { navigate } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
import { device, MainHeader, Motto, TransparentButton, Welcome } from './shared'

const SlideContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding-left: 1.5em;
  padding-right: 1.5em;
  height: 100%;
  @media ${device.tablet} {
    justify-content: center;
    box-shadow: inset 0 0 10px black;
    border-radius: 60px;
    margin: 20px 100px 0 100px;
    padding-left: 40px;
    padding-right: 40px;
    height: calc(100% - 130px);
  }
  @media ${device.laptop} {
  }
  @media ${device.desktop} {
    margin: 50px 100px;
    padding-left: 80px;
    padding-right: 80px;
    height: calc(100% - 130px);
  }

  align-self: stretch;
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
