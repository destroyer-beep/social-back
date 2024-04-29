import { Request, Response} from 'express';

class AuthController {
    public check(req:Request, res:Response) {
        console.log(req, res)
    }
}

export default new AuthController();