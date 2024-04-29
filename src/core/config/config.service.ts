import { configRestSchema, RestSchema } from './rest.schema.js';
import { ConfigInterface } from './config.interface';
import { config } from 'dotenv';

export default class ConfigService implements ConfigInterface<RestSchema> {
    private readonly config: RestSchema;

    constructor() {
        const parsedOutput = config();

        if (parsedOutput.error) {
            console.error('Can\'t read .env file. Perhaps the file does not exists.');
        }

        configRestSchema.load({});
        configRestSchema.validate({ allowed: 'strict', output: console.log });

        this.config = configRestSchema.getProperties();
    }


    public get<T extends keyof RestSchema>(key: T): RestSchema[T] {
        return this.config[key];
    }
}