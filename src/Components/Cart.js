// import React from 'react';
// import Navbar from './Navbar';
// import { useCart } from './CartContext';


// function Cart({ cartItems ,setCartItems}) {
//   let handeldelete = (index) => {
//     setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
//     toast.info("Item Removed from the Cart")
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto mt-8">
//         <h1 className="text-5xl font-bold text-black fontsss  text-center mb-6">🛒 Your Cart</h1>
//         {cartItems.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {
//             cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="cart-item p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <img
//                   src={item.image || '/path-to-placeholder-image'}
//                   alt={item.title}
//                   className="w-full h-48 object-contain rounded-md mb-4"
//                 />
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-600 mb-4">{item.description}</p> 
//                 <p className="text-green-600 font-bold">{item.Cost}$</p>
//                 <button
//                   onClick={() => handeldelete(index)}
//                   className=" inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"> Delete </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//             <><div className='flex flex-col  justify-center items-center' >
//             <img src={Add_to_cart} className='w-2/3 h-96'alt='Cart_IMAGE' ></img>
//           <p className="text-center fontss text-3xl text-gray-600">Your cart is empty. Add some items!</p>
//           </div>
          
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default Cart;

// import React from "react";
// import { useCart } from "../Components/CartContext";
import React from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar";
import carts from "/Users/saikrishna/Documents/Abhiram/Projects/e-comm/src/images/cart.gif"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
    const navigate = useNavigate()
    const handleBuy =()=>{
     if (cartItems.length >=1) {
          toast.success('Bro, you just bought a product!');
          navigate("/shop");
          
          clearCart()
        
      }
      else {
        toast.info("no  items in the cart ")
      }
      
    }
    return (
        <>
            <Navbar />
            <div className="flex justify-between md:flex-row flex-col p-6">
                {/* Items Section */}
                <div className=" md-w-2/3 w-4/5 bg-white p-6 rounded shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
                    {cartItems.length === 0 ? (
                        <div className="text-center py-10">
                            <img src={carts} alt="Empty Cart" className="mx-auto w-48" />
                            <p className="text-lg mt-4">Your cart is empty!</p>
                        </div>
                    ) : (
                        <ul className="rounded-md  " >
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex justify-between rounded-md md:gap-2 items-center p-4 border-b">
                                    {/* Product Image */}
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                    {/* Product Name */}
                                    <span className="text-sm overflow-hidden font-medium ">{item.title}</span>
                                    {/* Quantity Controls */}
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-3 py-2  rounded mx-2"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-bold">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-3 py-2 bg-white rounded mx-2"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* Bill Summary */}
                <div className=" md:w-1/3 w-4/5   ml-3 bg-gray-100 p-6 rounded shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">Bill Summary</h3>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between py-2">
                                <span>{item.name} x {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-4" />
                    <div className="flex justify-between text-xl font-bold">
                        <span>Total:</span>
                        <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={handleBuy}
                      className="w-full mt-6 bg-blue-500 text-white py-3 rounded hover:bg-blue-600">
                        Proceed to Checkout
                    </button>

                </div>
            </div>
        </>
    );
};

export default Cart;
