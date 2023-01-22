import React from "react";
import MainHeader from "./components/header/MainHeader";
import MainProduct from "./components/product/MainProduct";
import CartContextProvider from "./context/CartContext";
import { Route, Routes } from "react-router";
import MainHome from "./components/home/MainHome";
import MainFooter from "./components/footer/MainFooter";

export default function App() {
  return (
    <CartContextProvider>
      <MainHeader />
      <Routes>
        <Route path="/home" element={<MainHome />} />
        <Route path="/product" element={<MainProduct />} />
      </Routes>
    </CartContextProvider>
  );
}
