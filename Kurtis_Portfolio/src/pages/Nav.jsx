import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    const [isAtBottom, setIsAtBottom] = useState(false);

    // Function to check if the user has scrolled to the bottom
    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            setIsAtBottom(scrolledToBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Floating navigation */}
            <footer className="fixed bottom-6 left-1/2 mb-5 transform -translate-x-1/2 z-10">
                <nav className={`rounded-full shadow-lg py-1.5 transition-colors duration-300 ${isAtBottom ? "bg-black text-white" : "bg-white text-black"}`}>
                    <ul className="font-quicksand text-base font-bold flex items-center space-x-4">
                        <li>
                            <Link 
                                to="/" 
                                className={`px-6 py-2 rounded-full transition duration-300 ${
                                    location.pathname === '/' 
                                        ? isAtBottom ? 'bg-white text-black' : 'bg-black text-white' 
                                        : isAtBottom ? 'text-white hover:bg-white hover:text-black' : 'text-black hover:bg-black hover:text-white'
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={`px-6 py-2 rounded-full transition duration-300 ${
                                    location.pathname === '/About' 
                                        ? isAtBottom ? 'bg-white text-black' : 'bg-black text-white' 
                                        : isAtBottom ? 'text-white hover:bg-white hover:text-black' : 'text-black hover:bg-black hover:text-white'
                                }`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/work" 
                                className={`px-6 py-2 rounded-full transition duration-300 ${
                                    location.pathname === '/Work' 
                                        ? isAtBottom ? 'bg-white text-black' : 'bg-black text-white' 
                                        : isAtBottom ? 'text-white hover:bg-white hover:text-black' : 'text-black hover:bg-black hover:text-white'
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
