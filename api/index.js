import mysql2 from "mysql2/promise";
import express from "express";
import cors from "cors";
import jsyaml from "js-yaml";
import fs from "node:fs";
import routes from "./routes/index.js";


const yaml = fs.readFileSync("./app/db.config.yaml", "utf8");
const databaseConfig = jsyaml.load(yaml);

const sql = await mysql2.createConnection({ ...databaseConfig.db });

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.get("/", (req, res) => {});

app.listen(5173, () => {
  console.log("Connected!");
});
