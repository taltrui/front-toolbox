import { CommandType } from "../types/cli";
import validateParams from "../utils/validateParams";

const android: CommandType = (config, utility, env, input, flags) => {
  validateParams(config, env, utility);

  

};

export default android;
