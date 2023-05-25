import ErrorHandler from "../middleWears/err.js";
import { Task } from "../model/task.js";

export const newTask = async (req,res,next)=>{

    try {
        const {title,description} = req.body;

        await Task.create({
            title,
            description,
            user:req.user,
        });
    
        res.status(300).json({
            success:true,
            message:"Task created successfully"
        })
    } catch (error) {
        next(error);
    }
};

export const getMytask = async (req,res,next)=>{

    try {
        const userId = req.user._id

    const tasks = await Task.find({user:userId})

    res.status(300).json({
        success:true,
        tasks,
    });
    } catch (error) {
        next(error);
    }
};

export const updateTask = async (req,res,next)=>{

  try {
    const {id} = req.params;

    const task = await Task.findById(id);

    if(!task) return next(new ErrorHandler("Task NOT found",404));
    

    task.isCompleted = !task.isCompleted;

    await task.save();

    res.status(300).json({
        success:true,
        message:"Task Updated"
    });
  } catch (error) {
    next(error);
    
  }

};

export const  deleteTask = async (req,res,next)=>{

    try {
        const {id} = req.params;

    const task = await Task.findById(id);

    if(!task) return next(new ErrorHandler("Task NOT found",404));

    await task.deleteOne();

    res.status(300).json({
        success:true,
        message:"Task Deleted"
    });
    } catch (error) {
        next(error);
    }
};