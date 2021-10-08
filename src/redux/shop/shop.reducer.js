import storeMock from "../../mock/store";
import shopActionsTypes from "./shop.actionsTypes";

const INITIAL_STATE = {
  items: [...storeMock],
  cartItems: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default shopReducer;
