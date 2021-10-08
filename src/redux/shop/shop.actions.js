import shopActionsTypes from "./shop.actionsTypes";

export const addItemToCart = (wrap) => ({
  type: shopActionsTypes.ADD_ITEM_TO_CART,
  payload: wrap,
});
