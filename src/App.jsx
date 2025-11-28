import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";


// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MissionVision from "./pages/MissionVision.jsx";
import Sectors from "./pages/Sectors.jsx";
import BrandsProducts from "./pages/BrandsProducts.jsx";
import CoffeeSolutions from "./pages/CoffeeSolutions.jsx";
import Contact from "./pages/Contact.jsx";

import WhatsAppFloat from "./components/WhatsappFloat.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay – you can tweak this (in ms)
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="page">
      <ScrollReveal />
      <Navbar />
      <main className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/brands-products" element={<BrandsProducts />} />
          <Route path="/coffee-solutions" element={<CoffeeSolutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
       <WhatsAppFloat />
    </div>
  );
}
