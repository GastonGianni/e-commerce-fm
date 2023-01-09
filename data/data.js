import imgProd1 from "@/assets/images/image-product-1.jpg";
import imgProd2 from "@/assets/images/image-product-2.jpg";
import imgProd3 from "@/assets/images/image-product-3.jpg";
import imgProd4 from "@/assets/images/image-product-4.jpg";

import imgProdSmall_1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProdSmall_2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProdSmall_3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProdSmall_4 from "@/assets/images/image-product-4-thumbnail.jpg";

const objectProduct = {
  id: 1,
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are you perfect casual wear campanion. Featuring a durable rubber outer sole, thei'll withstand everything the weather can offer.",
  subtitle: "Sneaker company",
  price: 250,
  discount: 0.5,
  imagesMain: [imgProd1, imgProd2, imgProd3, imgProd4],
  imagesSmall: [
    { url: imgProdSmall_1, id: 0 },
    { url: imgProdSmall_2, id: 1 },
    { url: imgProdSmall_3, id: 2 },
    { url: imgProdSmall_4, id: 3 },
  ],
};

export default objectProduct;
