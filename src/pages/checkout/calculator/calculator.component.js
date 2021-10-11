import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCoupon } from "../../../redux/coupons/coupons.actions";
import {
  Wrap,
  Item,
  Name,
  Value,
  AddCoupon,
  GotCoupon,
  ActiveCoupons,
} from "./calculator.styles";

import { decNumber } from "../../../helpers";

import Button from "../../../theme/ui-components/button/button.conponent";
import Input from "../../../theme/ui-components/input/input.component";
import CouponItem from "./coupon-item/coupon-item.component";

const Calculator = () => {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop);
  const coupons = useSelector((state) => state.coupons);
  const [isCoupon, setIsCoupon] = useState(false);
  const [priceWithCoupons, setPriceWithCoupons] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    if (!shop.cartItems) return;
    const sum = shop.cartItems.reduce(
      (prev, next) => prev + next.value * next.amount,
      0
    );
    setTotalPrice(sum);
  }, [shop]);

  useEffect(() => {
    const sum = coupons.activeCoupons.reduce((prev, next) => {
      if (next.type === "percent") {
        const percent = next.value;
        const percentValue = (totalPrice / 100) * percent;
        return prev - percentValue;
      }
      if (next.type === "number") {
        const value = next.value;
        return prev - value;
      }
      return totalPrice;
    }, totalPrice);

    setPriceWithCoupons(sum);
  }, [coupons, totalPrice]);

  const handleCoupon = (e) => {
    e.preventDefault();
    const gotCoupon = coupons.coupons.find(
      (coupon) => coupon.name === couponCode
    );
    if (!gotCoupon) {
      alert("no coupon found");
      setIsCoupon(false);
      return;
    } else {
      if (!coupons.activeCoupons.length) {
        dispatch(addCoupon(gotCoupon));
      } else {
        if (
          !gotCoupon.combine &&
          coupons.activeCoupons.find((coupon) => coupon.combine === false)
        ) {
          alert("you cant combine this coupon");
          setIsCoupon(false);
          return;
        } else {
          if (coupons.activeCoupons.includes(gotCoupon)) {
            alert("coupon allrdy applyed");
            return;
          }
          dispatch(addCoupon(gotCoupon));
        }
      }
    }
    setIsCoupon(false);
  };

  return (
    <Wrap>
      <Item>
        <Name>Total price</Name>
        <Value>{decNumber(totalPrice)} €</Value>
      </Item>
      <ActiveCoupons>
        {coupons.activeCoupons?.map((coupon) => (
          <CouponItem
            key={coupon.name}
            coupon={coupon}
            totalPrice={totalPrice}
          />
        ))}
      </ActiveCoupons>
      {coupons.activeCoupons.length > 0 && (
        <Item>
          <Name>Total</Name>
          <Value>{decNumber(priceWithCoupons)} €</Value>
        </Item>
      )}
      {isCoupon ? (
        <AddCoupon onSubmi={handleCoupon}>
          <Input
            label="Add Coupon"
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <Button size="sm" color="green" onClick={handleCoupon}>
            Add
          </Button>
        </AddCoupon>
      ) : (
        <>
          {shop.cartItems.length > 0 && (
            <GotCoupon onClick={() => setIsCoupon(true)}>Add Coupon</GotCoupon>
          )}
        </>
      )}
    </Wrap>
  );
};

export default Calculator;
