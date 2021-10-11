import userActionsTypes from "./user.actionTypes";

export const setUserData = (userData) => ({
  type: userActionsTypes.SET_USER_DATA,
  payload: userData,
});

export const setCardData = (cardData) => ({
  type: userActionsTypes.SET_CARD_DATA,
  payload: cardData,
});

export const clearUserData = () => ({
  type: userActionsTypes.CLEAR_USER_DATA,
});

export const addError = (errorData) => ({
  type: userActionsTypes.ADD_ERROR,
  payload: errorData,
});

export const createOrder = (orderData) => ({
  type: userActionsTypes.CREATE_ORDER,
  payload: orderData,
});
