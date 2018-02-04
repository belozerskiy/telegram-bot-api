import https from "https";
import log from "./logger";

// Get request without params
export function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      let data = "";

      response.on("error", err => reject(err));

      response.on("data", chank => {
        data += chank;
      });

      response.on("end", () => resolve(data));
    });
  });
}

// Post request wigh body
export function httpsPost(url, body) {
  const options = {
    hostname: "url",
    port: 443,
    method: "POST"
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, response => {
      let data = "";
      response.on("error", err => reject(err));

      response.on("data", chank => {
        data += chank;
      });

      response.on("end", () => resolve(data));
    });

    req.on("error", ({ message }) => {
      log.error(`problem with request: ${message}`);
    });

    req.write(body);
    req.end();
  });
}

export default { httpsGet };
