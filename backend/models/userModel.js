import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true,
        unique: true,

    },
    password:{
        type: String,
        requied: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false,
    }
},{
    timestamp:true
})

const User = mongoose.model("User", userSchema);

export default User;