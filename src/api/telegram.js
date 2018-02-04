import { isEmpty } from "underscore";
import config from "../../config";
import { httpsGet, httpsPost } from "../utils/https";
import log from "../utils/logger";

const BASE_URL = `https://api.telegram.org/bot`;
const TOKEN = config.telegram[0].token; // Create Bot Factory

const BASE_URL_WITH_TOKEN = `${BASE_URL}${TOKEN}`;

export async function getMe() {
  let result = null;
  const METHOD = `getMe`;
  const URL = `${BASE_URL_WITH_TOKEN}/${METHOD}`;
  log.info(URL);
  try {
    result = await httpsGet(`${URL}`);
  } catch ({ message }) {
    log.error(message);
  }
  return result;
}

export async function getUpdates() {
  let result = null;
  const METHOD = `getUpdates`;
  const URL = `${BASE_URL_WITH_TOKEN}/${METHOD}`;
  log.info(URL);
  try {
    result = await httpsGet(`${URL}`);
  } catch ({ message }) {
    log.err(message);
  }
  return result;
}

export async function update(body = {}) {
  let result = null;
  const METHOD = `Update`;
  const URL = `${BASE_URL_WITH_TOKEN}/${METHOD}`;
  log.info(URL);
  try {
    if (isEmpty(body)) throw new Error("Request body is empty");
    result = await httpsPost(`${URL}`, body);
  } catch ({ message }) {
    log.error(message);
  }
  return result;
}

// export async function setWebHooks() {}

export default {};
