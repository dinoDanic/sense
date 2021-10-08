import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Wrap,
  Image,
  CartCount,
  Preview,
  Arrow,
  ExtandHold,
} from "./cart.styles";
import CartImage from "../../../img/cart.svg";
import CartItem from "./cartitem/carti-item.component";

const Cart = () => {
  const cartItems = useSelector((state) => state.shop.cartItems);
  const [cartSum, setCartSum] = useState(0);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    if (!cartItems) return;
    const sum = cartItems.reduce((prev, next) => prev + next.amount, 0);
    setCartSum(sum);
    if (sum > 0) {
      console.log("newitem");
      setScale(1.4);
      setTimeout(() => {
        setScale(1);
      }, 200);
    }
  }, [cartItems]);
  return (
    <Wrap>
      <Image src={CartImage} />
      {cartSum > 0 && (
        <CartCount animate={{ scale: scale }}>{cartSum}</CartCount>
      )}
      <Preview>
        <ExtandHold />
        <Arrow />
        {cartItems.map((item) => (
          <CartItem item={item} />
        ))}
        {cartItems.length === 0 && <p>empty</p>}
      </Preview>
    </Wrap>
  );
};

export default Cart;
