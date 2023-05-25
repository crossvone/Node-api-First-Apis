import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/fucture.js";
import ErrorHandler from "../middleWears/err.js";



export const getAllUsers = async(req,res)=>{};

export const login = async(req,res)=>{

  try {
    const {email,password} = req.body;

  const user = await User.findOne({email}).select("+password");

  if(!user) return next(new ErrorHandler("Invalid email or Password",404));
 
  const isMatch = await bcrypt.compare(password,user.password);

  if(!isMatch)
  return next(new ErrorHandler("Invalid email or Password",404));

  sendCookie (user,res,`Welcome back ${user.name}`, 300);
  } catch (error) {
    next(error);
  }

};

export const register = async(req,res)=>{
try {
  
  const {name,email,password} = req.body;

  let user = await User.findOne({email});

  if(user) return next(new ErrorHandler("User Already Exist",404));
   
  

  const hashedpassword = await bcrypt.hash(password,10);

   user = await User.create({name,email,password:hashedpassword});

    sendCookie (user,res,"Register Successfuly", 302);
} catch (error) {
  next(error);
}

};



export const getMyDetails = async(req,res)=>{



  res.status(300).json({
    success:true,
    user:req.user
  });

};

export const logout = (req,res)=>{

  res.status(300).cookie("token","",{expires:new Date(Date.now()),
  
    sameSite:process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure:process.env.NODE_ENV === "Development" ? false : true,
  })
  .json({
    success:true,
    user:req.user
  });

}



