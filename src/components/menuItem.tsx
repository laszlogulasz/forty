import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useState } from 'react'
import styled from 'styled-components'

interface SubItemsProps {
  visible: boolean
}
interface MenuItemProps {
  data?:
    | { link: string; name: string; submenu: { link: string; name: string }[] }
    | { link: string; name: string; submenu?: undefined }
}

const SubItems = styled.ul`
  @keyframes toggleIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  position: absolute;
  top: 69px;
  animation: toggleIn 0.5s 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${(props: SubItemsProps) => (props.visible ? `flex` : `none`)};
  opacity: ${(props: SubItemsProps) => (props.visible ? `1` : `0`)};
  position: absolute;
  margin-top: 53px;
  left: 50%;
  margin-left: -115px;
  width: 230px;
  flex-direction: column;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
`

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 0.875em;
  font-family: 'Lato';
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 1.5vw;
  z-index: 1000;
  height: 122px;
  align-content: center;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
    transition: color 0.2s ease;
    &:hover,
    &:active,
    &:focus {
      color: #ff4e00;
    }
  }
`

const SubItem = styled(Item)`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 0.875em;
  font-family: 'lato';
  color: #111;
  text-transform: uppercase;
  text-decoration: none;
  margin: 5px 5px;
  height: 30px;
  align-content: center;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
    &:hover,
    &:active,
    &:focus {
      color: #ff4e00;
    }
  }

  &:last-child {
    margin: 5px 30px;
  }
`
const Line = styled.hr`
  border: 1px solid #ff4e00;
  width: 30px;
  margin-top: 0;
`
const activeStyles = {
  color: '#ff4e00',
}

const MenuItem: React.FC<MenuItemProps> = ({ data, children }) => {
  const [visible, setVisible] = useState(false)
  const subMenuItems = data?.submenu?.map(
    (item: { link: any; name: React.ReactNode }, i: React.ReactText) => {
      return (
        <SubItem key={i}>
          <AnchorLink to={`${item.link}#dupa`}>{item.name}</AnchorLink>
        </SubItem>
      )
    }
  )

  return children ? (
    <Item>{children}</Item>
  ) : (
    <Item
      onFocus={() => setVisible(true)}
      onBlur={e => {
        // @ts-ignore
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setVisible(false)
        }
      }}
      onMouseOut={() => setVisible(false)}
      onMouseOver={() => setVisible(true)}
    >
      <Link to={data.link} title={data.name} activeStyle={activeStyles}>
        {data.name}
      </Link>
      {subMenuItems && (
        <SubItems visible={visible}>
          <Line />
          {subMenuItems}
        </SubItems>
      )}
    </Item>
  )
}
export default MenuItem
