import { navigate } from '@reach/router'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import React, { ReactFragment } from 'react'
import styled from 'styled-components'
import { device, MainHeader, Motto, TransparentButton, Welcome } from './shared'

interface ISlideContent {
  heroList: {
    firstLine: ReactFragment
    secondLine: ReactFragment
    thirdLine: ReactFragment
  }
}
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
const SlideContent: React.FC<ISlideContent> = ({ heroList }) => {
  const { t } = useTranslation()
  return (
    <SlideContentWrapper>
      <Welcome>{heroList && heroList.firstLine}</Welcome>
      <MainHeader>{heroList && heroList.secondLine}</MainHeader>
      <Motto>{heroList && heroList.thirdLine}</Motto>
      <TransparentButton
        onClick={e => {
          navigate('#contact')
          // @ts-ignore
          e.currentTarget.blur()
        }}
      >
        {t('KONTAKT')}
      </TransparentButton>
    </SlideContentWrapper>
  )
}

export default SlideContent
