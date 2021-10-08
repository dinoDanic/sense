import React from "react";
import { Wrap } from "./header.styles";

import Cart from "./cart/cart.component";
import Logo from "./Logo/logo.component";

const Header = () => {
  return (
    <Wrap>
      <Logo />
      <Cart />
    </Wrap>
  );
};

export default Header;
