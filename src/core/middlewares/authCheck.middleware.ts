import {NextFunction, Request, Response} from "express";

export default function authCheckMiddleware(req:Request, res:Response, next:NextFunction) {
    console.log(req, res)
    next();
}