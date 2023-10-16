import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    username:{ 
       type: String,
       reuired: true,
       unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verofyToken : String,
    verifyTokenExpiry: Date,

})

const user = mongoose.model("user", Schema) || mongoose.models.user;
export default user;