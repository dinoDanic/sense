import { combineReducers } from "redux";
import shopReducer from "./shop/shop.reducer";
import couponsReducer from "./coupons/coupons.reducer";
import userReducer from "./user/user.reducer";
import ordersReducer from "./orders/orders.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  coupons: couponsReducer,
  user: userReducer,
  orders: ordersReducer,
});

export default rootReducer;
