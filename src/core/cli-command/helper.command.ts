import {CliCommandInterface} from "./cli-command.interface";

export default class HelperCommand implements CliCommandInterface {
    public readonly name = '--help';

    public async execute(): Promise<void> {
        console.log(`
        Команды: 
            --version:                                          # Номер версии
            --help:                                             # Помощь по командам
        `);
    }
}