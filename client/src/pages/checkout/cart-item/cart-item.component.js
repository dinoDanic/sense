import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Wrap,
  Image,
  Name,
  Description,
  Info,
  InfoText,
  RightHold,
  Amount,
  Remove,
  Value,
  Add,
  AmountValue,
  Delete,
  Holder,
  Trash,
} from "./cart-item.styles";
import TrashImg from "../../../img/trash.png";
import {
  addOneAmount,
  removeItemFromCart,
  removeOneAmount,
} from "../../../redux/shop/shop.actions";

const CartItem = ({ cartItem, order }) => {
  console.log(cartItem);
  const dispatch = useDispatch();
  const { name, value, gallery, description, amount, id } = cartItem;
  const [newValue, setNewValue] = useState(value);
  const frontImg = gallery[0].image;

  useEffect(() => {
    setNewValue(value * amount);
  }, [amount, value]);

  const handleAdd = () => {
    dispatch(addOneAmount(id));
  };
  const handleRemove = () => {
    if (amount === 1) {
      handleDelete();
      return;
    }
    dispatch(removeOneAmount(id));
  };
  const handleDelete = () => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <Wrap>
      <Info>
        <Image src={frontImg} />
        <InfoText>
          <Name>{name}</Name>
          <Description>{description.substring(0, 30)}...</Description>
        </InfoText>
      </Info>
      <RightHold>
        {!order && (
          <>
            <Amount>
              <Remove onClick={handleRemove}>-</Remove>
              <AmountValue>{amount}</AmountValue>
              <Add onClick={handleAdd}>+</Add>
            </Amount>
            <Holder>
              <Value>{Math.round(newValue * 100) / 100}</Value>
              <Delete onClick={handleDelete}>
                <Trash src={TrashImg} />
              </Delete>
            </Holder>
          </>
        )}
      </RightHold>
      {order && <Amount order={true}>{amount}</Amount>}
    </Wrap>
  );
};

export default CartItem;
