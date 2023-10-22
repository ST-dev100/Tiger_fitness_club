import Tiger from "../models/TigerModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'


const Login =async (req,res)=>{
    let userName =await Tiger.find({email:req.body.email})               
    if(userName.length)
    {
    //  console.log("Pass word correct")
     let x = await bcrypt.compare(req.body.password,userName[0].password);
     if(x)
     {
     const token = jwt.sign({ email:userName[0].email}, process.env.JWT_API);
     res.cookie('jwt',token);
     res.redirect('/reg') ;
     }
     else
     {
         console.log("Email is correct but the password is incorrect")
     }        
    }
    else{
    console.log("Email doesn't exist")   
    }
    }     
    export default Login