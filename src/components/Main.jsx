import React from "react";
import Container from "./Child/Container";
import Header from "./Child/Header";
import Footer from "./Child/Footer";
import Cart from "./Child/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Container />} />
          <Route path="/main" element={<Container />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
//xoas
export default Main;
