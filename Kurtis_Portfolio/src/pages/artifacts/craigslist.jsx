import React from "react";
import Header from "../../components/Header";
import BackBtn from "../../components/Back-btn";
import Craigslistphoto from "../../assets/craigslistphoto.png";
import CraigslistHeader from "../../components/Craigslistpieces/Craigslist-header";
import CraiglistOverview from "../../components/Craigslistpieces/Craigslist-overview";
import Craigslistselect from "../../components/Craigslistpieces/Craigslist-select";

function Craigslist() {
    return (
        <div className="flex flex-col min-h-screen bg-lavender">
            <Header />
            <BackBtn />
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
        </div>
    );
}

export default Craigslist;
