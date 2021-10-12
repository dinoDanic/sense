import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "../../../theme/ui-components/box/box.component";
import closeImg from "../../../img/close.svg";

import {
  Wrap,
  OrderI,
  Length,
  OrderId,
  Delete,
  Hold,
} from "./order-item.styles";
import { deleteOrderById } from "../../../redux/orders/orders.actions";

const OrderItem = ({ order, i }) => {
  const dispatch = useDispatch();
  const { items, _id } = order;
  const handleDelete = () => {
    dispatch(deleteOrderById(_id));
  };
  return (
    <Hold>
      <Box>
        <Delete src={closeImg} onClick={handleDelete} />
        <Wrap>
          <Link to={`/my-orders/${_id}`}>
            <OrderI>Order Number {i + 1}</OrderI>
            <OrderId>{_id}</OrderId>
            <Length>{items.length} items</Length>
          </Link>
        </Wrap>
      </Box>
    </Hold>
  );
};

export default OrderItem;
