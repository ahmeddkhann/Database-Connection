//  2nd approach is writing code in seperate file and then exporting the file into index.js

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const connectDb = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database Connection Successful!!! DB HOST AT ${connectionInstance.connection.host}`);
        
    } catch (error) {
       console.error("Database connection has an error: ", error);
    }

};

export default connectDb;
