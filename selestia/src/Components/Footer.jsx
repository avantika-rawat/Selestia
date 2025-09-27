// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#f9f6f1] border-t border-gray-300 py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Shop Section */}
        <div>
          <h3 className="font-semibold mb-3">SHOP</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Candles</a></li>
            
          </ul>
        </div>

        {/* Info Section */}
        <div>
          <h3 className="font-semibold mb-3">INFO</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">About</a></li>
            {/* <li><a href="#" className="hover:text-black">Returns</a></li>
            <li><a href="#" className="hover:text-black">Delivery</a></li>
            <li><a href="#" className="hover:text-black">Payment</a></li> */}
          </ul>
        </div>

        {/* Brand + Newsletter */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif mb-4">Selestia</h2>
          <p className="text-sm mb-3">Contact.</p>
          <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 flex-grow outline-none text-sm bg-transparent"
            />
            <button className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800">
              →
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold mb-3">CONTACT</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Instagram</a></li>
            <li><a href="#" className="hover:text-black">Pinterest</a></li>
          </ul>
        
        </div>
      </div>
    </footer>
  );
}
