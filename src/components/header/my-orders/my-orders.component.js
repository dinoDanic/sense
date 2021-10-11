import React from "react";
import { Link } from "react-router-dom";
import orderImg from "../../../img/orderList.svg";
import { OrderImg, Wrap } from "./my-orders.style";

const MyOrders = () => {
  return (
    <Wrap>
      <Link to="/my-orders">
        <OrderImg src={orderImg} />
      </Link>
    </Wrap>
  );
};

export default MyOrders;
