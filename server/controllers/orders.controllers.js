import { Order } from "../modules/orders.module.js";

export const createOrder = async (req, res) => {
  const newOrder = req.body;
  try {
    const createOrder = new Order(newOrder);
    const respond = await createOrder.save();
  } catch (error) {
    console.log(error.message);
  }
};
