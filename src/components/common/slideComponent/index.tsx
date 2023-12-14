'use client'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import CardLayout from '../CardLayout';
import { Infocards } from '@/components/Portfolio';
import { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
import styles from './styles.module.scss';
interface InforCardsProps {
  title: string
  description: string
  technologies: ReactElement[]
  linkGit: string
  linkDeploy: string
  urlImg: string
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
    <div className=''>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate:0,
            stretch: 0,
            depth: 100,
            modifier:2.5
          }
        }
        pagination={{el:'',clickable:true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiper}
      >
        {cards.map((card)=>(
          <SwiperSlide className={styles.swiperSlide}>
            <CardLayout 
                    url={card.urlImg}
                    title={card.title}
                    description={card.description}
                    urlDeploy={card.linkDeploy}
                    urlGitHub={card.linkGit}
                    tecnologies={card.technologies}
                />
          </SwiperSlide>
        ))}
          <div className="slider-controler">
            <div className='swiper-button-prev slider-arrow'>
              <FaArrowLeft />
            </div>

            <div className='swiper-button-next slider-arrow'>
              <FaArrowRight />
            </div>

          </div>
      </Swiper>
    </div>
  );
};

export default SlideComponent;