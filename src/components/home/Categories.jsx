import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="mx-auto mt-4 flex w-full flex-col items-center justify-evenly gap-4 md:w-3/4 md:flex-row">
      <Link className="flex h-36 w-full items-center justify-center text-2xl transition-all md:cursor-pointer md:hover:border md:hover:border-slate-200 md:hover:shadow-lg md:active:shadow-none">
        Men
      </Link>
      <Link className="flex h-36 w-full items-center justify-center text-2xl transition-all md:cursor-pointer md:hover:border md:hover:border-slate-200 md:hover:shadow-lg md:active:shadow-none">
        Women
      </Link>
      <Link className="flex h-36 w-full items-center justify-center text-2xl transition-all md:cursor-pointer md:hover:border md:hover:border-slate-200 md:hover:shadow-lg md:active:shadow-none">
        Electronics
      </Link>
      <Link className="flex h-36 w-full items-center justify-center text-2xl transition-all md:cursor-pointer md:hover:border md:hover:border-slate-200 md:hover:shadow-lg md:active:shadow-none">
        Jewelery
      </Link>
    </div>
  );
};

export default Categories;
