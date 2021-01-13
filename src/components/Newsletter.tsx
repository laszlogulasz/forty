import React from 'react'
import styled from 'styled-components'
import { colors, device, FlexWrapper, GradientButton, Legend } from './shared'

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 500px;
  margin-bottom: 3em !important;
  input {
    flex-grow: 2;
    padding: 0.6em;
    border-radius: 45px 0 0 45px;
    border: none;
    font: 200 0.935em 'Lato';
    &::placeholder,
    &::-webkit-input-placeholder {
      color: white;
    }
    color: white;
    padding-left: 20px;
    background: linear-gradient(
      90deg,
      rgba(254, 96, 20, 1) 0%,
      rgba(252, 192, 117, 1) 100%
    );
  }
  @media ${device.laptop} {
    max-width: 700px;
    input {
      border-radius: 45px;
      padding: 0.8em;
      min-width: 400px;
      margin: 0 35px 0 0;
    }
  }
  @media ${device.desktop} {
    input {
      padding: 1.2em;
    }
  }
`
const AdditionalLegend = styled.p`
  font: 100 italic 14px 'Lato';
  color: ${colors.primaryGray};
  @media ${device.laptop} {
    font: italic 16px 'Lato';
  }
  @media ${device.desktop} {
    font: italic 18px 'Lato';
  }
`
const InputWrapper = styled(FlexWrapper)`
  margin: 20px 0 0 0;
  display: flex;
  padding: 0 0.5em 0 0;
  flex-direction: row;
  @media ${device.laptop} {
    margin: 85px 30px 0 0;
  }
  input {
    &:active,
    &:focus,
    &:active + button,
    &:focus + button {
      outline: none;
      box-shadow: 0 0 10px ${colors.primaryLightGray};
    }
  }
`
const GradientNewletterButton = styled(GradientButton)`
  @media ${device.mobileAndtablet} {
    padding: 0.9em 1.2em;
    border-radius: 0 45px 45px 0;
  }
  @media ${device.laptop} {
    padding: 1.2em 4em;
  }
  @media ${device.desktop} {
    padding: 1.5em 4em;
  }
`

const Newsletter = () => {
  return (
    <NewsletterForm>
      <Legend>Zapisz się do naszego newslettera!</Legend>
      <AdditionalLegend>
        Uzyskaj informacje na temat naszych nowych rozwiązan i aktualnych
        produktach.
      </AdditionalLegend>
      <InputWrapper direction={'row'}>
        <input
          type={'email'}
          name={'email'}
          aria-label={'Podaj adres email'}
          placeholder={'Twój adres email'}
        />
        <GradientNewletterButton type="submit">Wyślij</GradientNewletterButton>
      </InputWrapper>
    </NewsletterForm>
  )
}

export default Newsletter
