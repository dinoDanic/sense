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
  CreditCard,
  Items,
} from "./checkout.styles";
import CartItem from "./cart-item/cart-item.component";
import Card from "./card/card.component";

const Checkout = () => {
  const shop = useSelector((state) => state.shop);
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
            <Message>You have 4 items in your cart</Message>
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
