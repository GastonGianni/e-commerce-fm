import { useEffect, useState } from "react";

export function useFinalPrice(productPrice, finalProductQuant) {
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    setFinalPrice(productPrice * finalProductQuant);
  }, [productPrice, finalProductQuant]);

  return [finalPrice];
}
