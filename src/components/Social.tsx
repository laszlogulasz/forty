import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { colors, device, FlexWrapper } from './shared'
const SocialWrapper = styled(FlexWrapper)`
  @media ${device.tablet} {
    margin-top: 2.2em;
  }
`
const SocialIkon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 45px;
  height: 45px;
  margin-right: 16px;
  background-color: black;
  transition: all 0.2s ease;
  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.primaryRed};
    svg {
      color: white;
    }
  }
  svg {
    color: ${colors.primaryLightGray};
  }
`
const Social = () => {
  return (
    <SocialWrapper direction={'row'}>
      <SocialIkon href={'#'} aria-label="Przejdź do strony na Facebook">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </SocialIkon>
      <SocialIkon href={'#'} aria-label="Przejdź do profilu na Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialIkon>
      <SocialIkon href={'#'} aria-label="Przejdź do profilu na Instagram">
        <FontAwesomeIcon icon={faTwitter} />
      </SocialIkon>
    </SocialWrapper>
  )
}

export default Social
