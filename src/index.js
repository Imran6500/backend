import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERROR: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch(
    (err)=>{
        console.log("MONGO db connection failed !!!", err);
    }
)







/*
import express from "express"
const app = express()


(async () =>{
   try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGOOS_URI}/${DB_NAME}`)
      app.on("error", (error)=>{
        console.log("error ", error);
        throw error
      })
     app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
     })
   } catch (error) {
      console.log("error ", error)
      throw(error)
   }
})()

export default connectDB

*/