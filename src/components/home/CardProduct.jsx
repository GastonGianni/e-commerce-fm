import React from "react";

export default function CardProduct({ product }) {
  return (
    <div className="group mx-auto flex max-h-[320px] min-h-[320px] min-w-[200px] max-w-[200px] cursor-pointer flex-col justify-center  overflow-hidden rounded-md border border-slate-200 duration-500 hover:scale-105 hover:shadow-lg md:w-2/12">
      <img src={product.image} alt="" className="mb-2 max-h-[180px] min-h-[180px] object-contain p-2 duration-300 " />
      <div className="mx-2 hidden text-center text-sm text-slate-500 transition-all group-hover:block">{product.title}</div>
      <div className="mt-auto mb-1 ml-2 text-lg font-bold text-grayish-blue group-hover:text-slate-500">${product.price}</div>
    </div>
  );
}
