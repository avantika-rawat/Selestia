// src/pages/CandlesPage.jsx
import CandleCard from "../../Components/CandleCard";
import Navbar from "../../Components/Navbar";
const candles = [
  { id: 1, title: "Blue Teddy bear Candle", price: 199, image: "./candle-img/teady-bear.jpeg" },
  { id: 2, title: "Rainbow Candle", price: 250, image: "./candle-img/rainbow-candle.jpeg" },
  { id: 3, title: "Rose Bouquet Candle", price: 188, image: "./candle-img/rose-boquet-candle.jpeg" },

  { id: 4, title: "Baby Pink Rose Candle", price: 79, image: "./candle-img/babypink-rose-candle.jpeg" },
  { id: 5, title: "Light Blue Rose Candle", price: 79, image: "./candle-img/blue-rose-candle.jpeg" },
  { id: 6, title: "Pink Rose Candle (M)", price: 89.0, image: "./candle-img/pink-big-rose-candle.png" },
  { id: 7, title: "Blue Rose Candle (M)", price: 89.0, image: "./candle-img/blue-big-rose-candle.png" },
  { id: 8, title: "Red Rose Candle", price: 79, image: "./candle-img/red-rose-candle.jpeg" },
  { id: 9, title: "Purple Rose Candle (M)", price: 89.0, image: "./candle-img/purple-big-rose-candle.png" },
  

   { id:10, title: "Baby Pink Designed Rose Candle", price: 109, image: "./candle-img/babypink-designed-rose-candle.png" },
  { id: 11, title: "Light Blue Designed Rose Candle", price: 79, image: "./candle-img/lightblue-designed-rose-candle.png" },
  { id: 12, title: "Rose Candle Combo of 3 (M)", price: 249, image: "./candle-img/combo-big-roses-candles.png" },
  { id: 13, title: "Sunflower Candle", price: 60.0, image: "./candle-img/sunflower-candle.png" },
  { id: 14, title: "Hot Pink Rose Candle", price: 79, image: "./candle-img/darkpink-rose-designed-candle.png" },
  { id: 15, title: "Purple Rose Candle (M)", price: 120.0, image: "./candle-img/pink&blue-rose-candle.png" },
  { id: 15, title: "Babypink Heart Candle", price: 60.0, image: "./candle-img/babypink-heart-small-candle.png" },

  { id: 15, title: "Purple Rose Candle (M)", price: 120.0, image: "./candle-img/pink&blue-rose-candle.png" },
  { id: 15, title: "Red Heart Candle", price: 60.0, image: "./candle-img/heart-red-candle.png" },
  { id: 15, title: "Laddo Candle (2pcs)", price: 90.0, image: "./candle-img/laddo-candle.png" },
  { id: 15, title: "Pink Flower Candle", price: 90.0, image: "./candle-img/pink-flower-candle.png" },

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
