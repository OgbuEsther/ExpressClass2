import { Router } from "express";
import { getAll, getOne, post } from "../CONTROLLER/BakeryController";

const bakeryRoute = Router();

bakeryRoute.route("/getAllBakery").get(getAll);
bakeryRoute.route("/getOneBakery/:id").get(getOne);
bakeryRoute.route("/newbakery").post(post);

export default bakeryRoute;
