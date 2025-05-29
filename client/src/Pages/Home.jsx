import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Discovering from '../components/Discovering';
import Compare from '../components/Compare';
import HomeProduct from '../components/HomeProduct';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowHeader(false); // scrolling down
    } else {
      setShowHeader(true); // scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <Header isVisible={showHeader} />
      <Hero />
      <Discovering />
      <Compare />
      <HomeProduct />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
