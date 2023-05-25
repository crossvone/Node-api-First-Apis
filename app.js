import express, { Router }  from "express";
import userRouter from "./routes/userrouter.js"
import taskRouter from "./routes/taskRouter.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import  errMiddleWear from "./middleWears/err.js";
import cors from "cors";



export const app = express();

// Dotenv
config({
    path:"./data/config.env"
});

//Using Middle Wear
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FORENT_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

// USing Routes
app.use( "/api/v1/users",userRouter);
app.use( "/api/v1/task",taskRouter);

//Using Error Handling
app.use(errMiddleWear);