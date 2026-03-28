// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services"; // services.jsx
import Contact from "./pages/contact"; // contact.jsx (بحرف صغير)
import Packages from "./pages/packages"; // packages.jsx (بحرف صغير)
import Portfolio from "./pages/portfolio"; // إضافة صفحة البورتفوليو

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/portfolio" element={<Portfolio />} /> {/* رابط البورتفوليو */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;