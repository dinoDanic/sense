import React from "react";
import { Link } from "react-router-dom";
import Box from "../../../theme/ui-components/box/box.component";

import { Wrap, OrderI, Length, OrderId } from "./order-item.styles";

const OrderItem = ({ order, i }) => {
  const { items, _id } = order;
  return (
    <Box>
      <Link to={`/my-orders/${_id}`}>
        <Wrap>
          <OrderI>Order Number {i + 1}</OrderI>
          <OrderId>{_id}</OrderId>
          <Length>{items.length} items</Length>
        </Wrap>
      </Link>
    </Box>
  );
};

export default OrderItem;
