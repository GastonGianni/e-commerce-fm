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
        products.sort((a, b) => b.rating.rate - a.rating.rate);
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
        <div className="h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="">
          <BannerHome />

          <Categories />
          <div className={"my-4 mx-auto grid w-3/4 grid-cols-autofit place-items-center gap-4"}>
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
