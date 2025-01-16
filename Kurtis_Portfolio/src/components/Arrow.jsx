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

  // Function to handle scrolling
  const handleScroll = () => {
    // Scrolls smoothly to the next section
    window.scrollTo({
      top: window.innerHeight, // Scrolls down by one viewport height
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex justify-center mb-28">
      <button
        className="text-6xl text-black font-quicksand hover:text-periwinkle-500 scroll-arrow focus:outline-none"
        onClick={handleScroll}
      >
        ↓
      </button>
    </div>
  );
};

export default Arrow;
