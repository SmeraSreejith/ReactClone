import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEarth } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


function Header() {
  return (
    <>
       <Navbar collapseOnSelect expand="lg" className='bg-white' style={{fontSize:'18px',fontWeight:'500',position:'sticky'}}>
      <Container>
        <Navbar.Brand className='text-dark fw-bolder fs-2'>fiverr<FontAwesomeIcon icon={faCircle} style={{color: "#63E6BE", fontSize:'8px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            <NavDropdown title="Fiverr Pro" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">I'm looking to hire</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> I want to offer pro services</NavDropdown.Item>  
            </NavDropdown>

            <NavDropdown title="Explore" className='ms-3' id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Discover</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Community</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Guides</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Podcasts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Learn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.1">Logo Maker</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav className='ms-3 '>
            <Nav.Link href="#" id='nav'><FontAwesomeIcon icon={faEarth}/>English</Nav.Link>
            <Nav.Link href="#" id='nav'  className='ms-3'><FontAwesomeIcon/>Become a seller</Nav.Link>
            <Nav.Link href="#" id='nav'  className='ms-3'><FontAwesomeIcon/>Sign in</Nav.Link>
            <Button variant="outline-success" className='ms-3 rounded-0 px-3 py-1' style={{fontSize:'17px',fontWeight:'500'}}>Join</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr />
    </>
  )
}

export default Header 