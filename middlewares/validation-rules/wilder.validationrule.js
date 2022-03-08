import { body } from "express-validator";

const wilderValidationRule = () => {
    return [
        body("name").isLength({min:4}).withMessage("Le nom doit au moins faire 4 caractères !"),
        body("city").not().isEmpty().withMessage("La ville doit être renseignée !")
    ]
}

export default wilderValidationRule;