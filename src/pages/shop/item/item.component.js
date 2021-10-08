import React from "react";
import Box from "../../../theme/ui-components/box/box.component";
import { ItemWrap, Image, HoldImage, Name, Value, Info } from "./item.styles";

const Item = ({ item }) => {
  const { name, image, value } = item;
  const itemAni = {};
  const boxAni = {
    // hover: { scale: 0.98 },
  };
  const imgAni = {
    hover: { scale: 1.05 },
    tap: { scale: 1 },
  };
  const infoAni = {
    hover: { scale: 1.05 },
    tap: { scale: 1 },
  };
  return (
    <ItemWrap variants={itemAni} whileHover="hover" whileTap="tap">
      <Box variant="product" variants={boxAni}>
        {image && (
          <HoldImage variants={imgAni}>
            <Image src={image} />
          </HoldImage>
        )}
        <Info variants={infoAni}>
          <Name>{name}</Name>
          <Value>{value}</Value>
        </Info>
      </Box>
    </ItemWrap>
  );
};

export default Item;
