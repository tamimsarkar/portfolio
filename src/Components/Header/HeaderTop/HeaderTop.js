import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './HeaderTop.css'
const HeaderTop = () => {
  return (
    <Navbar className="header__top navbarTop" expand="lg">
      <div className="container">
        <Navbar.Brand><Link className="logo__link" to="/"><img src={logo} alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="ml-auto">
            <Nav.Link><Link className="link" to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link className="link" to="/about">About</Link></Nav.Link>
            <Nav.Link><Link className="link" to="/projects">Projects</Link></Nav.Link>
            <Nav.Link><Link className="link" to="/blogs">Blog</Link></Nav.Link>
            <Nav.Link><Link className="link" to="/contact">Contact me</Link></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HeaderTop;