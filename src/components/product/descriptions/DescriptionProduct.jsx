import React from "react";
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";
import { useState } from "react";
import AddBtn from "./AddBtn";
import { useDiscount } from "../../../hooks/useDiscount";

const DescriptionProduct = ({ objectProduct }) => {
  const [cantidadProd, setCantidadProd] = useState(0);

  const { finalPrice } = useDiscount(objectProduct.price, objectProduct.discount);

  const aumentarCantidad = (e) => {
    cantidadProd >= 0 ? setCantidadProd(cantidadProd + 1) : null;
  };

  const disminuirCantidad = (e) => {
    cantidadProd > 0 ? setCantidadProd(cantidadProd - 1) : null;
  };

  return (
    <section className="container mx-auto px-4 md:max-w-[520px] md:p-0 lg:m-0 ">
      <p className="mb-2 font-bold uppercase text-orange-personal">{objectProduct.subtitle}</p>
      <h1 className="mb-4 text-3xl font-bold">{objectProduct.title}</h1>
      <p className="mb-6 tracking-wide text-dark-grayish">{objectProduct.description}</p>
      <div className="mb-4 flex lg:flex-col">
        <div className="mr-auto flex items-center justify-center gap-4">
          <span className="text-2xl font-bold">${finalPrice.toFixed(2)}</span>
          <span className="w-10 rounded-md bg-orange-200 text-center font-semibold text-orange-personal opacity-75">
            {objectProduct.discount * 100}%
          </span>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <span className=" text-grayish-blue line-through">${objectProduct.price.toFixed(2)}</span>
        </div>
      </div>
      <section className="font-bold lg:flex lg:gap-3">
        <div className="mb-3 flex w-full items-center justify-around rounded-lg bg-slate-100 md:justify-between lg:w-2/4 lg:py-0">
          <button
            onClick={disminuirCantidad}
            className="flex h-12 w-full items-center justify-center active:rounded active:bg-black/5 md:w-1/2 lg:h-full lg:w-full "
          >
            <MinusIcon />
          </button>
          <span className="w-full text-center">{cantidadProd}</span>
          <button
            onClick={aumentarCantidad}
            className="flex h-12 w-full items-center justify-center active:rounded active:bg-black/5 md:w-1/2 lg:h-full lg:w-full"
          >
            <PlusIcon />
          </button>
        </div>
        <div className="mb-3 lg:w-full">
          <AddBtn />
        </div>
      </section>
    </section>
  );
};

export default DescriptionProduct;
