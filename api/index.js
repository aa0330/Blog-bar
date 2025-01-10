import mysql2 from 'mysql2/promise'
import express from "express";
import cors from 'cors'
import jsyaml from 'js-yaml'
import fs from 'node:fs'

const yaml = fs.readFileSync('./db.config.yaml', 'utf8')
const config = jsyaml.load(yaml)

const sql = await mysql2.createConnection({
  ...config.db
})


const app = express();

app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {

})



app.listen(5173, () => {
  console.log("Connected!");
});
