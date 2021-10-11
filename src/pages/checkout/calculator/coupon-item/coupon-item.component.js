import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Hold, Name, Remove, Value, Wrap } from "./coupon-item.styles";

import { decNumber } from "../../../../helpers";
import { removeCoupon } from "../../../../redux/coupons/coupons.actions";

const CouponItem = ({ coupon, totalPrice, order }) => {
  const dispatch = useDispatch();
  const [valueOfCoupon, setValueOfCoupon] = useState(0);
  const { name, value, type } = coupon;
  useEffect(() => {
    setValueOfCoupon(() => {
      let price;
      if (type === "percent") {
        price = (totalPrice * value) / 100;
      }
      if (type === "number") {
        price = value;
      }
      return price;
    });
  }, [totalPrice, type, value]);

  const handleRemove = () => {
    dispatch(removeCoupon(coupon.name));
  };

  return (
    <Wrap order={true}>
      <Hold>
        <Name>{name}</Name>
        <Value>-{decNumber(valueOfCoupon)} €</Value>
        {!order && <Remove onClick={handleRemove}>Remove</Remove>}
      </Hold>
    </Wrap>
  );
};

export default CouponItem;

// const dv = (price * couponValue) / 100;
