import React from "react";
import Header from "../../components/Header";
import JukeboxHeader from "../../components/Jukeboxpieces/Juke-header";
import Jukeboxphoto from "../../assets/Jukeboxphotos/Jukeboxphoto.jpg";
import JukeOverview from "../../components/Jukeboxpieces/Juke-overview";

function Jukebox() {
    return (
        <div className="flex flex-col min-h-screen bg-lavender">
            <Header />
            <div className="bg-lavender py-12">
                <div className="container mx-auto px-4">
                    <JukeboxHeader />
                    <div className="mt-10 mb-4">
                        <div className="bg-white rounded-lg shadow-md w-full max-w-8xl h-auto relative">
                            <img 
                                src={Jukeboxphoto} 
                                alt="Jukebox Intro Photo" 
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <JukeOverview />
            </div>
        </div>
    );
}

export default Jukebox;
