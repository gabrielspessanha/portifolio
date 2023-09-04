import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import falcon from '../../img/Falcon.png';
import marketplace from '../../img/marketplace.png';

import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact
} from 'react-icons/di' ;


import './styles.scss';

const infocards = [
    {
        title: "NFT-Marketplace", 
        description: "Este projeto é um marketplace de NFT que permite aos usuários explorar uma coleção exclusiva de ativos digitais únicos. Desenvolvido com as tecnologias React, JavaScript, HTML5, CSS3, Bootstrap e Sass, o marketplace oferece uma plataforma para a comunidade de criptoarte.", 
        technologies: [<DiReact color='#61dafb' size={40} />, <DiJsBadge color='#f0db4f' size={40} />, <DiHtml5 color='#E44D26' size={40} />, <DiCss3 color='#1572b6' size={40} />], 
        linkGit: "https://github.com/gabrielspessanha/NFT-Marketplace.git", 
        linkDeploy: "https://darling-seahorse-ba4215.netlify.app/", 
        img: marketplace
    },
    {
        title: "AstroNews", 
        description: "Este projeto é uma recriação do site da SpaceX, uma das empresas líderes em exploração espacial e transporte de carga. O objetivo era criar uma versão personalizada do site da SpaceX usando HTML5, CSS3, Bootstrap e SASS para aprimorar minhas habilidades de desenvolvimento web.", 
        technologies: [<DiHtml5 color='#E44D26' size={40} />, <DiCss3 color='#1572b6' size={40} />], 
        linkGit: "https://github.com/gabrielspessanha/AstroNews", 
        linkDeploy: "https://main--astronews-site.netlify.app/html/humanspaceflight", 
        img: falcon
    }
]

export function Portfolio(){
    return(
        <div className="container">
            <header>
                <h1>PORTFOLIOS</h1>
                <hr />
            </header>

            <div className="portfolio-container">
                {infocards.map(card => (
                    <Card key={card.title} className="bg-dark text-white card">
                        <Card.Img className='img-card' src={card.img} alt={card.title} />
                        <Card.ImgOverlay>
                            <Card.Title> <h2>{card.title}</h2></Card.Title>
                            <Card.Text>
                                {card.description}
                            </Card.Text>
                            <ListGroup.Item className='technologies'>
                                {card.technologies}
                            </ListGroup.Item>
                            <div style={{display: 'flex'}}>
                                <Button variant="light me-3"><a href={card.linkDeploy} target='__blank'>Site</a></Button>
                                <Button variant="dark"><a href={card.linkGit} target='__blank'>Github</a></Button>
                            </div>
                            
                        </Card.ImgOverlay>
                    </Card>
                ))}
                
            </div>
        </div>
    )
}