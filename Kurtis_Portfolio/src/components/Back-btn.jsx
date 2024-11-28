import React from "react";
import { Link } from "react-router-dom";

function BackBtn() {
    return (
        <div className="absolute top-[15rem] left-[15rem]">
            <Link to="/work" className="cursor-pointer">
                <h1 className="lg:text-5xl font-semibold font-quicksand">
                    X
                </h1>
            </Link>
        </div>
    );
}

export default BackBtn;