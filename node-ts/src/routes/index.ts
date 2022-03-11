import { Router } from "express";
import { DataService } from "../services/DataServices";
// *added* import for Default route
import orders from "./apis/order/orders";
DataService.mongoSetup();
const router = Router();
// *change here to address routes*
router.use("/orders", orders);

export default router;