import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navbar.css';

const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand className="nav__logo" href="/" font="pacifico-regular">The Music Catalogue</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href='/view'>View your tunes</Nav.Link>
                <Nav.Link href='/create'>Add something</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;