import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
// import Image from "../components/image"
import SEO from '../components/Seo'

const MainSection = styled.section`
  display: flex;
`
const MainTextWrapper = styled.div`
  width: 55%;
`
const ImageWrapper = styled.div`
  width: 45%;
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const IndexPage: React.FC = () => (
  <Layout isHomePage>
    <SEO title="Home" />
    <MainSection>
      <MainTextWrapper>
        <h1>Przykładowy tekst</h1>
        <p>
          W warunkach rzeczywistości przedwrześniowej na tle ogólnego regresu
          tak ekonomicznego jak i społeczno-politycznego i to zarówno w warstwie
          pryncypiów merytorycznych jak i w głęboko zacofanej warstwie
          sanacyjnej infrastruktury szczególną nieudolnością i brakiem koncepcji
          rysował się ogólny bilans białka, który to bilans, jak powszechnie
          wiadomo, wyznacza tak kompetentność czynników odpowiadających na
          ekonomikę w każdym społeczeństwie jak i świadczy w sposób najbardziej
          widoczny, jak sprawy te są zabezpieczone (..)
        </p>
        <p></p>
      </MainTextWrapper>
      <ImageWrapper>{/* <Image /> */}</ImageWrapper>
    </MainSection>
    <section></section>
    <section>
      <h2>More</h2>
      <ul>
        <li id="dupa">
          {/* <Link to="/open-hours/">Open hours</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link> */}
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
