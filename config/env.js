const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const fs = require("fs");
const NODE_ENV = process.env.NODE_ENV || "development";

const { resolveApp } = require("./paths");

var dotenvFiles = [
  resolveApp(`.env/.env.${NODE_ENV}.local`),
  resolveApp(`.env/.env.${NODE_ENV}`),
  resolveApp(`.env/.env.local`),
  resolveApp(`.env/.env`)
].filter(Boolean);

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    dotenvExpand(
      dotenv.config({
        path: dotenvFile
      })
    );
  }
});

const APP = /^AP(P|I)_/i;

function getClientEnvironment(publicUrl) {
  const raw = Object.keys(process.env)
    .filter(key => APP.test(key))
    .reduce((env, key) => ((env[key] = process.env[key]), env), {
      NODE_ENV,
      PUBLIC_URL: publicUrl
    });

  const stringified = {
    "process.env": Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {})
  };

  return { raw, stringified };
}

exports = module.exports = getClientEnvironment;
