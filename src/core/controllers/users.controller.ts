import { Request, Response} from 'express';

class UsersController {
    public get(req:Request, res:Response) {
        console.log(req, res)
    }

    public getAll(req:Request, res:Response) {
        console.log(req, res)
    }

    public update(req:Request, res:Response) {
        console.log(req, res)
    }

    public delete(req:Request, res:Response) {
        console.log(req, res)
    }
}

export default new UsersController();