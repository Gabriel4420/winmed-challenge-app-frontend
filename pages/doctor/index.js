import { useState } from 'react'
import { Container } from '../../src/components/templates/Container'
import { ContainerPageBody } from '../../src/components/templates/ContainerPageBody'
import { PageBody } from '../../src/components/templates/PageBody'
import { Formik, Field, Form } from 'formik'
import { parseCookies } from 'nookies'
import api from '../../src/services/api'
import * as C from './style'
import Menu from '../../src/components/menu'
import Header from '../../src/components/templates/Header'
import Head from 'next/head'

const Doctor = () => {
  const [headerSearch, setHeaderSearch] = useState('')
  /* const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [sex, setSex] = useState('')
  const [cpf, setCPF] = useState('')
  const [rg, setRG] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [cep, setCEP] = useState('')
  const [city, setCity] = useState('')
  const [number, setNumber] = useState(0)
  const [speciality, setSpeciality] = useState('')
  const [crm, setCRM] = useState(0) */
  const cookies = parseCookies()

  const onSubmit = async (values, actions) => {
    try {
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
        setFieldValue('logradouro', data.logradouro)

        setFieldValue('cidade', data.localidade)
        
      })
  }
  return (
    <Container>
      <Head>
        <title>Winmed - Cadastrar Médico</title>
        <meta
          name="description"
          content="Aplicativo para cadastro de medicos e pacientes, um futuro ERP"
        />
      </Head>
      <Menu />
      <PageBody>
        <ContainerPageBody>
          <Header search={headerSearch} onSearch={setHeaderSearch} disabled />
          <C.ContainerForm>
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
                  <h2>Informações Gerais</h2>
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
                      <Field name="telefone" type="text" />
                    </div>
                  </div>

                  <h2>Endereço e Especialidade </h2>
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
                      <Field name="cidade" type="text" />
                    </div>
                    <div className="col">
                      <label>Endereço</label>
                      <Field name="logradouro" type="text" />
                    </div>
                  </div>
                  <div className="form-control-group">
                    <div className="col">
                      <label>Número</label>
                      <Field name="numero" type="number" />
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
          </C.ContainerForm>
        </ContainerPageBody>
      </PageBody>
    </Container>
  )
}

export default Doctor
