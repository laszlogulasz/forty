import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import { device } from './shared'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${device.laptop} {
    margin: 0 20px;
    justify-content: space-between;
  }
  @media ${device.desktop} {
    margin: 0 50px;
  }

  align-items: center;
`
const StyledLink = styled(Link)`
  width: 123px;
  height: 51px;
  margin-top: 4px;
  @media ${device.tablet} {
    width: 180px;
    height: 67px;
  }
  @media ${device.laptop} {
    margin-top: -8px;
    width: 200px;
    height: 75px;
  }
  @media ${device.desktop} {
    width: 217px;
    height: 81px;
  }
`
const TopNav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <Logo theme={'light'} />
      </StyledLink>
      <Menu />
    </StyledNav>
  )
}

export default TopNav
