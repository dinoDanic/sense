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

import { calPromotion, decNumber } from "../../../helpers";

import Button from "../../../theme/ui-components/button/button.conponent";
import Input from "../../../theme/ui-components/input/input.component";
import CouponItem from "./coupon-item/coupon-item.component";
import { addError } from "../../../redux/user/user.actions";

const Calculator = ({ order }) => {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop);
  const coupons = useSelector((state) => state.coupons);
  const [isCoupon, setIsCoupon] = useState(false);
  const [priceWithCoupons, setPriceWithCoupons] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponNumberValue, setCouponNumberValue] = useState(0);

  useEffect(() => {
    if (!shop.cartItems) return;
    const sum = shop.cartItems.reduce((prev, next) => {
      if (next.promotion) {
        const promotionValue = calPromotion(next.promotion, next.amount);
        return prev + next.value * next.amount - promotionValue;
      }
      return prev + next.value * next.amount;
    }, 0);
    setTotalPrice(sum);
  }, [shop]);

  useEffect(() => {
    setCouponNumberValue(
      coupons.activeCoupons.reduce((prev, next) => {
        if (next.type === "number") {
          return prev + next.value;
        }
        return prev;
      }, 0)
    );
  }, [coupons.activeCoupons]);

  useEffect(() => {
    const sum = coupons.activeCoupons.reduce((prev, next) => {
      if (next.type === "percent") {
        const percent = next.value;
        const percentValue = ((totalPrice - couponNumberValue) / 100) * percent;
        return prev - percentValue;
      }
      if (next.type === "number") {
        const value = next.value;
        return prev - value;
      }
      return totalPrice;
    }, totalPrice);

    setPriceWithCoupons(sum);
  }, [couponNumberValue, coupons.activeCoupons, totalPrice]);

  const handleCoupon = (e) => {
    e.preventDefault();
    const gotCoupon = coupons.coupons.find(
      (coupon) => coupon.name === couponCode
    );
    if (!gotCoupon) {
      dispatch(addError({ errMessage: "No Coupons Found" }));
      setIsCoupon(false);
      return;
    } else {
      // ako nema kupona
      if (!coupons.activeCoupons.length) {
        dispatch(addCoupon(gotCoupon));
      } else {
        // ako ima kupona
        if (!gotCoupon.combine) {
          dispatch(addError({ errMessage: "You can not combine this coupon" }));
          return;
        }
        const gotFalseCombine = coupons.activeCoupons.find(
          (coupon) => coupon.combine === false
        );
        if (gotFalseCombine) {
          dispatch(addError({ errMessage: "You can not combine this coupon" }));
        } else {
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
            order={order}
            key={coupon.name}
            coupon={coupon}
            totalPrice={totalPrice}
            couponNumberValue={couponNumberValue}
          />
        ))}
      </ActiveCoupons>
      {coupons.activeCoupons.length > 0 && (
        <Item>
          <Name>Total</Name>
          <Value>{decNumber(priceWithCoupons)} €</Value>
        </Item>
      )}
      {!order && (
        <>
          {isCoupon ? (
            <AddCoupon onSubmit={handleCoupon}>
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
                <GotCoupon onClick={() => setIsCoupon(true)}>
                  Add Coupon
                </GotCoupon>
              )}
            </>
          )}
        </>
      )}
    </Wrap>
  );
};

export default Calculator;
