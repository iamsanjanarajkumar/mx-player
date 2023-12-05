import React from 'react'
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './navigation.css';

function Navigation() {
  return (
    <header>
        <Navbar expands="lg" className='bg-black'>
            <Container fluid>
              <Navbar.Brand href="/">
                <img src='https://ww2.freelogovectors.net/svg07/mx-player-logo.svg' alt ="logo"  className='logo'/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='mx-player-navbar'></Navbar.Toggle>

              <Navbar.Collapse id="mx-player-navbar" className='justify-content-between'>


                <Nav className='text-white align-items-center gap-4'>
                    <Nav.Link href='/'><i class="bi bi-house-fill fs-3 text-primary"></i></Nav.Link>
                    <Nav.Link href='/' className='text-white'>Shows</Nav.Link>
                    <Nav.Link href='/' className='text-white'>Movies</Nav.Link>
                    <Nav.Link href='/'className='text-white'>New & Hot🔥</Nav.Link>
                    <Nav.Link href='/' className='text-white'>DistroTV</Nav.Link>
                    <Nav.Link href='/'className='text-white'>MX VDesi</Nav.Link>

                    <NavDropdown title='Others' id="others-dropdown" className='text-white mx-dropdown'>
                       <NavDropdown.Item href='/' className='dropdown-items'>MX Gold⭐</NavDropdown.Item>
                       <NavDropdown.Item href='/' className='dropdown-items'>Trailers</NavDropdown.Item>
                    </NavDropdown>
                     

                </Nav>
                
                <Nav className='align-items-center gap-4'>
                    <Nav.Link href='/'><i class="bi bi-search fs-4 text-white"></i></Nav.Link>
                    <Nav.Link href='/'><i class="bi bi-bell-fill fs-4 text-white"></i></Nav.Link>
                    <Nav.Link href='/' className='text-white'>Login</Nav.Link>
                </Nav>

              </Navbar.Collapse>

            </Container>
        </Navbar>
    </header>
  )
}

export default Navigation