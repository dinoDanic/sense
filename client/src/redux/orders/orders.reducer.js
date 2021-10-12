import ordersActionsTypes from "./orders.actionsTypes";

const INITIAL_STATE = [];

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ordersActionsTypes.CREATE_ORDER:
      return [...state, action.payload];

    case ordersActionsTypes.GET_ORDERS:
      return action.payload;
    case ordersActionsTypes.DELETE_ORDER:
      const copy = [...state];
      const deleted = copy.filter((item) => item._id !== action.payload);
      return deleted;
    default:
      return state;
  }
};

export default ordersReducer;
