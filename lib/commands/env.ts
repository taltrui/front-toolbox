import { CommandType } from "../types/cli";
import { assembleAppEnv } from "../utils/env";
import { createEnvFile } from "../utils/fs";
import validateParams from "../utils/validateParams";

const env: CommandType = async (config, utility, env) => {
  validateParams(config, utility, env);

  createEnvFile(assembleAppEnv(env, utility, config));
};

export default env;
