import { Order } from "../modules/orders.module.js";

export const createOrder = async (req, res) => {
  const newOrder = req.body;
  try {
    const createOrder = new Order(newOrder);
    const respond = await createOrder.save();
    console.log(respond);
    res.json(respond);
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrders = async (req, res) => {
  try {
    const ordersData = await Order.find();
    res.json(ordersData);
  } catch (error) {
    console.log(error.message);
  }
};
