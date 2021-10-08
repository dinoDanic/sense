import shopActionsTypes from "./shop.actionsTypes";

export const addItemToCart = (item) => ({
  type: shopActionsTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (id) => ({
  type: shopActionsTypes.REMOVE_ITEM_FROM_CART,
  payload: id,
});
