import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ product }) => {
  const duplicateCategories = [];
  product.map((prod) => duplicateCategories.push(prod.category));
  const categoriesArray = [...new Set(duplicateCategories)];

  return (
    <div className="mx-auto mt-4 flex w-full flex-col items-center justify-evenly gap-4 md:w-3/4 md:flex-row">
      {categoriesArray.map((category) => (
        <Link
          key={category}
          className="flex h-36 w-full items-center justify-center text-2xl transition-all md:cursor-pointer md:hover:border md:hover:border-slate-200 md:hover:shadow-lg md:active:shadow-none"
        >
          {category[0].toUpperCase() + category.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
