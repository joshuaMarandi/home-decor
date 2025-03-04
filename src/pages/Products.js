import React from "react";
import { Link } from "react-router-dom";



// Import images correctly
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/9.jpg";
import img5 from "../assets/11.jpg";
import img6 from "../assets/77.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/44.jpg";
import img9 from "../assets/55.jpg";
import img10 from "../assets/5.jpg";
import img11 from "../assets/66.jpg";
import img12 from "../assets/99.jpg";
import img13 from "../assets/8.jpg";
import img14 from "../assets/6.jpg";
import img15 from "../assets/22.jpg";
import img16 from "../assets/33.jpg";
import img17 from "../assets/111.jpg";
import img18 from "../assets/112.jpg";
import img19 from "../assets/113.jpg";
import img20 from "../assets/888.jpg";

// Define products array with imported images
const products = [ 
    { id: 1, name: "Vase 1", image: img1 },
    { id: 2, name: "Vase 2", image: img2 },
    { id: 3, name: "Lamp 1", image: img3 },
    { id: 4, name: "Lamp 2", image: img4 },
    { id: 5, name: "Chair 1", image: img5 },
    { id: 6, name: "Chair 2", image: img6 },
    { id: 7, name: "Sofa 1", image: img7 },
    { id: 8, name: "Sofa 2", image: img8 },
    { id: 9, name: "Table 1", image: img9 },
    { id: 10, name: "Table 2", image: img10 },
    { id: 11, name: "Shelf 1", image: img11 },
    { id: 12, name: "Shelf 2", image: img12 },
    { id: 13, name: "Clock 1", image: img13 },
    { id: 14, name: "Clock 2", image: img14 },
    { id: 15, name: "Carpet 1", image: img15 },
    { id: 16, name: "Carpet 2", image: img16 },
    { id: 17, name: "Candle 1", image: img17 },
    { id: 18, name: "Candle 2", image: img18 },
    { id: 19, name: "Wall Art 1", image: img19 },
    { id: 20, name: "Wall Art 2", image: img20 },
];

  const Products = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">All</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">Furniture</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded">Lighting</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">Decor</button>
      </div>


      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg mt-2 font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;