import { spawn } from "child_process";
import { CommandType } from "../types/cli";
import validateParams from "../utils/validateParams";
import createEnv from "./env";
import syncAssets from "./sync";

const deploy: CommandType = async (config, utility, env, input, flags) => {
  validateParams(config, env, utility);

  await createEnv(config, utility, env, input, flags);
  await syncAssets(config, utility, env, input, flags);

  const {
    fastlaneBaseConfig,
    utilityConfig,
    fastlaneConfig,
    iosCertsURLs,
  } = config;

  const GIT_CERTS_URL = `${
    process.env.CI ? "git@github.com:widergy" : "https://github.com/widergy"
  }${iosCertsURLs[utility][env]}`;

  process.env = {
    ...process.env,
    ...fastlaneBaseConfig,
    ...utilityConfig[utility],
    ...fastlaneConfig[utility][env],
    GIT_CERTS_URL,
  };

  console.info(`\nStarting ${utility} ${env} ${flags.platform} app deploy...\n`);

  const child = spawn(
    "bundle",
    ["exec", "fastlane", flags.platform, "deploy", ...(input || [])],
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
        `\n${utility} ${env} ${flags.platform} app deployed succesfully\n`
      );
    } else
      console.log(
        `There was an error, you can read more above. Exit code: ${code}`
      );
  });
};

export default deploy;
