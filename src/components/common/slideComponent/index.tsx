'use client'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import CardLayout from '../CardLayout';
import { Infocards } from '@/components/Portfolio';
import { ReactElement } from 'react';

interface InforCardsProps {
  title: string
  description: string
  technologies: ReactElement[]
  linkGit: string
  linkDeploy: string
}

const SlideComponent = () => {
  let slideCount = 0;
  const cards: InforCardsProps[] = Infocards
  
  if(cards.length > 4){
    slideCount = 4
  } else if (cards){
    slideCount = cards.length
  }
  return (
    <div className='d-flex flex-column align-items-center py-4'>
      <Splide options={{
        type: "loop",
        perPage: slideCount,
        perMove: 1,
        width: slideCount * 300,
        pagination: false,
        arrows: cards.length > 4 ? true : false,
        drag: cards.length > 4 ? true : false,
        breakpoints: {
          1200: {
            perPage: slideCount >= 2 ? 2 : 1,
            width: slideCount >= 2 ? 700 : 300,
            arrows: cards.length > 2 ? true : false,
            drag: cards.length > 2 ? true : false,
          },
          630: {
            perPage: 1,
            width: 300,
            arrows: cards.length > 1 ? true : false,
            drag: cards.length > 1 ? true : false,
          },
          300: {
            width: 250
          }
        }
      }}>
        {cards.map((card)=>(
          <SplideSlide key={card.title}>
            <CardLayout 
                    url='/img/falcon.png' 
                    title={card.title}
                    description={card.description}
                    urlDeploy={card.linkDeploy}
                    urlGitHub={card.linkGit}
                    tecnologies={card.technologies}
                />
          </SplideSlide>
        ))}
          

      </Splide>
    </div>
  );
};

export default SlideComponent;