import { CommandType } from "../types/cli";
import { assembleAppEnv } from "../utils/env";
import { createEnvFile } from "../utils/fs";
import validateParams from "../utils/validateParams";

const env: CommandType = async (config, utility, env, _, flags) => {
  if (flags?.noEnv) {
    return;
  }

  validateParams(config, env, utility);

  console.info(`\nCreating ${utility} ${env} environment...`);
  createEnvFile({
    ...assembleAppEnv(env, utility, config),
    ...(flags?.debug ? { DEBUG_APP: true } : {}),
  });

  console.info(`\n${utility} ${env} environment created succesfully.`);
};

export default env;
