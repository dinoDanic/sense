import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../../../redux/shop/shop.actions";

import Button from "../../../../../theme/ui-components/button/button.conponent";
import { Add, Amount, Wrap } from "./functions.styles";

const Functions = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart(item));
  };
  return (
    <Wrap>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </Wrap>
  );
};

export default Functions;
