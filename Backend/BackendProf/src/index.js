import mongoose from "mongoose"
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config()
connectDB();








// import express from 'express'
// ;import { DB_NAME } from "./constants";
// const app =express();
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error:",error)
//             throw error
//         })
//     app.listen(process.env.PORT,()=>{
//         console.log("App is listing at: http//localhost",process.env.PORT)
//     })
//     } catch (error) {
//         console.error("Error:",error);
//     }
// })()