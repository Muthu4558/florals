import React from 'react';
import { Link } from 'react-router-dom';
import bg2 from '../assets/Background/bg-2.png';
import flower1 from '../assets/flowers/f1.png';
import flower2 from '../assets/flowers/f2.png';
import flower3 from '../assets/flowers/f3.png';
import flower4 from '../assets/flowers/f4.png';
import flower5 from '../assets/flowers/f5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ChevronRight } from 'lucide-react';

const flowerData = [
    { image: flower1, title: 'Bestsellers' },
    { image: flower2, title: 'Bouquetes' },
    { image: flower3, title: 'Cut Flowers' },
    { image: flower4, title: 'Flowerpots' },
    { image: flower5, title: 'Flowers' },
];

const Discovering = () => {
    return (
        <div
            className="w-screen min-h-screen bg-cover bg-center bg-no-repeat py-16 px-4 bg-[#f1ecef]"
            style={{ backgroundImage: `url(${bg2})` }}
        >
            <div className="max-w-6xl mx-auto text-center text-gray-800 relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Discovering The Language of <span className="text-pink-600">Flowers</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                    They have a graceful and slender stem, and their petals can be solid-colored or display beautiful patterns and gradients.
                    Tulips are associated with spring and represent love, rebirth, and new beginnings.
                </p>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-16"
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = '.custom-prev';
                        swiper.params.navigation.nextEl = '.custom-next';
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {flowerData.map((flower, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6 w-full h-full relative hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src={flower.image}
                                    alt={flower.title}
                                    className="h-36 object-contain mb-4 rounded-md"
                                />
                                <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
                                    Flowers Set
                                </p>
                                <h3 className="text-xl font-semibold mb-6">{flower.title}</h3>

                                {/* Show Products as clickable Link */}
                                <Link
                                    to={`/product`}
                                    className="text-pink-600 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer select-none hover:underline"
                                >
                                    Show Products <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-end gap-4 mt-4 max-w-6xl mx-auto px-6">
                    <button
                        aria-label="Previous"
                        className="custom-prev bg-white shadow-md rounded-full p-3 hover:bg-pink-300 hover:text-white transition-colors z-20"
                    >
                        <ChevronRight className="w-6 h-6 rotate-180" />
                    </button>
                    <button
                        aria-label="Next"
                        className="custom-next bg-white shadow-md rounded-full p-3 hover:bg-pink-300 hover:text-white transition-colors z-20"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discovering;
