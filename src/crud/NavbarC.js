import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarC() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" >
        <Container >
          <Navbar.Brand href="#home">Data</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/books">Data Buku</Nav.Link>
            <Nav.Link as={Link} to="/peminjams">Pinjaman</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarC;