import React from 'react'
import { useState ,useEffect } from 'react';
import Navbar from './Navbar'
import { useCart } from './CartContext';


import { ProductCard2 } from './ProductCard.js';
import shop1 from '/Users/saikrishna/Documents/Abhiram/Projects/e-comm/src/images/shop1.png';


export default function Shop() {
  const { addToCart } = useCart();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-around p-6">
    {/* Text Section */}
    <div className="text-center md:text-left text-3xl flex flex-col items-center md:items-start">
        <p className="text-xl font-semibold text-gray-700">UP TO 15% DISCOUNT</p>
        <p className="font-bold text-gray-900">Checkout The Best Fashion Style</p>
    </div>

    {/* Responsive Image */}
    <img 
        className="w-full md:w-1/2 lg:w-1/3 max-w-sm object-contain rounded-lg shadow-lg mt-4 md:mt-0" 
        src={shop1} 
        alt="Shop Our latest Products" 
    />
</div>

      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold text-center my-6'>Shop Our Latest Products 🛍</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {data.map((product) => (
            <ProductCard2 key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
}