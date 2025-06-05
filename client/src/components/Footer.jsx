import React from "react";
import {
    FaYoutube,
    FaFacebookMessenger,
    FaPinterest,
    FaTimes,
    FaCcVisa,
    FaCcMastercard,
    FaCcAmex,
    FaCcPaypal,
    FaCcDiscover,
} from "react-icons/fa";
import Double2 from "../assets/Background/bg-double2.png"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-10 md:px-20">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                {/* Left - Newsletter */}
                <div className="md:w-1/3">
                    <h2 className="text-sm uppercase tracking-wider font-semibold mb-2 text-white/70">Florals</h2>
                    <h3 className="text-3xl font-bold leading-tight">
                        Subscribe newsletter and <br /> get <span className="text-yellow-300">-20% off</span>
                    </h3>
                    <p className="mt-4 text-white/90">
                        Subscribe to our floral newsletter and immerse yourself in the enchanting world of flowers.
                        With our subscription service, you'll receive regular updates, insightful articles.
                    </p>
                    <div className="flex mt-5">
                        <input
                            type="email"
                            placeholder="Enter email address..."
                            className="p-3 rounded-l-md w-full text-black focus:outline-none"
                        />
                        <button className="bg-black hover:bg-gray-800 text-white px-5 rounded-r-md font-semibold transition duration-300">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                {/* Center - Shop & Account */}
                <div className="flex justify-between md:w-1/3 gap-10">
                    <div>
                        <h4 className="font-bold text-white mb-3">Shop:</h4>
                        <ul className="space-y-2 text-white/90">
                            <li><a href="#" className="hover:text-yellow-200">All collections</a></li>
                            <li><a href="#" className="hover:text-yellow-200">All products</a></li>
                            <li><a href="#" className="hover:text-yellow-200">My Cart</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-3">Account:</h4>
                        <ul className="space-y-2 text-white/90">
                            <li><a href="#" className="hover:text-yellow-200">About us</a></li>
                            <li><a href="#" className="hover:text-yellow-200">Contact with us</a></li>
                            <li><a href="#" className="hover:text-yellow-200">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-yellow-200">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:text-yellow-200">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right - Socials */}
                <div className="md:w-1/3">
                    <h4 className="font-bold mb-3 text-white">Share</h4>
                    <div className="flex space-x-3 mb-4">
                        <button className="bg-white p-2 rounded shadow hover:scale-105 transition">
                            <FaYoutube className="text-red-600" />
                        </button>
                        <button className="bg-white p-2 rounded shadow hover:scale-105 transition">
                            <FaFacebookMessenger className="text-blue-500" />
                        </button>
                        <button className="bg-white p-2 rounded shadow hover:scale-105 transition">
                            <FaPinterest className="text-red-500" />
                        </button>
                        <button className="bg-white p-2 rounded shadow hover:scale-105 transition">
                            <FaTimes className="text-gray-800" />
                        </button>
                    </div>

                    <div className="flex space-x-3 mt-4 text-white">
                        <FaCcVisa size={36} />
                        <FaCcMastercard size={36} />
                        <FaCcAmex size={36} />
                        <FaCcPaypal size={36} />
                        <FaCcDiscover size={36} />
                        <img src={Double2} width={200} alt="Flower" />
                    </div>
                </div>
            </div>

            {/* Bottom Row: Address and Copyright */}
            <div className="mt-10 text-sm text-white/80 border-t border-white/30 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
                <div>
                    © 2025, All Rights Reserverd
                </div>
                <div className="text-center md:text-right">
                    Address: Landmark: No. 162/5, Anna Nagar, Chennai, Tamil Nadu 600040
                </div>
            </div>
        </footer>
    );
};

export default Footer;
