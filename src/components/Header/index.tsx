
import {FaLinkedinIn, FaGithub, FaHome } from 'react-icons/fa'
import Link from 'next/link';
import {Container, Navbar, NavbarBrand} 

from 'reactstrap';

import styles from './styles.module.scss';

export const socialNetworks =[
  { 
    name: "linkedin", 
    icon: <FaLinkedinIn size={35} 
      className="
        text-white 
        hover:text-linkedin 
        hover:bg-none 
        bg-gradient-to-r  
        from-orange 
        to-pink p-1
        transition
        rounded-lg
        " 
      />, 
    link: "https://www.linkedin.com/in/gabrielsantospessanha/"
  },
  {
    name: "github", 
    icon: <FaGithub size={35} 
      className="
        text-white 
        hover:bg-none 
        hover:text-github
        bg-gradient-to-r  
        from-orange to-pink 
        p-1
        transition-colors
        rounded-lg
        " 
      />, 
    link: "https://github.com/gabrielspessanha"
  },
]

export function Header(){
  
    return( 
      <div className={`absolute z-20 w-full`}>
        <Navbar bg="transparent" data-bs-theme="dark"  expand="lg" className={`header absolute`}>
          <Container className={`flex ${styles.headerContent}`}>
            <NavbarBrand>
              <h3 className='mr-3 inline text-3xl '>Olá</h3><span className="text-gradient">Bem vindo!</span>
            </NavbarBrand>
            <div className='flex gap-3 '>
              {socialNetworks.map((social)=>(
                <Link key={social.name} className='flex' href={social.link} target='__blank'>
                  {social.icon}
                </Link>
              ))}
              <Link href={'/'}>
                  <FaHome 
                  size={35} 
                  className="
                    text-white 
                    hover:bg-none 
                    hover:text-github
                    bg-gradient-to-r  
                    from-orange to-pink 
                    p-1
                    transition-colors
                    rounded-lg"
                  />
              </Link>
            </div>
          </Container>
        </Navbar>
      </div>
    )
}