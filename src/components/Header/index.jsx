import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './styles.scss';

const socialNetworks =[

  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/gabrielsantospessanha/"},
  
  { name: "github", icon: <FaGithub />, link: "https://github.com/gabrielspessanha"},
  
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/bieldinn/" },
  
]


export function Header(){
    return( 
      <>
        <Navbar bg="transparent" data-bs-theme="dark"  expand="false" className={`header container`}>
          <Container>
          <Navbar.Brand href="#home">
            <h3>Gabriel Pessanha</h3>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className='sidebar'
            >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className='sideTitle' id={`offcanvasNavbarLabel-expand-lg`}>
                  {socialNetworks.map((network)=> (
                    <div key={network.name}>
                        <a href={network.link} target="__blank" className={network.name}>
                        {network.icon}
                        </a>
                    </div>
                    ))}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 navLinks">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/about">Sobre</Link></Nav.Link>
                    <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
                    <Nav.Link><Link to="/contact">Contato</Link></Nav.Link>
                    <Nav.Link><Link to="/technologies">Technologias</Link></Nav.Link>
                  </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        

      </>
    )
}