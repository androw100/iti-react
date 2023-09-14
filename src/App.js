import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Hero from "./components/Hero";
import Checkout from "./components/Checkout";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/Goshop" element={<Home />}></Route>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
