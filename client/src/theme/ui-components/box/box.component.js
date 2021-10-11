import React from "react";
import { BoxWrap } from "./box.styles";

const Box = ({ children, ...otherProps }) => {
  return <BoxWrap {...otherProps}>{children}</BoxWrap>;
};

export default Box;
