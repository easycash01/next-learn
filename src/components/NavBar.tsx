'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Props {
    title: string;
}

function NavBar({ title }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} bg-blue-600 text-white p-4 fixed w-full top-0 z-50`}>
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Logo con animazione */}
                <Link href="/" className="logo text-xl font-bold">
                    {title}
                </Link>
                
                {/* Hamburger Button */}
                <button 
                    className={`hamburger-container md:hidden ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link href="/" className="nav-link hover:text-blue-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/contatti" className="nav-link hover:text-blue-200">
                            Contatti
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-link hover:text-blue-200">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
            
            {/* Mobile Menu */}
            <div className={`mobile-menu md:hidden ${isOpen ? 'open' : ''}`}>
                <ul className="flex flex-col">
                    <li className="mobile-menu-item">
                        <Link 
                            href="/" 
                            className="block py-3 px-6 hover:bg-blue-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="mobile-menu-item">
                        <Link 
                            href="/contatti" 
                            className="block py-3 px-6 hover:bg-blue-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Contatti
                        </Link>
                    </li>
                    <li className="mobile-menu-item">
                        <Link 
                            href="/about" 
                            className="block py-3 px-6 hover:bg-blue-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;