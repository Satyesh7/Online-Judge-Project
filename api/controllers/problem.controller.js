import Problem from '../models/problem.model.js';
import { errorHandler } from '../utils/error.js';
// Controller function to get a problem by its ID (pid)
export const add = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandler (403, 'You are not allowed to add a problem'));
    }
    if (!req.body.title || !req.body.id || !req.body.order || !req.body.category || !req.body.difficulty) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }
    const slug = req.body.title
      .split(' ')
      .join('-')
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, '');
    const newProblem = new Problem({
      ...req.body,
      slug,
      userId: req.user.id,
    });
    try {
      const savedProblem = await newProblem.save();
      res.status(201).json(savedProblem);
    } catch (error) {
      next(error);
    }
  };
  
