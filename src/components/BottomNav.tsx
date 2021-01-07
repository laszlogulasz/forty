import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import styled from 'styled-components'
import { bottomMenuItemsList, hostname } from '../data'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { FlexWrapper, SectionWrapper } from './shared'

const BottomNavWrapper = styled(SectionWrapper)`
  margin-bottom: 100px;
`
const BottomMenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`
const BottomNav = () => {
  const menuItems = bottomMenuItemsList.map((item, i) => {
    return <MenuItem key={i} data={item} dark />
  })
  return (
    <BottomNavWrapper>
      <Link to="/">
        <Logo theme={'dark'} />
      </Link>
      <FlexWrapper direction={'row'}>
        <BottomMenuItems>
          {menuItems}
          <MenuItem dark>
            <AnchorLink to={'#contact'}>kontakt</AnchorLink>
          </MenuItem>
          <MenuItem dark>
            <a href={`https://${hostname}`} target="_blank" rel="norefferer">
              sklep
            </a>
          </MenuItem>
        </BottomMenuItems>
      </FlexWrapper>
    </BottomNavWrapper>
  )
}

export default BottomNav
