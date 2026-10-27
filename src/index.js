//databse shall be wrapped in try catch or promises as there can be problems. and satabse is alwways in another continent, so it takes time, hence use async-await
//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!",err);
})
/*
;( async() =>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error)=>{
      console.log("ERRRR:",error);
      throw error
    })   //event of failure
    
    app.listen(process.env.PORT, ()=>{
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  }catch (error){
    console.error("ERROR:", error)
    throw err
  }
})() //iife. immediately executed function
 */