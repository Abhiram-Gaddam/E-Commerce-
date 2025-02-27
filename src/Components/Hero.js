import React, { useState, useEffect } from "react";
import "./Hero.css";
import { mains } from "./data.js";
import Navbar from "./Navbar.js";
import {ProductCard} from "./ProductCard.js"; 
// import { useCart } from './CartContext';
// Import ProductCard Component

function Hero() {
  // const { addToCart } = useCart();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([data]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ➡️ Handle Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mains.length);
  };

  // ⬅️ Handle Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mains.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        console.log("Fetched Data:", json);
        setData(json);

        // Default category: Electronics
        const defaultItems = json.filter((item) => item.category === "electronics");
        setFilteredData(defaultItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dataFilter = (type) => {
    const fd = data.filter((js) => js.category === type);
    setFilteredData(fd);
  };

  return (
    <>
      <Navbar />
      <div className="carousel-container w-full mx-auto mt-8 overflow-hidden relative">
        <div
          className="carousel-track flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {mains.map((src, index) => (
            <div key={index} className="carousel-slide min-w-full">
              <img
                src={src.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          ❯
        </button>
      </div>


      {/* 🔥 Deals Section */}
      <section className="deals-container py-8">
        <h2 className="text-3xl font-bold text-black text-center mb-6">
          🔥 Top Deals of the Day
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center mb-6">
          {["electronics", "jewelery", "women's clothing", "men's clothing"].map(
            (category) => (
              <button
                key={category}
                onClick={() => dataFilter(category)}
                className="px-4 py-2 m-2  border border-gray-500 hover:border-white  text-gray-500 active:text-white active:bg-green-500  rounded-lg hover:bg-green-500 hover:text-white transition"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Display Filtered Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 px-4">
          {filteredData.map((product) => (
            <ProductCard key={product.id} product={product}  />
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
