import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaPhoneAlt, FaRing } from 'react-icons/fa';
import WeddingBanner from '../assets/event/Wedding.jpg'; // Add a romantic wedding image here

const Wedding = () => {
    return (
        <div>
            <Header />

            {/* Hero Section */}
            <div
                className="h-60 bg-cover bg-center flex items-center justify-center text-gray-700 mt-16"
                style={{ backgroundImage: `url(${WeddingBanner})` }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center">
                    Dream Weddings, Perfectly Planned 💍
                </h1>
            </div>

            {/* Content Section */}
            <div className="px-6 md:px-20 py-16 text-center space-y-10 bg-[#fffaf9]">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">
                        Celebrate Love in Style
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                        From intimate ceremonies to grand weddings, our expert planners take care of every detail. 
                        We make your special day elegant, stress-free, and unforgettable with personalized décor, venues, entertainment, and more.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-10 mt-12">
                    {[
                        'Venue Selection & Decoration',
                        'Theme-Based Wedding Concepts',
                        'Floral Arrangements & Lighting',
                        'Catering & Menu Planning',
                        'Photography & Videography',
                        'Mehendi, Sangeet & Entertainment',
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <FaRing className="text-4xl text-rose-400 mb-4 mx-auto" />
                            <p className="text-lg font-medium text-gray-800">{item}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Options */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold mb-6">💌 Let’s Plan Your Wedding Together</h3>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
                        >
                            <FaWhatsapp className="text-xl" />
                            WhatsApp Us
                        </a>
                        <a
                            href="tel:+919999999999"
                            className="flex items-center gap-3 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
                        >
                            <FaPhoneAlt className="text-xl" />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Wedding;
