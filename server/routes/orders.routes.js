import Router from "express";
import { createOrder, getOrders } from "../controllers/orders.controllers.js";

const router = Router();

router.post("/new", createOrder);
router.get("/", getOrders);

export default router;
