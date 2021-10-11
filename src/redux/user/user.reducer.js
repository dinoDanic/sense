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
  error: "",
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
    case userActionsTypes.CLEAR_USER_DATA:
      return INITIAL_STATE;

    case userActionsTypes.ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
