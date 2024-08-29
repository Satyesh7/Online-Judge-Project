import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        // Validate required fields
        if (!username || !email || !password) {
            return next(errorHandler(400, 'All fields are required!'));
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(errorHandler(400, 'User with this email already exists!'));
        }

        // Hash the password
        const hashedPassword = bcryptjs.hashSync(password, 10);

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        // Send success response
        res.status(201).json({ message: 'Signup Successful' });
    } catch (error) {
        // Pass any errors to the error handler
        next(error); 
    }
};

export const signin = async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required!'));
    }

    try{
        const validUser = await User.findOne({email});
        if (!validUser){
            return next(errorHandler(404, 'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);   
        if(!validPassword){
           return next(errorHandler(400, 'Invalid password'));
        }

        const token = jwt.sign(
            {id: validUser._id}, process.env.JWT_SECRET);
        const {password: pass, ...rest} = validUser._doc;
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);
    }
    catch(error){
        next(error);
    }
}