export const assembleAppEnv = (
  env: string,
  utility: string,
  config: any
): any => ({
  ...config.base,
  ...config.envConfig[env],
  ...config.utilityEnvConfig[utility][env],
  ...config.utilityConfig[utility],
});

export const assembleAndroidEnv = (env: string, config: any): any => ({
  ...config.androidConfig[env],
});

export const assembleiOSEnv = (
  env: string,
  utility: string,
  config: any
): any => ({
  ...config.iosConfig[utility][env],
  ...config.iosCertsURLs[utility][env],
});

export const assembleFastlaneEnv = (
  env: string,
  utility: string,
  config: any
): any => ({
  ...config.fastlaneBaseConfig,
  ...config.fastlaneConfig[utility][env],
});

export const createEnvFile = (config: any) => {
  let env = "";

  for (const property in config) {
    env += `${property}=${config[property]}\n`;
  }

  return env;
};
