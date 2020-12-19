import React from 'react'
import styled from 'styled-components'
import MenuItem from './menuItem'

export const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`

const menuItemsList = [
  {
    link: '/',
    name: 'strona główna',

    submenu: [
      { link: '/', name: 'dla jakich branz pracujemy' },
      { link: '/', name: 'zaufali nam' },
    ],
  },
  ,
  {
    link: '/offer',
    name: 'oferta',
    submenu: [
      { link: '/#dupa', name: 'jak pracujemy' },
      { link: '/#dupa', name: 'produkcja na zlecenie' },
      { link: '/#dupa', name: 'usługi pakowania' },
      { link: '/#dupa', name: 'produkty własne' },
    ],
  },
  { link: '/technology', name: 'technologia' },
  { link: '/about-us', name: 'o nas' },
]

const Menu = () => {
  const menuItems = menuItemsList.map((item, i) => {
    return <MenuItem key={i} data={item} />
  })

  const hostname: string = 'www.adressklepu.pl'

  return (
    <>
      <MenuItems>
        {menuItems}
        <MenuItem rest>
          <a href="#dupa">kontakt</a>
        </MenuItem>
        <MenuItem rest>
          <a href={`https://${hostname}`} target="_blank" rel="norefferer">
            sklep
          </a>
        </MenuItem>
      </MenuItems>
    </>
  )
}
export default Menu
