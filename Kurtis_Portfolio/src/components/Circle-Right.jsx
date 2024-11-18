import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CircleRight = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    // Animation: Swoop from top-right to behind the image
    gsap.fromTo(
      circleRef.current,
      {
        x: "50%", // Start from the right
        y: "-50%", // Start from above
        scale: 0.5,
        opacity: 0,
      },
      {
        x: "30%", // End slightly to the right of center
        y: "-20%", // End slightly above center
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
      className="absolute w-64 h-64 bg-periwinkle-500 rounded-full"
      style={{ zIndex: 1 }} // Ensure it's behind the image
    />
  );
};

export default CircleRight;