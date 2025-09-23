import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mt-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-serif font-bold">
          <Link to="/">Selestia</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/about" className="transition-colors duration-500  hover:text-gray-300">About</Link></li>
          <li><Link to="/candles" className="transition-colors duration-500 hover:text-gray-300">Candles</Link></li>
          <li><Link to="/shop" className="transition-colors duration-500 hover:text-gray-300">Shop</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-[#3a2418] px-6 py-4 space-y-4 text-lg">
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/candles" onClick={() => setMenuOpen(false)}>Candles</Link></li>
          <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
        </ul>
      )}
    </nav>
  );
}
