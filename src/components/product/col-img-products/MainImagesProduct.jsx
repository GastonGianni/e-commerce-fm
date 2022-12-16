import ImagesProduct from "@/components/product/col-img-products/ImagesProduct";
import { useState } from "react";

export default ({ IMG_ARRAY, IMG_SMALL_ARRAY }) => {
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
    <ImagesProduct
      IMG_ARRAY={IMG_ARRAY}
      IMG_SMALL_ARRAY={IMG_SMALL_ARRAY}
      handleClickNext={handleClickNext}
      handleClickPrev={handleClickPrev}
      changeImg={changeImg}
      imgIndex={imgIndex}
    />
  );
};
