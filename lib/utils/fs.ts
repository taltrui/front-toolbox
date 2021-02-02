import fs from "fs-extra";
import { ConfigType } from "../types/cli";

export const copy: (from: string, to: string) => void = async (from, to) => {
  try {
    await fs.copy(from, to);
  } catch (err) {
    console.error(err);
  }
};

export const deleteFiles: (path: string) => void = async (path) => {
  try {
    await fs.remove(path);
  } catch (err) {
    console.error(err);
  }
};

export const readConfig: (path: string) => Promise<ConfigType> = async (
  path
) => {
  try {
    const obj = await fs.readJson(path);
    return obj;
  } catch (err) {
    console.error(err);
  }
};

export const createEnvFile = async (env: { [key: string]: string }) => {
  let formattedEnv = "";

  for (const property in env) {
    formattedEnv += `${property}=${env[property]}\n`;
  }

  fs.outputFile(".env", formattedEnv);
};
