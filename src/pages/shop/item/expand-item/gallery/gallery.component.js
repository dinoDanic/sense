import React, { useState, useEffect } from "react";
import { MainImage, Wrap, SubImages, MainImg } from "./gallery.styles";
import SubImage from "./sub-image/sub-image.component";

const Gallery = ({ gallery }) => {
  const [firstImage, setFirstImage] = useState(gallery[0].image);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setFirstImage(gallery[index].image);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);
  return (
    <Wrap>
      <MainImage>
        <MainImg src={firstImage} />
      </MainImage>
      <SubImages>
        {gallery.map((image, i) => (
          <SubImage key={i} image={image} index={i} setIndex={setIndex} />
        ))}
      </SubImages>
    </Wrap>
  );
};

export default Gallery;
