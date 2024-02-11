import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarHome() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" style={{ maxHeight: '50px' }}>
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <NavDropdown title="Cadastrar" className="bg-primary text-white me-2 my-2">
              <NavDropdown.Item href="#action3">Produto</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Usuário
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action" className="text-white bg-primary  me-2 my-2">Carrinho</Nav.Link>
            <Nav.Link href="#action" className="text-white bg-primary me-2 my-2">Login</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline" className="bg-primary text-white">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarHome;