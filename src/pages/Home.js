
import React from "react";
import { useNavigate } from "react-router-dom";
// import backgroundImage from "../assets/ai_bc.jpg";

function Home() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <div
    className="h-screen flex flex-col justify-center items-center text-white text-center px-6"
    style={{ backgroundImage: "url('/images/1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <h1 className="text-5xl font-extrabold shadow-md">
        Welcome to Home Decor Shop
      </h1>
      <p className="mt-4 text-lg max-w-2xl">
        Discover a world of elegant and stylish home decor items to beautify
        your space. From luxury vases to modern furniture, we have it all!
      </p>
      {/* ✅ Click event navigates to /products */}
      <button 
        onClick={() => navigate("/products")} 
        className="mt-6 px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 transition"
      >
        Shop Now
      </button>
    </div>
  );
}


export default Home;
