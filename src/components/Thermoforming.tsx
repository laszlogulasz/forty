import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { PageSectionHeader, SectionWrapper } from './shared'
import SliderBox from './SliderBox'

const Thermoforming = () => {
  const data = useStaticQuery(graphql`
    query {
      thermoforming: allFile(filter: { dir: { regex: "/thermoforming/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 585, height: 420, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const packing = {
    desc: (
      <span>
        <strong>Termoformowanie</strong> to nazwa procesu technologicznego, w
        którym z płaskich folii lub płyt, podgrzanych wstępnie do określonej
        temperatury charakterystycznej dla danego tworzywa, formuje się produkty
        o określonych kształtach. Stosunkowo tanie i wysoko wydajne przetwórstwo
        sprawia, że termoformowanie jest powszechnie wykorzystywane zarówno w
        produkcji opakowań, jak i produktów wielkogabarytowych. Materiały do
        termoformowania przeznaczone są dla wszystkich gałęzi przemysłu:
        od spożywczego, poprzez meblowy, dla producentów wanien, brodzików oraz
        kabin prysznicowych, producentów samochodów oraz maszyn roboczych,
        traktorów, bagażników dachowych i wszystkiego tego, co może być
        wyprodukowane w technologii termoformowania.{' '}
      </span>
    ),
    images: data.thermoforming,
  }

  return (
    <SectionWrapper id="thermoforming">
      <PageSectionHeader>Co to jest termoformowanie</PageSectionHeader>
      <SliderBox
        desc={packing.desc}
        images={packing.images}
        direction={'row'}
        tall={true}
      />
    </SectionWrapper>
  )
}

export default Thermoforming
