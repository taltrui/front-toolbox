import { spawn } from "child_process";
import { CommandType } from "../types/cli";
import { capitalize } from "../utils/strings";
import validateParams from "../utils/validateParams";
import createEnv from "./env";
import syncAssets from "./sync";

const ios: CommandType = async (config, utility, env, input, flags) => {
  validateParams(config, env, utility);

  await createEnv(config, utility, env, input, flags);
  await syncAssets(config, utility, env, input, flags);

  const { iosConfig } = config;

  const iosConfigToUse = iosConfig[utility][env];

  const child = spawn("yarn", [
    "run",
    "react-native",
    "run-ios",
    `--scheme ${iosConfigToUse.scheme}`,
    `--configuration Debug.${iosConfigToUse.config}`,
    ...(input || []),
  ]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

export default ios;
