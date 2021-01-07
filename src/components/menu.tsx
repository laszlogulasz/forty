import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import styled from 'styled-components'
import { menuItemsList } from '../data'
import MenuItem, { Item } from './MenuItem'
import { device } from './shared'

export const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  @media ${device.laptop} {
    flex-direction: row;
    position: static;
  }

  margin: 0;
  padding: 0;
`
const LangItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  align-items: flex-start;

  @media ${device.desktop} {
    flex-direction: row;
  }
`
const LangItem = styled(Item)`
  margin: 0 0 0 1.5vw;
  a {
    margin-left: 5px;
  }
`
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

  const hostname: string = 'sklep.forty.com.pl'
  console.log('data: ', data)
  return (
    <>
      <MenuItems>
        {menuItems}
        <MenuItem>
          <AnchorLink to={'#contact'}>kontakt</AnchorLink>
        </MenuItem>
        <MenuItem>
          <a href={`https://${hostname}`} target="_blank" rel="norefferer">
            sklep
          </a>
        </MenuItem>
        <LangItem>
          <Img
            fixed={data.de.childImageSharp.fixed}
            alt="logo firmy Forty"
            fadeIn={false}
          />
          <a href={`#`}>en</a>
        </LangItem>
        <LangItem>
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
