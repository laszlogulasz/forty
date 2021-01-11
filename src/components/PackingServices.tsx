import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import {
  colors,
  Description,
  device,
  GradientSectionWrapper,
  PageSectionHeader,
  SectionWrapper,
  size,
} from './shared'
import SliderBox from './SliderBox'
interface WokflowProps {
  invert: 'row' | 'row-reverse'
}

const ContractList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -240px;
  margin-bottom: 40px;
  padding: 0;

  @media ${device.mobile} {
    max-width: 100vw;
  }
  @media ${device.tablet} {
    max-width: 390px;
  }
  @media ${device.laptop} {
    max-width: 780px;
    box-shadow: 0 0 30px ${colors.primaryGray};
  }
  @media ${device.desktop} {
    max-width: 1170px;
  }
`
const ContractBackgroundImage = styled(BackgroundImage)`
  background-position: 0 0;
  background-color: #fff;
  @media ${device.mobile} {
    margin-bottom: 1em;
  }
`
const ContractListItemWrapper = styled.div`
  width: 390px;
  height: 240px;
  background-color: ${colors.primaryDarkGrayOpacity1};
  &:hover {
    background-color: rgba(124, 89, 14, 0.534);
    filter: saturate(200%);
  }
  @media ${device.mobile} {
    width: 100vw;
    font: 400 1em 'Lato';
  }
`
const ContractListItem = styled.p`
  width: 390px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 400 1.2em 'Lato';
  padding: 0 30px;
  box-sizing: border-box;
  margin: 0;
  color: white;
  text-transform: uppercase;
  transition: background-color 0.2s ease;
  @media ${device.mobile} {
    width: 100vw;
    font: 400 1em 'Lato';
  }
`
const PackingBoxSectionWrapper = styled(SectionWrapper)`
  margin: 50px 0;
  @media ${device.mobileAndtablet} {
    margin: 10px 0 20px 0;
  }
`
const servicesList = [
  'tace logistyczne',
  'wkłady do pudełek',
  'wkłady do gier planszowych',
  'pokrywy, osłony',
  'opakowania typu blister',
  'zamówienia specjalne',
]

const PackingServices = () => {
  const isLaptop = useMediaQuery({ minWidth: size.laptop })
  const col = isLaptop ? 2 : 1

  const data = useStaticQuery(graphql`
    query {
      contracts: allFile(filter: { dir: { regex: "/contract/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 390, maxHeight: 240, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      packing: allFile(filter: { dir: { regex: "/packing/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 420, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const packing = {
    desc: (
      <>
        Usługi pakowania realizujemy na życzenie klienta, który ma produkt,
        który chce spakować w opakowanie końcowe, przeznaczone na rynek.
        Pomagamy w doborze i projektowaniu opakowania.{' '}
        <strong>
          Produkujemy opakowania końcowe i realizujemy usługę konfekcjonowania
          produktów przesłanych przez Klienta.{' '}
        </strong>
        Proponujemy pakowanie typu skin-blister, zgrzewane na maszynach HSP oraz
        pełny blister zgrzewane na maszynach GEAF.
      </>
    ),
    images: data.packing,
  }
  const services = servicesList.map((item: String, i) => {
    return (
      <ContractBackgroundImage
        Tag="li"
        fluid={data.contracts.edges[i].node.childImageSharp.fluid}
        key={i}
      >
        <ContractListItemWrapper>
          <Zoom duration={300} triggerOnce>
            <ContractListItem>{item}</ContractListItem>
          </Zoom>
        </ContractListItemWrapper>
      </ContractBackgroundImage>
    )
  })

  return (
    <>
      <GradientSectionWrapper>
        <ContractList>{services}</ContractList>
        <PageSectionHeader invert id="packing-services">
          <Slide direction={'left'} duration={300} triggerOnce>
            usługi pakowania
          </Slide>
        </PageSectionHeader>
        <Description invert={'row-reverse'} col={col}>
          Usługi pakowania realizujemy na życzenie klienta, który ma produkt,
          który chce spakować w opakowanie końcowe, przeznaczone na rynek.
          Pomagamy w doborze i projektowaniu opakowania. Produkujemy opakowania
          końcowe i realizujemy usługę konfekcjonowania produktów przesłanych
          przez Klienta. Proponujemy pakowanie typu skin-blister, zgrzewane na
          maszynach HSP oraz pełny blister zgrzewane na maszynach GEAF.
        </Description>
      </GradientSectionWrapper>
      <PackingBoxSectionWrapper>
        <SliderBox
          desc={packing.desc}
          images={packing.images}
          direction={'row'}
          tall={true}
        />
      </PackingBoxSectionWrapper>
    </>
  )
}

export default PackingServices
