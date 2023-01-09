import objectProduct from "../../../data/data";
import MainDescriptionProduct from "./descriptions/MainDescriptionProduct";
import MainImagesProduct from "@/components/product/gallery/MainImagesProduct";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-2px)] md:grid-cols-2">
      <MainImagesProduct IMG_ARRAY={objectProduct.imagesMain} IMG_SMALL_ARRAY={objectProduct.imagesSmall} />
      <MainDescriptionProduct objectProduct={objectProduct} />
    </main>
  );
};

export default MainProduct;
