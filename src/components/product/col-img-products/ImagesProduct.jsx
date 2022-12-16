import React from "react";
import { PrevIcon } from "@/components/icons/PrevIcon";
import { NextIcon } from "@/components/icons/NextIcon";

import { useState } from "react";

const ImagesProduct = ({ IMG_ARRAY = [], IMG_SMALL_ARRAY = [], ...props }) => {
  return (
    <section className="mx-auto grid md:max-w-[524px] md:grid-cols-4 md:gap-4">
      <div className=" relative col-span-4 ">
        <img src={IMG_ARRAY[props.imgIndex]} alt="" className="aspect-[16/14] w-full md:mx-auto md:aspect-[16/14] md:rounded-lg " />
        <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-4">
          <button onClick={props.handleClickPrev} className=" flex h-9 w-9 items-center justify-center rounded-full bg-white md:hidden">
            <PrevIcon />
          </button>
          <button onClick={props.handleClickNext} className=" flex h-9 w-9 items-center justify-center rounded-full bg-white md:hidden">
            <NextIcon />
          </button>
        </div>
      </div>

      {IMG_SMALL_ARRAY.map((smallImg) => (
        <img
          key={smallImg}
          id="0"
          onClick={props.changeImg}
          src={smallImg}
          alt=""
          className="hidden rounded-lg transition-all duration-75
        hover:border-4 hover:border-orange-personal md:block"
        />
      ))}
    </section>
  );
};

export default ImagesProduct;
