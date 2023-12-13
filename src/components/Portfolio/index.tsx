import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact
} from 'react-icons/di' ;


import './styles.scss';
import { Button } from 'reactstrap';
import CardLayout from '../common/CardLayout';
import SlideComponent from '../common/slideComponent';

export const Infocards = [
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

            <div className='flex justify-center'>
                <SlideComponent />
            </div>
            
        </section>
    )
}
