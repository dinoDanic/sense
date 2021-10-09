import React, { useEffect, useState } from "react";
import { Name, Value, Wrap } from "./coupon-item.styles";

import { decNumber } from "../../../../helpers";

const CouponItem = ({ coupon, totalPrice }) => {
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

  return (
    <Wrap>
      <Name>{name}</Name>
      <Value>-{decNumber(valueOfCoupon)} €</Value>
    </Wrap>
  );
};

export default CouponItem;

// const dv = (price * couponValue) / 100;
