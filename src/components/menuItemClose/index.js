import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, MenuIcon } from './style'
import ReactToolTip from 'react-tooltip'
import { destroyCookie } from 'nookies'
const MenuItemClose = ({ icon, link, title }) => {
  const history = useRouter()
  const [token, setToken] = useState()

  let isActive = history.pathname === link

  const handleLinkClick = (e) => {
    e.preventDefault()
    console.log('token:' + token)
    setToken('')
    destroyCookie(null, 'token', token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    history.push('/')
  }
  return (
    <Container
      data-tip={title}
      data-for="tip-right"
      active={isActive}
      href={link}
      onClick={handleLinkClick}
    >
      <MenuIcon src={icon} alt="icon-menu" />
      <ReactToolTip id="tip-top" place="top" effect="solid" />
      <ReactToolTip id="tip-right" place="right" effect="solid" />
    </Container>
  )
}

export default MenuItemClose
