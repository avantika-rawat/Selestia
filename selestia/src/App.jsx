import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Candles from "./Pages/Products/Candles";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/candles" element={<Candles />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
