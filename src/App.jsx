import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import i18n from "./i18n/i18next";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import BasketPage from "./pages/BasketPage";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/gallery" element={<GalleryPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/basket" element={<BasketPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
