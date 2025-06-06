import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import { ToastProvider } from "./Components/toastContext";

const App = () => {
  return (
    <ToastProvider>
     <Router basename="/HT_portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/my-project" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </ToastProvider>
  );
};

export default App;
