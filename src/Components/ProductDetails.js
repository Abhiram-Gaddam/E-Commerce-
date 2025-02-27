import React from "react";
import { useState , useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";
import { useCart } from "./CartContext";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";

export default function ProductDetails() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const { addToCart } = useCart()
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
    // Find the product by ID
    const product = data.find((item) => item.id === parseInt(productId));

    // Handle Buy Now Button
    const handleBuy = () => {
        toast.success('Bro, you just bought a product!');
        navigate("/shop"); // Redirect to the shop page
    };

    // Handle Back Button
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    if (!product) {
        return <h2 className="text-center text-2xl">Product not found</h2>;
    }

    return (
      <> 
      <Navbar></Navbar>
        <div className="min-h-screen flex flex-col bg-gray-100 p-6">
            {/* Back Button */}
            <button onClick={handleBack} className="absolute top-4 left-4 bg-gray-300 px-4 py-2 rounded-lg">
                ⬅ Back
            </button>

            {/* Product Details Section */}
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto w-full">
                {/* Product Image */}
                <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full max-h-[500px] object-contain rounded-lg"
                    />
                </div>

                {/* Product Information */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                        <p className="text-lg text-gray-700 my-4">{product.description}</p>
                      <div className="flex flex-row-reverse justify-around" >  <p className="text-xl font-semibold text-green-600"> price : $ {product.price}</p>
                        <p className="text-sm text-gray-500 mt-2">Category: <span className="text-black "  > { product.category.toUpperCase()|| "General"}</span></p></div>
                          {product.rating ? (
                                <div className="flex items-center mt-2">
                                  <span className="text-yellow-500 flex">
                                    {Array.from({ length: 5 }, (_, i) => (
                                      <FaStar
                                        key={i}
                                        className={i < Math.round(product.rating.rate) ? "text-yellow-500" : "text-gray-300"}
                                      />
                                    ))}
                                  </span>
                                  <span className="text-gray-600 text-sm ml-2">
                                    ({product.rating.count} reviews)
                                  </span>
                                </div>
                              ) : (
                                <p className="text-gray-500 text-sm mt-2">No ratings available</p>
                              )}
                    </div>

                    {/* Buy Now Button */}
                    <button
                        onClick={ handleBuy}
                        className="bg-blue-500 text-white font-bold text-lg py-3 w-full rounded-lg mt-6 hover:bg-blue-600 transition duration-300"
                    >
                        Buy Now
                    </button>
                    <button
                        onClick={()=>addToCart(product)}
                        className=" text-gray-500 font-bold text-lg py-3 w-full rounded-lg mt-6 hover:bg-gray-300 hover:text-black transition duration-300"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div></>
    );
}
