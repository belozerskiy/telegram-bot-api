import { createLogger } from "bunyan";
import config from "../../config";

const log = createLogger({ name: config.appName });
export default log;
