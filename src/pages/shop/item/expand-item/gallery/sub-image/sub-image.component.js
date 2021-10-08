import React from "react";
import { SubHolder, SubImage } from "./sub-image.styles";

const SubImages = ({ image, setIndex, index }) => {
  console.log(image);
  return (
    <SubHolder onClick={() => setIndex(index)}>
      <SubImage src={image.image} />
    </SubHolder>
  );
};

export default SubImages;
