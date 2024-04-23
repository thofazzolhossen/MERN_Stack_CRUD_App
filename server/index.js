import bodyParser from "body-parser";
import  dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routers/userRout.js";




const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOLINK;

app.use('/api', route);

mongoose.connect(URL).then(()=>{
    console.log("DB Connected");


    app.listen(PORT, ()=>{
        console.log("Server : ${PORT}");
    })



}).catch(error => console.log(error));




