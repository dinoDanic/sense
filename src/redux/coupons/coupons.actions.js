import couponsActionsTypes from "./coupons.actionTypes";

export const addCoupon = (coupon) => ({
  type: couponsActionsTypes.ADD_COUPON,
  payload: coupon,
});

export const removeCoupon = (couponName) => ({
  type: couponsActionsTypes.REMOVE_COUPON,
  payload: couponName,
});

export const clearCoupons = () => ({
  type: couponsActionsTypes.CLEAR_COUPONS,
});
