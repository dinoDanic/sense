import React from "react";
import { pageTransitionAni } from "../../theme/animations";
import { Wrap } from "./transition-page.styles";

const TransitionPage = ({ children }) => {
  return (
    <Wrap
      variants={pageTransitionAni}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      {children}
    </Wrap>
  );
};

export default TransitionPage;
