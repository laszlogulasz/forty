import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
  visible: boolean
}
interface MenuItemProps {
  data?:
    | { link: string; name: string; submenu: { link: string; name: string }[] }
    | { link: string; name: string; submenu?: undefined }
  rest?: boolean
}

const SubItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${(props: Props) => (props.visible ? `flex` : `none`)};
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

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 0.875em;
  font-family: 'lato';
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 2.5vw;
  height: 122px;
  align-content: center;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
    &:hover,
    &:active,
    &:focus {
      color: red;
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
      color: red;
    }
  }

  &:last-child {
    margin: 5px 30px;
  }
`
const Line = styled.hr`
  border: 1px solid red;
  width: 30px;
  margin-top: 0;
`
const activeStyles = {
  color: '#ff4e00',
}

const MenuItem: React.FC<MenuItemProps> = ({ data, rest, children }) => {
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

  return rest ? (
    <Item>{children}</Item>
  ) : (
    <Item
      onFocus={() => setVisible(true)}
      onBlur={e => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setVisible(false)
        }
      }}
      onMouseOut={() => setVisible(false)}
      onMouseOver={() => setVisible(true)}
    >
      <Link to={data.link} title={data.name} activeStyle={activeStyles}>
        {data.name}
        {subMenuItems && (
          <SubItems visible={visible}>
            <Line />
            {subMenuItems}
          </SubItems>
        )}
      </Link>
    </Item>
  )
}
export default MenuItem
