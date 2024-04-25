const mongoose= require('mongoose');

const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    userId: {
        type:String,
        required:true,
    },
},{timestamps:true}
)

module.exports = mongoose.model('user',userModel)