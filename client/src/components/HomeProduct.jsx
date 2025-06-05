import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ChevronRight, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Double from "../assets/Background/bg-double.png"
import Flower1 from "../assets/showcase/b1.jpg"
import Flower2 from "../assets/showcase/b2.jpg"
import Flower3 from "../assets/showcase/b3.jpg"
import Flower4 from "../assets/showcase/b4.jpg"

const productData = [
    {
        id: 1,
        title: 'Blush Bloom Delight',
        price: 950,
        brand: 'KaBloom',
        oldPrice: 1400,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyifTlwy1o4_mcPJ4yc_7e6uhgV5eZHIWxHw&s',
        category: 'Flowers in flowerpots',
        soldOut: false,
    },
    {
        id: 2,
        title: 'Petal Glow Charm',
        price: 970,
        brand: 'KaBloom',
        oldPrice: 1400,
        image: 'https://www.themaevastore.com/cdn/shop/files/Web_0007_Floral_pot.jpg?v=1737020960',
        category: 'Flowers in flowerpots',
        soldOut: false,
    },
    {
        id: 3,
        title: 'Sunset Bloom Pot',
        price: 880,
        brand: 'KaBloom',
        oldPrice: 1400,
        image: 'https://i.etsystatic.com/24074578/r/il/6159a8/2621931468/il_fullxfull.2621931468_68q1.jpg',
        category: 'Flowers in flowerpots',
        soldOut: false,
    },
    {
        id: 4,
        title: 'Twilight Blossom',
        price: 920,
        brand: 'KaBloom',
        oldPrice: 1400,
        image: 'https://m.media-amazon.com/images/I/41U3niZSTNL._AC_.jpg',
        category: 'Flowers in flowerpots',
        soldOut: false,
    },
    {
        id: 5,
        title: 'Out of Stock Bloom',
        price: 1100,
        brand: 'KaBloom',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RQNtfc6n50SEpZwA7bOdxfRw23aDF7wo3A&s',
        category: 'Flowers in flowerpots',
        soldOut: true,
    },
    {
        id: 6,
        title: 'Lilac Glow Bunch',
        price: 1350,
        brand: 'Yiliyajia',
        oldPrice: 1800,
        image: 'https://cdn11.bigcommerce.com/s-3bp5t46z/images/stencil/586x586/products/599/2622/DSC_5311__28777.1644927017.jpg?c=2',
        category: 'Bouquetes',
        soldOut: false,
    },
    {
        id: 7,
        title: 'White Whisper Lily',
        price: 1380,
        brand: 'Yiliyajia',
        oldPrice: 1800,
        image: 'https://image.floranext.com/instances/theartfloral_com/catalog/product/0/f/0fa63971c3efb39ca4080a640277b7e9_1.png.webp?h=800&w=800&r=255&g=255&b=255',
        category: 'Bouquetes',
        soldOut: false,
    },
    {
        id: 8,
        title: 'Creamy Calla Elegance',
        price: 1420,
        brand: 'Yiliyajia',
        oldPrice: 1800,
        image: 'https://fiftyflowers.com/cdn/shop/products/Warm-Wishes-Wholesale-centerpiece-in-vase_17_10405_l.jpg?v=1683166324&width=480',
        category: 'Bouquetes',
        soldOut: false,
    },
    {
        id: 9,
        title: 'Floral Frost Bundle',
        price: 1450,
        brand: 'Yiliyajia',
        oldPrice: 1800,
        image: 'https://www.longacres.co.uk/Images/Product/Default/xlarge/mothers-day-pink-carnation-and-berry-handtied-flower-bouquet-0.jpg',
        category: 'Bouquetes',
        soldOut: false,
    },
    {
        id: 10,
        title: 'Morning Mist Lily Set',
        price: 1430,
        brand: 'Yiliyajia',
        oldPrice: 1800,
        image: 'https://cdn.flowersnfruits.com/uploads/product/flowers_n_fruits/OCT2024/1728455015356-BouquetofPinkLilies.webp',
        category: 'Bouquetes',
        soldOut: false,
    },
    {
        id: 11,
        title: 'Out of Stock Lily',
        price: 1500,
        brand: 'Yiliyajia',
        image: 'https://m.media-amazon.com/images/I/61TzAoOMs9L._AC_UF894,1000_QL80_.jpg',
        category: 'Bouquetes',
        soldOut: true,
    }
];

const categories = [
    'Bouquetes',
    'Flowers in flowerpots',
];

const HomeProduct = () => {
    const [selectedCategory, setSelectedCategory] = useState('Bouquetes');

    const filteredProducts = productData.filter(
        (product) => product.category === selectedCategory
    );

    return (
        <div
            className="py-10 px-4 min-h-screen bg-no-repeat bg-top-right bg-[#f1ecef]"
            style={{ backgroundImage: `url(${Double})` }}
        >
            <div className="py-10 px-4 min-h-screen">
                <h2 className="text-4xl text-center font-bold text-pink-600 mb-8">
                    The Aromas of Flowers
                </h2>

                {/* Category Buttons */}
                <div className="flex justify-center gap-4 flex-wrap mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${selectedCategory === cat
                                ? 'text-pink-600'
                                : 'bg-transparent'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Swiper Product Cards */}
                <div className="max-w-7xl mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
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
                            // swiper.navigation.init();
                            // swiper.navigation.update();
                        }}
                    >
                        {filteredProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center p-5 h-full flex flex-col justify-between">
                                    <div className="absolute top-3 right-3 bg-pink-600 p-2 rounded-full shadow text-white">
                                        <a href="#"><Heart size={16} /></a>
                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-44 h-44 object-contain mx-auto rounded-md"
                                    />
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-gray-500 mb-1">
                                            {product.brand}
                                        </h4>
                                        <h3 className="text-md font-bold text-gray-800">
                                            {product.title.length > 25
                                                ? product.title.substring(0, 25) + '...'
                                                : product.title}
                                        </h3>
                                        <div className="flex justify-center items-center gap-2 mt-2">
                                            <span className="text-lg font-bold text-gray-800">
                                                Rs. {product.price.toFixed(2)}
                                            </span>
                                            {product.oldPrice && (
                                                <span className="line-through text-sm text-gray-400">
                                                    Rs. {product.oldPrice.toFixed(2)}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            className={`mt-5 w-full py-2 rounded-full text-white text-sm font-semibold ${product.soldOut
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-pink-600 hover:bg-pink-500'
                                                }`}
                                            disabled={product.soldOut}
                                        >
                                            <a href="#">{product.soldOut ? 'Sold Out' : 'Add To Cart ➤'}</a>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons Container */}
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


            <div className="py-10 px-4">
                <h2 className="text-pink-500 text-4xl text-center font-bold mb-8">Elegance in Full Bloom</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-center">
                    <span>These bright and cheery flowers are known for their large, golden blooms and striking appearance. Sunflowers </span>
                    <span>represent warmth, happiness, and optimism, radiating positivity wherever they are found.</span>
                </p>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2">
                    {[
                        { title: "Flowers in flowerpots", img: Flower1 },
                        { title: "Cut flowers", img: Flower2 },
                        { title: "Best seller flowers", img: Flower3 },
                        { title: "Bouquets flowers", img: Flower4 }
                    ].map((flower, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={flower.img}
                                alt={flower.title}
                                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10 bg-white/10 rounded-3xl">
                                <h4 className="text-sm font-semibold uppercase tracking-widest text-pink-200 mb-1">Flower Set</h4>
                                <h1 className="text-xl font-bold mb-2">{flower.title}</h1>
                                <a
                                    href="#"
                                    className="text-sm underline text-white hover:text-pink-300 transition"
                                >
                                    Show More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HomeProduct;
