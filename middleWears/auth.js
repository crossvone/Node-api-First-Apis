import { User } from "../model/userModel.js";
import jwt from 'jsonwebtoken'

export const isAuthentication = async(req,res,next)=>{

    const {token} = req.cookies;

    console.log = (token);
  
    if(!token)
    return res.status(300).json({
      success:false,
      message:"Login First Bsdk",
    });
  
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
  
    req.user = await User.findById(decoded._id)

    next();

};