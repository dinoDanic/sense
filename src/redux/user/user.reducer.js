import userActionsTypes from "./user.actionTypes";

const INITIAL_STATE = {
  userData: {
    name: "",
    email: "",
    address: "",
  },
  cardData: {
    cardName: "",
    number: "",
    expDate: "",
    cvv: "",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case userActionsTypes.SET_CARD_DATA:
      return {
        ...state,
        cardData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
