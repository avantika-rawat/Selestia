// src/components/CandleCard.jsx
export default function CandleCard({ image, title, price }) {
  return (
    <div className="w-full max-w-[250px] flex flex-col items-center bg-white  shadow-md rounded-xl p-3 hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-50 h-65 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">₹{price}</p>
      <button className="mt-3 w-full border border-gray-800 py-2 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-white transition">
       Buy
      </button>
    </div>
  );
}
