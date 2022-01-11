import React from 'react'
import MenuItem from '../menuItem'
import MenuItemClose from '../menuItemClose'
import * as Component from './style'

const Menu = () => {
  return (
    <Component.Menu>
      <Component.Logo src="./winmedlogo.png" />
      <MenuItem title="Dashboard" icon="./home.png" link="/home"></MenuItem>
      <MenuItem
        title="Cadastro de Médicos"
        icon="./medical.png"
        link="/doctor"
      ></MenuItem>
      <MenuItem
        title="Cadastro de Clinicas"
        icon="./clinic.png"
        link="/clinic"
      ></MenuItem>
      <MenuItemClose title="Sair" icon="./close.png" link="/" />
    </Component.Menu>
  )
}

export default Menu
