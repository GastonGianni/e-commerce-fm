import ImagesProduct from "@/components/product/col-img-products/ImagesProduct";
import { useState } from "react";

export default ({ IMG_ARRAY, IMG_SMALL_ARRAY }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ImagesProduct
        IMG_ARRAY={IMG_ARRAY}
        IMG_SMALL_ARRAY={IMG_SMALL_ARRAY}
        handleOpenModal={handleOpenModal}
        className="mx-auto grid md:max-w-[524px] md:grid-cols-4 md:gap-4"
      />
      {isModalOpen && (
        <ImagesProduct
          IMG_ARRAY={IMG_ARRAY}
          IMG_SMALL_ARRAY={IMG_SMALL_ARRAY}
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          className="mx-auto hidden md:absolute md:top-1/2 md:left-1/2 md:z-20 md:grid md:min-w-[600px] md:max-w-[660px] md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
        />
      )}
    </>
  );
};
