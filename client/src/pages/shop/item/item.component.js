import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { ItemWrap, Image, HoldImage, Name, Value, Info } from "./item.styles";

import Box from "../../../theme/ui-components/box/box.component";
import ExpandItem from "./expand-item/expand-item.component";

const Item = ({ item }) => {
  const [expand, setExpand] = useState(false);
  const { name, image, value } = item;
  const itemAni = {};
  const boxAni = {
    hover: { scale: 0.97 },
    tap: { scale: 1 },
  };
  const imgAni = {
    hover: { scale: 1.05, x: -15 },
    tap: { scale: 1, x: 0 },
  };
  const infoAni = {
    hover: { scale: 1.05, x: 15 },
    tap: { scale: 1, x: 0 },
  };
  return (
    <>
      <ItemWrap
        variants={itemAni}
        whileHover="hover"
        whileTap="tap"
        onClick={() => setExpand(true)}
      >
        <Box variant="product" variants={boxAni} layoutId={name}>
          {image && (
            <HoldImage variants={imgAni}>
              <Image src={image} layoutId={`image ${name}`} />
            </HoldImage>
          )}
          <Info variants={infoAni} layoutId={`info ${name}`}>
            <Name layoutId={`name ${name}`}>{name}</Name>
            <Value layoutId={`value ${name}`}>{value}</Value>
          </Info>
        </Box>
      </ItemWrap>
      <AnimatePresence exitBeforeEnter>
        {expand && <ExpandItem item={item} setExpand={setExpand} key="eo" />}
      </AnimatePresence>
    </>
  );
};

export default Item;
