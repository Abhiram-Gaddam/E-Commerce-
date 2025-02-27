import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
// import { NotificationManager} from 'react-notifications';

export default function Navbar() {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white  opacity-70  rounded shadow-xl p-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-lime-500 text-2xl font-bold sm:text-5xl"><Link to="/" > My E-Comm  </Link></div>

          <div className="hidden space-x-4 md:flex">
            <Link
              to="/"
              className="fontss text-black font-bold text-2xl hover:text-green-600 hover:underline"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="fontss text-black font-bold text-2xl hover:text-green-600 hover:underline"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="fontss text-black font-bold text-2xl hover:text-green-600 hover:underline"
            >
              About
            </Link>
            
          </div>

          {/* Cart Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Link
              to="/cart"
              className="flex hov justify-center items-center px-4 py-2 gap-4 bg-black outline outline-3 outline-black outline-offset-[-3px] rounded-md border-none cursor-pointer transition-all duration-400 hover:bg-transparent"
            > <span className="flex p-1 items-center hover:text-black">
              <FiShoppingCart className="mr-2 hov  text-lg text-white hover:text-black  " />
              <p className="text-white font-bold text-base transition-all duration-400 hover:text-black hidden md:flex" >Cart</p></span>
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden">
              <FaBars className="text-gray-700 text-2xl hover:text-gray-900" />
            </button>
          </div>
        </div>

        {/* Mobile Navbar Links */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-md">
            <Link
              to="/"
              className="block px-4 py-2 text-black font-bold hover:text-green-600 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-4 py-2 text-black font-bold hover:text-green-600 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-black font-bold hover:text-green-600 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/cart"
              className="block px-4 py-2 text-black font-bold hover:text-green-600 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Cart
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
