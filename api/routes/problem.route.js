import express from 'express';
import { getProblemById } from '../controllers/problem.controller.js';

const router = express.Router();

router.get('/problems/:pid', getProblemById);

export default router;
