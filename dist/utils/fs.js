"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnvFile = exports.readJson = exports.deleteFiles = exports.copy = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const copy = async (from, to) => {
    try {
        await fs_extra_1.default.copy(from, to);
    }
    catch (err) {
        console.error(err);
    }
};
exports.copy = copy;
const deleteFiles = async (path) => {
    try {
        await fs_extra_1.default.remove(path);
    }
    catch (err) {
        console.error(err);
    }
};
exports.deleteFiles = deleteFiles;
const readJson = async (path) => {
    try {
        const obj = await fs_extra_1.default.readJson(path);
        return obj;
    }
    catch (err) {
        console.error(err);
    }
};
exports.readJson = readJson;
const createEnvFile = async (env) => {
    let formattedEnv = "";
    for (const property in env) {
        formattedEnv += `${property}=${env[property]}\n`;
    }
    fs_extra_1.default.outputFile(".env", formattedEnv);
};
exports.createEnvFile = createEnvFile;
