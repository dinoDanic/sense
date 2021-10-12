import Router from "express";
import {
  createOrder,
  getOrders,
  getOrder,
  deleteOrder,
} from "../controllers/orders.controllers.js";

const router = Router();

router.post("/new", createOrder);
router.get("/", getOrders);
router.get("/:id", getOrder);
router.delete("/:id", deleteOrder);

export default router;
