import { useEffect, useState } from "react";

export function getCategories() {
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
  return categoriesArray;
}
