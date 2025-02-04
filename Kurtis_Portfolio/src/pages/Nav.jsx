import React from "react";
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <nav className="bg-white rounded-full shadow-lg py-1.5">
                    <ul className="font-quicksand text-base font-bold flex items-center space-x-4">
                        <li>
                            <Link 
                                to="/" 
                                className={`px-6 py-2 rounded-full transition duration-300 ${
                                    location.pathname === '/' ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white'
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/About" 
                                className={`px-6 py-2 rounded-full transition duration-300 ${
                                    location.pathname === '/About' ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white'
                                }`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/Work" 
                                className={`px-6 py-2 rounded-full transition duration-300 ${
                                    location.pathname === '/Work' ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white'
                                }`}
                            >
                                Work
                            </Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Layout;