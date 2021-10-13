import storeMock from "../../mock/store";
import shopActionsTypes from "./shop.actionsTypes";

const INITIAL_STATE = {
  items: [...storeMock],
  cartItems: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.ADD_ITEM_TO_CART:
      const current = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!current) {
        const newItem = {
          ...action.payload,
          amount: action.payload.amount || 1,
        };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
      const newItem = {
        ...action.payload,
        amount: current.amount + action.payload.amount || current.amount + 1,
      };
      const deleteOld = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: [...deleteOld, newItem],
      };

    case shopActionsTypes.REMOVE_ITEM_FROM_CART:
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: removeItem,
      };

    case shopActionsTypes.ADD_ONE_AMOUNT:
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems[index].amount = state.cartItems[index].amount + 1;
      return {
        ...state,
      };
    case shopActionsTypes.REMOVE_ONE_AMOUNT:
      const index2 = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems[index2].amount = state.cartItems[index2].amount - 1;
      return {
        ...state,
      };
    case shopActionsTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default shopReducer;
