import { validationResult } from "express-validator";

const validate = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).send({
        success : false,
        result: extractedErrors,
    });
}

export default validate;