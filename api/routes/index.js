import express from "express";
import { userRouter } from "./user.js";
import { loginRouter } from "./login.js";

const routes = express.Router();

routes.use("/api", userRouter);
routes.use("/api", loginRouter);

export default routes;
