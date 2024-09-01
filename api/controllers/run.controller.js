import { executeCpp } from "../executeCpp.js";
import { generateFile } from "../generateFile.js";
import { errorHandler } from "../utils/error.js";

export const execute = async (req, res) =>{
    const {language = 'cpp', code} = req.body;

    if(code === undefined){
        return next(errorHandler(400,'Code is required.'));
    }

    try {
        const filePath = generateFile(language, code); 
        const output = await executeCpp(filePath);
        res.json({filePath, output});
    } catch (error) {
        return res.status(500).json({error: error.message});   
    }

}