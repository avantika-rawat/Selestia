// src/pages/CandlesPage.jsx
import CandleCard from "../../Components/CandleCard";
import Navbar from "../../Components/Navbar";
const candles = [
  { id: 1, title: "Blue Teddy bear Candle", price: 199, image: "./candle-img/teady-bear.jpeg" },
  { id: 2, title: "Rainbow Candle", price: 250, image: "./candle-img/rainbow-candle.jpeg" },
  { id: 3, title: "Rose Bouquet Candle", price: 188, image: "./candle-img/rose-boquet-candle.jpeg" },
  { id: 4, title: "Dark Amber Scented Candle", price: 188, image: "./candle-img/bouquet-candle-stand.jpeg" },
  { id: 5, title: "Aqua Bergamot Scented", price: 170, image: "./candle-img/teady-bear.jpeg" },
  { id: 6, title: "Striped Ceramic Decorative", price: 25.0, image: "./candle-img/teady-bear.jpeg" },
  { id: 7, title: "Signature Collection III", price: 25.0, image: "./candle-img/teady-bear.jpeg" },
  { id: 8, title: "Absolute Linen Scented", price: 25.0, image: "./candle-img/teady-bear.jpeg" },
  { id: 9, title: "Candle White Tea", price: 25.0, image: "./candle-img/teady-bear.jpeg" },
];

export default function Candles() {
  return (
    <>
 <Navbar/>
    <div className="min-h-screen bg-[#f9f6f1]  px-6 py-10">
     
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center text-gray-800 mt-10 mb-8">
        Candles
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-items-center px-30">
        {candles.map((candle) => (
          <CandleCard
            key={candle.id}
            image={candle.image}
            title={candle.title}
            price={candle.price}
          />
        ))}
      </div>
    </div>
    </>
    
  );
}
