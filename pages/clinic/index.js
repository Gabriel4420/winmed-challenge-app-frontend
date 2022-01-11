import { useState } from 'react'
import { ContainerPageBody } from '../../src/components/templates/ContainerPageBody'
import { Container } from '../../src/components/templates/Container'
import { PageBody } from '../../src/components/templates/PageBody'
import Menu from '../../src/components/menu'
import Header from '../../src/components/templates/Header'
import Head from 'next/head'

const Clinic = () => {
  const [headerSearch, setHeaderSearch] = useState('')
  const [activeSearch, setActiveSearch] = useState('')
  return (
    <Container>
      <Head>
        <title>Winmed - Cadastrar Clinica</title>
        <meta
          name="description"
          content="Aplicativo para cadastro de medicos e pacientes, um futuro ERP"
        />
      </Head>
      <Menu />
      <PageBody>
        <ContainerPageBody>
          <Header search={headerSearch} onSearch={setHeaderSearch} disabled />
        </ContainerPageBody>
      </PageBody>
    </Container>
  )
}

export default Clinic
