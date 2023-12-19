'use client'
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      
      const scrollThreshold = window.innerHeight;

      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} className={`${isVisible ? 'visible' : 'hidden'} fixed z-20 bottom-10 right-10 bg-gradient-to-br from-orange to-pink rounded-full p-2 hover:scale-110 hover:text-white transition-all`}><FaArrowUp size={30} /></button>
  )
}

