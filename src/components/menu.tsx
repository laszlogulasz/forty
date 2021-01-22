import { graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { menuItemsList } from '../data'
import useOutsideClick from '../helpers/useOutsideClick'
import MenuItem, { Item } from './MenuItem'
import { MobileAndTablet } from './Responsive'
import { colors, device, size } from './shared'

interface MenuItemsProps {
  visible?: boolean
}

export const MenuItems = styled.ul`
  @media ${device.mobileAndtablet} {
    padding-top: 50px;
    width: 100%;
    max-width: 414px;
    background-color: ${colors.primaryDarkGray};
    z-index: 1000;
    transform: ${(props: MenuItemsProps) =>
      props.visible ? 'translate(0, 0)' : 'translate(-414px, 0)'};
    transition: all 0.2s ease-out;
  }
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
  flex-direction: row;
  height: 60px;
  align-items: flex-start;

  @media ${device.desktop} {
    flex-direction: row;
  }
`
const LangItem = styled(Item)`
  margin: 0 0 0 0;
  display: flex;
  flex-direction: row;
  a {
    margin-left: 5px;
  }
`
const BurgerButton = styled.button`
  background-image: url("data:image/svg+xml;utf8,<!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height='30px' id='Layer_1' fill='rgb(254, 96, 20)' version='1.1' viewBox='0 0 30 30' width='30px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><path d='M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z'/></svg>");
  display: ${(props: MenuItemsProps) => (props.visible ? 'none' : 'block')};
  width: 30px;
  height: 30px;
  top: 1em;
  left: 1em;
  border: none;
  position: absolute;
  background-color: transparent;
  z-index: 999;
`
const CloseButton = styled.button`
  background-image: url("data:image/svg+xml;utf8,<!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height='30px' id='Layer_1' fill='rgb(254, 96, 20)' version='1.1' viewBox='0 0 500 500' width='30px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><path d='M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z'/></svg>");
  width: 30px;
  height: 30px;
  top: 1em;
  left: 1em;
  border: none;
  position: absolute;
  background-color: transparent;
  z-index: 1001;
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
  const [visible, setVisible] = useState(false)
  const isMobileAndTablet = useMediaQuery({ maxWidth: size.mobileAndTablet })
  const ref = useRef()

  useOutsideClick(ref, () => {
    if (visible) setVisible(false)
  })

  const menuItems = menuItemsList.map((item, i) => {
    return <MenuItem key={i} data={item} setMenuVisible={setVisible} />
  })

  const hostname: string = 'sklep.forty.com.pl'
  return (
    <>
      <MobileAndTablet>
        <BurgerButton
          visible={visible}
          type="button"
          aria-label="menu"
          onClick={() => {
            console.log('clicked')
            setVisible(!visible)
          }}
        />
      </MobileAndTablet>
      <MenuItems visible={visible} ref={ref}>
        <MobileAndTablet>
          <CloseButton
            type="button"
            aria-label="close"
            onClick={() => {
              setVisible(!visible)
            }}
          />
        </MobileAndTablet>
        {menuItems}
        <MenuItem>
          <AnchorLink to={'#contact'}>kontakt</AnchorLink>
        </MenuItem>
        <MenuItem>
          <a href={`https://${hostname}`} target="_blank" rel="norefferer">
            sklep
          </a>
        </MenuItem>
      </MenuItems>
    </>
  )
}
export default Menu
