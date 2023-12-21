import{
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiNodejs
} from 'react-icons/di' ;

import { FaBootstrap, FaSass, FaGithub, FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs, TbFileTypeSql} from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiStyledcomponents, SiVite } from "react-icons/si";

const tech = {
  react: <DiReact color='#61dafb' size={50} key={1} title={'react'}  />,
  js: <DiJsBadge color='#f0db4f' size={50}  key={2} title={'Javascript'}  />,
  css: <DiCss3 color='#1572b6' size={50}  key={3}  title={'CSS3'} />,
  html: <DiHtml5 color='#E44D26' size={50}  key={4} title={'HTML5'}  />,
  bootstrap: <FaBootstrap color='rgb(137, 19, 252)' size={50} title={'Bootstrap'} />,
  sass: <FaSass color='rgb(237, 70, 126)' size={50} title={'Sass'} />,
  typescript: <SiTypescript color='#3178c6' size={50} title={'Typescript'} />,
  styledComponents: <SiStyledcomponents color='white' size={60} title={'StyledComponents'} />,
  vite: <SiVite color='#ffff00' size={50} title={'Vite'} />,
  node: <DiNodejs color='rgb(136, 194, 97)' size={50} title={'NodeJs'} />,
  nextJs: <TbBrandNextjs  size={50} title={"Next.js"}  />,
  sql: <TbFileTypeSql color='#ed740a' size={50} title={'SQL'}/>,
  git:  <FaGitAlt color='rgb(240, 85, 57)' size={50} title={'Git'} />,
  github: <FaGithub color='#2c3160' size={50} title={'Github'} />
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
  {
    id: 3,
    title: "ggmoney", 
    description: "Este é um projeto focado em controle financeiro pessoal, feito para simplificar o acompanhamento de entradas e saidas. Usando uma interface amigável os usuários podem facilmente cadastrar suas transações, proporcionando uma visão clara e organizada de suas finanças. O site foi desenvolvido usando React com vite para desenvolvimento rápido e eficiente, Typescript para proporcionar tipagem estática ao Javascript, styled-components para estilização, React-modal para modais interativos, Polished para manipulação de cores e useContext para gerenciamento eficiente de estado.", 
    technologies: [tech.react,tech.js,tech.typescript,tech.styledComponents ,tech.html, tech.css], 
    linkGit: "https://github.com/gabrielspessanha/ggmoney", 
    linkDeploy: "https://ggmoney.netlify.app/",
    urlImg: "/img/ggmoney.png"
  },
  {
    id: 4,
    title: "Minha jornada", 
    description: "Este é um repositorio que representa minha jornada de aprendizagem, onde eu guardei todos os exercicios de cada tecnologia que aprendi durante meu aprendizado, onde guardei também projetos menores.", 
    technologies: [tech.react, tech.js, tech.typescript, tech.node,tech.nextJs, tech.sql,tech.git, tech.github,tech.html, tech.css, tech.sass, tech.vite, tech.bootstrap, tech.styledComponents ], 
    linkGit: "https://github.com/gabrielspessanha/ggmoney", 
    linkDeploy: "https://ggmoney.netlify.app/",
    urlImg: "/img/myLerningJourney.jpg"
  },
  {
    id: 5,
    title: "Mario jump", 
    description: "Esse foi meu primeiro projeto utilizando javascript. O objetivo era colocar em pratica os conhecimentos havia adquirido e aprender mais sobre DOM(Document Object Model) uma parte fundamental da interação dinâmica em páginas web.", 
    technologies: [ tech.js,tech.html, tech.css ], 
    linkGit: "https://github.com/gabrielspessanha/marioJump", 
    linkDeploy: "https://mariojumprun.netlify.app/",
    urlImg: "/gif/mariogif.gif"
  },
  {
    id: 6,
    title: "OpenHouse", 
    description: "Projeto desenvolvido para colocar em pratica oque eu havia aprendido sobre SAPs (Single Page Applications) e a implementação do contexto (useContext) em React.  O foco principal foi desenvolver uma solução eficaz para auxiliar donos de padarias no controle de estoque. onde era possivel ver seus produtos, cadastrar, atualizar e remover.", 
    technologies: [ tech.js,tech.html, tech.css, tech.react, tech.typescript, tech.vite, tech.bootstrap ], 
    linkGit: "https://github.com/gabrielspessanha/openHouse", 
    linkDeploy: "https://main--openhousepage.netlify.app/",
    urlImg: "/img/openHouse.png"
  },
  

  
]
