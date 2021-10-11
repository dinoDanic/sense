import { combineReducers } from "redux";
import shopReducer from "./shop/shop.reducer";
import couponsReducer from "./coupons/coupons.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  coupons: couponsReducer,
});

export default rootReducer;
