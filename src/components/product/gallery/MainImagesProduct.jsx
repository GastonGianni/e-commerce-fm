import ImagesProduct from "./ImagesProduct";
import ModalProduct from "./ImagesProduct";
import { useState } from "react";

export default ({ IMG_ARRAY, IMG_SMALL_ARRAY }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => window.innerWidth > 768 && setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <ImagesProduct
        IMG_ARRAY={IMG_ARRAY}
        IMG_SMALL_ARRAY={IMG_SMALL_ARRAY}
        handleOpenModal={handleOpenModal}
        className="mx-auto grid md:max-w-[524px] md:grid-cols-4 md:gap-4"
      />
      {isModalOpen && (
        <>
          <ModalProduct
            IMG_ARRAY={IMG_ARRAY}
            IMG_SMALL_ARRAY={IMG_SMALL_ARRAY}
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            className="mx-auto hidden md:absolute md:top-1/2 md:left-1/2 md:z-20 md:grid md:min-w-[580px] md:max-w-[620px] md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
          />

          <span onClick={handleCloseModal} className="md:fixed md:top-0 md:left-0 md:h-full md:w-full md:backdrop-blur-md"></span>
        </>
      )}
    </>
  );
};
