import React from "react";
import { MyItems, Wrap } from "./header.styles";

import Cart from "./cart/cart.component";
import Logo from "./Logo/logo.component";
import MyOrders from "./my-orders/my-orders.component";

const Header = () => {
  return (
    <Wrap>
      <Logo />
      <MyItems>
        <MyOrders />
        <Cart />
      </MyItems>
    </Wrap>
  );
};

export default Header;
