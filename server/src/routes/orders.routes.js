import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";


const ordersRouter = Router();

ordersRouter.get("/", getOrdersCtrl);
 ordersRouter.post("/create", createOrderCtrl);
 ordersRouter.put("/:id", createOrderCtrl);
 ordersRouter.delete("/:id", createOrderCtrl);
 ordersRouter.patch("/:id", createOrderCtrl);
 ordersRouter.get("/:id", createOrderCtrl);
 ordersRouter.get("/user/:userId", createOrderCtrl);
 ordersRouter.get("/coffee/:coffeeId", createOrderCtrl);
 ordersRouter.get("/total", createOrderCtrl);
// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("./", createOrderCtrl);

export { ordersRouter };
