import { Router, type IRouter } from "express";
import healthRouter from "./health";
import driveRouter from "./drive";
import greetingsRouter from "./greetings";

const router: IRouter = Router();

router.use(healthRouter);
router.use(driveRouter);
router.use(greetingsRouter);

export default router;
