import React from "react";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,  // Increased speed for a smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaArrowRight className="slick-arrow right-arrow" />,
    prevArrow: <FaArrowLeft className="slick-arrow left-arrow" />,
    autoplay: true,  // Enable auto-scrolling
    autoplaySpeed: 9000,  // Auto-scroll 
    cssEase: "ease-in-out",  // Smooth transition easing
  };

  return (
    <div className="w-full h-96 bg-white rounded-lg overflow-hidden relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative flex justify-center items-center">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="object-contain w-full h-full"
            />
            
            {/* Hover Effect Description */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold p-4 text-center">{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
