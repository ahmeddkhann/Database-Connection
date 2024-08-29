// second approch after importing it 

import connectDb from "./databaseConnection";
connectDb()
.then(()=> {

    app.on((error)=> {
        
        console.log("Database is connected but can not respond: ", error);

    })
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Database has connected Successfully at host ${process.env.PORT}`); 
    })
})
.catch((error)=> {
    console.log(`Database Server Connection Failed!! `, error);
    
})






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