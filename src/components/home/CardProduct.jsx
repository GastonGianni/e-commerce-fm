import React from "react";

export default function CardProduct({ product }) {
  return (
    <div className="group flex max-h-[320px] min-h-[280px] min-w-[180px] max-w-[200px] cursor-pointer flex-col justify-center overflow-hidden  border border-slate-200 duration-500 md:w-2/12 md:rounded-md md:hover:scale-105 md:hover:shadow-lg">
      <img src={product.image} alt="" className="mb-2 max-h-[180px] min-h-[180px] object-contain p-2 duration-300 " />
      <div className="mx-2 text-center text-sm text-slate-500 transition-all group-hover:block md:hidden">{product.title}</div>
      <div className="mt-auto mb-1 ml-2 text-lg font-bold text-slate-500 md:text-grayish-blue md:group-hover:text-slate-500">${product.price}</div>
    </div>
  );
}
