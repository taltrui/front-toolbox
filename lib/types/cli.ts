export type ConfigType = {
  environments: string[];
  utilities: string[];
  assetsSrc: string;
  assetsDest: string;
  base: { [key: string]: string };
  iosCertsURLs: {
    [key: string]: { [key: string]: { [key: string]: string } };
  };
  fastlaneBaseConfig: { [key: string]: string };
  fastlaneConfig: {
    [key: string]: { [key: string]: { [key: string]: string } };
  };
  envConfig: { [key: string]: { [key: string]: string } };
  utilityEnvConfig: {
    [key: string]: { [key: string]: { [key: string]: string } };
  };
  utilityConfig: { [key: string]: { [key: string]: string } };
  androidConfig: { [key: string]: { [key: string]: string } };
  iosConfig: {
    [key: string]: { [key: string]: { [key: string]: string } };
  };
};

export type CommandType = (
  config: ConfigType,
  utility: string,
  env: string,
  input?: string[],
  flags?: {}
) => void;

export interface CommandsMapperType {
  [index: string]: CommandType;
}
