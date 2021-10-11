import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import ordersRoutes from "./routes/orders.routes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/orders", ordersRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.DB_PORT || 5000);
    console.log("connected to port", process.env.DB_PORT);
  })
  .catch((err) => console.log(err.message));
