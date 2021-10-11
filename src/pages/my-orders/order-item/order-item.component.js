import React from "react";
import Box from "../../../theme/ui-components/box/box.component";

import { Wrap, OrderI, Length, OrderId } from "./order-item.styles";

const OrderItem = ({ order, i }) => {
  const { items, id } = order;
  return (
    <Box>
      <Wrap>
        <OrderI>Order Number {i + 1}</OrderI>
        <OrderId>{id}</OrderId>
        <Length>{items.length} items</Length>
      </Wrap>
    </Box>
  );
};

export default OrderItem;
