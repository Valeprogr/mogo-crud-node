import express, { json } from "express";
import { default as mongoose } from "mongoose";
import postsRouter from "./routes/post-router.js";
import {} from 'dotenv/config';



const port = process.env.PORT;
const DB_URL= process.env.DB_URL;
const app = express();
//midlewear
app.use(json()); //E un midlewear per leggere File-json
app.use("",postsRouter)

async function startApp (){
    try{
        await mongoose.connect(DB_URL); //questo serve per connettere mongo database
        app.listen(port, ()=>{
            console.log(`Server started on port ${port}`);
        })
    }catch(error){
        console.log(error);
    }
}

startApp();