import React from "react";
import { useParams, Link } from "react-router-dom";
import shoes from "./data";

function ProductDetail() {
  const { id } = useParams();
  const shoe = shoes.find((s) => s.id === parseInt(id));

  if (!shoe) return <h2 className="text-center mt-10">Shoe Not Found</h2>;

  return (
    <div className="p-6">
      {/* Back button */}
      <Link to="/" className="text-blue-500 underline">← Back</Link>

      {/* Main shoe + info */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <img
          src={shoe.image}
          alt={shoe.name}
          className="w-80 h-80 object-cover rounded-lg shadow"
        />
        <div>
          <h1 className="text-3xl font-bold">{shoe.name}</h1>
          <p className="text-xl text-gray-700 mt-2">{shoe.price}</p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related images (nee share pannina mari) */}
      <h2 className="text-2xl font-bold mt-10 mb-4">More Images</h2>
      <div className="grid grid-cols-3 gap-4">
        <img src="/images/shoe1.png" alt="Related 1" className="rounded-lg shadow" />
        <img src="/images/shoe2.png" alt="Related 2" className="rounded-lg shadow" />
        <img src="/images/shoe3.png" alt="Related 3" className="rounded-lg shadow" />
      </div>
    </div>
  );
}

export default ProductDetail;
