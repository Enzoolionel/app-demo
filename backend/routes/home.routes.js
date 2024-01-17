import { Router } from "express";
import { homeController } from "../controller/homeController.js";

const routerHome = Router();

routerHome.get("/home", homeController);

export default routerHome;
