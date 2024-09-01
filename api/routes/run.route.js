import express from 'express';
import { execute } from '../controllers/run.controller.js';

const router = express.Router();

router.post('/execute', execute);

export default router;