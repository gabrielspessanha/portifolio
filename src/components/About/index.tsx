import './styles.scss'

export function About(){

    return(
        <div className=" containerAbout" id="about">
            <div className='img-card'>
                <img src="/img/profile.jpg" alt="Gabriel pessanha" /> 
            </div>
            <div className='about-text'>
                <p className="title-about">DESENVOLVEDOR <span>FRONT-END</span></p>
                <hr />
                <h3 className="text-gradient">SOBRE</h3>

                <p>Olá! Me chamo Gabriel e tenho 20 anos. Meu objetivo profissional atualmente é conseguir um estágio na área de desenvolvimento de software. Atualmente faço Análise e Desenvolvimento de Sistemas, e recentemente terminei o curso <span className='text-[#f64147]'>Full-Stack Javascript da Onebitcode</span></p>

                <p>Atualmente, tenho experiência em tecnologias como: JavaScript, TypeScript, React, SQL, Node.js, HTML5, CSS3, Next.js, Bootstrap, Sass e Styled Components.</p>

            </div>
        </div>
    )
}