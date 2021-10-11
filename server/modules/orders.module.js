import mongoose from "mongoose";

const ordersSchema = mongoose.Schema({
  items: [],
  userData: {},
});

export const Order = mongoose.model("orders", ordersSchema);
