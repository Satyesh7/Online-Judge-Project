import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import runRoutes from './routes/run.route.js';
import cors from 'cors';

const app = express();

dotenv.config();
app.use(cors());
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDB is connected");
}).catch((err)=>{
console.log(err);
});


app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/run', runRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});