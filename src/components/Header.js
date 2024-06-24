import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import logo from '../assets/images/logo.png'; 
import './../styles/Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="navbar-brand">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Smoking Shop logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="nav-custom mx-auto">
            <Nav.Link href="#" className="nav-link nav-item active">Главная</Nav.Link>
            <Nav.Link href="#" className="nav-link nav-item">Каталог</Nav.Link>
            <Nav.Link href="#" className="nav-link nav-item">Блог</Nav.Link>
            <Nav.Link href="#" className="nav-link nav-item">О нас</Nav.Link>
          </Nav>
          <div className="nav-right">
            <div className="icon-container mx-2">
              <FaSearch className="icon" />
            </div>
            <div className="icon-container mx-2 position-relative">
              <FaShoppingCart className="icon" />
              <span className="cart-count">0</span>
            </div>
            <Button variant="outline-success" className="mr-2">
              <BiLogOut className="logout-icon" /> Войти
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
