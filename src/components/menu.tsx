import React from 'react'
import styled from 'styled-components'

const MenuItems = styled.ul`
  list-style: none;
  display: inline;
`
const MenuItem = styled.li`
  font-size: 0.875em;
  font-family: 'lato';
  color: white;
  text-transform: uppercase;
`
const MenuItemsList: [string, string][] = [
  ['/', 'strona główna'],
  ['/offer', 'oferta'],
  ['/technology', 'technologia'],
  ['#contact', 'kontakt'],
]
const Menu = () => {
  return (
    <MenuItems>
      <MenuItem></MenuItem>
    </MenuItems>
  )
}
export default Menu
