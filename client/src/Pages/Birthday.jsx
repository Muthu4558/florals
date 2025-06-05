import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaPhoneAlt, FaBirthdayCake } from 'react-icons/fa';
import BirthdayBanner from '../assets/event/Birthday.jpg'; // Use a suitable image

const Birthday = () => {
    return (
        <div>
            <Header />

            {/* Hero Section */}
            <div
                className="h-60 bg-cover bg-center flex items-center justify-center text-gray-700 mt-16"
                style={{ backgroundImage: `url(${BirthdayBanner})` }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center">
                    Make Birthdays Magical 🎉
                </h1>
            </div>

            {/* Content Section */}
            <div className="px-6 md:px-20 py-16 text-center space-y-10">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                        Celebrate with Style & Joy!
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                        Whether it's a kid’s party, surprise bash, or a milestone celebration,
                        we craft unforgettable birthday experiences. From custom themes and vibrant
                        décor to fun activities and mouthwatering treats — we handle it all while you make memories.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-10 mt-12">
                    {[
                        'Custom Themes & Decoration',
                        'Games, Artists & Entertainment',
                        'Delicious Cakes & Catering',
                        'Photography & Videography',
                        'Venue Selection & Setup',
                        'Return Gifts & Invitations',
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <FaBirthdayCake className="text-4xl text-pink-500 mb-4 mx-auto" />
                            <p className="text-lg font-medium text-gray-800">{item}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Options */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold mb-6">🎈 Book Your Party Today!</h3>
                    <div className="flex justify-center gap-6">
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
                            className="flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
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

export default Birthday;
