import React from "react";
import { PrevIcon } from "@/components/icons/PrevIcon";
import { NextIcon } from "@/components/icons/NextIcon";
import { useEffect } from "react";
import { useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import { useRef } from "react";

const ImagesProduct = ({ IMG_ARRAY = [], IMG_SMALL_ARRAY = [], isModalOpen = false, handleCloseModal = null, handleOpenModal = null, ...props }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const btnImgs = useRef(null);

  useEffect(() => {
    isModalOpen && btnImgs.current.classList.remove("md:hidden");
  }, [isModalOpen]);

  const handleClickNext = (e) => {
    imgIndex === IMG_ARRAY.length - 1 ? setImgIndex(0) : setImgIndex(imgIndex + 1);
  };
  const handleClickPrev = (e) => {
    imgIndex === 0 ? setImgIndex(IMG_ARRAY.length - 1) : setImgIndex(imgIndex - 1);
  };

  return (
    <section {...props}>
      {isModalOpen && (
        <button onClick={handleCloseModal} className="col-span-4 flex items-center justify-end">
          <CloseIcon />
        </button>
      )}
      <div onClick={handleOpenModal} className="relative col-span-4 md:cursor-pointer">
        <img src={IMG_ARRAY[imgIndex]} alt="" className="aspect-[16/14] w-full md:mx-auto md:aspect-[16/14] md:rounded-lg " />
        <div ref={btnImgs} className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-4 md:hidden">
          <button onClick={handleClickPrev} className=" flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <PrevIcon />
          </button>
          <button onClick={handleClickNext} className=" flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <NextIcon />
          </button>
        </div>
      </div>

      {IMG_SMALL_ARRAY.map((smallImg, i) => (
        <div onClick={() => setImgIndex(i)} key={i} className="relative hidden cursor-pointer overflow-hidden rounded-lg md:block">
          <img id={smallImg.id} src={smallImg.url} alt="" className={"hidden transition-all duration-300 hover:scale-105 md:block "} />

          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.4)] ${
              i === imgIndex && "border-4 border-orange-personal bg-[rgba(255,255,255,0.4)]"
            }    `}
          ></span>
        </div>
      ))}
    </section>
  );
};

export default ImagesProduct;
