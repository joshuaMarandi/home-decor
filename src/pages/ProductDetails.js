import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Elegant Vase", price: "$25", description: "A beautiful vase for your home.", image: "/images/cake8.jpg" },
  { id: 2, name: "Luxury Lamp", price: "$40", description: "A stylish lamp to light up your room.", image: "/images/ai2.jpg" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="p-10">
      <img src={product.image} alt={product.name} className="w-60 h-60 object-cover" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-lg">{product.description}</p>
      <p className="text-gray-600">{product.price}</p>
    </div>
  );
};

export default ProductDetails;
