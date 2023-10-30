const { Schema, default: mongoose } = require("mongoose");



const User = new Schema(
    {name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }}
)       
const UserModel = mongoose.model("UserModel",User)
module.exports = {UserModel}
