"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../utils/env");
const fs_1 = require("../utils/fs");
const env = async (utility, env) => {
    const config = await fs_1.readJson("ftconfig.json");
    fs_1.createEnvFile(env_1.assembleAppEnv(env, utility, config));
};
exports.default = env;
