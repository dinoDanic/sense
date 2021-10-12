import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Title, Wrap, Orders } from "./my-orders.styles";

import TransitionPage from "../../components/transition-page/transition-page.component";
import OrderItem from "./order-item/order-item.component";
import { getOrders } from "../../redux/orders/orders.actions";

const MyOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

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
      {orders.length === 0 && !loading && <p>No orders..</p>}
    </TransitionPage>
  );
};

export default MyOrders;
