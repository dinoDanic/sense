import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

import {
  ItemWrap,
  Image,
  HoldImage,
  Name,
  Value,
  Info,
  AddToCart,
  CartImage,
  Wrap,
} from "./shop-item.styles";
import { shopItemsAni } from "../../../theme/animations";
import cartImg from "../../../img/addToCart2.png";

import Box from "../../../theme/ui-components/box/box.component";
import ExpandItem from "./expand-item/expand-item.component";

import { addItemToCart } from "../../../redux/shop/shop.actions";

const ShopItem = ({ item }) => {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const { name, image, value } = item;

  const handleToBag = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <Wrap>
        <ItemWrap
          whileHover="hover"
          whileTap="tap"
          variant="product"
          variants={shopItemsAni.boxAni}
        >
          <Box layoutId={name} onClick={() => setExpand(true)}>
            {image && (
              <HoldImage variants={shopItemsAni.imgAni}>
                <Image src={image} layoutId={`image ${name}`} />
              </HoldImage>
            )}
            <Info variants={shopItemsAni.infoAni} layoutId={`info ${name}`}>
              <Name layoutId={`name ${name}`}>{name}</Name>
              <Value layoutId={`value ${name}`}>{value}</Value>
            </Info>
          </Box>
        </ItemWrap>
        <AddToCart onClick={handleToBag}>
          <CartImage src={cartImg} />
        </AddToCart>
      </Wrap>
      <AnimatePresence exitBeforeEnter>
        {expand && <ExpandItem item={item} setExpand={setExpand} key="eo" />}
      </AnimatePresence>
    </>
  );
};

export default ShopItem;
