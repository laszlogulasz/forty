import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import MenuItem, { Item } from './menuItem'

interface Props {
  flag: string
  rest: string
}
export const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`
const LangItem = styled(Item)`
  margin: 0 0 0 1.5vw;
  a {
    margin-left: 5px;
  }
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
  const data = useStaticQuery(graphql`
    query {
      de: file(relativePath: { eq: "de.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gb: file(relativePath: { eq: "gb.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const menuItems = menuItemsList.map((item, i) => {
    return <MenuItem key={i} data={item} />
  })

  const hostname: string = 'www.adressklepu.pl'
  console.log('data: ', data)
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
        <LangItem rest flag={'gb'}>
          <Img
            fixed={data.de.childImageSharp.fixed}
            alt="logo firmy Forty"
            fadeIn={false}
          />
          <a href={`#`}>en</a>
        </LangItem>
        <LangItem rest flag={'de'}>
          <Img
            fixed={data.gb.childImageSharp.fixed}
            alt="logo firmy Forty"
            fadeIn={false}
          />
          <a href={`#`}>de</a>
        </LangItem>
      </MenuItems>
    </>
  )
}
export default Menu
