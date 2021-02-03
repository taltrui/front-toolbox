import fs from "fs-extra";
import { exit } from "process";
import { ConfigType } from "../types/cli";

export const copy: (from: string, to: string) => Promise<void> = async (
  from,
  to
) => {
  try {
    await fs.copy(from, to);
  } catch (err) {
    console.error(
      `Unable to copy files from ${from} to ${to}. Aborting. Error was: \n`
    );
    console.error(err);
    exit(1);
  }
};

export const deleteFiles: (path: string) => Promise<void> = async (path) => {
  try {
    await fs.remove(path);
  } catch (err) {
    console.warn(
      `Unable to delete files in ${path}. Will continue, unwanted assets may be left. Error was: \n`
    );
    console.warn(err);
  }
};

export const readConfig: (path: string) => Promise<ConfigType> = async (
  path
) => {
  try {
    const obj = await fs.readJson(path);
    return obj;
  } catch (err) {
    console.error("Unable to read config file. Aborting. Error was: \n");
    console.error(err);
    exit(1);
  }
};

export const createEnvFile = async (env: {
  [key: string]: string;
}): Promise<void> => {
  let formattedEnv = "";

  for (const property in env) {
    formattedEnv += `${property}=${env[property]}\n`;
  }

  try {
    await fs.outputFile(".env", formattedEnv);
  } catch (err) {
    console.error("Unable to create env file. Aborting. Error was: \n");
    console.error(err);
    exit(1);
  }
};
