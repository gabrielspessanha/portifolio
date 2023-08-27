import "../styles/components/socialnetworks.scss";
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'


const socialNetworks =[
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/gabrielsantospessanha/"},
    { name: "github", icon: <FaGithub />, link: "https://github.com/gabrielspessanha"},
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/bieldinn/" },
]

export function SocialNetworks(){
    return(
       <section id="social-networks"> 
        {socialNetworks.map((network)=> (
            <a href={network.link} target="__blank" className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
       </section>
    )
}