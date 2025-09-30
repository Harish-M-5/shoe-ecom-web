import React from "react";
import { Link } from "react-router-dom";
import shoes from "./data";

function ProductList() {
  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
      {shoes.map((shoe) => (
        <Link to={`/product/${shoe.id}`} key={shoe.id} className="shadow rounded-lg overflow-hidden hover:scale-105 transition">
          <img src={shoe.image} alt={shoe.name} className="w-full h-40 object-cover" />
          <div className="p-3">
            <h3 className="font-semibold">{shoe.name}</h3>
            <p className="text-gray-600">{shoe.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
