import express from "express";
import mongoose from "mongoose";
import { Controllers } from "./controllers";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

try {
    mongoose.connect(process.env.MONGO_URI,
    {
        autoIndex : true
    });
    console.log("Connected to database !");
}
catch(err){
    throw Error("Failed to connect to database !");
}

app.use('/api', Controllers);

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port ${process.env.PORT || 3000}`));