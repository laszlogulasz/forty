import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import { device, PageSectionHeader, SectionWrapper } from './shared'
import SliderBox from './SliderBox'

const Industries = () => {
  const isMobileAndTablet = useMediaQuery({ maxWidth: device.mobileAndtablet })
  const data = useStaticQuery(graphql`
    query {
      moto: allFile(filter: { dir: { regex: "/moto/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      industrial: allFile(filter: { dir: { regex: "/industrial/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      cosmetic: allFile(filter: { dir: { regex: "/cosmetic/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      pharma: allFile(filter: { dir: { regex: "/pharma/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      electro: allFile(filter: { dir: { regex: "/electro/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      games: allFile(filter: { dir: { regex: "/games/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      commercial: allFile(filter: { dir: { regex: "/commercial/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      home: allFile(filter: { dir: { regex: "/home/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      individual: allFile(filter: { dir: { regex: "/individual/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      fmcg: allFile(filter: { dir: { regex: "/fmcg/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 585, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const sliderData = [
    {
      name: 'Motoryzacyjna',
      desc:
        'Produkujemy różne palety transportowe dla dostawców części samochodowych. Nasze paletki biorą udział w łańcuchu dostaw dooczołowych producentów samochodów: Mercedes, Volkswagen, Toyota, Ford, Iveco, Chrysler, Ferrari, Maserati. Wytwarzamy też zatyczki technologiczne niezbędne przy produkcji i transporcie części samochodowych.',
      images: data.moto,
    },
    {
      name: 'Przemysłowa',
      desc:
        'Produkujemy palety transportowe, które stanowią doskonałe zabezpieczenie przed uszkodzeniem precyzyjnych i delikatnych elementów technicznych podczas transportu międzyoperacyjnego, logistyki zewnętrznej i składowania.',
      images: data.industrial,
    },
    {
      name: 'Kosmetyczna',
      desc:
        'Jesteśmy liderem w produkcji termoformowanych elementów merchandingowych oraz elementów opakowań dla producentów kosmetyków w Polsce.',
      images: data.cosmetic,
    },
    {
      name: 'Farmaceutyczna',
      desc:
        'Jesteśmy liderem w produkcji termoformowanych elementów merchandingowych oraz elementów opakowań dla producentów kosmetyków w Polsce.',
      images: data.pharma,
    },
    {
      name: 'Elektrotechniczna',
      desc:
        'Zajmujemy się produkcją palet transportowych dla branży elektrotechnicznej, jak również produkujemy pudełka i wytłoczki do sprzedaży zestawów narzędzi i urządzeń elektrotechnicznych.',
      images: data.electro,
    },
    {
      name: 'Gier',
      desc:
        'Jesteśmy czołowym producentem wytłoczek do gier planszowych, kart do gry. Zajmujemy się też projektowaniem wytłoczek na podstawie przekazanych przez zlecającego elementów gry planszowej.',
      images: data.games,
    },
    {
      name: 'Reklamowa',
      desc:
        'Zajmujemy się projektowaniem i realizacją tłoczonych elementów reklam zewnętrznych i wewnętrznych, podstawek do merchandisingu oraz innych elementów reklamy tworzonych w technologii termoformowania tworzyw sztucznych.',
      images: data.commercial,
    },
    {
      name: 'Dom i ogród',
      desc:
        'Elementy termoformowane znajdują one coraz szersze zastosowanie w ogrodnictwie do przygotowywania rozsad oraz transportu owoców i kwiatów doniczkowych. Produkujemy blistry i zajmujemy się pakowaniem wyrobów, które mogą Państwo spotkać w marketach budowlanych.',
      images: data.home,
    },
    {
      name: 'Detaliczna',
      desc:
        'Dla wielu różnych firm zajmujemy się pakowaniem wyrobów gotowych w blistry. Projektujemy blistry na podstawie przekazanego elementu do spakowania. Realizujemy też konfekcjonowanie. Klient po przekazaniu nam towaru otrzymuje wyrób gotowy do sprzedaży w uzgodnionych opakowaniach zbiorczych.',
      images: data.individual,
    },
    {
      name: 'Spożywcza',
      desc:
        'Dla branży spożywczej produkujemy opakowania dla produktów spożywczych, opakowania promocyjne dla przemysłu monopolowego, koszyki do owoców, lodów, oraz palety logistyczno-wystawiennicze.',
      images: data.fmcg,
    },
  ]

  const industries = sliderData.map(
    (industry: { name: string; desc: string; images: object }, i) => (
      <SliderBox
        key={i}
        name={industry.name}
        desc={industry.desc}
        images={industry.images}
        direction={!isMobileAndTablet && i % 2 > 0 ? 'row-reverse' : 'row'}
        tall={false}
      />
    )
  )
  return (
    <SectionWrapper id="industries">
      <PageSectionHeader>
        <Slide direction={'left'} duration={300} delay={100} triggerOnce>
          Branże dla których pracujemy
        </Slide>
      </PageSectionHeader>
      {industries}
    </SectionWrapper>
  )
}

export default Industries
