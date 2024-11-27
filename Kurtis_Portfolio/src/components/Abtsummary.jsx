import React from "react";


function AbtSummary() {
    return (
        <div>
            <div 
        data-aos="zoom-in" 
        data-aos-delay="500"
        className="bg-white mt-10 sm:mt-16 md:mt-20 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 p-6 sm:p-8 md:p-10"
        style={{ 
          borderRadius: '8px', 
          boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p className="text-black font-quicksand text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          I'm a designer looking forward to making a meaningful impact through my work.
        </p>
      </div>
        </div>
    );
}

export default AbtSummary;