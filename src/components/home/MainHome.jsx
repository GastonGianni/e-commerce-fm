import React, { useEffect } from "react";
import { useState } from "react";
import BannerHome from "./BannerHome";
import CardProduct from "./CardProduct";
import Categories from "./Categories";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();
        setIsLoading(false);
        setProductArray(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="">
          <BannerHome />

          <Categories />
          <div className="mx-auto my-3 grid w-[380px] grid-cols-2 gap-2 sm:w-[530px] sm:grid-cols-3 md:my-4 md:w-3/4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
