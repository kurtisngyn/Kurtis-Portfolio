import React from "react";
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer className="bg-white-800 text-white py-3 border-t-2 border-black">
                <nav className="container mx-auto">
                    <ul className="font-quicksand text-black text-6xl font-bold flex justify-center space-x-8">
                        <li>
                            <Link to="/" className="hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/About" className="hover:text-gray-400">About</Link>
                        </li>
                        <li>
                            <Link to="/Work" className="hover:text-gray-400">Work</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Layout;
