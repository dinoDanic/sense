import Router from "express";
import { createOrder } from "../controllers/orders.controllers.js";

const router = Router();

router.post("/new", createOrder);

export default router;
