
//first approach for connecting database

import mongoose from "mongoose";
import express from "express"
import { DB_NAME } from "./constants";

const app = express();
;(async ()=> {
    try {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`
        )
        app.on((error)=> {
            console.error("Error while connecting: " ,error);
        })

        app.listen(process.env.PORT,()=> {
            console.log(`Server listenin at PORT ${process.env.PORT}`);
            
        })
        
    } catch (error) {
        console.log("Error Ocurred!!!: ", error);
    }
})()