import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './styles.scss';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import React, { useEffect, useState } from 'react';

const socialNetworks =[

  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/gabrielsantospessanha/"},
  
  { name: "github", icon: <FaGithub />, link: "https://github.com/gabrielspessanha"},
  
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/bieldinn/" },
  
]

function AnimatedText() {
  const [visibleWordIndex, setVisibleWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);
}

export function Header(){

    const user = useContext(UserContext)
    return( 
      <>
        <Navbar bg="transparent" data-bs-theme="dark"  expand="false" className={`header container`}>
          <Container>
          <Navbar.Brand className='title-header cd-intro' href="/home">
            <h1 className='cd-headline rotate-1'>
              <span className='cd-words-wrapper'>
                <b className='is-visible'>Olá</b>
                <b>bem vindo{'(a)'}</b>
              </span>
            </h1>
            <h3>{user.name}</h3> 
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
                    <Link to="/">Home</Link>
                    <Link to="/about">Sobre</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contato</Link>
                    <Link to="/technologies">Technologias</Link>
                  </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        

      </>
    )
}