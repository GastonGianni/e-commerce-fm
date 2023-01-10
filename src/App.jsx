import React from "react";
import MainHeader from "./components/header/MainHeader";
import MainProduct from "./components/product/MainProduct";
import CartContextProvider from "./context/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <MainHeader />
      <MainProduct />
    </CartContextProvider>
  );
}
