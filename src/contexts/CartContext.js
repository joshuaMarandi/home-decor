import React, { createContext, useState, useContext } from "react";

// Create a Cart Context
const CartContext = createContext();

// Custom hook to use cart
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // Get cart items count dynamically
  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
