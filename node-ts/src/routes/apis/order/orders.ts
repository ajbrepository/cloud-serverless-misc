import express = require("express");
import { Request, Response } from "express";
import { DataService } from "../../../services/DataServices";
const router = express.Router();
let service = new DataService();
//DataService.mongoSetup();
router.get("/:city", (req: Request, res: Response) => {
  const city: string = req.params.city;

  if (!city) {
    return res.status(400).json({
      error: true,
      messsage: "bad request data :("
    });
  }

  let result: { degree: string; status: string };
  let resultNotFound: boolean = false;
  result =  { degree: "", status: "" };
  switch (city.toLowerCase()) {
    case "nyc":
      result = { degree: "18C", status: "foggy" };
      break;
    case "stockholm":
      result = { degree: "8C", status: "windy" };
      break;
    case "san-francisco":
      result = { degree: "14C", status: "rainy" };
      break;
    case "tokyo":
      result = { degree: "21C", status: "sunny" };
      break;
    default:
      resultNotFound = true;
  }

  if (resultNotFound) {
    return res.json({
      error: true,
      messsage: "city name not found in DB :("
    });
  } else {
    return res.json(result);
  }
});

router.post("/create", async (req: Request, res: Response) => {
  //let resultNotFound: boolean = false;
  let result = await service.createOrder(req.body);
  return res.json(result);
});
export default router;