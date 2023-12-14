import{
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact
} from 'react-icons/di' ;

const tech = {
  react: <DiReact color='#61dafb' size={50} key={1} />,
  js: <DiJsBadge color='#f0db4f' size={50}  key={2} />,
  css: <DiCss3 color='#1572b6' size={50}  key={3} />,
  html: <DiHtml5 color='#E44D26' size={50}  key={4} />
}

export const Infocards = [
  {   
      id: 1,
      title: "NFT-Marketplace", 
      description: "Este projeto é um marketplace de NFT que permite aos usuários explorar uma coleção exclusiva de ativos digitais únicos. Desenvolvido com as tecnologias React, JavaScript, HTML5, CSS3, Bootstrap e Sass, o marketplace oferece uma plataforma para a comunidade de criptoarte.", 
      technologies: [tech.react, tech.js, tech.html, tech.css], 
      linkGit: "https://github.com/gabrielspessanha/NFT-Marketplace.git", 
      linkDeploy: "https://nftmarketplacewebsite.netlify.app/",
      urlImg: "/img/marketplace.png"
  },
  {
      id: 2,
      title: "AstroNews", 
      description: "Este projeto é uma recriação do site da SpaceX, uma das empresas líderes em exploração espacial e transporte de carga. O objetivo era criar uma versão personalizada do site da SpaceX usando HTML5, CSS3, Bootstrap e SASS para aprimorar minhas habilidades de desenvolvimento web.", 
      technologies: [tech.html, tech.css], 
      linkGit: "https://github.com/gabrielspessanha/AstroNews", 
      linkDeploy: "https://main--astronews-site.netlify.app/html/humanspaceflight",
      urlImg: "/img/falcon.png"
  },
  {
      id:3,
      title: "NFT-Marketplace2", 
      description: "Este projeto é um marketplace de NFT que permite aos usuários explorar uma coleção exclusiva de ativos digitais únicos. Desenvolvido com as tecnologias React, JavaScript, HTML5, CSS3, Bootstrap e Sass, o marketplace oferece uma plataforma para a comunidade de criptoarte.", 
      technologies: [tech.react, tech.js, tech.html, tech.css],  
      linkGit: "https://github.com/gabrielspessanha/NFT-Marketplace.git", 
      linkDeploy: "https://nftmarketplacewebsite.netlify.app/",
      urlImg: "/img/marketplace.png"
  },
  {
      id:4,
      title: "AstroNews2", 
      description: "Este projeto é uma recriação do site da SpaceX, uma das empresas líderes em exploração espacial e transporte de carga. O objetivo era criar uma versão personalizada do site da SpaceX usando HTML5, CSS3, Bootstrap e SASS para aprimorar minhas habilidades de desenvolvimento web.", 
      technologies: [tech.html, tech.css], 
      linkGit: "https://github.com/gabrielspessanha/AstroNews", 
      linkDeploy: "https://main--astronews-site.netlify.app/html/humanspaceflight",
      urlImg: "/img/falcon.png"
  }
]