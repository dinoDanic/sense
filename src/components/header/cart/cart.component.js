import React from "react";
import { Wrap, Image } from "./cart.styles";
import CartImage from "../../../img/cart.png";

const Cart = () => {
  return (
    <Wrap>
      <Image src={CartImage} />
    </Wrap>
  );
};

export default Cart;
