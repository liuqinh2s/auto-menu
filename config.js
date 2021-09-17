const fs = require("fs");
const VERSION = fs.readFileSync("version.txt").toString().split(",");

const selfConfig = {};
if (fs.existsSync("./selfConfig.js")) {
  try {
    Object.assign(selfConfig, require("./selfConfig.js"));
  } catch (ex) {
    console.error(ex);
  }
}

module.exports = Object.assign(
  {
    httpPort: 8082,
    useSourceMap: false,
    staticRoot: "",
    editorVersion: VERSION[0].trim(),
    editorBuildDate: VERSION[1].trim(),
  },
  selfConfig
);
