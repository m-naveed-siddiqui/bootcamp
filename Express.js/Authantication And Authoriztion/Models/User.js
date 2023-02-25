const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:[true, "Email address can not be null"],
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    phone:{
        type:String,
        maxlength: 11
    },
    role:{
        type:String,
        enum:["Admin", "Teacher", "User"],
        default:"User"
    }
});

module.exports = mongoose.model('user', User);