import React from 'react'
import styled from 'styled-components'
import { PageSectionHeader, SectionWrapper } from './shared'

const BlisterHeaderShift = styled(PageSectionHeader)`
  margin-bottom: 220px;
`
const Blister = () => {
  return (
    <SectionWrapper id="blister">
      <BlisterHeaderShift>Co to jest blister</BlisterHeaderShift>
    </SectionWrapper>
  )
}

export default Blister
