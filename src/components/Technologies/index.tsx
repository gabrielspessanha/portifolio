'use client'
import { TechFrontend, TechBackend, TechOthers } from '@/services/information';
import { useState } from 'react';

import './styles.scss';

export function Technologies(){
    const [dashboard, setDashboard] = useState(TechFrontend)

    function handleTecnologie (name: string){
        if(name === 'front'){
            setDashboard(TechFrontend)
        }
        if(name === 'back'){
            setDashboard(TechBackend)
        }
        if(name === 'others'){
            setDashboard(TechOthers)
        }
    }

    return(
        <section className='technologies-container h-5/6'>
            <h2>TECNOLOGIAS</h2>
            <hr />
            <div>
                <nav className="navigation mb-4 bg-[#111111b3] py-2 px-3 w-7/12 rounded-xl mx-auto drop-shadow-md	">
                    <button 
                        className={`rounded-xl text-center hover:text-white hover:scale-105 transition-all ${dashboard === TechFrontend ?'bg-gradient-to-r from-orange to-pink':'bg-transparent'}`}
                        onClick={()=> handleTecnologie("front")}>
                            Front-end
                    </button>

                    <button 
                        className={`rounded-xl text-center hover:text-white hover:scale-105 transition-all ${dashboard === TechBackend ?'bg-gradient-to-r from-orange to-pink':'bg-transparent'}`}
                        onClick={()=> handleTecnologie("back")}>
                            Back-end
                    </button>
                    
                    <button 
                        className={`rounded-xl text-center hover:text-white hover:scale-105 transition-all ${dashboard === TechOthers ?'bg-gradient-to-r from-orange to-pink':'bg-transparent'}`}
                        onClick={()=> handleTecnologie("others")}>
                            Outros
                    </button>
                    
                </nav>
            </div>
            <div className="flex flex-wrap justify-center gap-4 technologiesContent">
            {dashboard.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon} 
                        <p className='flex items-center'>{tech.name}</p> 
                    </div>
                ))}
            </div>
        </section>
    )
}