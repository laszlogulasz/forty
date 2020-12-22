import React from 'react'
import styled from 'styled-components'
import { colors, FlexWrapper, GradientButton, Legend } from './shared'

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    height: 45px;
    border-radius: 45px;
    border: none;
    width: 490px;
    margin: 0 35px 0 0;
    font: 0.935em 'Lato';
    &::placeholder,
    &::-webkit-input-placeholder {
      color: ${colors.primaryDarkGray};
    }
    color: ${colors.primaryDarkGray};
    padding-left: 20px;
    background: linear-gradient(
      90deg,
      rgba(254, 96, 20, 1) 0%,
      rgba(252, 192, 117, 1) 100%
    );
  }
`
const AdditionalLegend = styled.p`
  font: italic 18px 'Lato';
  color: ${colors.primaryGray};
`
const InputWrapper = styled(FlexWrapper)`
  margin: 85px 30px 0 0;
  input {
    &:active,
    &:focus {
      outline: none;
      box-shadow: 0 0 10px ${colors.primaryLightGray};
    }
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
        <GradientButton type="submit">Wyślij</GradientButton>
      </InputWrapper>
    </NewsletterForm>
  )
}

export default Newsletter
