import {Router} from "express";
import authCheckMiddleware from "../middlewares/authCheck.middleware.js";
import usersController from "../controllers/users.controller.js";
const usersRouter = Router();


usersRouter.get('/:id', usersController.get);
usersRouter.get('/all', usersController.getAll);
usersRouter.patch('/', authCheckMiddleware, usersController.update);
usersRouter.delete('/', authCheckMiddleware, usersController.delete);

export default usersRouter;