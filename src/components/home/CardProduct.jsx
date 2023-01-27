import React from "react";

export default function CardProduct({ product }) {
  return (
    <div className="group flex min-h-[350px] min-w-[262px] max-w-[280px] cursor-pointer flex-col justify-center overflow-hidden border border-slate-200 bg-white duration-300 md:rounded-md md:hover:scale-105 md:hover:shadow-lg">
      <img src={product.image} alt="" className=" mb-2 mt-4 max-h-[180px] object-contain p-2" />
      <div className="mx-2 text-center text-base text-slate-600 group-hover:block md:hidden">{product.title}</div>
      <div className="mt-auto mb-1 ml-2 text-lg font-bold text-slate-500 md:text-grayish-blue md:group-hover:text-slate-500">${product.price}</div>
    </div>
  );
}
