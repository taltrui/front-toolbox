import { CommandType } from "../types/cli";
import { copy, deleteFiles } from "../utils/fs";
import { formatAssetsSrc } from "../utils/strings";

const sync: CommandType = async (config, utility, env, input, flags) => {
  if (flags?.noSync) {
    return;
  }

  console.info(`\nSyncing ${utility} ${env} assets...`);

  const { assetsDest, assetsSrc } = config;

  const formattedSrc = formatAssetsSrc(utility, assetsSrc);

  await deleteFiles(assetsDest);

  await copy(formattedSrc, assetsDest);

  console.info(`\n${utility} ${env} assets succesfully synced.`);
};

export default sync;
