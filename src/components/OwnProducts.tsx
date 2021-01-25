import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { useNodes } from '../helpers/useNodes'
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
  min-width: 320px;
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
      posts: allWpPost(
        filter: {
          language: { code: { eq: PL } }
          slug: { eq: "produkty-wlasne" }
        }
      ) {
        nodes {
          blocks {
            ... on WpCoreGroupBlock {
              innerBlocks {
                ... on WpCoreHeadingBlock {
                  originalContent
                }
                ... on WpCoreParagraphBlock {
                  originalContent
                }
                ... on WpCoreButtonsBlock {
                  innerBlocks {
                    ... on WpCoreButtonBlock {
                      originalContent
                    }
                  }
                }
              }
            }
          }
          translations {
            blocks {
              ... on WpCoreGroupBlock {
                innerBlocks {
                  ... on WpCoreHeadingBlock {
                    originalContent
                  }
                  ... on WpCoreParagraphBlock {
                    originalContent
                  }
                  ... on WpCoreButtonsBlock {
                    innerBlocks {
                      ... on WpCoreButtonBlock {
                        originalContent
                      }
                    }
                  }
                }
              }
            }
            language {
              code
            }
          }
        }
      }
      pic: allWpMediaItem(
        filter: { wpParent: { node: { slug: { eq: "produkty-wlasne" } } } }
      ) {
        edges {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxHeight: 360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const { language } = React.useContext(I18nextContext)
  const { t } = useTranslation()
  const [productsList, setProductsList] = useState(null)

  useEffect(() => {
    const range = document.createRange()
    const newProductList = data.posts.nodes[0].blocks.map((_el, i) => {
      const { content: headerNode } = useNodes({
        dataslug: data.posts,
        group: true,
        nthNode: i,
        innerNthNode: 0,
      })
      const { content: descNode } = useNodes({
        dataslug: data.posts,
        group: true,
        nthNode: i,
        innerNthNode: 1,
      })
      const { content: buttonNode } = useNodes({
        dataslug: data.posts,
        group: true,
        nthNode: i,
        innerNthNode: 2,
      })
      const header = headerNode[`${language}`]
        ? range.createContextualFragment(headerNode[`${language}`]).textContent
        : t('brak tłumaczenia')
      const desc = descNode[`${language}`]
        ? range.createContextualFragment(descNode[`${language}`]).textContent
        : t('brak tłumaczenia')
      const button: any = buttonNode[`${language}`]
        ? parse(buttonNode[`${language}`].originalContent)
        : null

      const image = i === 0 ? data.pic.edges[1] : data.pic.edges[0]
      console.log(
        '🚀 ~ file: OwnProducts.tsx ~ line 197 ~ newProductList ~ image',
        data.pic.edges
      )
      return {
        header,
        desc,
        button: {
          link: button ? button.props.id : '#',
          text: button
            ? button.props.children.props.children
            : t('brak tłumaczenia'),
        },
        image,
      }
    })
    setProductsList(newProductList)
  }, [language])
  const isMobile = useMediaQuery({ maxWidth: size.tablet - 1 })
  const products = productsList?.map((el, i) => (
    <ProductBox>
      <ProductImgWrapper>
        <ProductImg
          // @ts-ignore
          fluid={el.image.node.localFile.childImageSharp.fluid}
          alt={el.image.node.altText}
          fadeIn={false}
        />
      </ProductImgWrapper>
      <TransparentButtonWrapper>
        <TransparentButton
          dark={i % 2 === 0 ? false : true}
          onClick={e => {
            window.location.href = el.button.link
            // @ts-ignore
            e.currentTarget.blur()
          }}
        >
          {el.button.text}
        </TransparentButton>
      </TransparentButtonWrapper>
      <ProductInfoWrapper>
        <ProductInfoHeader>{el.header}</ProductInfoHeader>
        <ProductInfoDesc dark={i % 2 === 0 ? true : false}>
          {el.desc}
        </ProductInfoDesc>
      </ProductInfoWrapper>
    </ProductBox>
  ))
  return (
    <SectionWrapper id="own-products">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} delay={100} triggerOnce>
          {t('produkty własne')}
        </Slide>
      </PageSectionHeader>
      <OwnProductsBoxWrapper direction={isMobile ? 'column' : 'row'}>
        {products}
      </OwnProductsBoxWrapper>
    </SectionWrapper>
  )
}

export default OwnProducts
