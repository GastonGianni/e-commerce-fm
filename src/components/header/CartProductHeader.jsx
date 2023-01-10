import React from "react";
import DeleteIcon from "@/components/icons/DeleteIcon";
import AddBtn from "../product/descriptions/AddBtn";
import { useCartContext } from "../../context/CartContext";
import { useUpdateCart } from "../../hooks/useUpdateCart";
import { useFinalPrice } from "../../hooks/useFinalPrice";

const CartProductHeader = () => {
  const { productQuant, isOnCart, product, finalPrice, isCartEmpty, deleteItemCart } = useCartContext();

  const handleDeleteItemCart = () => {
    deleteItemCart();
  };

  const finalProductQuant = useUpdateCart(isOnCart, productQuant);
  const finalProductPrice = useFinalPrice(finalPrice, finalProductQuant);

  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:left-full md:max-w-sm md:-translate-x-full md:-translate-y-4">
      <div className="mx-4 rounded-lg bg-white shadow-2xl">
        <h4 className="p-5 font-bold">Cart</h4>
        <hr />
        {!isCartEmpty && finalProductQuant > 0 ? (
          <>
            <div className="grid grid-cols-[1fr_4fr_1fr] place-content-center gap-4 p-5">
              <img className="min-w-[55px] rounded-lg" src={product.imagesSmall[0].url} alt="" />
              <div className="flex-col">
                <h6 className="text-sm text-dark-grayish">{product.title}</h6>
                <div className="flex gap-3">
                  <span className="text-sm text-dark-grayish">
                    {finalPrice} x {finalProductQuant}
                  </span>
                  <span className="text-sm font-bold">${finalProductPrice}</span>
                </div>
              </div>
              <button onClick={handleDeleteItemCart}>
                <DeleteIcon className="hover:fill-orange-personal" />
              </button>
            </div>
            <div className="mx-auto flex w-11/12 items-center justify-center pb-4 font-bold">
              <AddBtn text={"Checkout"} icon={false} />
            </div>
          </>
        ) : (
          <>
            <div className="flex h-32 items-center justify-center">
              <h4 className="text-dark-grayish">Cart Empty</h4>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartProductHeader;
