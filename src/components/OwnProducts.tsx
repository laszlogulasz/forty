import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import {
  colors,
  device,
  FlexWrapper,
  PageSectionHeader,
  SectionHeader,
  SectionWrapper,
  size,
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
  @media ${device.mobile} {
    width: 100%;
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
  margin: -50px 20px 0 0;
  @media ${device.mobile} {
    justify-content: center;
    margin: -50px 0 0 0;
  }
  @media ${device.laptop} {
    margin: -50px 50px 0 0;
  }
`
const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ProductInfoHeader = styled(SectionHeader)`
  font-size: 0.8125em;
  margin: 1em 0 0 2em;
  @media ${device.mobile} {
    margin: 1em 0 0 2em;
    box-sizing: border-box;
    width: 200px;
  }
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
  const isMobile = useMediaQuery({ maxWidth: size.tablet - 1 })
  return (
    <SectionWrapper id="own-products">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} delay={100} triggerOnce>
          produkty własne
        </Slide>
      </PageSectionHeader>
      <OwnProductsBoxWrapper direction={isMobile ? 'column' : 'row'}>
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
