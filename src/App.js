import React, { useState } from "react";
import image1 from './image/shoe1-jpeg.jpg'
import image2 from './image/spike3 (3).jpg'
import image3 from './image/spike3 (4).jpg'
import image4 from './image/spike3 (5).jpg'
import image5 from './image/shoe4-jpeg.jpg'
import image6 from './image/spike3 (2).jpg'
import image7 from './image/spike3 (8).jpg'

function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for: " + search);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-white shadow gap-3">
      {/* Logo */}
      <h1 className="text-3xl font-bold">Harish cart</h1>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-600">
        <a href="#">Women</a>
        <a href="#">Men</a>
        <a href="#">Kids</a>
        <a href="#">Sports</a>
        <a href="#">Brands</a>
        <a href="#" className="text-red-500">Sale</a>
      </nav>

      {/* 🔍 Search Box */}
      <form onSubmit={handleSearch} className="flex items-center border rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search shoes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 outline-none w-40 sm:w-60"
        />
        <button type="submit" className="bg-black text-white px-4 py-2">
          🔍
        </button>
      </form>

      {/* Cart + Wishlist */}
      <div className="flex space-x-4">
        <button>🛒</button>
        <button>❤️</button>
      </div>
    </header>
  );
}


function ProductSection() {
  return (
    <main className="flex flex-col lg:flex-row gap-10 p-10">
      {/* Left: Images */}
      <div className="flex-1">
        <img
          src={image1}
          alt="Shoe"
          className="rounded-xl shadow-lg"
        />
        <div className="flex space-x-3 mt-4">
          <img src={image2} className="w-20 rounded-lg" alt="shoe2"/>
          <img src={image3} className="w-20 rounded-lg" alt="shoe3"/>
          <img src={image4} className="w-20 rounded-lg" alt="shoe4"/>
        </div>
      </div>

      {/* Right: Details */}
      <div className="flex-1">
        <h2 className="text-3xl font-semibold">Shoes Reebok Zig Kinetica 3</h2>
        <p className="text-xl mt-2 font-bold">$199.00</p>

        {/* Colors */}
        <div className="mt-4">
          <p className="font-medium">Color: White</p>
          <div className="flex gap-2 mt-2">
            <button className="w-8 h-8 bg-gray-200 rounded-full"></button>
            <button className="w-8 h-8 bg-black rounded-full"></button>
          </div>
        </div>

        {/* Sizes */}
        <div className="mt-6">
          <p className="font-medium">Size: US Men</p>
          <div className="grid grid-cols-6 gap-2 mt-2">
            {["40", "41", "42", "43", "44", "45"].map((size) => (
              <button
                key={size}
                className="border px-3 py-2 rounded hover:bg-black hover:text-white"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-lg">
          Add to cart
        </button>

        <p className="mt-3 text-gray-500 text-sm">
          ✅ Free delivery on orders over $300
        </p>

        <button className="mt-7 w-full bg-black text-white py-3 rounded-lg">
          Buy NOW
        </button>


      </div>
    </main>
  );
}

function Reviews() {
  return (
    <section className="px-10 pb-10">
      <h3 className="text-xl font-semibold mb-4">Reviews ⭐ 4.8</h3>

      {/* Rating Bars */}
      <div className="flex gap-10 mb-6">
        <div className="flex-1 space-y-2">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-6">{star}★</span>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className={`h-2 rounded ${
                    star === 5 ? "w-[80%]" :
                    star === 4 ? "w-[50%]" :
                    star === 3 ? "w-[20%]" :
                    star === 2 ? "w-[10%]" : "w-[5%]"
                  } bg-yellow-400`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-4xl font-bold">4.8</p>
      </div>

      {/* Review List */}
      <div className="space-y-3">
        <div className="p-4 bg-white shadow rounded-lg">
          <p className="font-bold">Helen M.</p>
          <p>Excellent running shoes. Turns very sharply on the foot.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <p className="font-bold">Ann D.</p>
          <p>Good shoes 👍</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <p className="font-bold">Andrew G.</p>
          <p>Is it suitable for running?</p>
        </div>
      </div>
    </section>
  );
}

function RelatedProducts() {
  const products = [
    { name: "New Balance 8850", price: "$210.00", img: "/image/shoe3-jpeg.jpg'" },
    { name: "ASICS Gel Lyte III", price: "$196.50", img: "/image/spike3 (2).jpg" },
    { name: "Reebok Classic Leather", price: "$184.15", img: "/image/spike3 (8).jpg " },
    ]

  return (
    <section className="px-10 pb-10">
  <h3 className="text-xl font-semibold mb-4">You may also like</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <img src={image5} alt="Shoe 1" className="h-40 object-contain" />
      <h4 className="mt-2 font-semibold">causal shoe</h4>
      <p className="text-gray-600">₹4,999</p>
    </div>

    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <img src={image6} alt="Shoe 2" className="h-40 object-contain" />
      <h4 className="mt-2 font-semibold">formal shoe</h4>
      <p className="text-gray-600">₹5,499</p>
    </div>

    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <img src={image7} alt="Shoe 3" className="h-40 object-contain" />
      <h4 className="mt-2 font-semibold">spike shoe</h4>
      <p className="text-gray-600">₹6,299</p>
    </div>
  </div>
</section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 p-6 text-center text-gray-500">
      © 2025 HARISH CART Ecommerce | All Rights Reserved
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ProductSection />
      <Reviews />
      <RelatedProducts />
      <Footer />
    </div>
  );
}

export default App;
