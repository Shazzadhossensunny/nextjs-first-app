import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.brand}</p>
      <p className="text-primary font-semibold mt-1">${product.price}</p>
      <div className="mt-4 flex justify-between">
        <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          View Details
        </button>
        <button className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
