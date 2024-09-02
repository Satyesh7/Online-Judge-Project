import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname.trim(), 'outputs'); // C:\Online Compiler\backend\outputs

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
}

export const executePython = async (filePath) => {
    return new Promise((resolve, reject) => {
        exec(`python "${filePath}"`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout.trim()); // Return the output of the Python program
        });
    });
};
