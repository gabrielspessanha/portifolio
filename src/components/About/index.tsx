import './styles.scss'

export function About(){

    return(
        <div className="container containerAbout" id="about">
            <div className='img-card'>
                <img src="/img/profile.jpg" alt="Gabriel pessanha" /> 
            </div>
            <div className='about-text'>
                <h4 className="title-about">DESENVOLVEDOR <span>FRONT-END</span></h4>
                <hr />
                <p className="title-about">SOBRE</p>

                <p>Olá! Me chamo Gabriel e tenho 20 anos. Meu objetivo profissional atualmente é conseguir um estágio na área de desenvolvimento de software. Atualmente, faço Análise e Desenvolvimento de Sistemas, com conclusão prevista para 01/2025. Também estou fazendo cursos profissionalizantes, como o Full-Stack da Onebitcode e o full-stack-python da EBAC.</p>

                <p>Possuo conhecimentos em linguagens como Javascript, HTML5, CSS3 e também tenho conhecimentos em frameworks como Bootstrap e Sass. Atualmente, estou estudando React e Typescript.</p>

                <p>Acredito que a evolução contínua é fundamental nesse campo. Assim, estou comprometido a seguir estudando e explorando novas maneiras de aprimorar minhas habilidades.</p>

                <button >Saiba mais</button>
            </div>
        </div>
    )
}