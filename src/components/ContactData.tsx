import React from 'react'
import styled from 'styled-components'
import ContactDetails from './ContactDetails'
import { Mobile, Tablet } from './Responsive'
import { colors, device, FlexWrapper, GradientButton } from './shared'
import Social from './Social'

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
  font-size: 1em;
  padding: 15px 30px;
  @media ${device.desktop} {
    font: 400 1.125em 'Lato';
    padding: 15px 78px;
  }
  text-decoration: none;

  margin-top: 1em;
  width: auto;
`
const ContactDataWrapper = styled(FlexWrapper)`
  margin: -0.5em 0 0 0;
  @media ${device.desktop} {
    margin: -1.8em 0 0 2em;
  }
`

const ContactData = () => {
  return (
    <ContactDataWrapper direction={'column'}>
      <Title>Adres</Title>
      <Data>
        Forty Spółka Jawna
        <br />
        ul. Kopalniana 6a, 01-321 Warszawa
      </Data>
      <Mobile>
        <ContactDetails />
      </Mobile>
      <Tablet>
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
      </Tablet>
      <Social />
    </ContactDataWrapper>
  )
}

export default ContactData
