import React from "react";
import Header from "../../components/Header";
import BackBtn from "../../components/Back-btn";
import Craigslistphoto from "../../assets/craigslistphoto.png";
import CraiglistHeader from "../../components/Craiglist-header";

function Craigslist() {
    return (
        <div className="flex flex-col bg-lavendar">
            <Header /> 
            <BackBtn />
            <div className="flex-grow flex items-center justify-center overflow-hidden px-4 lg:px-6 font-quicksand font-semibold text-6xl mb-6">
            <CraiglistHeader />
            </div>
            <div className="flex-grow flex items-center justify-center overflow-hidden px-4 lg:px-6 ">
                <img src={Craigslistphoto} alt="Craigslistintrophoto" className="mt-4 mx-auto" />
            </div>

        </div>
    );
}

export default Craigslist;