import React from 'react'
import * as Component from './style'

const Footer = () => {
  return (
    <Component.FooterBackground>
      <a
        href="https://gabriel4420.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Develop by <span className="labelDeveloper">Gabriel Rodrigues Perez</span>
      </a>
    </Component.FooterBackground>
  )
}

export default Footer
