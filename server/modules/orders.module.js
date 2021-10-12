import mongoose from "mongoose";

const ordersSchema = mongoose.Schema({
  items: [
    {
      name: String,
      description: String,
      value: Number,
      image: String,
      id: Number,
      gallery: [],
      amount: Number,
    },
  ],
  userData: {
    name: String,
    address: String,
    email: String,
  },
  _id: String,
});

export const Order = mongoose.model("orders", ordersSchema);
