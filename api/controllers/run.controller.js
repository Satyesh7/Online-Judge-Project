import { executeCpp } from '../executeCpp.js';
import { executePython } from '../executePython.js';
import { executeJavaScript } from '../executeJavaScript.js';
import { executeJava } from '../executeJava.js';
import { executeC } from '../executeC.js';
import { executeGo } from '../executeGo.js';
import { generateFile } from '../generateFile.js';
import { errorHandler } from '../utils/error.js';

export const execute = async (req, res, next) => {
    const { language = 'cpp', code } = req.body;

    if (code === undefined) {
        return next(errorHandler(400, 'Code is required.'));
    }

    try {
        const filePath = generateFile(language, code);
        let output;

        switch (language) {
            case 'cpp':
                output = await executeCpp(filePath);
                break;
            case 'py':
                output = await executePython(filePath);
                break;
            case 'js':
                output = await executeJavaScript(filePath);
                break;
            case 'java':
                output = await executeJava(filePath);
                break;
            case 'c':
                output = await executeC(filePath);
                break;
            case 'go':
                output = await executeGo(filePath);
                break;
            default:
                return next(errorHandler(400, 'Unsupported language.'));
        }

        res.json({ filePath, output });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
