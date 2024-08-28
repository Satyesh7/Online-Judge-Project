import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
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
    firstname: {
        type: String,
        //required: false
    },
    lastname: {
        type: String,
        //required: false
    },
    number: {
        type: String,
        //required: false,
        //unique: true
    },
    rating: {
        type: Number,
        //required: false
    }
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;