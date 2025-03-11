import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Pose from "../../assets/Abtassets/first.jpg";
import AnotherImage from "../../assets/Abtassets/second.jpg";
import ThirdImage from "../../assets/Abtassets/third.jpg";
import testimage from "../../assets/Abtassets/test.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ImageCarousel() {
  const images = [
    { src: Pose, description: "Beautiful sunset at the beach" },
    { src: AnotherImage, description: "Hiking in the mountains" },
    { src: ThirdImage, description: "Exploring the city streets" },
    { src: testimage, description: "Relaxing at the lake" },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const goToPrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hiding default slick arrows
    autoplay: true,
    autoplaySpeed: 9000,
    cssEase: "ease-in-out",
  };

  return (
    <div
      className="w-full h-72 bg-white rounded-lg overflow-hidden relative flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom Arrows at Bottom Corners */}
      <button
        onClick={goToPrev}
        className={`absolute bottom-4 left-4 text-white text-3xl cursor-pointer z-20 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: isHovered ? "auto" : "none" }}
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={goToNext}
        className={`absolute bottom-4 right-4 text-white text-3xl cursor-pointer z-20 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: isHovered ? "auto" : "none" }}
      >
        <FaArrowRight />
      </button>

      <Slider ref={sliderRef} {...settings} className="w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-72 flex justify-center items-center bg-black"
          >
            {/* Image - Now centered correctly */}
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Overlay with Description */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white text-lg font-semibold text-center mb-5 px-4">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
