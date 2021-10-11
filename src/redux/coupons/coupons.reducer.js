import couponsActionsTypes from "./coupons.actionTypes";
import couponsMock from "../../mock/coupons";

const INITIAL_STATE = {
  coupons: [...couponsMock],
  activeCoupons: [],
};

const couponsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case couponsActionsTypes.ADD_COUPON:
      const checkCoupon = state.activeCoupons.find(
        (item) => item.name === action.payload.name
      );
      if (checkCoupon) return state;

      return {
        ...state,
        activeCoupons: [...state.activeCoupons, action.payload],
      };
    case couponsActionsTypes.REMOVE_COUPON:
      const newCoupons = state.activeCoupons.filter(
        (item) => item.name !== action.payload
      );
      return {
        ...state,
        activeCoupons: newCoupons,
      };
    default:
      return state;
  }
};

export default couponsReducer;
