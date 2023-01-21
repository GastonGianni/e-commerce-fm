import React, { useEffect } from "react";
import { useState } from "react";
import BannerHome from "./BannerHome";
import CardProduct from "./CardProduct";
import LoadingSpinner from "./LoadingSpinner";

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
        <LoadingSpinner />
      ) : (
        <div>
          <BannerHome />
          <div className="mx-auto my-4 flex w-full flex-wrap gap-6 md:w-3/4 ">
            {productArray.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
