import React from 'react'
import styled from 'styled-components'
import { TransparentButton } from './transparentButton'

const SlideContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset 0 0 10px black;
  margin: 50px 100px;
  padding-left: 80px;
  padding-right: 80px;
  height: calc(100% - 100px);
  align-self: stretch;
  border-radius: 60px;
`
const TopHeader = styled.h4`
  margin: 0;
  font-weight: thin;
  font: 300 2em 'Lato';
  color: white;
`
const MainHeader = styled.h1`
  margin: 20px 0 0 0;
  font: 400 5em 'source-serif-pro';
  color: white;
  span {
    color: #ff4e00;
  }
`
const BottomHeader = styled.h2`
  margin: 20px 0 0 0;
  font: 400 2.4em 'source-serif-pro';
  color: white;
`

const SlideContent: React.FC = () => {
  return (
    <SlideContentWrapper>
      <TopHeader>Witamy w Forty</TopHeader>
      <MainHeader>
        Od 1995 roku <span>termoforujemy</span> tworzywa sztuczne
      </MainHeader>
      <BottomHeader>Tworzymy rozwiązania czyte na miarę.</BottomHeader>
      <TransparentButton>Kontakt</TransparentButton>
    </SlideContentWrapper>
  )
}

export default SlideContent
