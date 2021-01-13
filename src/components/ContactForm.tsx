import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import {
  colors,
  device,
  FlexWrapper,
  GradientButton,
  Motto,
  SectionHeader,
  size,
} from './shared'

const ContactFormWrapper = styled(FlexWrapper)`
  @media ${device.mobileAndtablet} {
    width: 100vw;
    max-width: 500px;
    height: auto;
    padding: 1em;
    margin-top: 1em;
    box-sizing: border-box;
  }
  @media (min-width: 500px) {
    border-radius: 10px;
  }
  @media ${device.laptop} {
    border-radius: 0;
    width: 365px;
    height: 480px;
    padding: 30px;
  }
  @media ${device.desktop} {
    width: 485px;
    height: 485px;
    padding: 50px;
  }
  background-color: white;
`
const ContactFormHeader = styled(SectionHeader)`
  font-size: 0.75em;
  margin-top: 0px;
`
const ContactMotto = styled(Motto)`
  color: ${colors.primaryDarkGray};
  margin-top: 0;
  @media ${device.desktop} {
    margin-top: 20px;
  }
  margin-bottom: 20px;
`
const ContactLegend = styled.legend`
  display: block;
  margin: 20px 0;
  font: 100 1em 'Lato';

  @media ${device.laptop} {
    margin: 25px 0;
  }
  @media ${device.desktop} {
    margin: 30px 0;
  }
  color: ${colors.primaryGray};
`
const ContactSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  color: ${colors.primaryGray};
  background: ${colors.secondaryLightGray};
  width: calc(100% - 0.5em);
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='40' viewBox='0 0 33 30' width='42' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  border: none;
  border-radius: 30px;

  font: 100 0.9em 'Lato';
  padding: 0.8em;
  padding-right: 1.5em;
  margin: 0;

  @media ${device.desktop} {
    font: 100 0.9375em 'Lato';
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='40' viewBox='0 0 35 25' width='45' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    padding: 1em;
    padding-right: 2em;
    width: 100%;
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: inset 0 0 10px ${colors.primaryDarkGrayOpacity};
  }
`
const ContactInput = styled.input`
  font: 100 0.9em 'Lato';
  margin-top: 1.2em;

  @media ${device.laptop} {
    margin-top: 1.6em;
  }
  @media ${device.desktop} {
    font: 100 0.9375em 'Lato';
    padding: 1em;
    margin-top: 1.8em;
  }
  color: ${colors.primaryGray};
  background: ${colors.secondaryLightGray};
  width: calc(100% - 2em);
  border: none;
  border-radius: 30px;
  padding: 0.8em;
  margin-top: 1.2em;

  @media ${device.laptop} {
    margin-top: 1.6em;
    margin-right: 1em;
  }
  @media ${device.desktop} {
    font: 100 0.9375em 'Lato';

    padding: 1em;
    margin-top: 1.8em;
  }
  &:last-child {
    margin-right: 0;
  }
  &:active,
  &:focus {
    outline: none;
    box-shadow: inset 0 0 10px ${colors.primaryDarkGrayOpacity};
  }
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    select,
    textarea,
    input {
      font-size: 16px;
    }
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
  margin-top: 1.2em;
  padding: 0.6em 0.8em;

  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
    box-shadow: inset 0 0 10px ${colors.primaryDarkGrayOpacity};
  }
  @media ${device.laptop} {
    margin-top: 1.9em;
    margin-right: 1.5em;
    padding: 0.8em 1em 0.5em 1em;
  }
  @media ${device.desktop} {
    margin-top: 1.9em;
    padding: 1em 1em 0em 1em;
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
  padding: 1em 40px;
  margin: 1.9em 0 0 0;
  align-self: center;
  @media ${device.laptop} {
    align-self: flex-start;
    padding: 1.2em 40px;
    margin: 2.5em 0 0 0;
    transform: translateX(-0.5em);
  }
  @media ${device.desktop} {
    padding: 1.5em 60px;
    transform: translateX(0);
  }
`

const ContactForm = () => {
  const isDesktop = useMediaQuery({ minWidth: size.desktop })
  const isLaptop = useMediaQuery({ minWidth: size.laptop })
  const { register, handleSubmit, watch, errors } = useForm()
  const ContactFileInputRef = useRef(null)
  const ContactFileLabelRef = useRef(null)
  const onSubmit = data => console.log(data)
  useEffect(() => {
    const labelVal = ContactFileLabelRef?.current.innerHTML
    ContactFileInputRef?.current.addEventListener('change', e => {
      let fileName = ''
      fileName = e.target.value.split('\\').pop()

      if (fileName) {
        ContactFileLabelRef.current.innerHTML = fileName
      } else {
        ContactFileLabelRef.current = labelVal
      }
    })
  }, [ContactFileInputRef, ContactFileLabelRef])

  return (
    <ContactFormWrapper direction={'column'}>
      <ContactFormHeader>zapytaj</ContactFormHeader>
      <ContactMotto>
        Zawsze odpowiemy
        {'\n'}na Twoje pytania!
      </ContactMotto>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <ContactLegend>Chcę zapytać o:</ContactLegend>
          <ContactSelect
            name="temat"
            aria-label={'Temat pytania'}
            defaultValue={'Przykładowa wycena'}
          >
            <option value="wycena" ref={register}>
              Przykładowa wycena
            </option>
          </ContactSelect>
          <ContactInput
            type={'text'}
            name={'imię i nazwisko'}
            aria-label={'Twoja firma lub imię i nazwisko'}
            placeholder={'Firma / imię i nazwisko'}
            ref={register({ required: true })}
          />
          <FlexWrapper direction={isDesktop ? 'row' : 'column'}>
            <ContactInput
              type={'tel'}
              name={'tel'}
              aria-label={'Podaj numer telefonu'}
              placeholder={'Numer telefonu'}
              ref={register({ required: true })}
            />

            <ContactInput
              type={'email'}
              name={'email'}
              aria-label={'Podaj adres email'}
              placeholder={'Email'}
              ref={register({ required: true })}
            />
          </FlexWrapper>
          <FlexWrapper direction={isLaptop ? 'row' : 'column'}>
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
