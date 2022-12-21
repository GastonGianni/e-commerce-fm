import React from "react";
import { PrevIcon } from "@/components/icons/PrevIcon";
import { NextIcon } from "@/components/icons/NextIcon";

import { useState } from "react";
import CloseIcon from "../../icons/CloseIcon";

const ImagesProduct = ({ IMG_ARRAY = [], IMG_SMALL_ARRAY = [], isModalOpen = false, handleCloseModal = null, handleOpenModal = null, ...props }) => {
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
    <section {...props}>
      {isModalOpen && (
        <button onClick={handleCloseModal} className="col-span-4 flex items-center justify-end">
          <CloseIcon />
        </button>
      )}
      <div onClick={handleOpenModal} className="relative col-span-4 md:cursor-zoom-in">
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

      {IMG_SMALL_ARRAY.map((smallImg) => (
        <img
          key={smallImg.id}
          id={smallImg.id}
          onClick={changeImg}
          src={smallImg.url}
          alt=""
          className="hidden cursor-pointer rounded-lg transition-all duration-300 hover:scale-105 md:block"
        />
      ))}
    </section>
  );
};

export default ImagesProduct;
