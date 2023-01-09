import React from "react";
import imgCartSmall from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";
import AddBtn from "../product/descriptions/AddBtn";

const CartProductHeader = () => {
  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:left-full md:max-w-sm md:-translate-x-full md:-translate-y-4">
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
