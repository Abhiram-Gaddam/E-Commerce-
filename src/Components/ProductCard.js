
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useCart } from "./CartContext";


export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10 }} 
      className="relative p-6 bg-white border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg group"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg">
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain rounded-md transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-gray-700 text-sm mt-1 line-clamp-2">
          {product.description || "A premium quality product for your needs."}
        </p>
      </div>

      {/* Rating Section */}
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

      {/* Price Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white py-2 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-lg font-bold">${product.price}</p>
      </div>

      {/* Action Buttons - Now Fully Responsive */}
      <div className="mt-4 flex flex-col sm:flex-row justify-around pb-8 gap-3">
        <Link
          to={`/product/${product.id}`}
          className="w-full sm:w-auto px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md shadow-md transition-all duration-300 hover:bg-blue-700 text-center"
        >
          View Details
        </Link>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
          className="w-full sm:w-auto px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-md shadow-md transition-all duration-300 hover:bg-green-700"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};




export const ProductCard2 = ({ product, addToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10 }}
      className="relative p-4 bg-white border rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
    >
      {/* Product Image */}
      <div className="relative w-full h-48">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate h-[24px]">
          {product.title}
        </h3>
        <p className="text-gray-700 text-sm mt-1 leading-relaxed line-clamp-2 overflow-hidden text-ellipsis h-[40px]">
          {product.description || "A premium quality product for your needs."}
        </p>
      </div>

      {/* Hover Effect: Price, Rating & Add to Cart */}
      <div className="absolute bottom-0 left-0 w-full bg-black text-white px-4 py-3 opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col items-center">
        <div className="flex justify-between w-full">
          <span className="text-lg font-bold">${product.price}</span>
          {product.rating && (
            <span className="text-sm">{product.rating.rate} ★ ({product.rating.count})</span>
          )}
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition w-full"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

// export default ProductCard2;
