import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products"; // Ensure this path is correct

const ProductDetails = () => {
  // Get product ID from URL params
  const { id } = useParams();

  // Find the product by ID
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">{product.name}</h2>
      
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Description</h3>
          <p className="text-lg mb-6">{product.description || "No description available."}</p>
          
          <h3 className="text-xl font-semibold mb-4">Price: ${product.price}</h3>

          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
