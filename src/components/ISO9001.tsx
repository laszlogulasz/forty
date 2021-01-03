import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import {
  colors,
  Description,
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
`
const Figcaption = styled.figcaption`
  width: 60%;
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
  font: 100 1.125em 'Lato';
  line-height: 1.5em;
  text-align: left;
`
const ISO9001 = () => {
  const data = useStaticQuery(graphql`
    query {
      cert: file(relativePath: { eq: "certs/certyfikat.jpg" }) {
        childImageSharp {
          fixed(width: 407, height: 561) {
            ...GatsbyImageSharpFixed
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
        <GradientImg
          //@ts-ignore
          fixed={data.cert.childImageSharp.fixed}
          alt="logo firmy Forty"
          fadeIn={false}
        />
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
