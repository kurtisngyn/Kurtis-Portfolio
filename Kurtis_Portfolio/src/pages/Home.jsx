import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../components/Header";
import Headshot from "../assets/Headshot.jpg";
import CircleLeft from "../components/Circle-Left";
import CircleRight from "../components/Circle-Right";
import Arrow from "../components/Arrow";
import Recentprojs from "../components/Recentprojs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareBehance, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from "../components/Footer";

const Home = () => {
  const emojiRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Emoji bounce animation
    gsap.to(emojiRef.current, {
      y: -9,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    // Hover bounce effect for image
    const img = imageRef.current;
    if (img) {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power2.out" });
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    }

    return () => {
      if (img) {
        img.removeEventListener("mouseenter", null);
        img.removeEventListener("mouseleave", null);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-lavender">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-8 py-8 lg:py-16 items-center lg:items-start">
          {/* Intro Section */}
          <div className="flex flex-col justify-center lg:w-1/2 text-center lg:text-left">
            <header>
              <h1 className="font-quicksand text-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6">
                Hey, I'm <span className="text-periwinkle-500 drop-shadow-lg">Kurtis</span>
              </h1>
            </header>
            <div className="flex justify-center lg:justify-start gap-4 mb-4 sm:mb-6">
              <a href="https://www.linkedin.com/in/kurtisnguyen1/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 hover:text-periwinkle-500 transition-transform duration-300 transform hover:scale-110" 
                  alt="LinkedIn profile"
                />
              </a>
              <a href="https://www.behance.net" target="_blank" rel="noreferrer">
                <FontAwesomeIcon 
                  icon={faSquareBehance} 
                  className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 hover:text-periwinkle-500 transition-transform duration-300 transform hover:scale-110" 
                  alt="Behance profile"
                />
              </a>
              <a href="https://github.com/kurtisngyn" target="_blank" rel="noreferrer">
                <FontAwesomeIcon 
                  icon={faSquareGithub} 
                  className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 hover:text-periwinkle-500 transition-transform duration-300 transform hover:scale-110" 
                  alt="GitHub profile"
                />
              </a>
            </div>
            <h2 className="font-quicksand text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-semibold">
              A UX/UI designer and front-end developer crafting intuitive, responsive experiences.
            </h2>
          </div>

          {/* Image Section */}
          <div className="relative flex flex-col justify-center items-center lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <CircleLeft />
              <CircleRight />
              <img
                ref={imageRef}
                src={Headshot}
                alt="Kurtis"
                loading="lazy"
                className="w-full h-full object-cover rounded-full z-10 relative transition-transform duration-300"
              />
            </div>
            <div ref={emojiRef} className="relative z-20 mt-4">
              <p className="text-center text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-quicksand">
                😽🙀😹
              </p>
            </div>
          </div>
        </div>
      </div>

      <Arrow />
      <Recentprojs />
      <Footer />
    </div>
  );
};

export default Home;
