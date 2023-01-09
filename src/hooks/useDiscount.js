import { useEffect, useState } from "react";

export function useDiscount(price, discount) {
  const [finalPrice, setFinalPrice] = useState(price);

  useEffect(() => {
    setFinalPrice(price * (1 - discount));
  }, [discount, price]);

  return { finalPrice };
}
