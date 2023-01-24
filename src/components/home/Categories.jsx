import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categoriesArray, setCategoriesArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products/categories");
        const categories = await data.json();
        setCategoriesArray(categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto mt-4 mb-3 flex w-full flex-col items-center justify-evenly gap-4 md:w-3/4 md:flex-row">
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
