import ordersActionsTypes from "./orders.actionsTypes";
import * as api from "../../api";

export const createOrder = (orderData) => async (dispatch) => {
  try {
    const respond = await api.createOrder(orderData);
    dispatch({
      type: ordersActionsTypes.CREATE_ORDER,
      payload: respond.data,
    });
    return respond;
  } catch (error) {}
};

export const getOrders = () => async (dispatch) => {
  try {
    const respond = await api.getOrders();
    dispatch({
      type: ordersActionsTypes.GET_ORDERS,
      payload: respond.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrderById = (id) => async (dispatch) => {
  try {
    const respond = await api.getOrderById(id);
    return respond.data;
  } catch (error) {}
};
