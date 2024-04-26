import path from "path";
import {readFileSync} from "fs";
import {CliCommandInterface} from "./cli-command.interface";

export default class VersionCommand implements CliCommandInterface {
    public readonly name = '--version';

    private readVersion(): string {
        const contentPageJSON = readFileSync(path.resolve('./package.json'), 'utf-8');
        const content = JSON.parse(contentPageJSON);
        return content.version;
    }

    public async execute(): Promise<void> {
        const version = this.readVersion();
        console.log(version);
    }
}