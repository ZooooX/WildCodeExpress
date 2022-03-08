import WilderService from "../services/wilder.service";
import { Router } from "express";
import wilderValidationrule from "../middlewares/validation-rules/wilder.validationrule";
import validate from "../middlewares/validate";

const router = Router();

router.get("/" , async (req,res,next) => {
    try {
        const wilders = await WilderService.getAll();
        res.status(200).send(wilders);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/" , wilderValidationrule(), validate ,async (req,res,next) => {
    try {
        const wilder = await WilderService.create(req.body);
        res.status(200).send(wilder);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
});

router.put("/" , async (req,res,next) => {
    try {
        const wilder = await WilderService.update(req.body.id, req.body.wilder);
        res.status(200).send(wilder);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/" , async (req,res,next) => {
    try {
        const wilder = await WilderService.delete(req.body.id);
        res.status(200).send(wilder);
    } catch (err) {
        res.status(500).send(err);
    }
});

export const WilderController = router;

