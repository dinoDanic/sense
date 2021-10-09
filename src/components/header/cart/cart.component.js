import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
import { useChartSum } from "../../../hooks";

const Cart = () => {
  const shop = useSelector((state) => state.shop);
  const [scale, setScale] = useState(1);
  const sum = useChartSum();

  useEffect(() => {
    if (!shop.cartItems) return;
    if (sum > 0) {
      setScale(1.4);
      setTimeout(() => {
        setScale(1);
      }, 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sum]);
  return (
    <Wrap>
      <Link to="/checkout">
        <Image src={CartImage} />
      </Link>
      {sum > 0 && <CartCount animate={{ scale: scale }}>{sum}</CartCount>}
      <Preview>
        <ExtandHold />
        <Arrow />
        {shop.cartItems.map((item) => (
          <CartItem item={item} />
        ))}
        {shop.cartItems.length === 0 && <p>empty</p>}
      </Preview>
    </Wrap>
  );
};

export default Cart;
