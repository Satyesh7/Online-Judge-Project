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

export const executeGo = async (filePath) => {
    const jobId = path.basename(filePath, '.go');
    const outputFilename = `${jobId}.exe`; // Go binaries on Windows will be .exe
    const outPath = path.join(outputPath, outputFilename);

    return new Promise((resolve, reject) => {
        exec(`go build -o "${outPath}" "${filePath}" && "${outPath}"`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout.trim()); // Return the output of the Go program
        });
    });
};
