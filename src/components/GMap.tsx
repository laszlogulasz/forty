import React from 'react'
import styled from 'styled-components'
const MapWrapper = styled.div`
  width: 585px;
  height: 585px;
  background-color: pink;
`
interface GMapProps {
  width: string
  height: string
}
const GMap: React.FC<GMapProps> = ({ width, height }) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.1659483701424!2d20.889353851862015!3d52.22220277965964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb26ef1bac7d%3A0x6717df0467de9566!2sForty.%20Plastic%20packaging!5e0!3m2!1sen!2spl!4v1608600395492!5m2!1sen!2spl"
      width={width}
      height={height}
      frameBorder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  )
}

export default GMap
