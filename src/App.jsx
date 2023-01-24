import React from "react";
import MainHeader from "./components/header/MainHeader";
import MainProduct from "./components/product/MainProduct";
import CartContextProvider from "./context/CartContext";
import { Route, Routes } from "react-router";
import MainHome from "./components/home/MainHome";
import MainFooter from "./components/footer/MainFooter";
import MainCategories from "./components/categories/MainCategories";

export default function App() {
  return (
    <CartContextProvider>
      <MainHeader />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/product" element={<MainProduct />} />
        <Route path="/categories" element={<MainCategories />} />
      </Routes>
    </CartContextProvider>
  );
}
