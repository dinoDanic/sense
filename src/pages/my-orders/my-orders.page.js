import React from "react";
import { useSelector } from "react-redux";

import { Title, Wrap, Orders } from "./my-orders.styles";

import TransitionPage from "../../components/transition-page/transition-page.component";
import OrderItem from "./order-item/order-item.component";

const MyOrders = () => {
  const orders = useSelector((state) => state.user.orders);
  return (
    <TransitionPage>
      <Wrap>
        <Title>My Orders</Title>
        <Orders>
          {orders?.map((order, i) => (
            <OrderItem order={order} key={i} i={i} />
          ))}
        </Orders>
      </Wrap>
      {orders.length === 0 && <p>No orders..</p>}
    </TransitionPage>
  );
};

export default MyOrders;
