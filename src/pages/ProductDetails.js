import React from 'react';
import { useParams } from 'react-router-dom';

// Import the products data again in ProductDetails.js
import products from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();  // This grabs the product id from the URL

  // Find the product by ID
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details p-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover mt-4 rounded-md" />
      {/* <p className="text-xl mt-4">{product.name}...</p> */}
      <p className="text-lg mt-4">Price: $68</p>
    </div>
  );
};

export default ProductDetails;
