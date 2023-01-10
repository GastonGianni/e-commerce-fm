import { useEffect, useState } from "react";

export function useUpdateCart(isOnCart, productQuant) {
  const [finalQuant, setFinalQuant] = useState(productQuant);

  useEffect(() => {
    setFinalQuant(productQuant);
  }, [isOnCart]);

  return [finalQuant];
}
