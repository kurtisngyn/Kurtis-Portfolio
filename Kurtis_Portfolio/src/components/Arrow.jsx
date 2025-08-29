import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Arrow = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    // GSAP float animation
    const floatAnim = gsap.to(arrowRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power2.inOut",
    });

    // Scroll listener to fade arrow
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(arrowRef.current, { opacity: 0, duration: 0.5, pointerEvents: "none" });
      } else {
        gsap.to(arrowRef.current, { opacity: 1, duration: 0.5, pointerEvents: "auto" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      floatAnim.kill();
    };
  }, []);

  const handleClick = () => {
    const section = document.getElementById("recent-projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      ref={arrowRef}
      className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 text-5xl sm:text-6xl text-black font-quicksand hover:text-periwinkle-500 focus:outline-none"
      onClick={handleClick}
    >
      ↓
    </button>
  );
};

export default Arrow;
