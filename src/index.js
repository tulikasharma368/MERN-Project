// require('dotenv').config({path: '/env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

// import express from "express";
// const app = express()
// ;(async () => { //; is placed before an IIFE as a common practice to avoid certain issues
//     try {
//         await mongoose.conect(`${process.env.MONGOB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log('ERROR: ', error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`)
//         })
//     }catch (error){
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()