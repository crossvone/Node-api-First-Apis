import mongoose from "mongoose"


export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,
{
    dbName:"backend",
})
.then((c)=> console.log(`Databse Connected with ${c.connection.host}`))
.catch((e)=>console.log(e))
};