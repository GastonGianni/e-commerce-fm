import React, { useState } from "react";
import { NextIcon } from "../icons/NextIcon";
import { PrevIcon } from "../icons/PrevIcon";

import imgBanner_1 from "../../assets/images/Banner-1.webp";
import imgBanner_2 from "../../assets/images/Banner-2.webp";
import imgBanner_3 from "../../assets/images/Banner-3.webp";
import imgBanner_4 from "../../assets/images/Banner-4.webp";

import imgBannerSmall_1 from "../../assets/images/Banner-mobile-1.webp";
import imgBannerSmall_2 from "../../assets/images/Banner-mobile-2.webp";
import imgBannerSmall_3 from "../../assets/images/Banner-mobile-3.webp";
import imgBannerSmall_4 from "../../assets/images/Banner-mobile-4.webp";

export default function BannerHome() {
  const [bannerArrayIndex, setBannerArrayIndex] = useState(0);

  const bannerArray = [{ url: imgBanner_1 }, { url: imgBanner_2 }, { url: imgBanner_3 }, { url: imgBanner_4 }];
  const bannerArrayMobile = [{ url: imgBannerSmall_1 }, { url: imgBannerSmall_2 }, { url: imgBannerSmall_3 }, { url: imgBannerSmall_4 }];

  const handleClickNext = () => {
    bannerArrayIndex === bannerArray.length - 1 ? setBannerArrayIndex(0) : setBannerArrayIndex(bannerArrayIndex + 1);
  };

  const handleClicPrev = () => {
    bannerArrayIndex === 0 ? setBannerArrayIndex(bannerArray.length - 1) : setBannerArrayIndex(bannerArrayIndex - 1);
  };

  return (
    <div>
      <div className="relative min-h-[273px] w-full border">
        <img src={bannerArray[bannerArrayIndex].url} alt="" className="hidden md:block " />
        <img src={bannerArrayMobile[bannerArrayIndex].url} alt="" className="block md:hidden" />
        <div className="absolute top-1/2 left-0 flex w-full -translate-y-full justify-between">
          <button onClick={handleClicPrev} className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-600 opacity-75 shadow-lg">
            <PrevIcon stroke="white" />
          </button>
          <button onClick={handleClickNext} className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 opacity-75 shadow-lg">
            <NextIcon stroke="white" />
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 mb-1 flex -translate-x-1/2 gap-1">
          {bannerArray.map((img) => (
            <span
              key={img.url}
              className={`h-[6px] w-[6px] rounded-full border border-slate-500 bg-white ${
                img.url === bannerArray[bannerArrayIndex].url && "scale-150 bg-slate-600 transition-all"
              } `}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
