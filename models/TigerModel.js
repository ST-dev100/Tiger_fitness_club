import mongoose from "mongoose";

const schema = mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})
const Tiger = mongoose.model('TIgerAuth',schema)
export default Tiger
