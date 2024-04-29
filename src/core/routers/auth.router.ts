import {Router} from "express";
import authController from "../controllers/auth.controller.js";
import authCheckMiddleware from "../middlewares/authCheck.middleware";

const authRouter = Router();

authRouter.get('/', authCheckMiddleware, authController.check);
authRouter.post('/', authController.registration);

authRouter.post('/login', authController.login);
authRouter.get('/logout', authController.logout);
authRouter.post('/restore', authController.restorePassword);

export default authRouter;