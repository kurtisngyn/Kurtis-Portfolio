// src/components/Arrow.jsx

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Arrow = () => {
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
    <div className="flex justify-center mb-28">
      <div className="text-6xl text-black font-quicksand hover:text-periwinkle-500 scroll-arrow">
        ↓
      </div>
    </div>
  );
};

export default Arrow;