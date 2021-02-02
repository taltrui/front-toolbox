"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const android_1 = __importDefault(require("../commands/android"));
const apk_1 = __importDefault(require("../commands/apk"));
const deploy_1 = __importDefault(require("../commands/deploy"));
const env_1 = __importDefault(require("../commands/env"));
const ios_1 = __importDefault(require("../commands/ios"));
const sync_1 = __importDefault(require("../commands/sync"));
const web_1 = __importDefault(require("../commands/web"));
const commands = {
    android: android_1.default,
    ios: ios_1.default,
    web: web_1.default,
    apk: apk_1.default,
    deploy: deploy_1.default,
    env: env_1.default,
    sync: sync_1.default,
};
const runCommand = (input, flags) => {
    const command = commands[input[0]];
    if (!command) {
        throw new Error("Command not recognized, use ts --help to know about available commands.");
    }
    command(input[1], input[2], input.slice(3, input.length), flags);
    console.log(flags);
};
exports.default = runCommand;
