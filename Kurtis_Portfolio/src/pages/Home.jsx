import React, { useEffect, useRef } from "react";
import Header from "../components/Header";

import Recentprojs from "../components/Recentprojs";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import HomeTextSection from "../components/HomeTextSection";

const Home = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
   

   
      <HomeSection />

    <HomeTextSection />


      <Recentprojs />
      <Footer />
    </div>
  );
};

export default Home;
