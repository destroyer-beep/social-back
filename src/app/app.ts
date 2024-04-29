import express, {Express, Router} from 'express';
import {ConfigInterface} from "../core/config/config.interface";
import {RestSchema} from "../core/config/rest.schema.js";

export default class ServerApplication {
    private expressApplication: Express;
    private readonly authRouter: Router;
    private config:ConfigInterface<RestSchema>;

    constructor(config:ConfigInterface<RestSchema>, authRouter: Router) {
        this.expressApplication = express();
        this.config = config;
        this.authRouter = authRouter;
    }

    private async _initRoutes() {
        this.expressApplication.use('/auth', this.authRouter);
    }

    private async _initServer() {
        this.expressApplication.listen(this.config.get('PORT'));
        console.log('Server lister 3000 port')
    }

    public async initApp() {
        await this._initRoutes();
        await this._initServer();
    }
}