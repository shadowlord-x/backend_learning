import mongoose from "mongoose"
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MONGODB connectd !! DB HOST : ${connectionInstance.connection.host}`)
  } catch(error) {
    console.log("MongoDB connection error", error); //process is given by node, gives refernce of current process
    process.exit(1)
  }
}

export default connectDB