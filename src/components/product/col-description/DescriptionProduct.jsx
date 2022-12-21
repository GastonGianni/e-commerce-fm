import React from "react";
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";
import CartIcon from "../../icons/CartIcon";
import { useState } from "react";

const DescriptionProduct = () => {
  const [cantidadProd, setCantidadProd] = useState(0);

  const aumentarCantidad = (e) => {
    cantidadProd >= 0 ? setCantidadProd(cantidadProd + 1) : null;
  };

  const disminuirCantidad = (e) => {
    cantidadProd > 0 ? setCantidadProd(cantidadProd - 1) : null;
  };

  return (
    <section className="container mx-auto px-4 md:max-w-[520px] md:p-0 lg:m-0 ">
      <p className="mb-2 font-bold uppercase text-orange-personal">Sneaker Company</p>
      <h1 className="mb-4 text-3xl font-bold">Fall Limited Edition Sneakers</h1>
      <p className="mb-6 tracking-wide text-dark-grayish">
        These low-profile sneakers are you perfect casual wear campanion. Featuring a durable rubber outer sole, thei'll withstand everything the
        weather can offer.
      </p>
      <div className="mb-4 flex lg:flex-col">
        <div className="mr-auto flex items-center justify-center gap-4">
          <span className="text-2xl font-bold">$125.00</span>
          <span className="w-10 rounded-md bg-orange-200 text-center font-semibold text-orange-personal opacity-75">50%</span>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <span className=" text-grayish-blue line-through">$250</span>
        </div>
      </div>
      <section className="font-bold lg:flex lg:gap-3">
        <div className="mb-3 flex w-full items-center justify-between rounded-lg bg-slate-100 py-4 px-5 lg:w-2/4">
          <button onClick={disminuirCantidad}>
            <MinusIcon />
          </button>
          <span>{cantidadProd}</span>
          <button onClick={aumentarCantidad}>
            <PlusIcon />
          </button>
        </div>
        <div className="mb-3 lg:w-full">
          <button className="flex w-full items-start justify-center gap-2 rounded-lg bg-orange-personal py-4 text-white shadow-lg transition-all hover:bg-orange-400 ">
            <CartIcon fill="#fff" />
            <span>Add to cart</span>
          </button>
        </div>
      </section>
    </section>
  );
};

export default DescriptionProduct;
