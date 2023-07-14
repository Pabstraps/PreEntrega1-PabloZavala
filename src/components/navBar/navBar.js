import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import BotonCarrito from '../CartWidget/CartWidget';
import {Link,NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#Home">Kirintor Store</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/components/Categorias">Categorias</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <NavLink to="/carrito" className="cart-widget-container">
              <BotonCarrito/>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;