// https://cli.vuejs.org/zh/config/

const InterpolateHtmlPlugin = require("@nenado/interpolate-html-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const ErudaWebpackPlugin = require("eruda-webpack-plugin");
const getClientEnvironment = require("./config/env");

const { resolveApp, appDirectory } = require("./config/paths");

const env = getClientEnvironment("");

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  indexPath: "index.html",
  filenameHashing: true,

  // https://github.com/neutrinojs/webpack-chain
  chainWebpack(config) {
    config
      //
      // Define
      //
      .plugin("define")
      .tap(([options]) => [
        {
          "process.env": {
            ...options["process.env"],
            ...env.stringified["process.env"]
          }
        }
      ])
      .end()

      //
      // Html
      //
      .plugin("html")
      .tap(([options]) => {
        // delete options.templateParameters,
        return [
          {
            ...options,
            inject: true
          }
        ];
      })
      .end()

      //
      // Interpolate
      //
      .plugin("interpolate")
      .use(InterpolateHtmlPlugin, [env.raw])
      .end()

      //
      // Inline Chunk
      //
      .plugin("inline-chunk")
      .use(InlineChunkHtmlPlugin, [HtmlWebpackPlugin, [/runtime~.+[.]js/]])
      .end()

      //
      // Eruda
      //
      .when(
        process.env.PLATFORM === "MOBILE" &&
          process.env.NODE_ENV === "development",
        config => config.plugin("eruda").use(ErudaWebpackPlugin, [{}])
      );
  },

  configureWebpack(config) {
    return {
      plugins: []
    };
  }
};
