import ordersActionsTypes from "./orders.actionsTypes";

const INITIAL_STATE = [];

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ordersActionsTypes.CREATE_ORDER:
      return [...state, action.payload];

    case ordersActionsTypes.GET_ORDERS:
      return action.payload;
    default:
      return state;
  }
};

export default ordersReducer;
