import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

//css
import "./NavigationBar.css";

//image
import logo from "../../Image/Icons/logo.png";

function NavigationBar() {
  return (
<Navbar collapseOnSelect expand="lg"  variant="light">
  <Container>
  <Navbar.Brand href="#home">
      <img src={logo} style={{maxWidth:'6rem'}}/>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" style={{flexGrow:'unset'}}>
    <Nav className="justify-content-end">
    <Nav.Link className='nav_item' href="#home">Home</Nav.Link>
      <Nav.Link className='nav_item' href="#features">Blog</Nav.Link>
      <Nav.Link className='nav_item' href="#pricing">Explore</Nav.Link>
      <Nav.Link className='nav_item' href="#pricing">Contact Us</Nav.Link>
      <Nav.Link className='nav_item_last' href="#pricing">Join/SignUp</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavigationBar;

