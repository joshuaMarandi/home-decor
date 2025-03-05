import React from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Access cart

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-4 shadow-md mb-4 rounded-lg">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-green-600">${item.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-4">
            Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
