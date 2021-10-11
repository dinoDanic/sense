import React from "react";
import { Btn } from "./button.styles";

const Button = ({ children, ...otherProps }) => {
  return (
    <Btn
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...otherProps}
    >
      {children}
    </Btn>
  );
};

export default Button;
