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
        opacity: 0,
      },
      {
        x: "-30%", // End slightly to the left of center
        y: "20%", // End slightly below center
        opacity: 0.7, // Slightly transparent
        scale: 1,
        duration: 2,
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