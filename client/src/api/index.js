import axios from "axios";

const url = "http://localhost:5000";

export const createOrder = (data) => axios.post(`${url}/orders/new`, data);

export const getOrders = () => axios.get(`${url}/orders/`);
