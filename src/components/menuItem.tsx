import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { MobileAndTablet } from './Responsive'
import { colors, device, size } from './shared'

interface SubItemsProps {
  visible: boolean
}
interface MenuItemProps {
  data?:
    | { link: string; name: string; submenu: { link: string; name: string }[] }
    | { link: string; name: string; submenu?: undefined }
  dark?: boolean
  setMenuVisible?: Function
}

const SubItems = styled.ul`
  position: absolute;
  top: 69px;
  animation: toggleIn 0.5s 1;
  list-style: none;
  margin: 53px 0 0 -115px;
  padding: 0;
  opacity: ${(props: SubItemsProps) => (props.visible ? `1` : `0`)};
  left: 50%;
  width: 230px;
  flex-direction: column;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
  @media ${device.mobileAndtablet} {
    max-height: ${(props: SubItemsProps) => (props.visible ? `250px` : `0px`)};
    visibility: ${(props: SubItemsProps) =>
      props.visible ? `visible` : `hidden`};
    position: relative;
    margin: 0;
    left: 0;
    top: 0;
    width: 100%;
    transition: all 0.2s ease-out;
    display: flex;
  }
  @media ${device.laptop} {
    display: ${(props: SubItemsProps) => (props.visible ? `flex` : `none`)};
    @keyframes toggleIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
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
  &:last-child {
    padding: 0 0 0 1.5vw;
  }
  z-index: 1000;
  height: 122px;
  align-content: center;
  text-align: center;
  @media ${device.mobileAndtablet} {
    position: static;
    height: auto;
    flex-direction: column;
    margin: 0;
    text-align: left;
    align-items: flex-start;
    &:last-child {
      padding: 0;
    }
    /* width: 300px;
    background-color: pink; */
  }
  a {
    text-decoration: none;
    color: ${(props: MenuItemProps) =>
      props.dark ? `${colors.secondaryGray}` : `white`};
    transition: color 0.2s ease;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.primaryRed};
    }
  }
`
const SubItem = styled(Item)`
  justify-content: center;
  font-size: 0.875em;
  font-family: 'lato';
  color: #111;
  text-transform: uppercase;
  text-decoration: none;
  margin: 5px 5px 5px 10px;
  padding-left: 2em;
  height: 30px;
  align-content: center;
  a {
    text-decoration: none;
    color: ${colors.primaryLightGray};
    &:hover,
    &:active,
    &:focus {
      color: ${colors.primaryRed};
    }
  }
  &:last-child {
    padding-left: 2em;
  }
  @media ${device.laptop} {
    align-self: center;
    align-items: center;
    padding-left: 0;
    &:last-child {
      margin: 5px 30px;
      padding-left: 0;
    }
  }
`
const Line = styled.hr`
  border: 1px solid ${colors.primaryRed};
  width: 30px;
  margin-top: 0;
  position: absolute;
  left: 2.5em;
  @media ${device.laptop} {
    position: static;
    align-self: center;
    align-items: center;
    &:last-child {
      margin: 5px 30px;
    }
  }
`
export const ItemBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobileAndtablet} {
    box-sizing: border-box;
    padding: 0 1.4em;
    height: 3em;
    width: 100%;
  }
`
const ArrowButton = styled.button`
  background-image: url("data:image/svg+xml;utf8,<svg version='1.1' id='si-ant-down' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120' width='20px' height='20px' fill='rgb(254, 96, 20)'><title  id='cmsi-ant-down-title'>icon down</title><path d='M198.2,2c-1.3-1.3-2.8-2-4.5-2s-3.2,0.7-4.5,2L100,96.1L10.7,2C9.4,0.7,7.9,0,6.2,0S3.1,0.7,1.8,2C0.6,3.3,0,4.8,0,6.6 s0.6,3.4,1.8,4.7l93.8,98.8c1.3,1.3,2.8,2,4.5,2c1.7,0,3.2-0.7,4.5-2l93.8-98.8c1.2-1.3,1.8-2.9,1.8-4.7S199.4,3.3,198.2,2z'/></svg>");
  background-repeat: no-repeat;
  @supports (-webkit-touch-callout: none) {
    background-position-x: 8px;
  }
  width: 20px;
  height: 20px;
  outline: none;
  transform: ${(props: SubItemsProps) =>
    props.visible ? `rotate(0deg)` : `rotate(-90deg)`};
  transition: transform 0.2s ease-out;
  border: none;
  background-color: transparent;
`
const activeStyles = {
  color: colors.primaryRed,
}

const MenuItem: React.FC<MenuItemProps> = ({
  dark,
  data,
  children,
  setMenuVisible,
}) => {
  const [visible, setVisible] = useState(false)
  const isLaptop = useMediaQuery({ minWidth: size.laptop })
  const subMenuItems = data?.submenu?.map(
    (item: { link: any; name: React.ReactNode }, i: React.ReactText) => {
      return (
        <SubItem key={i} onClick={() => !isLaptop && setMenuVisible(false)}>
          <AnchorLink to={`${item.link}`}>{item.name}</AnchorLink>
        </SubItem>
      )
    }
  )

  return children ? (
    <Item dark={dark}>
      <ItemBar>{children}</ItemBar>
    </Item>
  ) : (
    <Item
      dark={dark}
      onFocus={() => isLaptop && setVisible(true)}
      onBlur={e => {
        // @ts-ignore
        if (isLaptop && !e.currentTarget.contains(e.relatedTarget)) {
          setVisible(false)
        }
      }}
      onMouseOut={() => isLaptop && setVisible(false)}
      onMouseOver={() => isLaptop && setVisible(true)}
    >
      <ItemBar>
        <Link
          to={data.link}
          title={data.name}
          activeStyle={activeStyles}
          onClick={() => !isLaptop && setMenuVisible(false)}
        >
          {data.name}
        </Link>
        <MobileAndTablet>
          <ArrowButton
            name={visible ? 'close submenu' : 'open submenu'}
            type="button"
            visible={visible}
            onClick={() => setVisible(!visible)}
          />
        </MobileAndTablet>
      </ItemBar>
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
