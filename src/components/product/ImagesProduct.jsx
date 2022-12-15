import React from "react";
import imgProd1 from "@/assets/images/image-product-1.jpg";
import imgProd2 from "@/assets/images/image-product-2.jpg";
import imgProd3 from "@/assets/images/image-product-3.jpg";
import imgProd4 from "@/assets/images/image-product-4.jpg";
import imgProdSmall_1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProdSmall_2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProdSmall_3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProdSmall_4 from "@/assets/images/image-product-4-thumbnail.jpg";
import { PrevIcon } from "@/components/icons/PrevIcon";
import { NextIcon } from "@/components/icons/NextIcon";
import { useState } from "react";

const IMG_ARRAY = [imgProd1, imgProd2, imgProd3, imgProd4];

const ImagesProduct = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleClickNext = (e) => {
    imgIndex === IMG_ARRAY.length - 1 ? setImgIndex(0) : setImgIndex(imgIndex + 1);
  };
  const handleClickPrev = (e) => {
    imgIndex === 0 ? setImgIndex(IMG_ARRAY.length - 1) : setImgIndex(imgIndex - 1);
  };

  const changeImg = (e) => {
    setImgIndex(e.target.id);
  };

  return (
    <section className="mx-auto grid md:max-w-[624px] md:grid-cols-4 md:gap-4">
      <div className=" relative col-span-4 ">
        <img src={IMG_ARRAY[imgIndex]} alt="" className="aspect-[16/14] w-full md:mx-auto md:aspect-[16/14] md:rounded-lg " />
        <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-4">
          <button onClick={handleClickPrev} className=" flex h-9 w-9 items-center justify-center rounded-full bg-white md:hidden">
            <PrevIcon />
          </button>
          <button onClick={handleClickNext} className=" flex h-9 w-9 items-center justify-center rounded-full bg-white md:hidden">
            <NextIcon />
          </button>
        </div>
      </div>
      <img
        id="0"
        onClick={changeImg}
        src={imgProdSmall_1}
        alt=""
        className="hidden rounded-lg transition-all duration-75
        hover:border-4 hover:border-orange-personal md:block"
      />
      <img
        id="1"
        onClick={changeImg}
        src={imgProdSmall_2}
        alt=""
        className="hidden rounded-lg transition-all duration-75 hover:border-4 hover:border-orange-personal
        md:block"
      />
      <img
        id="2"
        onClick={changeImg}
        src={imgProdSmall_3}
        alt=""
        className="hidden rounded-lg transition-all duration-75 hover:border-4 hover:border-orange-personal
        md:block"
      />
      <img
        id="3"
        onClick={changeImg}
        src={imgProdSmall_4}
        alt=""
        className="hidden rounded-lg transition-all duration-75 hover:border-4 hover:border-orange-personal
        md:block"
      />
    </section>
  );
};

export default ImagesProduct;
