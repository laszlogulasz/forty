import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {
  colors,
  FlexWrapper,
  GradientButton,
  Motto,
  SectionHeader,
} from './shared'

const ContactFormWrapper = styled(FlexWrapper)`
  width: 485px;
  height: 485px;
  background-color: white;
  padding: 50px;
`
const ContactFormHeader = styled(SectionHeader)`
  font-size: 0.75em;
`
const ContactMotto = styled(Motto)`
  color: ${colors.primaryDarkGray};
  margin-bottom: 20px;
`
const ContactLegend = styled.legend`
  display: block;
  margin: 30px 0;
  font: 100 1.125em 'Lato';
  color: ${colors.primaryGray};
`
const ContactSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  font: 100 0.9375em 'Lato';
  color: ${colors.primaryGray};
  background: ${colors.secondaryLightGray};
  width: 100%;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='40' viewBox='0 0 35 25' width='45' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  border: none;
  border-radius: 30px;
  margin-right: 2em;
  padding: 1em;
  padding-right: 2em;
  &:active,
  &:focus {
    outline: none;
    box-shadow: inset 0 0 10px ${colors.primaryDarkGrayOpacity};
  }
`
const ContactInput = styled.input`
  font: 100 0.9375em 'Lato';
  color: ${colors.primaryGray};
  background: ${colors.secondaryLightGray};
  width: calc(100% - 2em);
  border: none;
  border-radius: 30px;
  margin-top: 1.5em;
  margin-right: 1em;
  padding: 1em;
  &:last-child {
    margin-right: 0;
  }
  &:active,
  &:focus {
    outline: none;
    box-shadow: inset 0 0 10px ${colors.primaryDarkGrayOpacity};
  }
`
const ContactFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  position: absolute;
  background-color: red;
`

const ContactLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  font: 100 0.9375em 'Lato';
  color: ${colors.primaryGray};
  background: ${colors.secondaryLightGray};
  width: calc(100% - 2em);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: none;
  border-radius: 30px;
  margin-top: 1.5em;
  margin-right: 1em;
  padding: 1em;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
    box-shadow: inset 0 0 10px ${colors.primaryDarkGrayOpacity};
  }
`
const Ikon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding-right: 1px;
  width: 23px;
  height: 23px;
  background-color: ${colors.primaryRed};
  transition: all 0.2s ease;

  svg {
    color: white;
  }
`
const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
`
const ContactButton = styled(GradientButton)`
  box-shadow: 0 0 20px ${colors.primaryDarkGrayOpacity2};
  padding: 1.5em 60px;
  margin: 1.9em 0 0 0;
`

const ContactForm = () => {
  const ContactFileInputRef = useRef(null)
  const ContactFileLabelRef = useRef(null)
  useEffect(() => {
    const labelVal = ContactFileLabelRef?.current.innerHTML
    ContactFileInputRef?.current.addEventListener('change', e => {
      var fileName = ''
      fileName = e.target.value.split('\\').pop()

      if (fileName && ContactFileLabelRef) {
        console.log(
          '🚀 ~ file: ContactForm.tsx ~ line 150 ~ ContactForm ~ ContactFileLabelRef',
          ContactFileLabelRef
        )
        ContactFileLabelRef.current.innerHTML = fileName
      } else {
        ContactFileLabelRef.current = labelVal
      }
    })
  }, [ContactFileInputRef, ContactFileLabelRef])

  return (
    <ContactFormWrapper direction={'column'}>
      <ContactFormHeader>zapytaj</ContactFormHeader>
      <ContactMotto>Zawsze odpowiemy na Twoje pytania!</ContactMotto>
      <form>
        <Fieldset>
          <ContactLegend>Chcę zapytać o:</ContactLegend>
          <ContactSelect name="temat" aria-label={'Temat pytania'}>
            <option value="wycena">Przykładowa wycena</option>
          </ContactSelect>
          <ContactInput
            type={'text'}
            name={'imię i nazwisko'}
            aria-label={'Twoja firma lub imię i nazwisko'}
            placeholder={'Firma / imię i nazwisko'}
          />
          <FlexWrapper direction={'row'}>
            <ContactInput
              type={'tel'}
              name={'tel'}
              aria-label={'Podaj numer telefonu'}
              placeholder={'Numer telefonu'}
            />

            <ContactInput
              type={'email'}
              name={'email'}
              aria-label={'Podaj adres email'}
              placeholder={'Email'}
            />
          </FlexWrapper>
          <FlexWrapper direction={'row'}>
            <ContactFileInput
              ref={ContactFileInputRef}
              type={'file'}
              name={'file'}
              id={'file'}
            />
            <ContactLabel ref={ContactFileLabelRef} htmlFor={'file'}>
              Dodaj plik
              <Ikon>
                <FontAwesomeIcon icon={faPlus} />
              </Ikon>
            </ContactLabel>
            <ContactButton type="submit">Wyślij</ContactButton>
          </FlexWrapper>
        </Fieldset>
      </form>
    </ContactFormWrapper>
  )
}

export default ContactForm
