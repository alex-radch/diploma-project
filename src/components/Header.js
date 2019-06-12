import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Link className="navbar-brand" to="/">
              <span className="brand">6061</span>
            </Link>
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/products">
                Products
              </Link>
              <Link className="nav-link" to="/contacts">
                Contact
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
}

export default Header;
