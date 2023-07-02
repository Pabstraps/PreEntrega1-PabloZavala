import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import BotonCarrito from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kirintor Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Categorias</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link id="carrito" className="cart-widget-container">
              <BotonCarrito/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;