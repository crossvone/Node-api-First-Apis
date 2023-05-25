import mongoose from "mongoose"


export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,
{
    dbName:"backend",
})
.then(()=> console.log("Databse Connected"))
.catch(()=>console.log("Something went wrong"))
};