// requie('dotenv').config({path: './env'})  this works but the code is inconsistant due to require and import statements so we use......
import dontenv from "dotenv"
import connectDB from "./db/index.js";


dontenv.config({
    path: './env'
})


connectDB()