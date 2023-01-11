import { useEffect, useState } from "react";

export function useDiscount(price, discount) {
  const [finalPriceDiscount, setFinalPriceDiscount] = useState(price);

  useEffect(() => {
    setFinalPriceDiscount(price * (1 - discount));
  }, [discount, price]);

  return { finalPriceDiscount };
}
