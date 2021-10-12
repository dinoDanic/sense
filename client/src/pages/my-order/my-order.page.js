import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import TransitionPage from "../../components/transition-page/transition-page.component";
import Button from "../../theme/ui-components/button/button.conponent";
import CartItem from "../checkout/cart-item/cart-item.component";

import {
  Title,
  Wrap,
  OrderItem,
  Row,
  OrderBy,
  Item,
  Value,
} from "./my-order.styles";

const MyOrder = () => {
  const orders = useSelector((state) => state.orders);
  const history = useHistory();
  const orderId = history.location.pathname.split("/")[2];
  const [currentOrder, setCurrentOrder] = useState([]);

  useEffect(() => {
    setCurrentOrder(() => {
      const order = orders.find((order) => order._id === orderId);
      return order;
    });
    console.log(currentOrder);
  }, [currentOrder, orderId, orders]);

  const handleBack = () => {
    history.push("/my-orders");
  };
  return (
    <TransitionPage>
      {currentOrder.userData && (
        <Wrap>
          <Title>ORDER #{currentOrder._id}</Title>
          <OrderBy>
            <Row>
              <Item>Name: </Item>
              <Value>{currentOrder.userData.name}</Value>
            </Row>
            <Row>
              <Item>Address: </Item>
              <Value>{currentOrder.userData.address}</Value>
            </Row>
            <Row>
              <Item>Email: </Item>
              <Value>{currentOrder.userData.email}</Value>
            </Row>
          </OrderBy>
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
