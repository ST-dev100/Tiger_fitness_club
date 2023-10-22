import jwt from 'jsonwebtoken';
import 'dotenv/config';

const CheckAutho = (req,res,next) =>{
    if(req.cookies.jwt)
    {
        const token = req.cookies.jwt
        jwt.verify(token,process.env.JWT_API,async(err,dec)=>{
            if(err)
            {
             res.redirect('/')
            }

           else
           {
           next()

           }            
         });
    }
    else
    {
        res.redirect('/')
    }
        // res.status('500').redirect('/')
}

export default CheckAutho;