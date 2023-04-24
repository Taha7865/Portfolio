// useCarousel.js
import { useState } from 'react';

export function useCarousel(slidesCount) {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlide = (step) => {
    const nextSlideIndex = (activeIndex + step + slidesCount) % slidesCount;
    setActiveIndex(nextSlideIndex);
  };

  return [activeIndex, changeSlide];
}
