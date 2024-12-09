import React from "react";
import Pose from "../../assets/Abtassests/Pose.jpg";

function ImageCard() {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <img 
  src={Pose} 
  alt="Posted up" 
  className="ml-auto object-right" 
/>
        </div>
    );
}

export default ImageCard;