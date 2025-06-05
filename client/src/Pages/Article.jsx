import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Article = () => {
    return (
        <div className="bg-[#f1ecef] text-[#222] mt-16 min-h-screen flex flex-col">
            <Header />

            <main className="font-serif flex-grow">
                {/* Newspaper Header */}
                <div className="max-w-6xl mx-auto text-center pt-10 pb-6 border-b border-gray-400 px-4">
                    <h1 className="text-5xl font-bold uppercase tracking-wide mb-2">
                        The Daily Bloom
                    </h1>
                    <p className="italic text-gray-600">
                        Bringing Floral News to Your Doorstep • June 2025 Edition
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10">
                    {/* Left Column: Headlines */}
                    <div className="space-y-8">
                        <article className="border-b border-gray-300 pb-6">
                            <h2 className="text-2xl font-bold mb-2">🌹 A Renaissance in Roses</h2>
                            <p className="text-sm leading-relaxed">
                                Experts report a 40% increase in rose bouquet demand this year. From romantic
                                gestures to self-love, the language of roses continues to captivate hearts.
                            </p>
                        </article>

                        <article className="border-b border-gray-300 pb-6">
                            <h2 className="text-2xl font-bold mb-2">🌷 Tulips Take Over Spring</h2>
                            <p className="text-sm leading-relaxed">
                                The tulip trend is back with vibrant colors and creative arrangements sweeping
                                Instagram and floral boutiques.
                            </p>
                        </article>

                        <article className="border-b border-gray-300 pb-6">
                            <h2 className="text-2xl font-bold mb-2">💐 Behind the Bouquet</h2>
                            <p className="text-sm leading-relaxed">
                                Go behind the scenes of our floral designers as they create custom bouquets for weddings,
                                corporate events, and everyday joy.
                            </p>
                        </article>
                    </div>

                    {/* Middle Column: Feature Article */}
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold mb-6 leading-tight">
                            🌼 From Farm to Vase: The Journey of a Flower
                        </h2>
                        <img
                            src="https://theflora.in/cdn/shop/articles/pexels-brett-sayles-992734_1.jpg?v=1738243273&width=2048"
                            alt="Flower journey"
                            className="rounded shadow-md mb-6 w-full object-cover max-h-[350px]"
                        />
                        <p className="text-sm leading-relaxed mb-4">
                            Ever wondered how your favorite flower ends up at your doorstep? The journey begins in serene
                            countryside farms where skilled hands carefully nurture each stem. From soil to sunshine,
                            the care continues as flowers travel through local markets to our shop floors.
                        </p>
                        <p className="text-sm leading-relaxed">
                            At The Daily Bloom, we ensure freshness, fragrance, and flair in every delivery. Join us in
                            celebrating the humble beginnings and blooming beauty of nature’s gift.
                        </p>
                    </div>

                    {/* Right Column: Quick News */}
                    <aside className="space-y-6 text-sm">
                        <section className="bg-white border border-gray-300 p-5 rounded shadow-sm">
                            <h3 className="font-bold mb-2">🌻 New: Sunflower Sundays!</h3>
                            <p>Enjoy discounts on all sunflower bouquets every Sunday. Brighten your home for less.</p>
                        </section>
                        <section className="bg-white border border-gray-300 p-5 rounded shadow-sm">
                            <h3 className="font-bold mb-2">📰 Floral Facts</h3>
                            <p>Did you know lilies symbolize purity and tulips represent perfect love?</p>
                        </section>
                        <section className="bg-white border border-gray-300 p-5 rounded shadow-sm">
                            <h3 className="font-bold mb-2">🌼 Flower of the Month: Orchid</h3>
                            <p>Elegant and exotic, orchids steal the spotlight with minimal care and maximum charm.</p>
                        </section>
                    </aside>
                </div>
            </main>

            {/* Comment Section */}
            <section className="bg-white max-w-6xl mx-auto p-6 md:p-8 rounded-lg shadow-md border mt-10 mb-16 w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Leave a Comment</h2>

                <div className="flex flex-col md:flex-row gap-12">

                    {/* Left Content Panel with Image */}
                    <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6 px-4 md:px-0">
                        <img
                            src="https://media.istockphoto.com/id/1394440950/photo/natural-view-cosmos-filed-and-sunset-on-garden-background.webp?b=1&s=612x612&w=0&k=20&c=o3n-h2j4aBnaDqKeY-876cTRm1DLOsZcCjcfDZf_9TQ="
                            alt="Floral bouquet"
                            className="rounded-lg shadow-lg w-full max-w-sm object-cover"
                        />
                        <div className="text-gray-700 max-w-md text-center md:text-left">
                            <h3 className="text-2xl font-semibold mb-4">We'd love to hear from you!</h3>
                            <p className="mb-3 leading-relaxed">
                                Share your thoughts, suggestions, or experiences about our floral stories. Your feedback helps us bloom better.
                            </p>
                        </div>
                    </div>

                    {/* Right: Comment Form */}
                    <form className="md:w-1/2 flex flex-col space-y-6 px-4 max-w-md mx-auto md:mx-0">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 text-base"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 text-base"
                        />
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none text-base"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition duration-200"
                        >
                            Post Comment
                        </button>
                    </form>
                </div>

                <p className="italic text-sm text-center text-gray-500 mt-8">
                    *Please be respectful and kind. We moderate comments to keep our community positive.*
                </p>
            </section>

            <Footer />
        </div>
    );
};

export default Article;
