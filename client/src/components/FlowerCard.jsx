import { Heart } from 'lucide-react';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const FlowerCard = ({ flower }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md text-center px-4 py-6 w-full max-w-xs mx-auto">

      {/* Top Left Flower Type Badge */}
      <div className="absolute top-3 left-3 bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        {flower.flowerType}
      </div>

      {/* Top Right Cart Icon */}
      <div className="absolute top-3 right-3 bg-pink-500 p-2 rounded-full text-white text-sm shadow-md cursor-pointer">
        <Heart size={16} />
      </div>

      {/* Flower Image */}
      <img
        src={flower.image}
        alt={flower.name}
        className="w-36 h-36 mx-auto object-cover mb-4 bg-gray-100 rounded"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found";
        }}
      />

      {/* Flower Details */}
      <p className="text-sm text-gray-500">{flower.brand}</p>
      <h3 className="text-md font-semibold text-gray-800">{flower.name}</h3>

      {/* Price Section */}
      <div className="my-3">
        <span className="text-xl font-bold text-gray-900">Rs. {flower.discountPrice.toFixed(2)}</span>
        <span className="text-sm text-gray-400 line-through ml-2">Rs. {flower.originalPrice.toFixed(2)}</span>
      </div>

      {/* Add to Cart Button */}
      <button className="bg-pink-500 text-white text-sm px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
        Add To Cart ➤
      </button>
    </div>
  );
};

export default FlowerCard;
