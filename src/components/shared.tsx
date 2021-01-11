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

export const size = {
  mobile: 767,
  tablet: 768,
  mobileAndTablet: 959,
  laptop: 960,
  desktop: 1200,
}

export const device = {
  mobile: `(max-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  mobileAndtablet: `(max-width: ${size.mobileAndTablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
}

export const colors = {
  primaryLightGray: '#c8c8c8',
  secondaryLightGray: '#f1f8fc',
  primaryGray: '#9fa4af',
  secondaryGray: '#555555',
  primaryDarkGray: 'rgb(23, 23, 23)',
  secondaryDarkGray: 'rgb(45, 45, 45)',
  primaryDarkGrayOpacity: 'rgba(23, 23, 23, .2)',
  primaryDarkGrayOpacity3: 'rgba(20, 20, 20, .9)',
  primaryDarkGrayOpacity1: 'rgba(0, 0, 0, .7)',
  primaryDarkGrayOpacity2: 'rgba(23, 23, 23, .4)',
  primaryRed: '#ff4e00',
  secondaryOrange: '#fe6d20',
}

export const SectionHeader = styled.h2`
  font: 400 1.0625em 'Lato';
  @media ${device.tablet} {
    font: 400 1.5em 'Lato';
  }
  @media ${device.laptop} {
    font: 400 1.8em 'Lato';
  }
  @media ${device.desktop} {
    font: 400 2em 'Lato';
  }
  width: 100%;

  color: ${(props: SmallHeaderProps) =>
    props.invert ? 'white' : colors.primaryRed};
  text-transform: uppercase;
`
export const PageSectionHeader = styled(SectionHeader)`
  margin: 50px 0 20px 0;
  & > span {
    color: gray;
  }
`
export const SmallHeader = styled.h3`
  width: 100%;
  margin: 1.5em 0 0 0;
  font: 400 0.875em 'Lato';
  @media ${device.tablet} {
    font: 400 1.2em 'Lato';
  }
  @media ${device.laptop} {
    font: 400 1.4em 'Lato';
    margin: 0;
  }
  @media ${device.desktop} {
    font: 400 1.6em 'Lato';
  }
  color: ${(props: SmallHeaderProps) =>
    props.invert === 'row-reverse' ? 'white' : colors.primaryRed};
  text-transform: uppercase;
`
export const Description = styled.p`
  width: 100%;
  margin: 25px 0 20px 0;
  line-height: 1.5em;
  font: 100 0.875em 'Lato';
  @media ${device.tablet} {
    font: 100 1em 'Lato';
    margin: 5px 0 40px 0;
  }
  @media ${device.desktop} {
    font: 100 1.125em 'Lato';
  }
  color: ${(props: DescriptionProps) =>
    props.invert === 'row-reverse' ? 'white' : colors.primaryGray};
  ${(props: DescriptionProps) => props.col && 'column-count: ' + props.col};
  column-gap: 2em;
  & > span {
    margin-bottom: 20px;
    font: 400 1.125em 'Lato';
  }
`
export const Welcome = styled.strong`
  margin: 0;
  font-weight: thin;
  font: 300 1em 'Lato';
  @media ${device.tablet} {
    font: 300 1.5em 'Lato';
  }
  @media ${device.laptop} {
    font: 300 1.8em 'Lato';
  }
  @media ${device.desktop} {
    font: 300 2em 'Lato';
  }
  color: white;
`
export const MainHeader = styled.h1`
  margin: 20px 0 0 0;
  font: 400 2em 'source-serif-pro';
  @media ${device.tablet} {
    font: 400 3em 'source-serif-pro';
  }
  @media ${device.laptop} {
    font: 400 3.5em 'source-serif-pro';
  }
  @media ${device.desktop} {
    font: 400 4em 'source-serif-pro';
  }
  color: white;
  span {
    color: ${colors.primaryRed};
  }
`
const SerifSlogan = css`
  margin: 20px 0 0 0;
  font: 400 1.2em 'source-serif-pro';
  @media ${device.tablet} {
    font: 400 1.5em 'source-serif-pro';
  }
  @media ${device.laptop} {
    font: 400 1.8em 'source-serif-pro';
  }
  @media ${device.desktop} {
    font: 400 2em 'source-serif-pro';
  }
  color: white;
`
export const Motto = styled.strong`
  ${SerifSlogan}
`
export const Legend = styled.legend`
  ${SerifSlogan}
  margin: 10px 0 0 0;
  @media ${device.laptop} {
    margin: 20px 0 0 0;
  }
`
export const TransparentButton = styled.button`
  border-radius: 50px;
  background-color: transparent;
  align-self: center;
  @media ${device.tablet} {
    align-self: flex-start;
  }
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
  @media ${device.mobile} {
    padding: 10px 30px;
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
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: ${(props: FlexWrapperProps) => props.direction};
  }
`
export const SectionWrapper = styled.section`
  padding: 0 1em;
  @media ${device.tablet} {
    padding: 0 2em;
  }
  @media ${device.laptop} {
  }
  @media ${device.desktop} {
    padding: 0;
  }
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
export const BlackSectionWrapper = styled(SectionWrapper)`
  background: black;
  padding-bottom: 30px;
`
export const BoxWrapper = styled(FlexWrapper)`
  width: 100vw;
  @media ${device.laptop} {
    width: ${(props: BoxWrapperProps) => (props.wide ? '100%' : '860px')};
    border-radius: ${(props: BoxWrapperProps) =>
      props.tall ? '10px' : '20px'};
  }

  @media ${device.desktop} {
    width: ${(props: BoxWrapperProps) => (props.wide ? '1170px' : '860px')};
  }

  align-items: stretch;
  justify-content: center;

  box-shadow: 0 0 20px
    ${(props: BoxWrapperProps) =>
      props.flat ? 'transparent' : colors.primaryDarkGrayOpacity};
  margin: 20px 0;
  overflow: hidden;
`
