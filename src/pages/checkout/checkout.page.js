import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
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
import Box from "../../theme/ui-components/box/box.component";
import TransitionPage from "../../components/transition-page/transition-page.component";

const Checkout = () => {
  const shop = useSelector((state) => state.shop);
  const sum = useChartSum();
  const history = useHistory();
  return (
    <TransitionPage>
      <Wrap>
        <Left>
          <ContinueShopping onClick={() => history.push("/")}>
            Continue Shopping
          </ContinueShopping>
          <CartItems>
            <CartInfo>
              <Text>Shopping Cart</Text>
              <Message>
                You have {sum} {sum > 1 ? "items" : "item"} in your cart
              </Message>
            </CartInfo>
            <Items>
              {shop.cartItems.map((cartItem) => (
                <Box variant="item" key={cartItem.id}>
                  <CartItem cartItem={cartItem} />
                </Box>
              ))}
            </Items>
          </CartItems>
        </Left>
        <Right>
          <Card />
        </Right>
      </Wrap>
    </TransitionPage>
  );
};

export default Checkout;
