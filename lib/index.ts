#!/usr/bin/env node
import meow from 'meow';
import runCommand from './utils/runCommand';

const cli = meow(`
	Usage
	  $ ft [web | android | ios | env | apk | sync | deploy] [utility] [environment]

	Options
    --debug, -d  Include FT_DEBUG flag into env vars.
    --no-sync, -ns Don't sync assets when building.
    --no-env, -ne Don't generate .env file when building.

	Examples
	  $ foo android edenor stage

`, {
	flags: {
		debug: {
			type: 'boolean',
			alias: 'd'
    },
    noSync: {
      type: 'boolean',
      alias: 'ns'
    },
    noEnv: {
      type: 'boolean',
      alias: 'ne'
    }
	}
});

runCommand(cli.input, cli.flags);