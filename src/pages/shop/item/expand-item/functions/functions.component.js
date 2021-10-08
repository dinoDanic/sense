import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../../../redux/shop/shop.actions";

import Button from "../../../../../theme/ui-components/button/button.conponent";
import { Add, Amount, Wrap } from "./functions.styles";

const Functions = ({ item }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const [sendItem, setSendItem] = useState(item);

  useEffect(() => {
    let copyItem = {
      ...item,
      amount: amount,
    };
    setSendItem(copyItem);
  }, [amount, item]);

  const handleAdd = () => {
    setAmount(amount + 1);
  };
  const handleRemove = () => {
    if (amount === 1) return;
    setAmount(amount - 1);
  };
  const handleAddToCart = () => {
    dispatch(addItemToCart(sendItem));
  };
  return (
    <Wrap>
      <Add onClick={handleRemove}>-</Add>
      <Amount>{amount}</Amount>
      <Add onClick={handleAdd}>+</Add>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </Wrap>
  );
};

export default Functions;
