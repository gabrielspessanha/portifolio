import { Tech } from '@/services/information';

import './styles.scss';

export function Technologies(){
    return(
        <section className='technologies-container '>
            <h2>TECNOLOGIAS</h2>
            <hr />
            <div className="flex flex-wrap justify-center gap-4 technologiesContent">
                {Tech.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon} 
                        <p className='flex items-center'>{tech.name}</p> 
                    </div>
                ))}
            </div>
        </section>
    )
}