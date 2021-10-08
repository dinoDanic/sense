import React from "react";
import { useSelector } from "react-redux";
import { Wrap } from "./shop.styles";

import Item from "./item/item.component";

const Shop = () => {
  const shop = useSelector((state) => state.shop);
  return (
    <Wrap>
      {shop.items.map((item) => (
        <Item item={item} />
      ))}
    </Wrap>
  );
};

export default Shop;
