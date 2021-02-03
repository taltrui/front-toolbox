import android from "../commands/android";
import apk from "../commands/apk";
import deploy from "../commands/deploy";
import env from "../commands/env";
import ios from "../commands/ios";
import sync from "../commands/sync";
import web from "../commands/web";
import { CommandsMapperType } from "../types/cli";
import { readConfig } from "./fs";

const commands: CommandsMapperType = {
  android: android,
  ios: ios,
  web: web,
  apk: apk,
  deploy: deploy,
  env: env,
  sync: sync,
};

const runCommand = async (
  input: string[],
  flags: {
    debug?: boolean;
    noEnv?: boolean;
    noSync?: boolean;
    platform: string;
  }
) => {
  const command = commands[input[0]];

  if (!command) {
    throw new Error(
      "Command not recognized, use ts --help to know about available commands."
    );
  }

  const config = await readConfig("ftconfig.json");
  
  command(
    config,
    input[1],
    input[2],
    input.slice(3, input.length) || [],
    flags
  );

  console.log(flags);
};

export default runCommand;
