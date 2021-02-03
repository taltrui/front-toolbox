import { CommandType } from "../types/cli";
import { assembleAppEnv } from "../utils/env";
import { createEnvFile } from "../utils/fs";
import validateParams from "../utils/validateParams";

const env: CommandType = async (config, utility, env, _, flags) => {
  if (flags?.noEnv) {
    return;
  }

  validateParams(config, env, utility);

  createEnvFile({
    ...assembleAppEnv(env, utility, config),
    ...(flags?.debug ? { DEBUG_APP: true } : {}),
  });
};

export default env;
