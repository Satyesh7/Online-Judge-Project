import { problems } from '../../client/src/problems/index.ts';

// Controller function to get a problem by its ID (pid)
export const getProblemById = (req, res) => {
  const { pid } = req.params;
  const problem = problems[pid];

  if (problem) {
    res.json(problem);
  } else {
    res.status(404).json({ message: "Problem not hello how are tou found" });
  }
};
