import  express  from "express";
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import Registration from './routers/Registration.js'
// import List from './routers/AtheltesList.js'
import List from './routers/AtheltesList.js'
import Delete from "./routers/Delete.js";
import Pass from './routers/Password.js';
import Login from './routers/LoginForm.js';
import Logout from './routers/LogOut.js';
import Home from './routers/Home.js';

const app = express()

//Conncet the database
mongoose.connect('mongodb://localhost/tiger_db',{useNewUrlParser:true}).then(()=>{
    console.log('connected')
})

app.use(cookieParser())
app.use(express.static('public'))
app.use(express.static('uploads'))

app.use(cors());

app.set('view engine','ejs')
app.set('views','views')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/',upload.single('uploaded_file'),Registration);
app.use('/',List);
app.use('/',Delete);
app.use('/',Pass);       
app.use('/',Login);
app.use('/',Logout);
app.use('/',Home);           

app.listen(9000,()=>{
    console.log("server started")
})