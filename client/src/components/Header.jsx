import React, { useState, useEffect, useRef } from 'react';
import {
    FaUser,
    FaShoppingCart,
    FaChevronDown,
    FaSpa,
    FaSeedling,
    FaGift,
    FaRegNewspaper,
    FaUserPlus,
    FaSignInAlt,
} from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const userDropdownRef = useRef(null);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Close user dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setUserDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle scroll to hide/show header
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowHeader(false); // scrolling down
            } else {
                setShowHeader(true); // scrolling up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleDropdown = (type) => {
        setOpenDropdown((prev) => (prev === type ? null : type));
    };

    const handleDropdownItemClick = () => {
        setOpenDropdown(null);
        setMenuOpen(false);
    };

    return (
        <nav className={`bg-pink-100 shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-pink-700 flex items-center">🌸 Ushaa florals</div>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-pink-700">
                        {menuOpen ? (
                            <HiOutlineX className="text-3xl transition-transform duration-300" />
                        ) : (
                            <HiOutlineMenuAlt3 className="text-3xl transition-transform duration-300" />
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('flowers')}
                            className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium transition focus:outline-none"
                        >
                            <FaSpa /> All Flowers
                            <FaChevronDown className={`text-xs mt-1 transition-transform ${openDropdown === 'flowers' ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {openDropdown === 'flowers' && (
                            <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-40">
                                {['🌹 Roses', '🌸 Lilies', '💐 Orchids'].map((item) => (
                                    <a
                                        href="#"
                                        key={item}
                                        onClick={handleDropdownItemClick}
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 transition"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium transition">
                        <FaGift /> Bouquets
                    </a>

                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('collection')}
                            className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium transition focus:outline-none"
                        >
                            <FaSeedling /> Collection
                            <FaChevronDown className={`text-xs mt-1 transition-transform ${openDropdown === 'collection' ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {openDropdown === 'collection' && (
                            <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-40">
                                {['💍 Wedding', '🎉 Anniversary', '🎂 Birthday'].map((item) => (
                                    <a
                                        href="#"
                                        key={item}
                                        onClick={handleDropdownItemClick}
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 transition"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium transition">
                        <FaRegNewspaper /> Blog
                    </a>
                </div>

                {/* Search and Icons */}
                <div className="hidden md:flex items-center gap-4 relative">
                    <input
                        type="search"
                        placeholder="Search Here..."
                        className="px-3 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 w-60 transition"
                    />

                    <div className="relative" ref={userDropdownRef}>
                        <FaUser
                            className="text-gray-700 text-xl hover:text-pink-600 cursor-pointer"
                            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                        />
                        {userDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md py-2 z-50">
                                <a href="/login" onClick={() => setUserDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50">
                                    <span className="flex gap-3 items-center"><FaUserPlus /> Login</span>
                                </a>
                                <a href="/signup" onClick={() => setUserDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50">
                                    <span className="flex gap-3 items-center"><FaSignInAlt /> Signup</span>
                                </a>
                            </div>
                        )}
                    </div>

                    <FaShoppingCart className="text-gray-700 text-xl hover:text-pink-600 cursor-pointer" />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 flex flex-col gap-3 bg-pink-50 pb-4">
                    <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer py-2 px-1 font-medium text-gray-700 hover:text-pink-600">
                            <span className="flex items-center gap-2"><FaSpa /> All Flowers <FaChevronDown className="text-xs mt-1" /></span>
                        </summary>
                        <ul className="pl-5 mt-1 space-y-2">
                            <li><a href="#" className="flex items-center gap-2 text-sm hover:text-pink-500">🌹 Roses</a></li>
                            <li><a href="#" className="flex items-center gap-2 text-sm hover:text-pink-500">🌸 Lilies</a></li>
                            <li><a href="#" className="flex items-center gap-2 text-sm hover:text-pink-500">💐 Orchids</a></li>
                        </ul>
                    </details>

                    <a href="#" className="flex items-center gap-2 py-2 font-medium text-gray-700 hover:text-pink-600"><FaGift /> Bouquets</a>

                    <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer py-2 px-1 font-medium text-gray-700 hover:text-pink-600">
                            <span className="flex items-center gap-2"><FaSeedling /> Collection <FaChevronDown className="text-xs mt-1" /></span>
                        </summary>
                        <ul className="pl-5 mt-1 space-y-2">
                            <li><a href="#" className="flex items-center gap-2 text-sm hover:text-pink-500">💍 Wedding</a></li>
                            <li><a href="#" className="flex items-center gap-2 text-sm hover:text-pink-500">🎉 Anniversary</a></li>
                            <li><a href="#" className="flex items-center gap-2 text-sm hover:text-pink-500">🎂 Birthday</a></li>
                        </ul>
                    </details>

                    <a href="#" className="flex items-center gap-2 py-2 font-medium text-gray-700 hover:text-pink-600"><FaRegNewspaper /> Blog</a>

                    <div className="pt-4 flex flex-col gap-2">
                        <input
                            type="search"
                            placeholder="Search Here..."
                            className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />
                        <details className="group">
                            <summary className="flex items-center justify-between cursor-pointer py-2 px-1 font-medium text-gray-700 hover:text-pink-600">
                                <span className="flex items-center gap-2"><FaUser /> Account <FaChevronDown className="text-xs mt-1" /></span>
                            </summary>
                            <ul className="pl-5 mt-1 space-y-2">
                                <li><a href="/login" className="block text-sm hover:text-pink-500"><span className="flex gap-3 items-center"><FaUserPlus /> Login</span></a></li>
                                <li><a href="/signup" className="block text-sm hover:text-pink-500"><span className="flex gap-3 items-center"><FaSignInAlt /> Signup</span></a></li>
                            </ul>
                        </details>
                        <FaShoppingCart className="text-gray-700 text-xl hover:text-pink-600 cursor-pointer" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;