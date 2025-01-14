import express from "express";
import { register } from "../controllers/login.js";

const loginRouter = express.Router();

loginRouter.post("/register", register);

export { loginRouter };
