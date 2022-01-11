import { useState, useEffect } from 'react'
import { ContainerPageBody } from '../../src/components/templates/ContainerPageBody'
import { Container } from '../../src/components/templates/Container'
import { PageBody } from '../../src/components/templates/PageBody'
import * as Component from './style'
import api from '../../src/services/api'
import Header from '../../src/components/templates/Header'
import Menu from '../../src/components/menu'
import Head from 'next/head'
import TableDoctor from '../../src/components/TableDoctor'
import { parseCookies } from 'nookies'
import TableClinic from '../../src/components/TableClinics'

const Home = () => {
  const [headerSearch, setHeaderSearch] = useState('')
  const [activeSearch, setActiveSearch] = useState('')

  return (
    <Container>
      <Head>
        <title>Winmed - Home</title>
        <meta
          name="description"
          content="Aplicativo para cadastro de medicos e pacientes, um futuro ERP"
        />
      </Head>
      <Menu />
      <PageBody>
        <ContainerPageBody>
          <Header search={headerSearch} onSearch={setHeaderSearch} />
          <Component.TablesArea>
            <h3>Doutores Cadastrados</h3>
            <Component.TableContent>
              <TableDoctor />
            </Component.TableContent>
            <h3>Clínicas Cadastradas</h3>
            <Component.TableContent>
              <TableClinic />
            </Component.TableContent>
          </Component.TablesArea>
        </ContainerPageBody>
      </PageBody>
    </Container>
  )
}

export default Home
