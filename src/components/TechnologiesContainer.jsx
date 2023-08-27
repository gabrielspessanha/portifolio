import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact
} from 'react-icons/di' ;

import '../styles/components/technologiescontainer.scss'


const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Tenho habilidades sólidas em HTML, uma linguagem fundamental para a construção de estruturas web." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Considero-me em um nível intermediário de CSS, permitindo-me criar estilos atraentes e responsivos para complementar a estrutura HTML."},
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description:"Minhas habilidades em JavaScript estão firmemente no nível intermediário. Com uma profunda compreensão dos conceitos fundamentais e a capacidade de implementar programação orientada a objetos, sou capaz de criar soluções interativas e dinâmicas que enriquecem a experiência do usuário. Minha busca constante por aprimoramento me motiva a explorar padrões de design avançados e a integrar bibliotecas para construir aplicativos web eficazes." },
    { id: "react", name: "React", icon: <DiReact />, description: "Estou imerso na jornada de aprendizado do React, onde já coloquei em prática meus conhecimentos através de projetos tangíveis. Minhas criações demonstram minha capacidade de construir interfaces reativas e componentes reutilizáveis, e estou ansioso para continuar explorando as possibilidades que o React oferece"},
  ];

export function TechnologiesContainer(){
    return(
        <section className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        <h3> {tech.icon} {tech.name} </h3> 
                        <div className="technology-info">
                            
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}