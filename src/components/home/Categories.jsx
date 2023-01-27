import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../hooks/getCategories";

const Categories = () => {
  const categoriesArray = getCategories();

  return (
    <div className="mx-auto mt-4 mb-3 flex w-full min-w-[262px] flex-col items-center justify-evenly gap-4 md:w-3/4 md:flex-row">
      {categoriesArray.map((category) => (
        <div
          key={category}
          className="flex h-24 w-full items-center justify-center rounded-md border-b-2 transition-all md:h-36 md:cursor-pointer md:border-none md:hover:border md:hover:border-slate-200 md:hover:shadow-lg md:active:shadow-none"
        >
          <Link className="text-center text-xl md:text-2xl" to={`/categories/${category}`}>
            {category[0].toUpperCase() + category.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
