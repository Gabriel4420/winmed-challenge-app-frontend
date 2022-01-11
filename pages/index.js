import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../src/components/templates/Footer'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import api from '../src/services/api'
import { setCookie } from 'nookies'
import bcrypt from 'bcryptjs'
import Image from 'next/image'
import InputPassword from '../src/components/atomics/InputPassword'

export default function Home() {
  const [token, setToken] = useState()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [typeCamp, setTypeCamp] = useState('password')

  const router = useRouter()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const saltpassword = await bcrypt.hash(password, 8)

      const { data: data } = await api.post('login', {
        email: email,
        password: saltpassword,
      })
      const comparing = await bcrypt.compare(saltpassword, data.user.password)
      console.log(saltpassword)

      if (email == data.user.email && !comparing === true) {
        setCookie(null, 'token', data.token, {
          maxAge: 86400 * 7,
          path: '/',
        }),
          setToken(data.token)
        router.push('/home')
      } else {
        alert('email ou senha incorretos')
        router.push('/')
      }
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
    <div className={styles.background}>
      <Head>
        <title>Desafio Frontend Winmed</title>
        <meta
          name="description"
          content="App para cadastro de medicos e clinicas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.form}>
        <form onSubmit={handleLogin}>
          <Image
            src="/winmedlogo.png"
            width="100"
            height="80"
            className={styles.image_responsive}
          />

          <input
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
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
              required
            />
            <button
              onDoubleClick={handleCampText}
              onClick={handleCampPassWord}
              className={styles.showPassword}
              type="button"
            >
              {typeCamp == 'password' ? '👁️' : '🔑'}
            </button>
          </div>

          <button type="submit">Entrar</button>

          <Link className={styles.link} href="/register">
            Não tenho cadastro
          </Link>
        </form>
      </main>

      <Footer />
    </div>
  )
}
