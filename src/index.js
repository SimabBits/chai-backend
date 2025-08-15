import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Err", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listning on port ${process.env.PORT}`)
            
        })
        

    }
    catch(error){

        console.error("Error", error)
        throw error
        
    }
})()