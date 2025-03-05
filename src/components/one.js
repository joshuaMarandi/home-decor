import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext"; // Import Cart Context

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = [
      { id: 1, name: "Vase 1", image: "/images/1.jpg", description: "Beautiful ceramic vase.", price: 25.99 },
      { id: 2, name: "Vase 2", image: "/images/2.jpg", description: "Elegant porcelain vase.", price: 30.50 },
      { id: 3, name: "Lamp 1", image: "/images/3.jpg", description: "Modern table lamp.", price: 40.00 },
      { id: 4, name: "Lamp 2", image: "/images/9.jpg", description: "Stylish desk lamp.", price: 35.75 },
  { id: 5, name: "Chair 1", image: "/images/11.jpg", description: "Comfortable office chair.", price: 65.99 },
  { id: 6, name: "Chair 2", image: "/images/77.jpg", description: "Wooden armchair with cushion.", price: 120.00 },
  { id: 7, name: "Sofa 1", image: "/images/7.jpg", description: "Luxury 3-seater sofa.", price: 550.00 },
  { id: 8, name: "Sofa 2", image: "/images/44.jpg", description: "Compact 2-seater sofa.", price: 300.00 },
  { id: 9, name: "Table 1", image: "/images/55.jpg", description: "Wooden dining table for 6.", price: 200.00 },
  { id: 10, name: "Table 2", image: "/images/5.jpg", description: "Glass top coffee table.", price: 150.00 },
  { id: 11, name: "Shelf 1", image: "/images/66.jpg", description: "Open wooden shelf for display.", price: 80.00 },
  { id: 12, name: "Shelf 2", image: "/images/99.jpg", description: "Wall-mounted modern shelf.", price: 60.00 },
  { id: 13, name: "Clock 1", image: "/images/8.jpg", description: "Vintage wall clock.", price: 50.00 },
  { id: 14, name: "Clock 2", image: "/images/6.jpg", description: "Modern round wall clock.", price: 45.00 },
  { id: 15, name: "Carpet 1", image: "/images/22.jpg", description: "Soft woolen carpet.", price: 75.00 },
  { id: 16, name: "Carpet 2", image: "/images/33.jpg", description: "Traditional patterned carpet.", price: 100.00 },
  { id: 17, name: "Candle 1", image: "/images/111.jpg", description: "Scented wax candle.", price: 15.00 },
  { id: 18, name: "Candle 2", image: "/images/112.jpg", description: "Decorative candle with floral scent.", price: 18.50 },
  { id: 19, name: "Wall Art 1", image: "/images/113.jpg", description: "Abstract art painting.", price: 120.00 },
  { id: 20, name: "Wall Art 2", image: "/images/888.jpg", description: "Framed landscape painting.", price: 150.00 },

    ];
    
    const productDetail = products.find((prod) => prod.id === parseInt(id));
    setProduct(productDetail);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Add product to cart
      alert(`${product.name} has been added to your cart!`);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded" />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-green-600 font-bold text-xl mt-2">${product.price}</p>
        
        <button onClick={handleAddToCart} className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-700">
        Add to Cart
      </button>
      </div>
    </div>
  );
};

export default ProductDetails;
