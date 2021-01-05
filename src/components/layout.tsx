import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

const Container = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
`
const Main = styled.main`
  margin-top: 50px;
  padding: 0;
`

interface Props {
  isHomePage?: boolean
}

const Layout: React.FC<Props> = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <Container data-is-root-path={isHomePage}>
      <Header />
      <Main>{children}</Main>
      <Footer />
      {/*
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer> */}
    </Container>
  )
}

export default Layout
