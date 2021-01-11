import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
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
  }
`
const GradientSectionWrapperISO = styled(GradientSectionWrapper)`
  margin: 50px 0;
`
const SpecialityListItem = styled.li`
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
`
const ISO9001 = () => {
  const data = useStaticQuery(graphql`
    query {
      cert: file(relativePath: { eq: "certs/certyfikat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 407, maxHeight: 561) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <GradientSectionWrapperISO id="iso9001">
      <PageSectionHeader invert>
        System Zarządzania Jakością <span>ISO 9001</span>
      </PageSectionHeader>
      <Figure>
        <ImgWrapper>
          <GradientImg
            //@ts-ignore
            fluid={data.cert.childImageSharp.fluid}
            alt="logo firmy Forty"
            fadeIn={false}
          />
        </ImgWrapper>
        <Figcaption>
          <Description invert="row-reverse">
            Firma Forty s.j. mając świadomość z korzyści płynących z posiadania
            skutecznego systemu zarządzania jakością w lutym 2006 r. rozpoczęła
            wdrażanie systemu zarządzania opartego na normie ISO 9001. W efekcie
            tych działań uzyskała certyfikat Zarządzania Jakością ISO 9001:2008
            w październiku 2006 r.Jednostką certyfikującą była firma ISOQAR CEE
            z Wielkiej Brytanii.
          </Description>
          <Description invert="row-reverse">
            Od 2006 utrzymujemy aktywny certyfikat zarządzania jakością,
            realizujemy wewnętrze i zewnętrzne audyty jakości.
          </Description>

          <Description invert="row-reverse">
            <span>Wdrożenie systemu w firmie pozwala nam na:</span>
          </Description>
          <SpecialityList invert>
            <SpecialityListItem>
              jasne i przejrzyste określenie zadań i uprawnień personelu,
            </SpecialityListItem>
            <SpecialityListItem>
              ustalenie jednolitych kanałów komunikacyjnych w Naszym
              przedsiębiorstwie,
            </SpecialityListItem>
            <SpecialityListItem>
              utrzymanie stałego poziomu jakości Naszych produktów i usług,
            </SpecialityListItem>
            <SpecialityListItem>
              jednoznaczną identyfikację potrzeb Klienta, zarówno jawnych jak i
              ukrytych,
            </SpecialityListItem>
            <SpecialityListItem>
              podniesienie poziomu jakości obsługi klienta,
            </SpecialityListItem>
            <SpecialityListItem>
              skrócenie czasu adaptacji nowych pracowników do powierzonych im
              zadań,
            </SpecialityListItem>
            <SpecialityListItem>
              racjonalizacje ponoszonych kosztów z tytułu prowadzonej
              działalności.
            </SpecialityListItem>
          </SpecialityList>
        </Figcaption>
      </Figure>
    </GradientSectionWrapperISO>
  )
}

export default ISO9001
