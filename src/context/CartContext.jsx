import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [productQuant, setProductQuant] = useState(0);

  const aumentarCantidad = () => {
    productQuant >= 0 ? setProductQuant(productQuant + 1) : null;
  };

  const disminuirCantidad = () => {
    productQuant > 0 ? setProductQuant(productQuant - 1) : null;
  };

  return (
    <CartContext.Provider
      value={{ productQuant, aumentarCantidad, disminuirCantidad }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
