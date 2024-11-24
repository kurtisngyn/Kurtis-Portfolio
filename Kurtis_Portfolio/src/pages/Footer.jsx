import React from "react";
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer className="bg-white text-black py-3 border-t-2 border-black">
                <nav className="container mx-auto px-4">
                    <ul className="font-quicksand text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex justify-center space-x-4 md:space-x-6 lg:space-x-8">
                        <li>
                            <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/About" className="hover:text-gray-400 transition duration-300">About</Link>
                        </li>
                        <li>
                            <Link to="/Work" className="hover:text-gray-400 transition duration-300">Work</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Layout;