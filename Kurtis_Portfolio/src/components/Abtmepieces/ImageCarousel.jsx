import React from "react";
import Slider from "react-slick";
import Pose from "../../assets/Abtassets/first.jpg";
import AnotherImage from "../../assets/Abtassets/second.jpg";
import ThirdImage from "../../assets/Abtassets/third.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel() {
  const images = [Pose, AnotherImage, ThirdImage];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden p-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="object-cover rounded-lg" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
