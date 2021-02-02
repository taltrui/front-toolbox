"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnvFile = exports.assembleFastlaneEnv = exports.assembleiOSEnv = exports.assembleAndroidEnv = exports.assembleAppEnv = void 0;
const assembleAppEnv = (env, utility, config) => ({
    ...config.base,
    ...config.envConfig[env],
    ...config.utilityEnvConfig[utility][env],
    ...config.utilityConfig[utility],
});
exports.assembleAppEnv = assembleAppEnv;
const assembleAndroidEnv = (env, config) => ({
    ...config.androidConfig[env],
});
exports.assembleAndroidEnv = assembleAndroidEnv;
const assembleiOSEnv = (env, utility, config) => ({
    ...config.iosConfig[utility][env],
    ...config.iosCertsURLs[utility][env],
});
exports.assembleiOSEnv = assembleiOSEnv;
const assembleFastlaneEnv = (env, utility, config) => ({
    ...config.fastlaneBaseConfig,
    ...config.fastlaneConfig[utility][env],
});
exports.assembleFastlaneEnv = assembleFastlaneEnv;
const createEnvFile = (config) => {
    let env = "";
    for (const property in config) {
        env += `${property}=${config[property]}\n`;
    }
    return env;
};
exports.createEnvFile = createEnvFile;
