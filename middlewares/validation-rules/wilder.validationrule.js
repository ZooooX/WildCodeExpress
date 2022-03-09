import { body } from "express-validator";
import validate from "../validate";

const wilderValidationRule = (action) => {
    if(action == "create") {
        return [
            body("name").isLength({min:4}).withMessage("Le nom doit au moins faire 4 caractères !"),
            body("city").not().isEmpty().withMessage("La ville doit être renseignée !")
        ]
    }

    if(action == "update"){
        return [
            body("wilder.name").isLength({min:4}).withMessage("Le nom doit au moins faire 4 caractères !"),
            body("wilder.city").not().isEmpty().withMessage("La ville doit être renseignée !")
        ]
    }
}

export default wilderValidationRule;