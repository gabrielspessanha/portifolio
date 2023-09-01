import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Offcanvas from 'react-bootstrap/Offcanvas';

import './styles.scss';



export function Header(){
    return( 
      <>
        <Navbar bg="transparent"  expand="lg" className={`header container`}>
          <Container fluid>
          <Navbar.Brand href="#home">
            <p>Gabriel Pessanha</p>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Gabriel Santos pessanha
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Sobre</Nav.Link>
                  <Nav.Link href="#action1">Portfolio</Nav.Link>
                  <Nav.Link href="#action1">Contato</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
    )
}