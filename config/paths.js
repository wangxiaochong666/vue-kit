const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

exports.appDirectory = appDirectory;
exports.resolveApp = resolveApp;
