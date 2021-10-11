import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import TransitionPage from "../../components/transition-page/transition-page.component";
import Button from "../../theme/ui-components/button/button.conponent";
import CartItem from "../checkout/cart-item/cart-item.component";

import { Title, Wrap, OrderItem } from "./my-order.styles";

const MyOrder = () => {
  const orders = useSelector((state) => state.user.orders);
  const history = useHistory();
  const orderId = history.location.pathname.split("/")[2];
  const [currentOrder, setCurrentOrder] = useState([]);

  useEffect(() => {
    setCurrentOrder(() => {
      const order = orders.find((order) => order.id === orderId);
      return order;
    });
    console.log(orders.length);
  }, [currentOrder, orderId, orders]);

  const handleBack = () => {
    history.push("/my-orders");
  };
  return (
    <TransitionPage>
      {currentOrder && (
        <Wrap>
          <Title>ORDER #{currentOrder.id}</Title>
          {currentOrder?.items?.map((order) => (
            <OrderItem key={order.id}>
              <CartItem order cartItem={order} />
            </OrderItem>
          ))}
          <Button size="sm" onClick={handleBack}>
            Back
          </Button>
        </Wrap>
      )}
    </TransitionPage>
  );
};

export default MyOrder;
