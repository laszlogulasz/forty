import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import { useNodes } from '../helpers/useNodes'
import {
  colors,
  Description,
  device,
  GradientSectionWrapper,
  PageSectionHeader,
} from './shared'

interface SpecialityList {
  invert?: boolean
}

const Figure = styled.figure`
  max-width: 1170px;
  display: flex;
  flex-direction: row;
  @media ${device.mobileAndtablet} {
    flex-direction: column;
  }
`
const Figcaption = styled.figcaption`
  width: 50%;
  @media ${device.mobileAndtablet} {
    width: 100%;
  }
`
const ImgWrapper = styled.div`
  align-self: center;
  width: 407px;
  @media ${device.mobile} {
    width: 320px;
  }
  @media ${device.mobileAndtablet} {
    margin-bottom: 2em;
  }
`
const GradientImg = styled(Img)`
  box-shadow: 0 0 10px ${colors.primaryGray};
`
const SpecialityList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
  padding: 0;
  width: 100%;
  & > * {
    color: ${(props: SpecialityList) => (props.invert ? 'white' : 'gray')};
    margin-left: 1em;
    padding: 0;
    font: 100 0.875em 'Lato';
    line-height: 1.5em;
    @media ${device.tablet} {
      font: 100 1em 'Lato';
      line-height: 2em;
    }
    @media ${device.laptop} {
      font: 100 1.2em 'Lato';
      line-height: 2em;
    }
    text-align: left;
  }
`
const GradientSectionWrapperISO = styled(GradientSectionWrapper)`
  margin: 50px 0;
`

const ISO9001 = () => {
  const data = useStaticQuery(graphql`
    query {
      paragraphs: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "iso-9001" } }
      ) {
        nodes {
          blocks {
            ... on WpCoreParagraphBlock {
              originalContent
            }
          }
          translations {
            blocks {
              ... on WpCoreParagraphBlock {
                originalContent
              }
            }
            language {
              code
            }
          }
        }
      }
      list: allWpPost(
        filter: { language: { code: { eq: PL } }, slug: { eq: "iso-9001" } }
      ) {
        nodes {
          blocks {
            ... on WpCoreListBlock {
              originalContent
            }
          }
          translations {
            blocks {
              ... on WpCoreListBlock {
                originalContent
              }
            }
            language {
              code
            }
          }
        }
      }
      cert: file(relativePath: { eq: "certs/certyfikat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 407, maxHeight: 561) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { language } = React.useContext(I18nextContext)
  const { t } = useTranslation()
  const [paragraphsData, setParagraphsData] = useState(null)
  const [listData, setListData] = useState(null)
  useEffect(() => {
    const range = document.createRange()
    const paragraphsArr: any[] = data.paragraphs.nodes[0].blocks
    const paragraphList: any[] = paragraphsArr.map((_el: any, i: number) => {
      const { content } = useNodes({ dataslug: data.paragraphs, nthNode: i })
      const paragraph =
        content[`${language}`] &&
        parse(
          range.createContextualFragment(content[`${language}`]).children[0]
            .innerHTML
        )
      return paragraph
    })
    const { content } = useNodes({
      dataslug: data.list,
      nthNode: paragraphsArr.length - 1,
    })

    const list =
      content[`${language}`] &&
      parse(
        range.createContextualFragment(content[`${language}`]).children[0]
          .innerHTML
      )

    setParagraphsData(paragraphList)
    setListData(list)
  }, [language])
  const paragraphs = paragraphsData
    ?.map(
      (el: React.ReactNode) =>
        el && <Description invert="row-reverse">{el}</Description>
    )
    .filter(el => el && el)

  return (
    <GradientSectionWrapperISO id="iso9001">
      <PageSectionHeader invert>
        <Slide direction={'left'} duration={300} triggerOnce>
          <>
            {t('system zarządzania jakością')} <span>ISO 9001</span>
          </>
        </Slide>
      </PageSectionHeader>
      <Figure>
        <ImgWrapper>
          <GradientImg
            //@ts-ignore
            fluid={data.cert.childImageSharp.fluid}
            alt="zdjęcie certyfikatu ISO9001"
            fadeIn={false}
          />
        </ImgWrapper>
        <Figcaption>
          <Fade>
            {paragraphs && paragraphs.length
              ? paragraphs
              : t('brak tłumaczenia')}
          </Fade>
          <SpecialityList invert>
            <Fade>{listData ?? null}</Fade>
          </SpecialityList>
        </Figcaption>
      </Figure>
    </GradientSectionWrapperISO>
  )
}

export default ISO9001
