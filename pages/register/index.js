import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import api from '../../src/services/api'
import bcrypt from 'bcryptjs'
import InputPassword from '../../src/components/atomics/InputPassword'
import { ContainerRegister } from '../../src/components/templates/ContainerRegister'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [typeCamp, setTypeCamp] = useState('password')

  const [password, setPassword] = useState('')

  const router = useRouter()

  async function handleRegister(e) {
    e.preventDefault()

    try {
      const saltpassword = await bcrypt.hash(password, 8)

      const { data: data } = await api.post('user', {
        name: name,
        email: email,
        password: saltpassword,
      })

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleCampText = () => {
    setTypeCamp('text')
  }

  const handleCampPassWord = () => {
    setTypeCamp('password')
  }
  return (
    <ContainerRegister>
      <Head>
        <title>Winmed - Cadastrar Usuário</title>
        <meta
          name="description"
          content="Aplicativo para cadastro de medicos e pacientes, um futuro ERP"
        />
      </Head>

      <section className="form">
        <h1>Winmed Cadastro</h1>
        <form method="POST" onSubmit={handleRegister}>
          <input
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InputPassword
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={typeCamp}
              className="form-control"
              required
            />
            <button
              onDoubleClick={handleCampText}
              onClick={handleCampPassWord}
              className="showPassword2"
              type="button"
            >
              {typeCamp == 'password' ? '👁️' : '🔑'}
            </button>
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </section>
    </ContainerRegister>
  )
}

export default Register
