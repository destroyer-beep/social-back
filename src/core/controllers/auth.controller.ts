import { Request, Response} from 'express';

class AuthController {
    public registration(req:Request, res:Response) {
        console.log(req, res)
    }

    public login(req:Request, res:Response) {
        console.log(req, res)
    }

    public logout(req:Request, res:Response) {
        console.log(req, res)
    }

    public restorePassword(req:Request, res:Response) {
        console.log(req, res)
    }

    public check(req:Request, res:Response) {
        console.log(req, res)
    }
}

export default new AuthController();