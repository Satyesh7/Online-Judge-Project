import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next)=>{
    const {username, email, password, firstname, lastname, number, rating} = req.body;

    if(!username || !email || !password || !firstname || !lastname || !number || username==='' || email==='' || password==='' || firstname==='' || lastname==='' || number===''){
        next(errorHandler(400, 'All fields are required!'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        firstname,
        lastname,
        number,
        rating,
    });

    try {
        await newUser.save();
        res.json('Signup Successful');
    } catch (error) {
        next(error);
    }
    
};