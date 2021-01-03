import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import {
  colors,
  FlexWrapper,
  PageSectionHeader,
  SectionHeader,
  SectionWrapper,
  TransparentButton,
} from './shared'

interface ProductInfoDescProps {
  dark?: boolean
}

const OwnProductsBoxWrapper = styled(FlexWrapper)`
  align-items: stretch;
  flex: 1 1 auto;
  width: 100%;
  box-shadow: 0 0 10px ${colors.primaryGray};
  margin-bottom: 100px;
`
const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: stretch;
  background: #242424;
  &:last-child {
    background: white;
  }
`
const ProductImgWrapper = styled.div`
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProductImg = styled(Img)`
  margin: 0 auto;
`
const TransparentButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: -50px 50px 0 0;
`
const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ProductInfoHeader = styled(SectionHeader)`
  font-size: 0.8125em;
  margin: 0 2em;
`
const ProductInfoDesc = styled.p`
  font-size: 0.8125em;
  color: ${(props: ProductInfoDescProps) => (props.dark ? 'white' : '#242424')};
  margin: 2em;
  font: 100 0.8125em 'Lato';
`

const OwnProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      helmet: file(relativePath: { eq: "own/przylbica.png" }) {
        childImageSharp {
          fixed(height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      blistry: file(relativePath: { eq: "own/blistry.jpg" }) {
        childImageSharp {
          fixed(height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <SectionWrapper id="own-products">
      <PageSectionHeader>produkty własne</PageSectionHeader>
      <OwnProductsBoxWrapper direction={'row'}>
        <ProductBox>
          <ProductImgWrapper>
            <ProductImg
              // @ts-ignore
              fixed={data.helmet.childImageSharp.fixed}
              alt="logo firmy Forty"
              fadeIn={false}
            />
          </ProductImgWrapper>
          <TransparentButtonWrapper>
            <TransparentButton
              onClick={e => {
                window.location.href =
                  'https://www.sklep.forty.com.pl/produkt/przylbica-ochronna-100-szt/'
                // @ts-ignore
                e.currentTarget.blur()
              }}
            >
              kup teraz
            </TransparentButton>
          </TransparentButtonWrapper>
          <ProductInfoWrapper>
            <ProductInfoHeader>przyłbice ochronne</ProductInfoHeader>
            <ProductInfoDesc dark>
              W odpowiedzi na zapotrzebowanie rynku, wprowadziliśmy do
              asortymentu przyłbicę ochronną, ograniczającą styczność
              użytkownika ze szkodliwymi czynnikami zewnętrznymi. Jeżeli jesteś
              zainteresowany tym produktem zapraszamy do naszego sklepu.
            </ProductInfoDesc>
          </ProductInfoWrapper>
        </ProductBox>
        <ProductBox>
          <ProductImgWrapper>
            <ProductImg
              // @ts-ignore
              fixed={data.blistry.childImageSharp.fixed}
              alt="logo firmy Forty"
              fadeIn={false}
            />
          </ProductImgWrapper>
          <TransparentButtonWrapper>
            <TransparentButton
              dark
              onClick={e => {
                window.location.href = 'https://www.sklep.forty.com.pl'
                // @ts-ignore
                e.currentTarget.blur()
              }}
            >
              kup teraz
            </TransparentButton>
          </TransparentButtonWrapper>
          <ProductInfoWrapper>
            <ProductInfoHeader>blistry</ProductInfoHeader>
            <ProductInfoDesc>
              Prowadzimy sprzedaż blistrów standardowych, zamykanych o
              określonych wymiarach. Jeżeli jesteś zainteresowany tym produktem
              zapraszamy do naszego sklepu.
            </ProductInfoDesc>
          </ProductInfoWrapper>
        </ProductBox>
      </OwnProductsBoxWrapper>
    </SectionWrapper>
  )
}

export default OwnProducts
