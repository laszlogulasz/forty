import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'

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
