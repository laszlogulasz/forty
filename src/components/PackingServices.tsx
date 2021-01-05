import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import styled from 'styled-components'
import {
  colors,
  Description,
  GradientSectionWrapper,
  PageSectionHeader,
  SectionWrapper,
} from './shared'
import SliderBox from './SliderBox'
interface WokflowProps {
  invert: 'row' | 'row-reverse'
}

const ContractList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  margin-top: -240px;
  margin-bottom: 40px;
  padding: 0;
  box-shadow: 0 0 30px ${colors.primaryGray};
`
const ContractBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  max-height: 240px;
  background-position: 0 0;
  background-color: #fff;
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
  background-color: ${colors.primaryDarkGrayOpacity1};
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(124, 89, 14, 0.534);
    filter: saturate(200%);
  }
`
const PackingBoxSectionWrapper = styled(SectionWrapper)`
  margin: 50px 0;
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
  const data = useStaticQuery(graphql`
    query {
      contracts: allFile(filter: { dir: { regex: "/contract/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 390, height: 240, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
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
        fixed={data.contracts.edges[i].node.childImageSharp.fixed}
        key={i}
      >
        <ContractListItem>{item}</ContractListItem>
      </ContractBackgroundImage>
    )
  })

  return (
    <>
      <GradientSectionWrapper>
        <ContractList>{services}</ContractList>
        <PageSectionHeader invert id="packing-services">
          usługi pakowania
        </PageSectionHeader>
        <Description invert={'row-reverse'} col={2}>
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
