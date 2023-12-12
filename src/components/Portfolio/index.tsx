
'use client'
import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact
} from 'react-icons/di' ;


import './styles.scss';
import { Button, Card } from 'reactstrap';

const infocards = [
    {
        title: "NFT-Marketplace", 
        description: "Este projeto é um marketplace de NFT que permite aos usuários explorar uma coleção exclusiva de ativos digitais únicos. Desenvolvido com as tecnologias React, JavaScript, HTML5, CSS3, Bootstrap e Sass, o marketplace oferece uma plataforma para a comunidade de criptoarte.", 
        technologies: [<DiReact color='#61dafb' size={40} />, <DiJsBadge color='#f0db4f' size={40} />, <DiHtml5 color='#E44D26' size={40} />, <DiCss3 color='#1572b6' size={40} />], 
        linkGit: "https://github.com/gabrielspessanha/NFT-Marketplace.git", 
        linkDeploy: "https://nftmarketplacewebsite.netlify.app/",
    },
    {
        title: "AstroNews", 
        description: "Este projeto é uma recriação do site da SpaceX, uma das empresas líderes em exploração espacial e transporte de carga. O objetivo era criar uma versão personalizada do site da SpaceX usando HTML5, CSS3, Bootstrap e SASS para aprimorar minhas habilidades de desenvolvimento web.", 
        technologies: [<DiHtml5 color='#E44D26' size={40} />, <DiCss3 color='#1572b6' size={40} />], 
        linkGit: "https://github.com/gabrielspessanha/AstroNews", 
        linkDeploy: "https://main--astronews-site.netlify.app/html/humanspaceflight"
    }
]

export function Portfolio(){
    return(
        <section className="mb-5">
            <h2>PROJETOS</h2>
            <hr />
             <div className='cardProject grid grid-cols-2'>
                <div className='cardProject'>
                    <img className=' w-full z-0 brightness-50' src="/img/falcon.png" alt="imageProject" />
                    <h5 className='relative bottom-48 px-2'>NOME DO PROJETO</h5>
                    <p className='relative bottom-48 px-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quasi eius ipsa debitis accusantium eaque est at? Corporis quisquam impedit!</p>
                    <Button className='bg-light text-white bg-gradient-to-r from-orange to-pink border-none py-2 transition-all relative bottom-48' style={{ border: 'none', width: '10rem', margin: '0 .5rem'}}>VER PROJETO</Button>
                </div>
                
            </div>
        </section>
    )
}
