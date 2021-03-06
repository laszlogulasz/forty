import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import {
  BoxWrapper,
  PageSectionHeader,
  SectionWrapper,
  SmallHeader,
} from './shared'
interface WokflowProps {
  invert: 'row' | 'row-reverse'
}
const WorkflowListWrapper = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const WorkflowWrapper = styled(BoxWrapper)`
  position: relative;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  overflow: visible;
  border-radius: 10px;
  margin-bottom: 3em;
  background: ${(props: WokflowProps) =>
    props.invert === 'row-reverse'
      ? `linear-gradient(
    90deg,
    rgba(254, 96, 20, 1) 0%,
     rgba(252, 192, 117, 1) 100%
  )`
      : 'white'};
  border: ${(props: WokflowProps) =>
    props.invert === 'row-reverse'
      ? 'none'
      : `2px solid rgb(254, 96, 20)
  `};
  & * {
    text-align: center;
    width: 100%;
    padding: 0;
  }
  & dt {
    margin: 1em 2em 0 2em;
  }
  & dd {
    margin: 0.5em 2em 1.5em 2em;
  }
  &:not(:last-child):after {
    content: '';
    position: absolute;
    width: 50px;
    height: 30px;
    color: red;
    background-image: url("data:image/svg+xml;utf8,<svg version='1.1' id='si-ant-down' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120' fill='rgb(254, 96, 20)'><title  id='cmsi-ant-down-title'>icon down</title><path d='M198.2,2c-1.3-1.3-2.8-2-4.5-2s-3.2,0.7-4.5,2L100,96.1L10.7,2C9.4,0.7,7.9,0,6.2,0S3.1,0.7,1.8,2C0.6,3.3,0,4.8,0,6.6 s0.6,3.4,1.8,4.7l93.8,98.8c1.3,1.3,2.8,2,4.5,2c1.7,0,3.2-0.7,4.5-2l93.8-98.8c1.2-1.3,1.8-2.9,1.8-4.7S199.4,3.3,198.2,2z'/></svg>");
    bottom: -50px;
  }
`

const ContractProductionSmallHeader = styled(SmallHeader)`
  font-size: 1.5em;
  text-transform: none;
  margin-bottom: 280px;
`

const ContractProduction = () => {
  const { t } = useTranslation()
  return (
    <SectionWrapper id="contract-production">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} delay={100} triggerOnce>
          {t('produkcja na zlecenie')}
        </Slide>
      </PageSectionHeader>
      <ContractProductionSmallHeader>
        {t('Produkujemy na zlecenie klienta:')}
      </ContractProductionSmallHeader>
    </SectionWrapper>
  )
}

export default ContractProduction
