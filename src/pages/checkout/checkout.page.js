import React from "react";
import { pageTransitionAni } from "../../theme/animations";
import { useSelector } from "react-redux";
import {
  Wrap,
  Left,
  Right,
  ContinueShopping,
  CartItems,
  CartInfo,
  Text,
  Message,
  Items,
} from "./checkout.styles";
import CartItem from "./cart-item/cart-item.component";
import Card from "./card/card.component";
import { useChartSum } from "../../hooks";

const Checkout = () => {
  const shop = useSelector((state) => state.shop);
  const sum = useChartSum();
  return (
    <Wrap
      variants={pageTransitionAni}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <Left>
        <ContinueShopping>Continue Shopping</ContinueShopping>
        <CartItems>
          <CartInfo>
            <Text>Shopping Cart</Text>
            <Message>
              You have {sum} {sum > 1 ? "items" : "item"} in your cart
            </Message>
          </CartInfo>
          <Items>
            {shop.cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} />
            ))}
          </Items>
        </CartItems>
      </Left>
      <Right>
        <Card />
      </Right>
    </Wrap>
  );
};

export default Checkout;
