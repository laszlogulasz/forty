import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { colors, FlexWrapper, GradientButton } from './shared'

const Title = styled.div`
  margin: 1em 0 0.5em 0;
  font: 400 0.75em 'Lato';
  color: ${colors.secondaryGray};
  text-transform: uppercase;
`
const Data = styled.div`
  font: 400 0.75em 'Lato';
  color: ${colors.primaryGray};
`
const Mail = styled.a`
  font: 400 0.75em 'Lato';
  color: ${colors.primaryRed};
  text-decoration: none;
  max-width: 150px;
`
const TelButton = styled(GradientButton)`
  font-size: 1.125em;
  text-decoration: none;
  padding: 15px 78px;
  margin-top: 1em;
  width: auto;
`
const ContactDataWrapper = styled(FlexWrapper)`
  margin: -0.5em 0 0 2em;
`
const SocialWrapper = styled(FlexWrapper)`
  margin-top: 36px;
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

const ContactData = () => {
  return (
    <ContactDataWrapper direction={'column'}>
      <Title>Adres</Title>
      <Data>Forty Spółka Jawna, ul. Kopalniana 6a, 01-321 Warszawa</Data>
      <Title>Napisz do nas</Title>
      <Mail href="&#109;&#097;i&#108;&#116;o&#058;&#x62;&#x69;&#x75;&#x72;&#x6f;&#x40;&#x66;&#x6f;&#x72;&#x74;&#x79;&#x2e;&#x63;&#x6f;&#x6d;&#x2e;&#x70;&#x6c;">
        &#x62;&#x69;&#x75;&#x72;&#x6f;&#x40;&#x66;&#x6f;&#x72;&#x74;&#x79;&#x2e;&#x63;&#x6f;&#x6d;&#x2e;&#x70;&#x6c;
      </Mail>
      <Mail href="&#109;&#097;i&#108;&#116;o&#058;&#x7a;&#x61;&#x70;&#x79;&#x74;&#x61;&#x6e;&#x69;&#x61;&#x40;&#x66;&#x6f;&#x72;&#x74;&#x79;&#x2e;&#x63;&#x6f;&#x6d;&#x2e;&#x70;&#x6c;">
        &#x7a;&#x61;&#x70;&#x79;&#x74;&#x61;&#x6e;&#x69;&#x61;&#x40;&#x66;&#x6f;&#x72;&#x74;&#x79;&#x2e;&#x63;&#x6f;&#x6d;&#x2e;&#x70;&#x6c;
      </Mail>
      <TelButton as={'a'} href="tel:+48226649769">
        + 48 22 664 97 69
      </TelButton>
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
    </ContactDataWrapper>
  )
}

export default ContactData
