import { spawn } from "child_process";
import { CommandType } from "../types/cli";
import { capitalize } from "../utils/strings";
import validateParams from "../utils/validateParams";
import createEnv from "./env";
import syncAssets from "./sync";

const apk: CommandType = async (config, utility, env, input, flags) => {
  validateParams(config, env, utility);

  await createEnv(config, utility, env, input, flags);
  await syncAssets(config, utility, env, input, flags);

  const { androidConfig } = config;

  const androidConfigToUse = androidConfig[env];

  const utilityVariant = capitalize(utility);
  const variant = capitalize(androidConfigToUse.variant);

  console.info(`\nStarting ${utility} ${env} apk creation...\n`);

  const child = spawn(
    `cd android && ./gradlew clean && ./gradlew assemble${variant}${utilityVariant}Release`,
    { shell: true }
  );

  child.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  child.stderr.on("data", (data) => {
    console.log(`${data}`);
  });

  child.on("close", (code) => {
    if (code === 0) {
      console.info(
        `\n${utility} ${env} ${flags.platform} apk created succesfully\n`
      );
    } else
      console.log(
        `There was an error, you can read more above. Exit code: ${code}`
      );
  });
};

export default apk;
