import { exit } from "process";
import { ConfigType } from "../types/cli";

const validateParams = (
  config: ConfigType,
  env: string,
  utility: string
): void => {
  const { environments, utilities } = config;

  if (!environments.includes(env)) {
    console.error(
      `"${env}" is a valid environment. Available environments are: ${environments.join(
        ", "
      )}`
    );
    exit(1);
  }

  if (!utilities.includes(utility)) {
    console.error(
      `"${utility}" is not a valid utility. Available utilities are: ${utilities.join(
        ", "
      )}`
    );
    exit(1);
  }
};

export default validateParams;
