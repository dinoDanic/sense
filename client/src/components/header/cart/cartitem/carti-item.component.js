import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../../../redux/shop/shop.actions";
import { CartWrap, Name, Remove, Amount } from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { name, amount } = item;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItemFromCart(item.id));
  };
  return (
    <CartWrap>
      <Name>{name}</Name>
      <Amount>{amount > 0 && <>{amount}</>}</Amount>
      <Remove onClick={handleRemove}>X</Remove>
    </CartWrap>
  );
};

export default CartItem;
