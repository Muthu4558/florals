import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaPhoneAlt, FaBriefcase } from 'react-icons/fa';
import CorporateBanner from '../assets/event/Corporate.jpg'; // Use a corporate event image

const Corporate = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div
        className="h-60 bg-cover bg-center flex items-center justify-center text-gray-700 mt-16"
        style={{ backgroundImage: `url(${CorporateBanner})` }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center">
          Professional Events That Impress
        </h1>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-20 py-16 text-center space-y-10 bg-[#f9fbfc]">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Empower Your Brand with Perfectly Planned Events
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            From product launches to annual meetups, we create professional corporate events with attention to detail. 
            Our expert team ensures seamless execution that aligns with your brand and goals.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            'Product Launches',
            'Annual General Meetings',
            'Team Building Activities',
            'Seminars & Conferences',
            'Corporate Dinners',
            'Awards & Recognition Ceremonies',
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <FaBriefcase className="text-4xl text-pink-500 mb-4 mx-auto" />
              <p className="text-lg font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">
            📩 Ready to Host a Smart Event?
          </h3>
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
              className="flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition"
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

export default Corporate;
