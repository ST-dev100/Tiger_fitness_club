import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Tiger from "../models/TigerModel.js";



const PostPass =async (req,res)=>{
    const salt =await bcrypt.genSalt(10);
const hash =await bcrypt.hash(req.body.pass, salt);
const t = await bcrypt.compare("123", hash);

const token = req.cookies.jwt
jwt.verify(token,process.env.JWT_API,async(err,dec)=>{
   if(err)
   {
   console.log('errrr new')
   }

   let userName =await Tiger.find({email:dec.email})  

   Tiger.findOneAndUpdate(
    {
      // Search query
      email: userName[0].email,
    },
    {
      email:req.body.email,
      password:hash
    },
    {
      // To return the updated doc
      new: true,
    }
   )
    .then((doc) => {
      // Updated doc returned
      console.log(doc);
      res.redirect('/home')
    })
    .catch((err) => {
      // Error displayed
      console.error(err);
    });
  
   
});


 // Fetching record from the database
 
 // Saving newBlog to database        
}

export default PostPass