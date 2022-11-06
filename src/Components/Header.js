import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Personal Profile</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>Welcome</Link>
            <Link to='/home'>Home</Link>
            <Link to='/project'>Projects</Link>
            <Link to='/skills'>Skills</Link>
            
          </Nav>
        </Container>
      </Navbar> 
    </div>
  )
}

export default Header
