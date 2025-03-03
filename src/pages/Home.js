import React from "react";

function Home() {
  return (
    <div
      className="bg-[url('/images/ai_bc.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-6"
    >
      <h1 className="text-5xl font-extrabold shadow-md">
        Welcome to Home Decor Shop
      </h1>
      <p className="mt-4 text-lg max-w-2xl">
        Discover a world of elegant and stylish home decor items to beautify
        your space. From luxury vases to modern furniture, we have it all!
      </p>
      <button className="mt-6 px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 transition">
        Shop Now
      </button>
    </div>
  );
}

export default Home;



// import { Link } from "react-router-dom";

// const products = [
//   { id: 1, name: "Elegant Vase", price: "$25", image: "https://via.placeholder.com/150" },
//   { id: 2, name: "Luxury Lamp", price: "$40", image: "https://via.placeholder.com/150" },
// ];

// const Products = () => {
//   return (
//     <div className="p-10">
//       <h2 className="text-2xl font-bold mb-4">Our Products</h2>
//       <div className="grid grid-cols-2 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded-lg shadow">
//             <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
//             <h3 className="text-lg mt-2">{product.name}</h3>
//             <p className="text-gray-600">{product.price}</p>
//             <Link to={`/products/${product.id}`}>
//               <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">View Details</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
