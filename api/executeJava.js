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

export const executeJava = async (filePath) => {
    const jobId = path.basename(filePath, '.java'); // Extract jobId from the Java file name
    const outputFilename = `${jobId}.class`; // The compiled Java class file
    const outPath = path.join(outputPath, outputFilename); // Path for the compiled class file

    return new Promise((resolve, reject) => {
        // Compile the Java file
        exec(`javac "${filePath}" -d "${outputPath}"`, (compileError, compileStdout, compileStderr) => {
            if (compileError) {
                reject(`Compilation Error: ${compileError.message}`);
                return;
            }
            if (compileStderr) {
                reject(`Compilation Error: ${compileStderr}`);
                return;
            }

            // Execute the compiled Java class
            exec(`java -cp "${outputPath}" ${jobId}`, (runError, runStdout, runStderr) => {
                if (runError) {
                    reject(`Runtime Error: ${runError.message}`);
                    return;
                }
                if (runStderr) {
                    reject(`Runtime Error: ${runStderr}`);
                    return;
                }

                resolve(runStdout.trim()); // Return the output of the Java program
            });
        });
    });
};
