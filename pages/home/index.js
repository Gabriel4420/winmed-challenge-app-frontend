import { useState, useEffect } from 'react'
import { ContainerPageBody } from '../../src/components/templates/ContainerPageBody'
import { Container } from '../../src/components/templates/Container'
import { PageBody } from '../../src/components/templates/PageBody'
import { TablesArea } from '../../src/components/templates/TableArea'
import { TableContent } from '../../src/components/templates/TableContent'
import Header from '../../src/components/templates/Header'
import Menu from '../../src/components/menu'
import Head from 'next/head'
import TableDoctor from '../../src/components/TableDoctor'
import TableClinic from '../../src/components/TableClinics'

const Home = () => {
  const [headerSearch, setHeaderSearch] = useState('')
  const [activeSearch, setActiveSearch] = useState('')

  return (
    <Container>
      <Head>
        <title>Desafio Frontend Winmed</title>
        <meta name="title" content="Desafio Frontend Winmed" />
        <meta
          name="description"
          content="App para cadastro de medicos e clinicas"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://winmed-challenge-app-frontend.vercel.app/"
        />
        <meta property="og:title" content="Desafio Frontend Winmed" />
        <meta
          property="og:description"
          content="App para cadastro de medicos e clinicas"
        />
        <meta property="og:image" content="../../public/winmedlogo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://winmed-challenge-app-frontend.vercel.app/"
        />
        <meta property="twitter:title" content="Desafio Frontend Winmed" />
        <meta
          property="twitter:description"
          content="App para cadastro de medicos e clinicas"
        />
        <meta property="twitter:image" content="../../public/winmedlogo.png" />
      </Head>
      <Menu />
      <PageBody>
        <ContainerPageBody>
          <Header search={headerSearch} onSearch={setHeaderSearch} />
          <TablesArea>
            <h3>Doutores Cadastrados</h3>
            <TableContent>
              <TableDoctor />
            </TableContent>
            <h3>Clínicas Cadastradas</h3>
            <TableContent>
              <TableClinic />
            </TableContent>
          </TablesArea>
        </ContainerPageBody>
      </PageBody>
    </Container>
  )
}

export default Home
