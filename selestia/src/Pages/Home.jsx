import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#4b2e1f] text-white min-h-screen">
        <Navbar />
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 md:px-12">
        <div className="absolute inset-0">
         
          <img
            src="./bg-home.jpg"
            alt="Candle"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-snug">
            Where Warmth Lives And Calm Begins
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A warm little ritual for your every day
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition">
            Discover
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#5b3927] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Every Flame Tells a Story
            </h2>
            <p className="text-gray-200 leading-relaxed mb-6">
              Our candles are more than light – they are moments captured in wax,
              with soft fragrances and serene glow. With each candle, allow
              yourself to create your own little world of calm, where time slows
              down and the soul finds its own glow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {/* Replace these with your images */}
            <img
              src="your-candle1.jpg"
              alt="Candle 1"
              className="rounded-lg shadow-md object-cover w-full h-56"
            />
            <img
              src="your-candle2.jpg"
              alt="Candle 2"
              className="rounded-lg shadow-md object-cover w-full h-56"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
}
