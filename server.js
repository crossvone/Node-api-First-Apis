import {app} from "./app.js"
import { connectDB } from "./data/dataBase.js";

connectDB();



app.listen(process.env.PORT,()=>{
    console.log(`Server running without shoe on port:${process.env.PORT}`)
});