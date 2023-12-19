import { Footer } from '../common/Footer';
import './styles.scss'
import { HiDownload } from "react-icons/hi";


export function About(){

    return(
        <div className="containerAbout h-screen" id="about">
            <div className='img-card'>
                <img src="/img/profile.jpg" alt="Gabriel pessanha" /> 
            </div>
            <div className='about-text'>
                <p className="title-about">DESENVOLVEDOR <span>FRONT-END</span></p>
                <hr />
                <h3 className="text-gradient">SOBRE</h3>

                <p>Olá! Me chamo Gabriel e tenho 20 anos. Meu objetivo profissional atualmente é conseguir um estágio na área de desenvolvimento de software. Atualmente faço Análise e Desenvolvimento de Sistemas, e recentemente terminei o curso <span className='text-[#f64147]'>Full-Stack Javascript da Onebitcode</span></p>

                <p>Atualmente, tenho experiência em tecnologias como: JavaScript, TypeScript, React, SQL, Node.js, HTML5, CSS3, Next.js, Bootstrap, Sass e Styled Components.</p>

                <a href="/docs/Gabriel_Pessanha_Estágio.pdf" download>
                    <button className='bg-light text-white bg-gradient-to-r from-orange to-pink border-none px-5 py-2 hover:scale-110 ease-out duration-300 rounded-md' style={{ border: 'none'}}>Baixar curriculo <HiDownload size={20} />
                </button>
                </a>
            </div>     
        </div>
    )
}