import { Router } from "express";
import wilderValidationrule from "../middlewares/validation-rules/wilder.validationrule";
import validate from "../middlewares/validate";
import WilderController from "../controllers/wilder.controller";

const router = Router();

router.get("/" , WilderController.getAll);

router.get("/:_id" ,WilderController.getById);

router.post("/" , wilderValidationrule("create"), validate , WilderController.create);

router.put("/" , wilderValidationrule("update"), validate , WilderController.update);

router.delete("/" , WilderController.delete);

export const WilderRoutes = router;
