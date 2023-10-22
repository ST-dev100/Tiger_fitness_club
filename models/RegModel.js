import mongoose from 'mongoose'
 const schema =new mongoose.Schema({
    Name:{type:String},
    image:{type:String},
    phone:{type:String},
    email:{type:String,unique:true},
    info:{type:String},
    Start:{type:Date},
    End:{type:Date}
 })

 const Tiger = mongoose.model('TIger_Sport_House_Customers',schema)
 export default Tiger