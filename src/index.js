// requie('dotenv').config({path: './env'})  this works but the code is inconsistant due to require and import statements so we use......
import dontenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";


dontenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Mongo db connection failed", err);
});