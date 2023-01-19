import React from "react";
import imgCarousel1 from "../../assets/images/carousel-1.jpg";
import imgCarousel2 from "../../assets/images/carousel-2.jpg";
import imgCarousel3 from "../../assets/images/carousel-3.jpg";
import imgCarousel4 from "../../assets/images/carousel-4.jpg";

const Home = () => {
  const IMG_CAROUSEL = [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4];

  return (
    <div className="">
      <div className="relative mt-3">
        <img
          className="mx-auto h-[500px] w-3/4 rounded-sm object-cover"
          src={imgCarousel1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
