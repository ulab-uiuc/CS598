module.exports = function override(config, env) {
  if (env === "production") {
    config.output.filename = "static/js/[name].js";
    config.output.chunkFilename = "static/js/[name].chunk.js";
    config.output.assetModuleFilename = "static/media/[name][ext]";
  }
  return config;
};
