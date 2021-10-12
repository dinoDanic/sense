import axios from "axios";

const url = "https://app-sense.herokuapp.com";

export const createOrder = (data) => axios.post(`${url}/orders/new`, data);

export const getOrders = () => axios.get(`${url}/orders/`);

export const getOrderById = (id) => axios.get(`${url}/orders/${id}`);
