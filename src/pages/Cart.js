import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Group items by ID
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((product) => product.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const totalPrice = groupedCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Function to place order
  const placeOrder = async () => {
    setLoading(true);
    setMessage("");

    const orderData = {
      items: groupedCart,
      total: totalPrice,
    };

    try {
      const response = await fetch("http://localhost/shop-api/place_order.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("✅ Order placed successfully!");
      } else {
        setMessage("❌ Failed to place order.");
      }
    } catch (error) {
      setMessage("❌ Error placing order. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Shopping Cart</h2>

      {groupedCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-grid">
            {groupedCart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>💲{item.price} x {item.quantity}</p>
                  <p>Subtotal: 💲{(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>❌ Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Place Order Button */}
          <div className="cart-total">
            <h3>Total Price: 💲{totalPrice.toFixed(2)}</h3>
            <button className="order-btn" onClick={placeOrder} disabled={loading}>
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>
          {message && <p className="order-message">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default Cart;
