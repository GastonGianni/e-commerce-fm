import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-evenly gap-3 md:w-3/4 md:flex-row">
      <Link className="flex h-36 cursor-pointer items-center justify-center text-2xl hover:underline">Men</Link>
      <Link className="flex h-36 cursor-pointer items-center justify-center text-2xl hover:underline">Women</Link>
      <Link className="flex h-36 cursor-pointer items-center justify-center text-2xl hover:underline">Electronics</Link>
      <Link className="flex h-36 cursor-pointer items-center justify-center text-2xl hover:underline">Jewelery</Link>
    </div>
  );
};

export default Categories;
