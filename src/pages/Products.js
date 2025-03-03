import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Elegant Vase", price: "$25", image:"/images/cake8.jpg" },
  { id: 2, name: "Luxury Lamp", price: "$40", image: "/images/ai2.jpg" },
];


const Products = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h3 className="text-lg mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
