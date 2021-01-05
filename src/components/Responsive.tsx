import { useMediaQuery } from 'react-responsive'
import { size } from './shared'

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: size.desktop })
  console.log('weszlo')
  return isDesktop ? children : null
}
export const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: size.laptop })
  return isLaptop ? children : null
}
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: size.tablet })
  return isTablet ? children : null
}
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
