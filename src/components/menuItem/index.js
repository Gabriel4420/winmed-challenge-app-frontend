import React from 'react'
import { useRouter } from 'next/router'
import { Container, MenuIcon } from './style'
import ReactToolTip from 'react-tooltip'
const MenuItem = ({ icon, link, title }) => {
  const history = useRouter()

  let isActive = history.pathname === link

  const handleLinkClick = (e) => {
    e.preventDefault()
    history.push(link)
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
      <ReactToolTip id="tip-top" place="top" effect="solid"  />
      <ReactToolTip id="tip-right" place="right" effect="solid" />
    </Container>
  )
}

export default MenuItem
