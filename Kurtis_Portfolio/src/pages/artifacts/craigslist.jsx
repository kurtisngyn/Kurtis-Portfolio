import React from "react";
import Header from "../../components/Header";
import BackBtn from "../../components/Back-btn";
import Craigslistphoto from "../../assets/craigslistphoto.png";

function Craigslist() {
    return (
        <div className="flex flex-col bg-lavendar">
            <Header /> 
            <BackBtn />
            <div className="flex-grow flex items-center justify-center overflow-hidden px-4 lg:px-6 ">
                <img src={Craigslistphoto} alt="Craigslistintrophoto" className="mt-4 mx-auto" />
            </div>

        </div>
    );
}

export default Craigslist;