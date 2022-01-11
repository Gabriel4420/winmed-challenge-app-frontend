import React, { useState } from 'react'
import { Avatar, Container, Logo, SearchInput } from './style'

const Header = ({ search, onSearch, disabled }) => {
  const [inputActive, setInputActive] = useState(search === '' ? false : true)

  const handleInputFocus = (_) => setInputActive(true)
  const handleInputBlur = (_) => search === '' && setInputActive(false)
  const handleChange = (e) => onSearch(e.target.value)
  return (
    <Container>
      <Logo src="./envelope.png" alt="envelop-logo" />

      <div className="input-avatar-area">
        {!disabled && (
          <SearchInput
            type="text"
            value={search}
            active={inputActive}
            onChange={handleChange}
            placeholder="Pesquisando por..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={disabled}
          />
        )}

        <div className="avatar-area">
          <div className="texts-Area">
            <h3>Rodolfo</h3>
            <h4>admin</h4>
          </div>
          <Avatar src="./avatar.png" alt="avatar" />
        </div>
      </div>
    </Container>
  )
}

export default Header
