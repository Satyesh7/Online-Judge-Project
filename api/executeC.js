import { exec } from 'child_process';


export const executeC = (filePath) => {
    const outputPath = filePath.replace('.c', '.exe');

    return new Promise((resolve, reject) => {
        exec(`gcc "${filePath}" -o "${outputPath}" && "${outputPath}"`, (error, stdout, stderr) => {
            if (error) reject(error);
            if (stderr) reject(stderr);
            resolve(stdout);
        });
    });
};
