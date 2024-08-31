module.exports = {
  webpack: function (config, env) {
    if (env === "production") {
      //JS Overrides
      config.output.filename = "static/js/[name].js";
      config.output.assetModuleFilename = "static/media/[name][ext]";
      config.output.chunkFilename = "static/js/[name].chunk.js";
      //CSS Overrides
      config.plugins[4].filename = "static/css/[name].css";
    }

    return config;
  },
};
