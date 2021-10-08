import React from "react";
import { useSelector } from "react-redux";
import { Wrap } from "./shop.styles";
import { AnimateSharedLayout } from "framer-motion";

import Item from "./item/item.component";

const Shop = () => {
  const shop = useSelector((state) => state.shop);
  return (
    <Wrap>
      <AnimateSharedLayout type="crossfade">
        {shop.items.map((item) => (
          <Item item={item} />
        ))}
      </AnimateSharedLayout>
    </Wrap>
  );
};

export default Shop;
