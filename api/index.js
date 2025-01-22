import mysql2 from "mysql2/promise";
import express from "express";
import cors from "cors";
import jsyaml from "js-yaml";
import fs from "node:fs";
import path from "node:path";
import routes from "./routes/index.js";
import { Logger } from "./middleware/logger.js";

const yaml = fs.readFileSync("./app/db.config.yaml", "utf8");
const databaseConfig = jsyaml.load(yaml);

const sql = await mysql2.createConnection({ ...databaseConfig.db });

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(Logger);
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("hello world ");
});

app.listen(1234, () => {
  console.log("Connected!");
});
