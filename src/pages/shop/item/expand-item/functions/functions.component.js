import React, { useState } from "react";
import Button from "../../../../../theme/ui-components/button/button.conponent";
import { Add, Amount, Wrap } from "./functions.styles";

const Functions = () => {
  const [amount, setAmount] = useState(1);
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
      <Button>Add to Cart</Button>
    </Wrap>
  );
};

export default Functions;
