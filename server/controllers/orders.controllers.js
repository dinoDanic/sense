import { Order } from "../modules/orders.module.js";

export const createOrder = async (req, res) => {
  const newOrder = req.body;
  try {
    const createOrder = new Order(newOrder);
    const respond = await createOrder.save();
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

export const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    res.json(order);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await Order.fidby;
    await Order.findOneAndDelete(id);
    res.json({ message: "deleted" });
  } catch (error) {}
};
