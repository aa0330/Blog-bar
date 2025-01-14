import express from "express";
import { list, deleteUser } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/list", list);

userRouter.delete("/user", deleteUser);

export { userRouter };
