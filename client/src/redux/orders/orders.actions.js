import ordersActionsTypes from "./orders.actionsTypes";
import userActionsTypes from "../user/user.actionTypes";
import * as api from "../../api";

export const createOrder = (orderData) => async (dispatch) => {
  dispatch({
    type: userActionsTypes.SET_LOADING,
    payload: true,
  });
  try {
    const respond = await api.createOrder(orderData);
    dispatch({
      type: ordersActionsTypes.CREATE_ORDER,
      payload: respond.data,
    });
    dispatch({
      type: userActionsTypes.SET_LOADING,
      payload: false,
    });
    return respond;
  } catch (error) {
    dispatch({
      type: userActionsTypes.SET_LOADING,
      payload: false,
    });
  }
};

export const getOrders = () => async (dispatch) => {
  dispatch({
    type: userActionsTypes.SET_LOADING,
    payload: true,
  });
  try {
    const respond = await api.getOrders();
    dispatch({
      type: ordersActionsTypes.GET_ORDERS,
      payload: respond.data,
    });
    dispatch({
      type: userActionsTypes.SET_LOADING,
      payload: false,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: userActionsTypes.SET_LOADING,
      payload: false,
    });
  }
};

export const getOrderById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: userActionsTypes.SET_LOADING,
      payload: true,
    });
    const respond = await api.getOrderById(id);
    dispatch({
      type: userActionsTypes.SET_LOADING,
      payload: false,
    });
    return respond.data;
  } catch (error) {
    dispatch({
      type: userActionsTypes.SET_LOADING,
      payload: false,
    });
  }
};
