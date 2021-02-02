#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meow_1 = __importDefault(require("meow"));
const runCommand_1 = __importDefault(require("./utils/runCommand"));
const cli = meow_1.default(`
	Usage
	  $ ft [web | android | ios | env | apk | sync | deploy] [utility] [environment]

	Options
    --debug, -d  Include FT_DEBUG flag into env vars.
    --no-sync, -ns Don't sync assets when building.
    --no-env, -ne Don't generate .env file when building.

	Examples
	  $ foo android edenor stage

`, {
    flags: {
        debug: {
            type: 'boolean',
            alias: 'd'
        },
        noSync: {
            type: 'boolean',
            alias: 'ns'
        },
        noEnv: {
            type: 'boolean',
            alias: 'ne'
        }
    }
});
runCommand_1.default(cli.input, cli.flags);
