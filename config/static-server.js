const fs = require("fs");
const os = require("os");
const path = require("path");
const express = require("express");

const app = express();

const SITE_PATH = path.normalize(`${__dirname}/../_site`);

if (fs.existsSync(SITE_PATH)) {
  app.use(express.static(SITE_PATH));
} else {
  console.log(`Please build the site before running me.`);
  process.exit(1);
}

module.exports = () => {
  return new Promise((resolve, reject) => {
    const server = app.listen(() => {
      const REMOTE_CHROME_URL = process.env["REMOTE_CHROME_URL"];
      const hostname = REMOTE_CHROME_URL
        ? os.hostname().toLowerCase()
        : "localhost";
      const port = server.address().port;
      resolve({
        hostname,
        port,
        url: `http://${hostname}:${port}`,
        httpServer: server,
      });
    });
  });
};
