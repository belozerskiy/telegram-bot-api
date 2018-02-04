import log from "./utils/logger";
import { getMe, getUpdates, update } from "./api/telegram";

Promise.all([getMe(), getUpdates(), update()]).then(res => log.info(res));
//   .catch(({ message }) => log.error(message));
