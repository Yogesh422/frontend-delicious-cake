import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

import img6 from '../assets/images/logo1.png'


export default function AppHeader() {
const navigate=useNavigate();
const handleloginClick=()=>
{
  navigate('/login');
}
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="/#home">
      <Image src={img6}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="auto">
            <Nav.Link href="/#home">Home</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#services">Services</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/#blog">Blog</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
          <Nav.Link>
                <Link to="/carts">
                  <i id="s1" className="fa-solid fa-cart-shopping"></i>
                </Link>
              </Nav.Link>
                <Nav className='bttn'>
                <Button id='bt1' onClick={handleloginClick}className='bttn' variant="primary">Login</Button>
                </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}