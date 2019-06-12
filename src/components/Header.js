import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Link className="navbar-brand" to="/">
              <span className="brand">6061</span>
            </Link>
            <Nav className="mr-xl-auto">
              <Link className="nav-link" to="/">
                Главная
              </Link>
              <Link className="nav-link" to="/products">
                Товары
              </Link>
              <Link className="nav-link" to="/about">
                О нас
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
