import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import Link from 'next/link';
import {Container, Navbar, NavbarBrand} 

from 'reactstrap';
import styles from './styles.module.scss'

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
        transition-all
        " 
      />, 
    link: "https://www.linkedin.com/in/gabrielsantospessanha/"
  },
  {
    name: "github", 
    icon: <FaGithub size={35} 
      className="
        text-white 
        hover:text-github 
        hover:bg-none 
        bg-gradient-to-r  
        from-orange to-pink 
        p-1
        transition-all
        duration-300
        " 
      />, 
    link: "https://github.com/gabrielspessanha"
  },
  { 
    name: "instagram",  
    icon: <FaInstagram  size={35} 
      className="
        text-white 
        hover:text-instagram 
        hover:bg-none
        bg-gradient-to-r 
        from-orange to-pink 
        p-1
        transition-all
        " 
      />, 
    link: "https://www.instagram.com/bieldinn/" },
]

export function Header(){
  
    return( 
      <>
        <Navbar bg="transparent" data-bs-theme="dark"  expand="lg" className={`header`}>
          <Container className='flex justify-between items-center'>
            <NavbarBrand>
              <h3 className='mr-3 inline text-3xl '>Olá</h3><span className="text-gradient">Bem vindo!</span>
            </NavbarBrand>
            <div className='flex gap-3 content-center'>
              {socialNetworks.map((social)=>(
                <Link key={social.name} className='flex ' href={social.link} target='__blank'>
                  {social.icon}
                </Link>
              ))}
            </div>
          </Container>
        </Navbar>
      </>
    )
}