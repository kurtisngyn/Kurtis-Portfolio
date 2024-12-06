import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CircleRight = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    // Animation: Swoop from top-right to right of the image
    gsap.fromTo(
      circleRef.current,
      {
        x: "80%", // Start further to the right
        y: "-20%", // Start from above
        scale: 0.5,
        opacity: 0.3, 
      },
      {
        x: "25%", 
        y: "0%", 
        opacity: 1, // make full transparent at the end
        scale: 1,
        duration: 4,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={circleRef}
      className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-64 xl:h-64 bg-periwinkle-500 rounded-full"
      style={{ 
        zIndex: 1, // Ensure it's behind the image
        right: "-8%", // Adjust right positioning
        top: "50%", // Center vertically
        transform: "translateY(-50%)" // Adjust for vertical centering
      }}
    />
  );
};

export default CircleRight;