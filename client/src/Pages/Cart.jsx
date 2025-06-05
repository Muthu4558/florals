import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'

const cartItems = [
  {
    id: 1,
    title: 'Blush Rose Bouquet',
    image: 'https://bakings.in/wp-content/uploads/2025/04/Classic-Love-Pink-Roses.jpg',
    color: 'Blush Pink',
    price: 1350,
    quantity: 1,
  },
  {
    id: 2,
    title: 'Lily Bloom Basket',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06mDZ8rDsbBblrtTPDe-CPGCjE_A-56HCvw&s',
    color: 'Ivory White',
    price: 1650,
    quantity: 2,
  },
]

const Cart = () => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className='bg-[#f1ecef] min-h-screen font-[Poppins] mt-16'>
      <Header />

      <div className='max-w-5xl mx-auto px-4 py-10'>
        <h2 className='text-3xl font-bold text-center text-pink-900 mb-8'>
          🌷 Your Flower Cart
        </h2>

        <div className='flex flex-col gap-6'>
          {cartItems.map(item => (
            <div
              key={item.id}
              className='flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition gap-4 md:gap-6'
            >
              <div className='flex items-center gap-4 w-full md:w-[40%]'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-20 h-20 object-cover rounded-xl'
                />
                <div>
                  <h3 className='font-semibold text-lg text-pink-900'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-pink-700'>{item.color}</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <button className='text-pink-600'>
                  <FaMinus />
                </button>
                <span className='text-lg'>{item.quantity}</span>
                <button className='text-pink-600'>
                  <FaPlus />
                </button>
              </div>

              <p className='font-bold text-pink-800'>₹{item.price * item.quantity}</p>

              <button className='text-red-400 hover:text-red-600'>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className='text-right text-xl font-bold text-pink-900 mt-6'>
          Subtotal: ₹{subtotal}
        </div>

        <div className='mt-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <button className='w-full sm:w-auto bg-white border border-pink-300 text-pink-700 font-medium px-6 py-3 rounded-xl hover:bg-pink-100 transition'>
            ← Continue Shopping
          </button>
          <button className='w-full sm:w-auto bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-pink-700 transition'>
            Proceed to Checkout →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Cart
