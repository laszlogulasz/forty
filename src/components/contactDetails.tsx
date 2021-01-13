import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { MobileAndTablet } from './Responsive'
import { device } from './shared'

const ContactDetailsList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  align-self: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0 0 0;

  @media ${device.mobileAndtablet} {
    flex-direction: column-reverse;
    align-items: center;
    align-self: center;
  }
  @media ${device.tablet} {
    /* margin: 15px 0 30px 0; */
  }

  padding: 0;
`
const ContactDetailsElement = styled.li`
  list-style: none;
  margin: 0 2em 0 0;
  display: inline;
  font: 400 0.875em 'Lato';
  cursor: pointer;
  p {
    text-decoration: none;
    text-align: center;
    color: white;
    font: 700 1em 'Lato';
    margin-bottom: 0.5em;
  }
  a {
    color: white;
    text-decoration: none;
    text-align: center;
    transition: color 0.2s ease;
    &:hover,
    &:active,
    &:focus {
      color: #ff4e00;
    }

    svg {
      color: #ff4e00;
      margin-right: 8px;
    }
  }
  @media ${device.mobileAndtablet} {
    margin: 0.5em 0;
  }
`

const ContactDetails: React.FC = () => {
  return (
    <address>
      <ContactDetailsList>
        <MobileAndTablet>
          <ContactDetailsElement>
            <p>Forty Spółka Jawna</p>
            <a href="https://g.page/Forty_Biuro?share">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              ul. Kopalniana 6a, 01-321 Warszawa
            </a>
          </ContactDetailsElement>
        </MobileAndTablet>
        <ContactDetailsElement>
          <a href="tel:+48 22 664 97 69">
            <FontAwesomeIcon icon={faPhoneAlt} /> +48 22 664 97 69
          </a>
        </ContactDetailsElement>
        <ContactDetailsElement>
          <a href="&#109;&#097;i&#108;&#116;o&#058;&#x62;&#x69;&#x75;&#x72;&#x6f;&#x40;&#x66;&#x6f;&#x72;&#x74;&#x79;&#x2e;&#x63;&#x6f;&#x6d;&#x2e;&#x70;&#x6c;">
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            &#x62;&#x69;&#x75;&#x72;&#x6f;&#x40;&#x66;&#x6f;&#x72;&#x74;&#x79;&#x2e;&#x63;&#x6f;&#x6d;&#x2e;&#x70;&#x6c;
          </a>
        </ContactDetailsElement>
      </ContactDetailsList>
    </address>
  )
}

export default ContactDetails
