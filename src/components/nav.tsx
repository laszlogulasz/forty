import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Menu from './menu'

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 60px;
`
const StyledLink = styled(Link)`
  margin-top: -8px;
`

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <Menu />
    </StyledNav>
  )
}

export default Nav
