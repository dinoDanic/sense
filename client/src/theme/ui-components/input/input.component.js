import React from "react";
import { Inp, Label, Wrap } from "./input.styles";

const Input = ({ label, ...otherProps }) => {
  return (
    <Wrap>
      <Label>{label}</Label>
      <Inp {...otherProps} />
    </Wrap>
  );
};

export default Input;
