import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import TransitionPage from "../../components/transition-page/transition-page.component";
import { getOrderById } from "../../redux/orders/orders.actions";
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
  const history = useHistory();
  const dispatch = useDispatch();
  const orderId = history.location.pathname.split("/")[2];
  const [currentOrder, setCurrentOrder] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      const respond = await dispatch(getOrderById(orderId));
      console.log(respond);
      setCurrentOrder(respond);
    };
    getOrder();
  }, [dispatch, orderId]);

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
