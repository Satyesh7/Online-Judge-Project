import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res)=>{
    const {username, email, password, firstname, lastname, number, rating} = req.body;

    if(!username || !email || !password || !firstname || !lastname || !number || username==='' || email==='' || password==='' || firstname==='' || lastname==='' || number===''){
        return res.status(400).json({message : 'All fields are required'});
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
        res.status(500).json({message: error.message});
    }
    
};