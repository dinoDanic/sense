import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../../../redux/shop/shop.actions";

import Button from "../../../../../theme/ui-components/button/button.conponent";
import { Add, Amount, Wrap } from "./functions.styles";

const Functions = ({ item }) => {
  const [amount, setAmount] = useState(1);
  const [newItem, setNewItem] = useState({
    ...item,
    amount: item.amount,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setNewItem({
      ...newItem,
      amount: amount,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  const handleAddToCart = () => {
    dispatch(addItemToCart(newItem));
  };

  const handleAdd = () => {
    setAmount(amount + 1);
  };

  const handleRemove = () => {
    if (amount === 1) return;
    setAmount(amount - 1);
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
