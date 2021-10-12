import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { addError, clearUserData } from "../../redux/user/user.actions";
import { clearCartData } from "../../redux/shop/shop.actions";
import {
  Wrap,
  Title,
  Image,
  ContentHold,
  CartItems,
  CartHold,
  SubTitle,
  UserHold,
  Row,
  Item,
  Value,
  HoldButton,
} from "./order.styles";
import PartyImg from "../../img/party.png";
import { useSelector } from "react-redux";
import CartItem from "../checkout/cart-item/cart-item.component";
import Calculator from "../checkout/calculator/calculator.component";
import Button from "../../theme/ui-components/button/button.conponent";
import { clearCoupons } from "../../redux/coupons/coupons.actions";
import TransitionPage from "../../components/transition-page/transition-page.component";
import { Link } from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.shop.cartItems);
  const userData = useSelector((state) => state.user.userData);

  const handleClear = () => {
    dispatch(clearUserData());
    dispatch(clearCartData());
    dispatch(clearCoupons());
    history.push("/");
  };

  return (
    <TransitionPage>
      <Wrap>
        <ContentHold>
          <Image src={PartyImg} />
          <Title>Your order is complete!</Title>
        </ContentHold>
        <SubTitle>Ordered items</SubTitle>
        <CartItems>
          {cartItems?.map((item) => (
            <CartHold key={item.id}>
              <CartItem order cartItem={item} />
            </CartHold>
          ))}
        </CartItems>
        <SubTitle>Price</SubTitle>
        <Calculator order />
        <SubTitle>User</SubTitle>
        <UserHold>
          <Row>
            <Item>Name</Item>
            <Value>{userData.name}</Value>
          </Row>
          <Row>
            <Item>Address</Item>
            <Value>{userData.address}</Value>
          </Row>
          <Row>
            <Item>Email</Item>
            <Value>{userData.email}</Value>
          </Row>
        </UserHold>
        <HoldButton>
          <Link to="/">
            <Button onClick={handleClear}>Back to homepage</Button>
          </Link>
          <Link to="/my-orders">
            <Button onClick={handleClear}>My Orders</Button>
          </Link>
        </HoldButton>
      </Wrap>
    </TransitionPage>
  );
};

export default Order;
