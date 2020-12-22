import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import styled from 'styled-components'
import { bottomMenuItemsList, hostname } from '../data'
import Logo from './Logo'
import { MenuItems } from './Menu'
import MenuItem from './MenuItem'
import { FlexWrapper, SectionWrapper } from './shared'

const BottomNavWrammer = styled(SectionWrapper)`
  margin-bottom: 100px;
`
const BottomNav = () => {
  const menuItems = bottomMenuItemsList.map((item, i) => {
    return <MenuItem key={i} data={item} dark />
  })
  return (
    <BottomNavWrammer>
      <Link to="/">
        <Logo theme={'dark'} />
      </Link>
      <FlexWrapper direction={'row'}>
        <MenuItems>
          {menuItems}
          <MenuItem dark>
            <AnchorLink to={'#contact'}>kontakt</AnchorLink>
          </MenuItem>
          <MenuItem dark>
            <a href={`https://${hostname}`} target="_blank" rel="norefferer">
              sklep
            </a>
          </MenuItem>
        </MenuItems>
      </FlexWrapper>
    </BottomNavWrammer>
  )
}

export default BottomNav
