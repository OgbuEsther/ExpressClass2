import express, { Application, Request, Response } from "express";
import bakeryRoute from "./ROUTER/BakeryRouter";
require("./CONFIG/BakeryDb");

const port: number = 1111;
const app: Application = express();
app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "our server is up and running",
  });
});

app.use("/api", bakeryRoute);
app.listen(port, () => {
  console.log(`reading port ${port}`);
});
