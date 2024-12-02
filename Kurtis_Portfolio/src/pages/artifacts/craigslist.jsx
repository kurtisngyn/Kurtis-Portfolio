import React from "react";
import Header from "../../components/Header";
import BackBtn from "../../components/Back-btn";
import Craigslistphoto from "../../assets/craigslistphoto.png";
import CraiglistHeader from "../../components/Craiglist-header";

function Craigslist() {
    return (
        <div className="flex flex-col min-h-screen bg-lavender">
            <Header /> 
            <BackBtn />
            
            <CraiglistHeader />
            
            <div className="flex-grow flex items-center justify-center px-4 lg:px-6">
                <img src={Craigslistphoto} alt="Craigslistintrophoto" className="max-w-full h-auto" />
            </div>
        </div>
    );
}

export default Craigslist;