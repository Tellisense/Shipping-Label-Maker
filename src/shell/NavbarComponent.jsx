import React from 'react'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <FontAwesomeIcon style={{ color: "#f7c244" }} icon={faEnvelope} />{' '}
          Shipping Label Maker
    </Navbar.Brand>
      </Navbar>
    </>
  )
}

