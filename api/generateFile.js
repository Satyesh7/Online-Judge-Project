import fs from 'fs';
import path from 'path';
import {v4 as uuid} from 'uuid';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirCodes = path.join(__dirname.trim(), 'codes');//C:\Online Compiler\backend\codes

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes);
}

export const generateFile = (language, code) => {
    const jobId = uuid(); //b30ae2cf-335e-4c7a-b0bb-7eeed484ffb5
    const fileName = `${jobId}.${language}`; //b30ae2cf-335e-4c7a-b0bb-7eeed484ffb5.cpp
    const filePath = path.join(dirCodes, fileName); //C:\Online Compiler\backend\codes\b30ae2cf-335e-4c7a-b0bb-7eeed484ffb5.cpp
    fs.writeFileSync(filePath, code);
    return filePath;
};

