import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import objectProduct from "../../data/data";
import { useDiscount } from "../hooks/useDiscount";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [productQuant, setProductQuant] = useState(0);

  const [isOnCart, setIsOnCart] = useState(false);

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const product = objectProduct;

  const { finalPrice } = useDiscount(product.price, product.discount);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
