import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BotonCarrito from '../../components/CartWidget/CartWidget'


function MenuSuperior() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kirintor Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Categorias</Nav.Link>
            <Nav.Link href="#pricing" id ="carrito"><BotonCarrito/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
}

export default MenuSuperior;