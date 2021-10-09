import shopActionsTypes from "./shop.actionsTypes";

export const addItemToCart = (item) => ({
  type: shopActionsTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (id) => ({
  type: shopActionsTypes.REMOVE_ITEM_FROM_CART,
  payload: id,
});

export const addOneAmount = (id) => ({
  type: shopActionsTypes.ADD_ONE_AMOUNT,
  payload: id,
});
export const removeOneAmount = (id) => ({
  type: shopActionsTypes.REMOVE_ONE_AMOUNT,
  payload: id,
});
