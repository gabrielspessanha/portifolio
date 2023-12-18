import{
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiNodejs
} from 'react-icons/di' ;

import { FaBootstrap, FaSass, FaGithub, FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs, TbFileTypeSql} from "react-icons/tb";
import { SiTypescript, SiTailwindcss} from "react-icons/si";

const tech = {
  react: <DiReact color='#61dafb' size={50} key={1} />,
  js: <DiJsBadge color='#f0db4f' size={50}  key={2} />,
  css: <DiCss3 color='#1572b6' size={50}  key={3} />,
  html: <DiHtml5 color='#E44D26' size={50}  key={4} />,
  bootstrap: <FaBootstrap color='rgb(137, 19, 252)' size={50}/>,
  sass: <FaSass color='rgb(237, 70, 126)' size={50}/>,
}

export const TechFrontend = [
  { id: "js", name: "JavaScript", icon: <DiJsBadge color='#f0db4f' size={50} /> },
  { id: "react", name: "React", icon: <DiReact color='#61dafb' size={50} />},
  { id: "typescript", name: "Typescript", icon: <SiTypescript color='#3178c6' size={50}/>},
  { id: "nextjs", name: "Nextjs", icon: <TbBrandNextjs  size={50}/>},
  { id: "html", name: "HTML5", icon: <DiHtml5 color='#E44D26' size={50} /> },
  { id: "css", name: "CSS3", icon: <DiCss3 color='#1572b6' size={50} />},
  { id: "tailwind", name: "Tailwind", icon: <SiTailwindcss color='rgb(32, 186, 189)' size={50}/>},
  { id: "sass", name: "Sass", icon: <FaSass color='rgb(237, 70, 126)' size={50}/>},
  { id: "bootstrap", name: "Bootstrap", icon: <FaBootstrap color='rgb(137, 19, 252)' size={50}/>},
];

export const TechBackend= [
  { id: "js", name: "JavaScript", icon: <DiJsBadge color='#f0db4f' size={50} /> },
  { id: "typescript", name: "Typescript", icon: <SiTypescript color='#3178c6' size={50}/>},
  { id: "sql", name: "SQL", icon: <TbFileTypeSql color='#ed740a' size={50}/>},
  { id: "node", name: "NodeJs", icon: <DiNodejs color='rgb(136, 194, 97)' size={50}/>},
];

export const TechOthers= [
  { id: "git", name: "Git", icon: <FaGitAlt color='rgb(240, 85, 57)' size={50}/>},
  { id: "github", name: "Github", icon: <FaGithub color='#2c3160' size={50}/>},
];



export const Infocards = [
  {   
      id: 1,
      title: "NFT-Marketplace", 
      description: "Este projeto é um marketplace de NFT que permite aos usuários explorar uma coleção exclusiva de ativos digitais únicos. Desenvolvido com as tecnologias React, JavaScript, HTML5, CSS3, Bootstrap e Sass, o marketplace oferece uma plataforma para a comunidade de criptoarte.", 
      technologies: [tech.react, tech.js, tech.html, tech.css, tech.bootstrap, tech.sass], 
      linkGit: "https://github.com/gabrielspessanha/NFT-Marketplace.git", 
      linkDeploy: "https://nftmarketplacewebsite.netlify.app/",
      urlImg: "/img/marketplace.png"
  },
  {
      id: 2,
      title: "AstroNews", 
      description: "Este projeto é uma recriação do site da SpaceX, uma das empresas líderes em exploração espacial e transporte de carga. O objetivo era criar uma versão personalizada do site da SpaceX usando HTML5, CSS3, Bootstrap e SASS para aprimorar minhas habilidades de desenvolvimento web.", 
      technologies: [tech.html, tech.css, tech.bootstrap], 
      linkGit: "https://github.com/gabrielspessanha/AstroNews", 
      linkDeploy: "https://main--astronews-site.netlify.app/html/humanspaceflight",
      urlImg: "/img/falcon.png"
  },
  
]
