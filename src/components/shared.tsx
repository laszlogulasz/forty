import styled, { css } from 'styled-components'

interface FlexWrapperProps {
  direction?: string
}
interface SmallHeaderProps {
  invert?: string | boolean
}
interface DescriptionProps {
  invert?: string
  col?: number
}
interface BoxWrapperProps {
  flat?: boolean
  wide?: boolean
  tall?: boolean
}
interface TransparentButtonProps {
  dark?: boolean
}
export const colors = {
  primaryLightGray: '#c8c8c8',
  secondaryLightGray: '#f1f8fc',
  primaryGray: '#9fa4af',
  secondaryGray: '#555555',
  primaryDarkGray: 'rgb(23, 23, 23)',
  primaryDarkGrayOpacity: 'rgba(23, 23, 23, .2)',
  primaryDarkGrayOpacity1: 'rgba(0, 0, 0, .7)',
  primaryDarkGrayOpacity2: 'rgba(23, 23, 23, .4)',
  primaryRed: '#ff4e00',
  secondaryOrange: '#fe6d20',
}
export const SectionHeader = styled.h2`
  width: 100%;
  margin: 30px 0 0 0;
  font: 400 2em 'Lato';
  color: ${(props: SmallHeaderProps) =>
    props.invert ? 'white' : colors.primaryRed};
  text-transform: uppercase;
`
export const PageSectionHeader = styled(SectionHeader)`
  margin: 50px 0 20px 0;
`
export const SmallHeader = styled.h3`
  width: 100%;
  margin: 0;
  font: 400 1.6em 'Lato';
  color: ${(props: SmallHeaderProps) =>
    props.invert === 'row-reverse' ? 'white' : colors.primaryRed};
  text-transform: uppercase;
`
export const Description = styled.p`
  width: 100%;
  margin: 5px 0 40px 0;
  font: 100 1.125em 'Lato';
  color: ${(props: DescriptionProps) =>
    props.invert === 'row-reverse' ? 'white' : colors.primaryGray};
  ${(props: DescriptionProps) => props.col && 'column-count: ' + props.col};
  column-gap: 3em;
`
export const Welcome = styled.strong`
  margin: 0;
  font-weight: thin;
  font: 300 2em 'Lato';
  color: white;
`
export const MainHeader = styled.h1`
  margin: 20px 0 0 0;
  font: 400 4em 'source-serif-pro';
  color: white;
  span {
    color: ${colors.primaryRed};
  }
`
const SerifSlogan = css`
  margin: 20px 0 0 0;
  font: 400 2em 'source-serif-pro';
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
  color: ${(props: TransparentButtonProps) =>
    props.dark ? colors.secondaryGray : 'white'};
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
  color: white;
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
export const GradientSectionWrapper = styled(SectionWrapper)`
  background: linear-gradient(
    90deg,
    rgba(252, 192, 117, 1) 0%,
    rgba(254, 96, 20, 1) 100%
  );
  box-shadow: 0 0 10px ${colors.primaryGray};
`
export const BoxWrapper = styled(FlexWrapper)`
  width: ${(props: BoxWrapperProps) => (props.wide ? '1170px' : '860px')};
  align-items: center;
  justify-content: center;
  border-radius: ${(props: BoxWrapperProps) => (props.tall ? '10px' : '20px')};
  box-shadow: 0 0 20px
    ${(props: BoxWrapperProps) =>
      props.flat ? 'transparent' : colors.primaryDarkGrayOpacity};
  margin: 20px 0;
  overflow: hidden;
`
