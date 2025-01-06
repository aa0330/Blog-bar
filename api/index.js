import express from "express";
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cors())


app.get('/login', (req, res) => {

})



app.listen(5173, () => {
  console.log("Connected!");
});
