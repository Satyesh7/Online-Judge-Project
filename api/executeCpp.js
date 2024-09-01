import fs from 'fs';
import path from 'path';
import {exec} from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname.trim(), 'outputs');//C:\Online Compiler\backend\outputs

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath);
}

export const executeCpp = async (filePath) => {
    const jobId = path.basename(filePath).split('.')[0]; //filePath -> C:\Online Compiler\backend\codes\b30ae2cf-335e-4c7a-b0bb-7eeed484ffb5.cpp && basename -> b30ae2cf-335e-4c7a-b0bb-7eeed484ffb5.cpp && split('.')[0] -> b30ae2cf-335e-4c7a-b0bb-7eeed484ffb5
    const outputFilename = `${jobId}.exe`; //b30ae2cf-335e-4c7a-b0bb-7eeed484ffb5.exe
    const outPath = path.join(outputPath, outputFilename); //C:\Online Compiler\backend\outputs\b30ae2cf-335e-4c7a-b0bb-7eeed484ffb5.exe

    return new Promise((resolve, reject) => {
        exec(`g++ ${filePath} -o ${outPath} && cd ${outputPath} && .\\${outputFilename}`, 
            (error, stdout, stderr) => {
                if(error)
                    reject (error);
                if(stderr)
                    reject (error);

                resolve(stdout);

            }
        )
    })
};
