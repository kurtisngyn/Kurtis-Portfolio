import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Pose from "../../assets/Abtassets/Resultphoto.jpg";
import Photoshoot from "../../assets/Abtassets/Photoshoot.jpg";
import Naruto from "../../assets/Abtassets/Naruto.jpg";
import Larrabee from "../../assets/Abtassets/Larrabee.jpg";
import VideoFile from "../../assets/Abtassets/Hikevid.mp4"; // Video file
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ImageCarousel() {
  const media = [
    { type: "video", src: VideoFile, description: "diez vistas trail" },
    { type: "image", src: Naruto, description: "learning my ninja way!" },
    { type: "image", src: Larrabee, description: "exploring washington" },
    { type: "image", src: Photoshoot, description: "photoshoot" },
    { type: "image", src: Pose, description: "→ results" },
  ];

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 9000,
    cssEase: "ease-in-out",
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden relative">
      <Slider ref={sliderRef} {...settings} className="w-full">
        {media.map((item, index) => (
          <div key={index} className="relative w-full">
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-[50vh] object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[50vh] object-cover"
              />
            )}
          </div>
        ))}
      </Slider>
      {/* Always Visible Arrows and Description at the Bottom */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-between items-center px-4">
        <button onClick={goToPrev} className="text-white text-3xl cursor-pointer">
          <FaArrowLeft />
        </button>
        <p className="text-white text-lg font-semibold text-center  px-4 py-2 rounded-lg">
          {media[currentIndex].description}
        </p>
        <button onClick={goToNext} className="text-white text-3xl cursor-pointer">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
