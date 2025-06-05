import { useEffect, useState } from 'react';
import herobg from '../assets/Background/Hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div
        className={`
          bg-opacity-50 p-6 sm:p-8 md:p-10 rounded-xl text-center text-white w-full max-w-2xl space-y-6
          transition-all duration-1000 ease-in-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
          The Beauty of Flowers
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          <span className="block">Delicate and ethereal, these flowers dance</span>
          <span className="block">gracefully with every breeze, bringing an</span>
          <span className="block">enchanting touch to gardens.</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <a
            href="/product"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Show Products
          </a>
          <a
            href="/article"
            className="bg-white hover:bg-gray-100 text-pink-600 font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Show Our Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
