import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TBA from "../../components/TBA";

function Plateful() {
    return (
        <div className="flex flex-col min-h-screen bg-lavender">
            <Header />
            <TBA />
            <Footer />
        </div>
        
    );
}

export default Plateful;



