import React, { useEffect, useRef } from "react";
import Header from "../components/Header";

import Arrow from "../components/Arrow";
import Recentprojs from "../components/Recentprojs";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";

const Home = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-lavender">
      {/* Header */}
      <Header />

   
      <HomeSection />





      <Recentprojs />
      <Footer />
    </div>
  );
};

export default Home;
