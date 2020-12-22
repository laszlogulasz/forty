import styled, { css } from 'styled-components'

interface FlexWrapperProps {
  direction: string
}
export const colors = {
  primaryLightGray: '#c8c8c8',
  secondaryLightGray: '#f1f8fc',
  primaryGray: '#9fa4af',
  secondaryGray: '#555555',
  primaryDarkGray: 'rgb(23, 23, 23)',
  primaryDarkGrayOpacity: 'rgba(23, 23, 23, .2)',
  primaryDarkGrayOpacity2: 'rgba(23, 23, 23, .4)',
  primaryRed: '#ff4e00',
  secondaryOrange: '#fe6d20',
}
export const SectionHeader = styled.h2`
  width: 100%;
  margin: 20px 0 0 0;
  font: 400 3.125em 'Lato';
  color: ${colors.primaryRed};
  text-transform: uppercase;
`
export const Welcome = styled.strong`
  margin: 0;
  font-weight: thin;
  font: 300 2em 'Lato';
  color: white;
`
export const MainHeader = styled.h1`
  margin: 20px 0 0 0;
  font: 400 5em 'source-serif-pro';
  color: white;
  span {
    color: ${colors.primaryRed};
  }
`
const SerifSlogan = css`
  margin: 20px 0 0 0;
  font: 400 2.4em 'source-serif-pro';
  color: white;
`
export const Motto = styled.strong`
  ${SerifSlogan}
`
export const Legend = styled.legend`
  ${SerifSlogan}
`
export const TransparentButton = styled.button`
  border-radius: 50px;
  background-color: transparent;
  align-self: flex-start;
  padding: 15px 60px;
  margin: 60px 0 0 0;
  border: 2px solid ${colors.secondaryOrange};
  color: white;
  text-transform: uppercase;
  box-shadow: none;
  transition: box-shadow 0.2s ease;
  font: 0.75em 'Lato';
  &:hover,
  &:focus {
    border: 3px solid inset ${colors.secondaryOrange};
    box-shadow: 0 0 5px ${colors.secondaryOrange},
      inset 0 0 5px ${colors.secondaryOrange};
  }
  &:active {
    color: ${colors.secondaryOrange};
    border: 3px solid inset ${colors.secondaryOrange};
    box-shadow: 0 0 2px ${colors.secondaryOrange},
      inset 0 0 2px ${colors.secondaryOrange};
    outline: none;
  }
  &:visited,
  &:focus-visible {
    outline: none;
  }
`
export const GradientButton = styled(TransparentButton)`
  background: linear-gradient(
    90deg,
    rgba(254, 96, 20, 1) 0%,
    rgba(252, 192, 117, 1) 100%
  );
  box-shadow: none;
  margin: 0;
  border: none;
  color: ${colors.primaryDarkGray};
  &:hover,
  &:focus {
    border: none;
    box-shadow: 0 0 10px ${colors.primaryGray};
  }
  &:active {
    color: ${colors.secondaryGray};
    border: none;
    box-shadow: 0 0 2px ${colors.primaryGray};
    outline: none;
  }
  &:visited,
  &:focus-visible {
    outline: none;
  }
`
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props: FlexWrapperProps) => props.direction};
`
export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color};
  & > * {
    justify-content: space-between;
    max-width: 1170px;
    align-self: center;
  }
`
