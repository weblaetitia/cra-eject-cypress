export default (on, config) => {
  if (config.testingType === "component") {
    const { startDevServer } = require("@cypress/webpack-dev-server");
    const webpackConfig = require("../../config/webpack.config.js");

    on("dev-server:start", (options) =>
      startDevServer({ options, webpackConfig })
    );
  }
};
