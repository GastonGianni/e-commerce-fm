import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useDiscount } from "../hooks/useDiscount";
import { useUpdateCart } from "../hooks/useUpdateCart";
import { useFinalPrice } from "../hooks/useFinalPrice";

import objectProduct from "../../data/data";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [productQuant, setProductQuant] = useState(0);

  const [isOnCart, setIsOnCart] = useState(false);

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const [isOpenCart, setIsOpenCart] = useState(false);

  const product = objectProduct;

  const finalProductQuant = useUpdateCart(isOnCart, productQuant);

  const { finalPrice } = useDiscount(product.price, product.discount);

  const finalProductPrice = useFinalPrice(finalPrice, finalProductQuant);

  const addToCart = () => {
    setIsOnCart(!isOnCart);
    pushItemCart();
  };

  const deleteItemCart = () => {
    setIsCartEmpty(true);
  };

  const pushItemCart = () => {
    setIsCartEmpty(false);
  };

  const aumentarCantidad = () => {
    productQuant >= 0 ? setProductQuant(productQuant + 1) : null;
  };

  const disminuirCantidad = () => {
    productQuant > 0 ? setProductQuant(productQuant - 1) : null;
  };

  const resetProductQuant = () => {
    setProductQuant(0);
  };

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);

  const toggleCart = () => setIsOpenCart(!isOpenCart);

  return (
    <CartContext.Provider
      value={{
        productQuant,
        aumentarCantidad,
        disminuirCantidad,
        addToCart,
        isOnCart,
        product,
        finalPrice,
        isCartEmpty,
        deleteItemCart,
        isOpenMenu,
        isOpenCart,
        toggleMenu,
        toggleCart,
        finalProductQuant,
        resetProductQuant,
        finalProductPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
