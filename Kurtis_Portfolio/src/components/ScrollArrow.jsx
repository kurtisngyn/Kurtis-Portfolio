// src/components/ScrollArrow.jsx

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ScrollArrow = ({ scrollTo }) => {
  useEffect(() => {
    // GSAP animation for the arrow
    gsap.to('.scroll-arrow', {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <button onClick={scrollTo} className="text-6xl text-black font-quicksand hover:text-periwinkle-500 scroll-arrow">
        ↓
      </button>
    </div>
  );
};

export default ScrollArrow;
