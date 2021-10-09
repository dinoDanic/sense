import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import couponsMock from "../../../mock/coupons";

import Button from "../../../theme/ui-components/button/button.conponent";
import Input from "../../../theme/ui-components/input/input.component";
import CouponItem from "./coupon-item/coupon-item.component";

const Calculator = () => {
  const shop = useSelector((state) => state.shop);
  const [isCoupon, setIsCoupon] = useState(false);
  const [activeCoupons, setActiveCoupons] = useState([]);
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
    console.log(activeCoupons);
    const sum = activeCoupons.reduce((prev, next) => {
      let price;
      if (next.type === "percent") {
        let difrence = (totalPrice * next.value) / 100;
        console.log(difrence);
        price = totalPrice - difrence;
        console.log("price after", price);
        return prev - price;
      }
      if (next.type === "number") {
        price = totalPrice - next.value;
        return prev - price;
      }
      return price;
    }, totalPrice);
    setPriceWithCoupons(sum);
  }, [activeCoupons, totalPrice]);

  const handleCoupon = (e) => {
    e.preventDefault();
    const gotCoupon = couponsMock.find((coupon) => coupon.name === couponCode);
    if (!gotCoupon) {
      alert("no coupon found");
      setIsCoupon(false);
      return;
    } else {
      if (!activeCoupons.length) {
        setActiveCoupons([gotCoupon]);
      } else {
        if (
          !gotCoupon.combine &&
          activeCoupons.find((coupon) => coupon.combine === false)
        ) {
          alert("you cant combine this coupon");
          setIsCoupon(false);
          return;
        } else {
          if (activeCoupons.includes(gotCoupon)) {
            alert("coupon allrdy applyed");
            return;
          }
          setActiveCoupons([...activeCoupons, gotCoupon]);
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
        {activeCoupons?.map((coupon) => (
          <CouponItem coupon={coupon} totalPrice={totalPrice} />
        ))}
      </ActiveCoupons>
      {activeCoupons.length > 0 && (
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
