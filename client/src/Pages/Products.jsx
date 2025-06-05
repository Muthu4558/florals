import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FlowerCard from '../components/FlowerCard';
import Bg from '../assets/All1.png';

const Products = () => {

    const flowerList = [
        {
            id: 1,
            brand: 'Yiliyajia',
            name: 'Whispering Lily Bouquet',
            flowerType: 'Lily',
            discountPrice: 1450,
            originalPrice: 1850,
            category: 'bouquet',
            image: 'https://static.wixstatic.com/media/9cd2ae_54085d5da22d40ff9fec0b2388af3f75~mv2.jpeg/v1/fill/w_640,h_860,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9cd2ae_54085d5da22d40ff9fec0b2388af3f75~mv2.jpeg', // lily bouquet
        },
        {
            id: 2,
            brand: 'FloralCo',
            name: 'Golden Tulip Flower',
            flowerType: 'Tulip',
            discountPrice: 1250,
            originalPrice: 1650,
            category: 'flower',
            image: 'https://bloom.ua/image/cache/catalog/bouquets/mono/tulips-strong-gold/25/strong-gold-25-1-1024x728.jpg', // single tulip flower
        },
        {
            id: 3,
            brand: 'BloomAura',
            name: 'Orchid Dream Bouquet',
            flowerType: 'Orchid',
            discountPrice: 990,
            originalPrice: 1300,
            category: 'bouquet',
            image: 'https://www.blacktulipflowers.com/wp-content/uploads/2025/05/04.jpg', // orchid bouquet
        },
        {
            id: 4,
            brand: 'RoseMagic',
            name: 'Romantic Rose Flower',
            flowerType: 'Rose',
            discountPrice: 1590,
            originalPrice: 2100,
            category: 'flower',
            image: 'https://www.juneflowers.com/wp-content/uploads/2022/09/red_love.jpg', // red rose flower
        },
        {
            id: 5,
            brand: 'PetalPride',
            name: 'Lavender Lily Grace',
            flowerType: 'Lily',
            discountPrice: 1100,
            originalPrice: 1400,
            category: 'bouquet',
            image: 'https://www.thebloomcrafter.com/cdn/shop/files/preview_images/40fc381167684ff4acdb7ac0c449f9c8.thumbnail.0000000000.jpg?v=1747983755&width=1946', // lavender lily bouquet
        },
        {
            id: 6,
            brand: 'OrchidNest',
            name: 'Purple Orchid Elegance',
            flowerType: 'Orchid',
            discountPrice: 1350,
            originalPrice: 1600,
            category: 'flower',
            image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-elegant-purple-orchids-ribbon-bouquet-206500-m.jpg', // purple orchid flower
        },
        {
            id: 7,
            brand: 'RedRose Co',
            name: 'Classic Red Roses',
            flowerType: 'Rose',
            discountPrice: 1500,
            originalPrice: 1800,
            category: 'bouquet',
            image: 'https://florasensations.com/wp-content/uploads/2023/04/Small-Red-Roses-Bouquet.jpg', // red rose bouquet
        },
        {
            id: 8,
            brand: 'PinkLily',
            name: 'Pink Oriental Lilies',
            flowerType: 'Lily',
            discountPrice: 900,
            originalPrice: 1100,
            category: 'flower',
            image: 'https://floweronwheels.com/cdn/shop/products/FOWBU2.jpg?v=1660913555', // pink lily flower
        },
        {
            id: 9,
            brand: 'FreshBlooms',
            name: 'Spring Tulip Mix',
            flowerType: 'Tulip',
            discountPrice: 1200,
            originalPrice: 1450,
            category: 'flower',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugMqF5uohQU02gWzvdWV_PN4Yyvgx3DuuFQ&s', // tulip mix flower
        },
        {
            id: 10,
            brand: 'ElegantFlora',
            name: 'White Lily Charm',
            flowerType: 'Lily',
            discountPrice: 1000,
            originalPrice: 1300,
            category: 'bouquet',
            image: 'https://cdn.shopaccino.com/guljaipur/products/pinkwhitelilarch2-800439_l.jpg?v=564', // white lily bouquet
        },
        {
            id: 11,
            brand: 'BloomCraft',
            name: 'Yellow Tulip Delight',
            flowerType: 'Tulip',
            discountPrice: 1150,
            originalPrice: 1350,
            category: 'flower',
            image: 'https://www.deliveredflowers.co.uk/cdn/shop/products/yellow-tulips-bouquet-359518.jpg?v=1622718345', // yellow tulip flower
        },
        {
            id: 12,
            brand: 'NatureBuds',
            name: 'Orchid White Glow',
            flowerType: 'Orchid',
            discountPrice: 1400,
            originalPrice: 1700,
            category: 'bouquet',
            image: 'https://4.imimg.com/data4/QI/VI/ANDROID-18762057/product.jpeg', // white orchid bouquet
        },
        {
            id: 13,
            brand: 'TulipTown',
            name: 'Red Tulip Elegance',
            flowerType: 'Tulip',
            discountPrice: 1250,
            originalPrice: 1500,
            category: 'flower',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLBc3KQg8b5cmr9UZh_jNpWZVEzZqoBxi9Q&s', // red tulip flower
        },
        {
            id: 14,
            brand: 'ExoticBlooms',
            name: 'Tropical Orchid Mix',
            flowerType: 'Orchid',
            discountPrice: 1600,
            originalPrice: 2000,
            category: 'bouquet',
            image: 'https://www.indiacakes.com/media/catalog/product/cache/a4577f844569f68fd14659d95bb20f68/e/l/elegant-10-mix-orchids-bouquet-949.jpg', // tropical orchid bouquet
        },
        {
            id: 15,
            brand: 'RoseLand',
            name: 'Peach Rose Basket',
            flowerType: 'Rose',
            discountPrice: 1800,
            originalPrice: 2200,
            category: 'bouquet',
            image: 'https://rosenpetal.com/wp-content/uploads/2021/08/peach-roses-bouquet-549_1.jpg', // peach rose bouquet
        },
        {
            id: 16,
            brand: 'FloraElegance',
            name: 'Elegant Pink Roses',
            flowerType: 'Rose',
            discountPrice: 1750,
            originalPrice: 2100,
            category: 'flower',
            image: 'https://www.expressluv.com/cdn/shop/files/ExpressluvUAE9pink.png?v=1731474570', // pink rose flower
        },
        {
            id: 17,
            brand: 'TheFlowerShop',
            name: 'Mixed Tulip Surprise',
            flowerType: 'Tulip',
            discountPrice: 1350,
            originalPrice: 1650,
            category: 'bouquet',
            image: 'https://www.flowers.nl/contents/media/l_104335123.jpg', // mixed tulip bouquet
        },
        {
            id: 18,
            brand: 'Rose Garden',
            name: 'Just Pink Roses',
            flowerType: 'Rose',
            discountPrice: 1550,
            originalPrice: 1800,
            category: 'flower',
            image: 'https://cdn.flowersnfruits.com/uploads/product/flowers_n_fruits/OCT2024/1728452397776-BouquetofPinkRoses.webp', // pink rose flower
        },
        {
            id: 19,
            brand: 'OrchidWorld',
            name: 'Exotic Orchid Box',
            flowerType: 'Orchid',
            discountPrice: 1650,
            originalPrice: 1950,
            category: 'flower',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOo94Bi3w2W25CNVJmTFi1az15AgJwoeEJGQ&s', // exotic orchid flower
        },
        {
            id: 20,
            brand: 'TulipExpress',
            name: 'Tulips in Bloom',
            flowerType: 'Tulip',
            discountPrice: 1200,
            originalPrice: 1450,
            category: 'bouquet',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn18-O2LwxdlXqBgUD6c-GbSFUwF9D_8xMw&s', // tulip bouquet
        },
        {
            id: 21,
            brand: 'Petal Paradise',
            name: 'Orange Tulip Delight',
            flowerType: 'Tulip',
            discountPrice: 1150,
            originalPrice: 1400,
            category: 'flower',
            image: 'https://m.media-amazon.com/images/I/51dPVZRgcEL._AC_UF894,1000_QL80_.jpg', // orange tulip flower
        },
        {
            id: 22,
            brand: 'Floral Essence',
            name: 'Red Orchid Beauty',
            flowerType: 'Orchid',
            discountPrice: 1300,
            originalPrice: 1550,
            category: 'flower',
            image: 'https://b2866409.smushcdn.com/2866409/wp-content/uploads/2022/12/bt_fl_1006-300x300.png?lossy=1&strip=1&webp=1', // red orchid flower
        },
        {
            id: 23,
            brand: 'Blossom Hut',
            name: 'Elegant Orchid Bouquet',
            flowerType: 'Orchid',
            discountPrice: 1400,
            originalPrice: 1700,
            category: 'bouquet',
            image: 'https://blacktulipflowers.in/wp-content/uploads/2025/05/Purple-Velvet-Orchids-Bouquet-2.png', // orchid bouquet
        },
        {
            id: 24,
            brand: 'Lilies & More',
            name: 'Mixed Lily Bouquet',
            flowerType: 'Lily',
            discountPrice: 1150,
            originalPrice: 1400,
            category: 'bouquet',
            image: 'https://newjerseyblooms.com/cdn/shop/products/CountryCottageMixedPeruvianLilyBouquet3.jpg?v=1628615239&width=1445', // mixed lily bouquet
        },
    ];

    const [maxPrice, setMaxPrice] = useState(2000);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');

    const filteredFlowers = flowerList.filter((flower) => {
        const matchPrice = flower.discountPrice <= maxPrice;
        const matchSearch =
            flower.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            flower.brand.toLowerCase().includes(searchQuery.toLowerCase());
        const matchCategory = selectedCategory === 'all' || flower.category === selectedCategory;
        const matchType = selectedType === 'all' || flower.flowerType === selectedType;

        return matchPrice && matchSearch && matchCategory && matchType;
    });

    return (
        <div className="bg-[#f1ecef] min-h-screen mt-16">
            <Header />

            {/* Banner */}
            <div
                className="w-full h-60 bg-no-repeat bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 text-center drop-shadow-lg">
                    Bouquets & Flowers
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col lg:flex-row gap-6 mb-10">

                {/* Filters - Left */}
                <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-md max-h-[600px] min-h-[600px] overflow-auto">
                    {/* Search Input */}
                    <div className='mb-8'>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Enter name or brand"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    {/* Price Slider */}
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 mb-1">Price below</p>
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">₹{maxPrice}</h3>
                        <input
                            type="range"
                            min={500}
                            max={2000}
                            step={100}
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-full h-2 bg-gradient-to-r from-pink-500 to-pink-300 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-gray-400 mt-1">
                            <span>₹500</span>
                            <span>₹2000</span>
                        </div>
                    </div>

                    {/* Flower Type Filter */}
                    <div>
                        <p className="text-sm text-gray-600 mb-3">Filter by Flower Type</p>
                        <div className="flex flex-col gap-2">
                            {['all', 'Rose', 'Lily', 'Tulip', 'Orchid'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={`px-4 py-2 rounded-lg text-left border ${selectedType === type
                                        ? 'bg-pink-500 text-white'
                                        : 'bg-white text-gray-700 hover:bg-pink-100'
                                        }`}
                                >
                                    {type === 'all' ? 'All Types' : type}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Flower Cards Grid */}
                <div className="w-full lg:w-3/4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
                    {filteredFlowers.length > 0 ? (
                        filteredFlowers.map(flower => (
                            <div key={flower.id} className="h-full">
                                <FlowerCard flower={flower} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-600">
                            No items found matching your filters.
                        </p>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Products;