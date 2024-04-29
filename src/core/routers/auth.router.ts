import {Router} from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.get('/check', authController.check);

export default authRouter;