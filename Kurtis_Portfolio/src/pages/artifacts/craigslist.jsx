import React, { useEffect } from "react";
import Header from "../../components/Header";
import Craigslistphoto from "../../assets/craiglistphotos/craigslistphoto.png";
import CraigslistHeader from "../../components/Craigslistpieces/Craigslist-header";
import CraiglistOverview from "../../components/Craigslistpieces/Craigslist-overview";
import Craigslistselect from "../../components/Craigslistpieces/Craigslist-select";
import Footer from "../../components/Footer";

function Craigslist() {
    // Ensure the page scrolls to the top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-lavender">
            <Header />
            <CraigslistHeader />
            <div className="flex-grow flex items-center justify-center px-4 lg:px-6 mt-10 mb-4">
                <div className="w-full max-w-8xl flex items-center justify-center"> 
                    <img 
                        src={Craigslistphoto} 
                        alt="Craigslist Intro Photo" 
                        className="h-auto" 
                    />
                </div>
            </div>
            <CraiglistOverview />
            <Craigslistselect />
            <Footer />
        </div>
    );
}

export default Craigslist;
