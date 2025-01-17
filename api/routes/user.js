import express from "express";
import { list, deleteUser } from "../controllers/user.js";
import { upload } from "../utils/upload.js";

const userRouter = express.Router();

userRouter.get("/list", list);
userRouter.post("/upload", upload.single("file"), (res, res) => {
  res.sed("ok");
});

userRouter.delete("/user", deleteUser);

export { userRouter };
