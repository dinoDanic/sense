import React from "react";
import { useSelector } from "react-redux";
import { Wrap } from "./shop.styles";
import { AnimateSharedLayout } from "framer-motion";

import ShopItem from "./shop-item/shop-item.component";
import TransitionPage from "../../components/transition-page/transition-page.component";

const Shop = () => {
  const shop = useSelector((state) => state.shop);
  return (
    <TransitionPage>
      <Wrap>
        <AnimateSharedLayout type="crossfade">
          {shop.items.map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
        </AnimateSharedLayout>
      </Wrap>
    </TransitionPage>
  );
};

export default Shop;
