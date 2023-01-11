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
  //Cantidad de productos dinamica
  const [productQuant, setProductQuant] = useState(0);

  // Btn add to cart
  const [isOnCart, setIsOnCart] = useState(false);

  // Carrito vacio
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  // Menu abierto (mobile)
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Cart abierto
  const [isOpenCart, setIsOpenCart] = useState(false);

  // Data
  const product = objectProduct;

  // Cantidad de productos luego de add to cart
  const finalProductQuant = useUpdateCart(isOnCart, productQuant);

  // Precio del producto con descuento aplicado
  const { finalPriceDiscount } = useDiscount(product.price, product.discount);

  // Precio del producto multiplicado por la cantidad final
  const finalProductPrice = useFinalPrice(finalPriceDiscount, finalProductQuant);

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
        finalPriceDiscount,
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
