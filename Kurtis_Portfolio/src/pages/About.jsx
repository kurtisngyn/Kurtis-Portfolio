import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const squareRef = useRef(null); // Ref for the square section

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const square = squareRef.current; // Reference to the square

    // Set initial state
    gsap.set(container, { opacity: 0 });
    gsap.set(text, { opacity: 0, y: 50 });
    gsap.set(square, { opacity: 0, scale: 0 }); // Initial state for the square

    // Animate in
    gsap.to(container, {
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(text, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });

    gsap.to(square, {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      onEnter: () => {
        gsap.to(container, {
          scale: 1.05,
          duration: 0.5,
          ease: "power2.out"
        });
      },
      onLeave: () => {
        gsap.to(container, {
          scale: 1,
          duration: 0.5,
          ease: "power2.in"
        });
      }
    });

  }, []);

  return (
    <div className="bg-lavendar min-h-screen flex flex-col items-center overflow-hidden" ref={containerRef}>
      <div className="flex flex-col w-full">
        <Header />
      </div>
      
      <div className="w-full px-12">
        <h1 ref={textRef} className="text-center mt-5 font-quicksand text-6xl font-bold">About Me</h1>
      </div>

      {/* Square Section */}
      <div 
        ref={squareRef} 
        className="bg-white mt-20 mx-auto" 
        style={{ width: '1234px', height: '425px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' }}
      >
        <p className="text-black font-quicksand text-4xl font-bold px-12 lg:w-1/2">I’m a designer looking forward making a meaningful impact through my work.</p>
      </div>
      
    </div>
  );
};

export default About;