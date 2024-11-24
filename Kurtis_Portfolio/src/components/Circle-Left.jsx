import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CircleLeft = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    // Animation: Swoop from bottom-left to behind the image
    gsap.fromTo(
      circleRef.current,
      {
        x: "-50%", // Start from the left
        y: "50%", // Start from below
        scale: 0.5,
        opacity: 0.3,
      },
      {
        x: "-30%", 
        y: "20%", 
        opacity: 1, // full transparent when it finishes animation
        scale: 1,
        duration: 4,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={circleRef}
      className="absolute w-80 h-80 bg-periwinkle-500 rounded-full"
      style={{ zIndex: 1 }} // Ensure it's behind the image
    />
  );
};

export default CircleLeft;