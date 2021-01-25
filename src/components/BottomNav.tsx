import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useTranslation } from 'gatsby-plugin-react-i18next'
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
const BottomLogoLink = styled(Link)`
  & > * {
    height: 81px;
    width: 216px;
    position: absolute;
    display: block;
  }
`
const BottomNav = () => {
  const { t } = useTranslation()
  const menuItems = bottomMenuItemsList.map((item, i) => {
    return <MenuItem key={i} data={item} dark />
  })
  return (
    <BottomNavWrapper>
      <BottomLogoLink to="/">
        <Logo theme={'dark'} />
      </BottomLogoLink>
      <FlexWrapper direction={'row'}>
        <BottomMenuItems>
          {menuItems}
          <MenuItem dark>
            <AnchorLink to={'#contact'}>{`${t('KONTAKT')}`}</AnchorLink>
          </MenuItem>
          <MenuItem dark>
            <a href={`https://${hostname}`} target="_blank" rel="norefferer">
              {t('sklep')}
            </a>
          </MenuItem>
        </BottomMenuItems>
      </FlexWrapper>
    </BottomNavWrapper>
  )
}

export default BottomNav
