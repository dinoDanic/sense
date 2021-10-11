import userActionsTypes from "./user.actionTypes";

export const setUserData = (userData) => ({
  type: userActionsTypes.SET_USER_DATA,
  payload: userData,
});

export const setCardData = (cardData) => ({
  type: userActionsTypes.SET_CARD_DATA,
  payload: cardData,
});
