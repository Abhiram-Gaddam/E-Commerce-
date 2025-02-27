// CartContext.js
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
            toast.success(`Added ${item.title} to cart!`);

    };

    // Function to remove an item from cart
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
        toast.info("Item Removed from the Cart");

    };

    const clearCart = () => {
        setCartItems([]);
    };

    // Function to update quantity
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );


    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity ,clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
// export const useCart = () => useContext(CartContext);
