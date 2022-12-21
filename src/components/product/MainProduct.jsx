import DescriptionProduct from "@/components/product/col-description/DescriptionProduct";
import MainImagesProduct from "./col-img-products/MainImagesProduct";

import imgProd1 from "@/assets/images/image-product-1.jpg";
import imgProd2 from "@/assets/images/image-product-2.jpg";
import imgProd3 from "@/assets/images/image-product-3.jpg";
import imgProd4 from "@/assets/images/image-product-4.jpg";

import imgProdSmall_1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProdSmall_2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProdSmall_3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProdSmall_4 from "@/assets/images/image-product-4-thumbnail.jpg";

const IMG_ARRAY = [imgProd1, imgProd2, imgProd3, imgProd4];
const IMG_SMALL_ARRAY = [
  { url: imgProdSmall_1, id: 0 },
  { url: imgProdSmall_2, id: 1 },
  { url: imgProdSmall_3, id: 2 },
  { url: imgProdSmall_4, id: 3 },
];

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-2px)] md:grid-cols-2  ">
      <MainImagesProduct IMG_ARRAY={IMG_ARRAY} IMG_SMALL_ARRAY={IMG_SMALL_ARRAY} />
      <DescriptionProduct />
    </main>
  );
};

export default MainProduct;
