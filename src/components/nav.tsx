import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Menu from './menu'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px 60px 25px 60px;
`

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <Link to="/">
        <Logo />
      </Link>
      <Menu />
    </StyledNav>
  )
}

export default Nav
