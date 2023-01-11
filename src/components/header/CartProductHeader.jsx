import React from "react";
import DeleteIcon from "@/components/icons/DeleteIcon";
import AddBtn from "../product/descriptions/AddBtn";
import CloseIcon from "../icons/CloseIcon";
import { useCartContext } from "../../context/CartContext";

const CartProductHeader = () => {
  const { product, finalPriceDiscount, isCartEmpty, deleteItemCart, toggleCart, resetProductQuant, finalProductQuant, finalProductPrice } =
    useCartContext();

  const handleDeleteItemCart = () => {
    deleteItemCart();
    resetProductQuant();
  };

  return (
    <section className="absolute top-[125%] left-0 z-20 w-full md:left-full md:max-w-sm md:-translate-x-full md:-translate-y-4">
      <div className="mx-4 rounded-lg bg-white shadow-2xl">
        <div className="flex justify-between">
          <h4 className="p-5 font-bold">Cart</h4>
          <button className="-translate-x-5">
            <CloseIcon onClick={toggleCart} fill="gray" />
          </button>
        </div>
        <hr />
        {!isCartEmpty && finalProductQuant > 0 ? (
          <>
            <div className="grid grid-cols-[1fr_4fr_1fr] place-content-center gap-4 p-5">
              <img className="min-w-[55px] rounded-lg" src={product.imagesSmall[0].url} alt="" />
              <div className="flex-col">
                <h6 className="text-sm text-dark-grayish">{product.title}</h6>
                <div className="flex gap-3">
                  <span className="text-sm text-dark-grayish">
                    {finalPriceDiscount} x {finalProductQuant}
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
