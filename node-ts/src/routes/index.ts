import { Router } from "express";
// *added* import for Default route
import orders from "./apis/order/orders";
const router = Router();
// *change here to address routes*
router.use("/orders", orders);
export default router;