import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const useChartSum = () => {
  const shop = useSelector((state) => state.shop);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum(shop.cartItems.reduce((prev, next) => prev + next.amount, 0));
    return sum;
  }, [shop, sum]);
  return sum;
};
