import React, { useEffect } from "react";
import { useState } from "react";
import MainFooter from "../footer/MainFooter";
import BannerHome from "./BannerHome";
import CardProduct from "./CardProduct";
import Categories from "./Categories";
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

          <Categories product={productArray} />
          <div className="mx-auto my-3 grid w-[380px] grid-cols-2 gap-2 sm:w-[530px] sm:grid-cols-3 md:my-4 md:w-3/4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {productArray.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
          </div>
          <MainFooter />
        </div>
      )}
    </>
  );
};

export default Home;
