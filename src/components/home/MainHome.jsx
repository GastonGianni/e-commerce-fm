import React, { useEffect } from "react";
import { useState } from "react";
import CardProduct from "./CardProduct";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((product) => {
        setIsLoading(false);
        setProductArray(product);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <button className="mx-auto flex h-10 w-32 cursor-wait items-center">
            <svg className="mr-3 h-5 w-5 animate-spin" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="white"
                fillRule="evenodd"
                opacity="0.4"
              />
              <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor" />
            </svg>
            <p className="text-black">Cargando...</p>
          </button>
        </div>
      ) : (
        <div className="mx-auto my-4 flex w-3/4 flex-wrap gap-6 ">
          {productArray.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
