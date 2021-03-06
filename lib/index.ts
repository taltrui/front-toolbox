#!/usr/bin/env node
import meow from "meow";
import runCommand from "./utils/runCommand";

const cli = meow(
  `
	Usage
	  $ ft [web | android | ios | env | apk | sync | deploy] [utility] [environment]

	Options
    --debug, -d  Include FT_DEBUG flag into env vars.
    --no-sync, -ns Don't sync assets when building.
    --no-env, -ne Don't generate .env file when building.
    --platform, -p Platform to deploy. Defaults to Android.

	Examples
    $ ft android edenor stage
    $ ft deploy edenor stage -p ios

`,
  {
    flags: {
      debug: {
        type: "boolean",
        alias: "d",
      },
      noSync: {
        type: "boolean",
        alias: "ns",
      },
      noEnv: {
        type: "boolean",
        alias: "ne",
      },
      platform: {
        type: "string",
        alias: "p",
        default: "android",
      },
    },
  }
);

runCommand(cli.input, cli.flags);
