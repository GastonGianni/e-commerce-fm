import React, { useState } from "react";
import { NextIcon } from "../icons/NextIcon";
import { PrevIcon } from "../icons/PrevIcon";

import imgBanner_1 from "../../assets/images/Banner-1.webp";
import imgBanner_2 from "../../assets/images/Banner-2.webp";
import imgBanner_3 from "../../assets/images/Banner-3.webp";
import imgBanner_4 from "../../assets/images/Banner-4.webp";

export default function BannerHome() {
  const [bannerArrayIndex, setBannerArrayIndex] = useState(0);

  const bannerArray = [{ url: imgBanner_1 }, { url: imgBanner_2 }, { url: imgBanner_3 }, { url: imgBanner_4 }];

  const handleClickNext = () => {
    bannerArrayIndex === bannerArray.length - 1 ? setBannerArrayIndex(0) : setBannerArrayIndex(bannerArrayIndex + 1);
  };

  const handleClicPrev = () => {
    bannerArrayIndex === 0 ? setBannerArrayIndex(bannerArray.length - 1) : setBannerArrayIndex(bannerArrayIndex - 1);
  };

  return (
    <div>
      <div className="relative w-full border">
        <img src={bannerArray[bannerArrayIndex].url} alt="" className="" />
        <div className="absolute top-1/2 left-0 flex w-full -translate-y-full justify-between">
          <button
            onClick={handleClicPrev}
            className="hidden h-8 w-8 items-center justify-center rounded-full bg-slate-600 opacity-75 shadow-lg md:flex"
          >
            <PrevIcon stroke="white" />
          </button>
          <button
            onClick={handleClickNext}
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-slate-600 opacity-75 shadow-lg md:flex"
          >
            <NextIcon stroke="white" />
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 mb-1 flex -translate-x-1/2 gap-1">
          {bannerArray.map((img) => (
            <span
              key={img.url}
              className={`h-2 w-2 rounded-full bg-white ${img.url === bannerArray[bannerArrayIndex].url && "bg-slate-600"} `}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
