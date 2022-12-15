import DescriptionProduct from "@/components/product/DescriptionProduct";
import ImagesProduct from "@/components/product/ImagesProduct";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-2px)] md:grid-cols-2 ">
      <ImagesProduct />
      <DescriptionProduct />
    </main>
  );
};

export default MainProduct;
