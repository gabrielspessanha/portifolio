import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact
} from 'react-icons/di' ;

import './styles.scss';


const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 />},
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "react", name: "React", icon: <DiReact />}
  ];

export function Technologies(){
    return(
        <section className='technologies-container '>
            <h2>TECNOLOGIAS</h2>
            <hr />
            <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech) => (
                    <div className="technology-card w-72" id={tech.id} key={tech.id}>
                        <h3> {tech.icon} {tech.name} </h3> 
                    </div>
                ))}
            </div>
        </section>
    )
}