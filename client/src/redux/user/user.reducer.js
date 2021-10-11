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
  orders: [],
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
      return {
        ...INITIAL_STATE,
        orders: [...state.orders],
      };

    case userActionsTypes.ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case userActionsTypes.CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
