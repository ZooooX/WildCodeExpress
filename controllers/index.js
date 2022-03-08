import { Router } from "express";
import { WilderController } from "./wilder.controller";

const router = Router();

router.use('/wilders', WilderController);

export const Controllers = router;