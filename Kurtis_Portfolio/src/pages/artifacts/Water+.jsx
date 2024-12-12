import React from "react";
import Header from "../../components/Header";
import WaterHeader from "../../components/Waterpieces/Water-header";
import Waterphoto from "../../assets/waterphotos/waterphoto.jpg";
import WaterOverview from "../../components/Waterpieces/Water-overview";
import Waterselect from "../../components/Waterpieces/Water-selection";


function Waterplus() {
    return (
        <div className="flex flex-col min-h-screen bg-lavender">
            <Header />
            <div className="bg-lavender py-12">
                <div className="container mx-auto px-4">
                    <WaterHeader />
                    <div className="mt-10 mb-4">
                        <div className="bg-white rounded-lg shadow-md w-full max-w-8xl h-auto relative">
                            <img 
                                src={Waterphoto} 
                                alt="Water+ Photo" 
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <WaterOverview />
                <Waterselect />
            </div>
        </div>
    );
}

export default Waterplus;
