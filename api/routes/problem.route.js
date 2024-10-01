import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { add } from '../controllers/problem.controller.js';

const router = express.Router();

router.post('/add', verifyToken, add);

export default router;
