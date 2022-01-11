import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container } from '../../src/components/templates/Container'
import { ContainerPageBody } from '../../src/components/templates/ContainerPageBody'
import { PageBody } from '../../src/components/templates/PageBody'
import { Formik, Field, Form } from 'formik'
import { parseCookies } from 'nookies'
import api from '../../src/services/api'
import { ContainerForm } from '../../src/components/templates/ContainerForm'
import Menu from '../../src/components/menu'
import Header from '../../src/components/templates/Header'
import Head from 'next/head'

const Doctor = () => {
  const [headerSearch, setHeaderSearch] = useState('')
  const router = useRouter()
  const cookies = parseCookies()

  const onSubmit = async (values, setFieldValue) => {
    try {
      console.log(values)

      const { data: data } = await api.post(
        'register_doctor',
        {
          name: values.name,
          sex: values.sex,
          age: values.age,
          cpf: values.cpf,
          rg: values.rg,
          phone: values.phone,
          address: values.address,
          cep: values.cep,
          city: values.city,
          number: values.number,
          speciality: values.speciality,
          crm: values.crm,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
            'Content-Type': 'application/json',
          },
        },
      )
      console.log(data)
      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  const onBlurCep = (ev, setFieldValue) => {
    const { value } = ev.target

    const cep = value?.replace(/[^0-9]/g, '')

    if (cep?.length !== 8) {
      return
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('address', data.logradouro)

        setFieldValue('city', data.localidade)
      })
  }
  return (
    <Container>
      <Head>
      <title>Winmed - Cadastrar Médico</title>
        <meta name="title" content="Winmed - Cadastrar Médico" />
        <meta
          name="description"
          content="App para cadastro de medicos e clinicas"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://winmed-challenge-app-frontend.vercel.app/"
        />
        <meta property="og:title" content="Winmed - Cadastrar Médico" />
        <meta
          property="og:description"
          content="App para cadastro de medicos e clinicas"
        />
        <meta property="og:image" content="./winmedlogo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://winmed-challenge-app-frontend.vercel.app/"
        />
        <meta property="twitter:title" content="Winmed - Cadastrar Médico" />
        <meta
          property="twitter:description"
          content="App para cadastro de medicos e clinicas"
        />
        <meta property="twitter:image" content="./winmedlogo.png" />
        <link rel="shortcut icon" href="./winmedlogo.png" />
      </Head>
      <Menu />
      <PageBody>
        <ContainerPageBody>
          <Header search={headerSearch} onSearch={setHeaderSearch} disabled />
          <h2 className="title-Form">Cadastrar Doutor</h2>
          <ContainerForm>
            <Formik
              onSubmit={onSubmit}
              validateOnMount
              initialValues={{
                cep: '',
                logradouro: '',
                numero: '',
                cidade: '',
              }}
              render={({ values, setFieldValue }) => (
                <Form>
                  <div className="form-control-group">
                    <div className="col">
                      <label>Nome</label>
                      <Field name="name" type="text" />
                    </div>
                    <div className="col">
                      <label>Sexo</label>
                      <Field name="sex" type="text" />
                    </div>
                    <div className="col">
                      <label>Idade</label>
                      <Field name="age" type="number" />
                    </div>
                  </div>
                  <div className="form-control-group">
                    <div className="col">
                      <label>CPF</label>
                      <Field name="cpf" type="text" />
                    </div>
                    <div className="col">
                      <label>RG</label>
                      <Field name="rg" type="text" />
                    </div>
                    <div className="col">
                      <label>Telefone</label>
                      <Field name="phone" type="text" />
                    </div>
                  </div>

                  <div className="form-control-group">
                    <div className="col">
                      <label>Cep</label>
                      <Field
                        name="cep"
                        type="text"
                        onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                      />
                    </div>
                    <div className="col">
                      <label>Cidade</label>
                      <Field name="city" type="text" />
                    </div>
                    <div className="col">
                      <label>Endereço</label>
                      <Field name="address" type="text" />
                    </div>
                  </div>
                  <div className="form-control-group">
                    <div className="col">
                      <label>Número</label>
                      <Field name="number" type="number" />
                    </div>
                    <div className="col">
                      <label>Especialidade</label>
                      <Field name="speciality" type="text" />
                    </div>
                    <div className="col">
                      <label>CRM</label>
                      <Field name="crm" type="number" />
                    </div>
                  </div>

                  <button type="submit" className="btn-cadastrar">
                    Cadastrar
                  </button>
                </Form>
              )}
            />
          </ContainerForm>
        </ContainerPageBody>
      </PageBody>
    </Container>
  )
}

export default Doctor
