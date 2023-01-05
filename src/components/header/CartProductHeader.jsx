import React from "react";
import imgCartSmall from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";
import AddBtn from "../product/descriptions/AddBtn";
import { createContext } from "react";

const CartProductHeader = () => {
  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:top-[80%] md:left-[60%] md:w-3/6 lg:w-5/12 xl:left-[70%] xl:w-4/12 2xl:left-[75%] 2xl:w-3/12">
      <div className="mx-4 rounded-lg bg-white pb-7 shadow-2xl">
        <h4 className="p-5 font-bold">Cart</h4>
        <hr />
        <div className="grid grid-cols-[1fr_4fr_1fr] place-content-center gap-4 p-5">
          <img className="min-w-[55px] rounded-lg" src={imgCartSmall} alt="" />
          <div className="flex-col">
            <h6 className="text-sm text-dark-grayish">Fall Limited Edition Sneakers</h6>
            <div className="flex gap-3">
              <span className="text-sm text-dark-grayish">$125.00 x 3</span>
              <span className="text-sm font-bold">$375</span>
            </div>
          </div>
          <button>
            <DeleteIcon className="hover:fill-orange-personal" />
          </button>
        </div>
        <div className="mx-auto flex w-11/12 items-center justify-center font-bold">
          <AddBtn text={"Checkout"} icon={false} />
        </div>
      </div>
    </section>
  );
};

export default CartProductHeader;
