import { Router } from "express";
import { WilderRoutes } from "./wilder.routes";

const router = Router();

router.use('/wilders', WilderRoutes);

export const Routes = router;